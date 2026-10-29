/* The interface reads local Files and creates a verified Blob download only. */
(function () {
  "use strict";

  const byId = (id) => document.getElementById(id);
  const fileInput = byId("firmware-file");
  const fileZone = byId("file-zone");
  const selectedPanel = byId("selected-file");
  const selectedName = byId("selected-name");
  const selectedSize = byId("selected-size");
  const clearButton = byId("clear-file");
  const applyButton = byId("apply-patch");
  const status = byId("status-message");
  const resultPanel = byId("download-result");
  const downloadLink = byId("download-file");
  const stageNames = ["verify-input", "apply-patch", "verify-output"];
  const stages = [byId("stage-input"), byId("stage-patch"), byId("stage-output")];
  const engine = globalThis.BitboxPatcher;
  let selectedFile = null;
  let downloadURL = null;
  let operation = 0;
  let busy = false;
  let available = false;
  let activeStage = -1;

  function message(text, tone = "info") {
    status.textContent = text;
    status.dataset.tone = tone;
  }

  function stageState(index, state) {
    const element = stages[index];
    element.dataset.state = state;
    element.querySelector(".step-state").textContent = {
      pending: "Waiting", active: "Working", done: "Verified", error: "Stopped",
    }[state];
    if (index === 1 && state === "done") element.querySelector(".step-state").textContent = "Applied";
    element.querySelector(".step-marker").textContent = state === "done" ? "✓" : String(index + 1);
  }

  function clearResult() {
    resultPanel.hidden = true;
    downloadLink.removeAttribute("href");
    if (downloadURL !== null) URL.revokeObjectURL(downloadURL);
    downloadURL = null;
    applyButton.hidden = false;
  }

  function resetStages() {
    activeStage = -1;
    stages.forEach((_, index) => stageState(index, "pending"));
  }

  function setBusy(value) {
    busy = value;
    fileInput.disabled = value || !available;
    clearButton.disabled = value || selectedPanel.hidden;
    applyButton.disabled = value || !available || selectedFile === null;
    fileZone.classList.toggle("is-disabled", value || !available);
    fileZone.setAttribute("aria-busy", String(value));
    applyButton.textContent = value ? "Verifying & patching…" : "Apply patch →";
  }

  function reset() {
    operation++;
    selectedFile = null;
    fileInput.value = "";
    selectedPanel.hidden = true;
    selectedName.textContent = "";
    selectedSize.textContent = "";
    fileZone.classList.remove("is-dragging");
    clearResult();
    resetStages();
    setBusy(false);
    message("Choose a file to begin. Its contents, not its filename, determine whether it is compatible.");
  }

  function selectFiles(files) {
    // New selection invalidates every prior result and any pending async read.
    reset();
    if (!available || files.length === 0) return;
    if (files.length !== 1) {
      message("Choose one extracted firmware .bin file at a time.", "error");
      return;
    }
    const file = files[0];
    selectedPanel.hidden = false;
    selectedName.textContent = file.name;
    selectedSize.textContent = `${file.size.toLocaleString("en-US")} bytes · stays in this browser`;
    if (file.size !== engine.RELEASE.source.size) {
      message(`This file is ${file.size.toLocaleString("en-US")} bytes. Official bitbox mkII 2.3.4 must be 674,896 bytes. Extract the .bin from the official download first.`, "error");
      setBusy(false);
      return;
    }
    selectedFile = file;
    setBusy(false);
    message("File selected. Apply the patch to verify its SHA-256 and create a separate customized file.");
  }

  fileInput.addEventListener("change", () => selectFiles(Array.from(fileInput.files || [])));
  clearButton.addEventListener("click", reset);

  for (const name of ["dragenter", "dragover"]) {
    fileZone.addEventListener(name, (event) => {
      event.preventDefault();
      if (!busy && available) fileZone.classList.add("is-dragging");
      if (event.dataTransfer) event.dataTransfer.dropEffect = busy || !available ? "none" : "copy";
    });
  }
  fileZone.addEventListener("dragleave", (event) => {
    if (!fileZone.contains(event.relatedTarget)) fileZone.classList.remove("is-dragging");
  });
  fileZone.addEventListener("drop", (event) => {
    event.preventDefault();
    fileZone.classList.remove("is-dragging");
    if (!busy && available) selectFiles(Array.from(event.dataTransfer ? event.dataTransfer.files : []));
  });
  // Dropping a file outside the picker must not navigate away from the page.
  document.addEventListener("dragover", (event) => event.preventDefault());
  document.addEventListener("drop", (event) => event.preventDefault());

  applyButton.addEventListener("click", async () => {
    if (busy || !available || selectedFile === null) return;
    const file = selectedFile;
    const current = ++operation;
    clearResult();
    resetStages();
    setBusy(true);
    message("Reading the selected file locally…");
    try {
      let input;
      try {
        input = await file.arrayBuffer();
      } catch (_) {
        throw new Error("The selected file could not be read. Choose it again and retry.");
      }
      if (current !== operation) return;
      const result = await engine.applyPatch(input, globalThis.BITBOX_PATCH, {
        onStage(name) {
          if (current !== operation) return;
          const index = stageNames.indexOf(name);
          if (index < 0) return;
          activeStage = index;
          stages.forEach((_, i) => stageState(i, i < index ? "done" : i === index ? "active" : "pending"));
          message([
            "Checking the original file’s SHA-256 against official 2.3.4…",
            "Original firmware verified. Applying the customizations locally…",
            "Checking the finished file’s SHA-256 against the exact 2.3.4+c build…",
          ][index]);
        },
      });
      if (current !== operation) return;
      const release = engine.RELEASE;
      if (result.inputSha256 !== release.source.sha256 || result.outputSha256 !== release.target.sha256 || result.bytes.byteLength !== release.target.size) {
        throw new Error("The patcher returned an unexpected result. No download was created. Reload the complete page and retry.");
      }
      downloadURL = URL.createObjectURL(new Blob([result.bytes], {type: "application/octet-stream"}));
      downloadLink.href = downloadURL;
      downloadLink.download = release.target.filename;
      stages.forEach((_, index) => stageState(index, "done"));
      resultPanel.hidden = false;
      applyButton.hidden = true;
      message("Both SHA-256 checks passed. Your customized firmware is ready to download.", "success");
    } catch (error) {
      if (current !== operation) return;
      clearResult();
      if (activeStage >= 0) stageState(activeStage, "error");
      if (error && (error.code === "source-size" || error.code === "source-hash")) selectedFile = null;
      message(error && typeof error.message === "string" ? error.message : "The patch could not be completed. No download was created.", "error");
    } finally {
      if (current === operation) setBusy(false);
    }
  });

  window.addEventListener("pagehide", reset);

  reset();
  try {
    if (!engine || !globalThis.BITBOX_PATCH) throw new Error("The patcher could not load all of its files. Reload the complete page before trying again.");
    if (!globalThis.crypto || !globalThis.crypto.subtle || typeof globalThis.crypto.subtle.digest !== "function") {
      throw new Error("This browser cannot verify files here. Open the patcher over HTTPS or localhost in a current browser.");
    }
    engine.validatePatch(globalThis.BITBOX_PATCH);
    byId("source-hash").textContent = engine.RELEASE.source.sha256;
    byId("target-hash").textContent = engine.RELEASE.target.sha256;
    available = true;
    setBusy(false);
  } catch (error) {
    available = false;
    setBusy(false);
    message(error.message, "error");
  }
})();
