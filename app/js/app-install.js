/* SkillRun PWA install prompt
   Captures the browser install prompt (Android/Chrome/Edge).
   Shows a small install banner inside the app. On iOS the
   user installs via "Add to Home Screen" from the browser share menu.
*/

(function () {
  "use strict";

  var deferredPrompt = null;

  window.addEventListener("beforeinstallprompt", function (event) {
    event.preventDefault();
    deferredPrompt = event;
    showInstallBanner();
  });

  function showInstallBanner() {
    var banner = document.getElementById("install-banner");
    if (!banner) { return; }
    banner.style.display = "flex";
  }

  function hideInstallBanner() {
    var banner = document.getElementById("install-banner");
    if (banner) { banner.style.display = "none"; }
  }

  window.addEventListener("appinstalled", function () {
    hideInstallBanner();
    deferredPrompt = null;
  });

  window.__SkillRunInstall = function () {
    if (!deferredPrompt) {
      alert("Open SkillRun in your browser menu and choose \"Install app\" or \"Add to Home Screen\".");
      return;
    }
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(function (choice) {
      if (choice.outcome === "accepted") {
        hideInstallBanner();
      }
      deferredPrompt = null;
    });
  };
})();