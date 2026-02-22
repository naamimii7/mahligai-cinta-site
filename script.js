// ================================
// Mahligai Cinta - script.js (FULL)
// Netlify Forms (no fetch) + Success Popup
// ================================

// Mobile menu toggle
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.contains("open");
    if (isOpen) {
      mobileMenu.classList.remove("open");
      mobileMenu.style.display = "none";
    } else {
      mobileMenu.classList.add("open");
      mobileMenu.style.display = "block";
    }
  });

  // Auto close when click any link in mobile menu
  mobileMenu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      mobileMenu.style.display = "none";
    });
  });
}

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===== Popup controls =====
const popupBackdrop = document.getElementById("popupBackdrop");
const popupClose = document.getElementById("popupClose");

function showPopup() {
  if (!popupBackdrop) return;
  popupBackdrop.classList.add("show");
  popupBackdrop.setAttribute("aria-hidden", "false");
}

function hidePopup() {
  if (!popupBackdrop) return;
  popupBackdrop.classList.remove("show");
  popupBackdrop.setAttribute("aria-hidden", "true");
}

if (popupClose) popupClose.addEventListener("click", hidePopup);
if (popupBackdrop) {
  popupBackdrop.addEventListener("click", (e) => {
    if (e.target === popupBackdrop) hidePopup();
  });
}

// ===== Show popup after Netlify redirect (?success=true) =====
(function () {
  const params = new URLSearchParams(window.location.search);
  if (params.get("success") === "true") {
    showPopup();
    setTimeout(hidePopup, 4000);

    // Clean URL (remove success param, keep hash)
    const url = new URL(window.location.href);
    url.searchParams.delete("success");
    window.history.replaceState({}, "", url.pathname + url.search + url.hash);
  }
})();