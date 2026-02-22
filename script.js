// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu toggle
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu bila klik link
  mobileMenu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });
}

// Popup controls
const popupBackdrop = document.getElementById("popupBackdrop");
const popupClose = document.getElementById("popupClose");

function openPopup() {
  if (!popupBackdrop) return;
  popupBackdrop.classList.add("show");
  popupBackdrop.setAttribute("aria-hidden", "false");
}

function closePopup() {
  if (!popupBackdrop) return;
  popupBackdrop.classList.remove("show");
  popupBackdrop.setAttribute("aria-hidden", "true");
}

if (popupClose) popupClose.addEventListener("click", closePopup);
if (popupBackdrop) {
  popupBackdrop.addEventListener("click", (e) => {
    if (e.target === popupBackdrop) closePopup();
  });
}

// Trigger popup jika URL ada ?success=1
const params = new URLSearchParams(window.location.search);
if (params.get("success") === "1") openPopup();