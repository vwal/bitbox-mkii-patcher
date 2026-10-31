/* Load the optional, cross-origin player only after an explicit click. */
(function () {
  "use strict";
  const button = document.getElementById("load-video");
  const player = document.getElementById("video-player");
  if (!button || !player) return;
  button.hidden = false;
  button.addEventListener("click", () => {
    const frame = document.createElement("iframe");
    frame.title = "Bitbox MkII custom firmware video overview";
    frame.allow = "encrypted-media; picture-in-picture; fullscreen";
    frame.allowFullscreen = true;
    // YouTube requires an embed referrer; send only the site's origin.
    frame.referrerPolicy = "strict-origin";
    frame.src = "https://www.youtube-nocookie.com/embed/OjgC4UoyOIA?rel=0";
    player.replaceChildren(frame);
    frame.focus();
  }, { once: true });
}());
