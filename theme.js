/* Copyright (c) 2026 vwal. See LICENSE.txt. Browser-local display preference. */
(function () {
  "use strict";
  const key = "bitbox-patcher-theme";
  const root = document.documentElement;
  const system = window.matchMedia("(prefers-color-scheme: dark)");
  const valid = value => value === "light" || value === "dark";
  let preference = null;
  try {
    const saved = window.localStorage.getItem(key);
    if (valid(saved)) preference = saved;
  } catch (_) { /* Storage may be blocked; the switch still works for this page. */ }

  function apply() {
    const mode = preference || (system.matches ? "dark" : "light");
    root.dataset.theme = mode;
    const button = document.getElementById("theme-toggle");
    if (button) {
      button.setAttribute("aria-checked", String(mode === "dark"));
      button.hidden = false;
    }
  }
  // Runs before the stylesheet/body to avoid flashing the wrong saved theme.
  apply();
  document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("theme-toggle");
    if (!button) return;
    button.addEventListener("click", function () {
      preference = root.dataset.theme === "dark" ? "light" : "dark";
      try { window.localStorage.setItem(key, preference); } catch (_) {}
      apply();
    });
    apply();
  }, { once: true });
  if (system.addEventListener) system.addEventListener("change", apply);
  window.addEventListener("storage", function (event) {
    if (event.key !== key && event.key !== null) return;
    preference = valid(event.newValue) ? event.newValue : null;
    apply();
  });
})();
