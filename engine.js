/* Bitbox MkII browser patch engine. No networking, storage, or device access. */
(function (root, factory) {
  "use strict";
  const api = factory(root);
  root.BitboxPatcher = api;
  if (typeof module === "object" && module.exports) module.exports = api;
})(globalThis, function (root) {
  "use strict";

  // Independent pins: patch metadata may never choose a different input/output.
  const RELEASE = Object.freeze({
    format: "bitbox-delta-v1",
    device: "1010music bitbox mkII",
    version: "2.3.4+c",
    source: Object.freeze({
      size: 674896,
      sha256: "35ab7995ad0eca8484f3b28bc76389f10b2037dbb21a4a394e950d9329073e86",
    }),
    target: Object.freeze({
      size: 696708,
      sha256: "5fce58174b7b76884c0dc9b0dc5eed51975193fb3aa3fe9ed310bd8ce4f1273b",
      version: "2.3.4+c",
      filename: "BITBOXMK2.bin",
    }),
  });
  const MAX_WRITES = 4096;

  class PatchError extends Error {
    constructor(code, message) {
      super(message);
      this.name = "PatchError";
      this.code = code;
    }
  }

  function bytesView(input) {
    // ArrayBuffer.isView also handles typed arrays received from another frame.
    if (ArrayBuffer.isView(input) &&
        Object.prototype.toString.call(input) === "[object Uint8Array]") {
      return new Uint8Array(input.buffer, input.byteOffset, input.byteLength);
    }
    if (Object.prototype.toString.call(input) === "[object ArrayBuffer]") {
      return new Uint8Array(input);
    }
    throw new PatchError("input-type", "Choose the extracted firmware .bin file.");
  }

  async function sha256(input) {
    const bytes = bytesView(input);
    if (!root.crypto || !root.crypto.subtle ||
        typeof root.crypto.subtle.digest !== "function") {
      throw new PatchError("crypto-unavailable",
        "This browser cannot verify files here. Open the patcher over HTTPS or localhost in a current browser.");
    }
    let digest;
    try {
      digest = await root.crypto.subtle.digest("SHA-256", bytes);
    } catch (_) {
      throw new PatchError("crypto-unavailable",
        "The browser could not calculate SHA-256. Reload the page and try again in a current browser.");
    }
    return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
  }

  function invalidPatch() {
    throw new PatchError("patch-format",
      "The patch data is invalid or belongs to another release. Reload the complete patcher before trying again.");
  }

  function exactKeys(value, expected) {
    if (!value || typeof value !== "object" || Array.isArray(value)) return false;
    const keys = Object.keys(value);
    return keys.length === expected.length && expected.every((key) =>
      Object.prototype.hasOwnProperty.call(value, key));
  }

  function pinnedObject(value, pin) {
    return exactKeys(value, Object.keys(pin)) && Object.keys(pin).every((key) => value[key] === pin[key]);
  }

  function validatePatch(patch) {
    if (!exactKeys(patch, ["format", "device", "version", "source", "target", "writes"]) ||
        patch.format !== RELEASE.format || patch.device !== RELEASE.device ||
        patch.version !== RELEASE.version || !pinnedObject(patch.source, RELEASE.source) ||
        !pinnedObject(patch.target, RELEASE.target) || !Array.isArray(patch.writes) ||
        patch.writes.length === 0 || patch.writes.length > MAX_WRITES) invalidPatch();

    let end = 0;
    let tailEnd = RELEASE.source.size;
    const writes = [];
    for (const write of patch.writes) {
      if (!exactKeys(write, ["offset", "data"]) || !Number.isSafeInteger(write.offset) ||
          write.offset < 0 || write.offset < end || typeof write.data !== "string" ||
          write.data.length === 0 || write.data.length % 2 !== 0 ||
          write.data.length > RELEASE.target.size * 2 || !/^[0-9a-f]+$/.test(write.data)) invalidPatch();
      const length = write.data.length / 2;
      end = write.offset + length;
      if (end > RELEASE.target.size) invalidPatch();
      if (end > RELEASE.source.size) {
        if (write.offset > tailEnd) invalidPatch();
        tailEnd = end;
      }
      const bytes = new Uint8Array(length);
      for (let index = 0; index < length; index++) {
        bytes[index] = Number.parseInt(write.data.slice(index * 2, index * 2 + 2), 16);
      }
      writes.push({offset: write.offset, bytes});
    }
    if (tailEnd !== RELEASE.target.size) invalidPatch();
    return writes;
  }

  async function applyPatch(input, patch = root.BITBOX_PATCH, options = {}) {
    const sourceView = bytesView(input);
    if (sourceView.byteLength !== RELEASE.source.size) {
      throw new PatchError("source-size",
        `This file is ${sourceView.byteLength.toLocaleString("en-US")} bytes. The official MkII 2.3.4 firmware must be 674,896 bytes. Extract the .bin from the official download first.`);
    }
    // Snapshot before awaiting hashes or invoking a caller's progress callback.
    // Neither a replaced file nor mutated patch metadata can race verification.
    const source = new Uint8Array(sourceView);
    const writes = validatePatch(patch);
    const onStage = options && typeof options.onStage === "function" ? options.onStage : () => {};
    onStage("verify-input");
    const inputSha256 = await sha256(source);
    if (inputSha256 !== RELEASE.source.sha256) {
      throw new PatchError("source-hash",
        "The SHA-256 does not match official Bitbox MkII 2.3.4. Use a fresh, unmodified 2.3.4 .bin file; other versions and already-patched files are not supported.");
    }

    onStage("apply-patch");
    const output = new Uint8Array(RELEASE.target.size);
    output.set(source);
    for (const write of writes) output.set(write.bytes, write.offset);
    onStage("verify-output");
    const outputSha256 = await sha256(output);
    if (outputSha256 !== RELEASE.target.sha256) {
      throw new PatchError("output-hash",
        "The patched file failed its final SHA-256 check. No firmware download was created. Reload the complete patcher and try again.");
    }
    return {bytes: output, inputSha256, outputSha256};
  }

  return Object.freeze({RELEASE, PatchError, sha256, validatePatch, applyPatch});
});
