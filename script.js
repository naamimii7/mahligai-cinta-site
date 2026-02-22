/* =========================================
   Mahligai Cinta Event Hall — script.js (FULL)
   - Mobile menu toggle
   - Footer year auto
   - Success popup (triggered by localStorage flag)
   ========================================= */

(() => {
  // ---------- Helpers ----------
  const $ = (id) => document.getElementById(id);

  // ---------- Mobile menu ----------
  const hamburger = $("hamburger");
  const mobileMenu = $("mobileMenu");

  if (hamburger && mobileMenu) {
    const closeMenu = () => {
      mobileMenu.style.display = "none";
      mobileMenu.classList.remove("open");
    };

    const openMenu = () => {
      mobileMenu.style.display = "block";
      mobileMenu.classList.add("open");
    };

    hamburger.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.contains("open");
      isOpen ? closeMenu() : openMenu();
    });

    mobileMenu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", closeMenu);
    });

    // Close if click outside menu (optional)
    document.addEventListener("click", (e) => {
      if (!mobileMenu.classList.contains("open")) return;
      const clickedInside = mobileMenu.contains(e.target) || hamburger.contains(e.target);
      if (!clickedInside) closeMenu();
    });
  }

  // ---------- Footer year ----------
  const yearEl = $("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- Popup ----------
  const popupBackdrop = $("popupBackdrop");
  const popupClose = $("popupClose");

  const showPopup = () => {
    if (!popupBackdrop) return;
    popupBackdrop.classList.add("show");
    popupBackdrop.setAttribute("aria-hidden", "false");

    // Focus button for accessibility
    if (popupClose) popupClose.focus();
  };

  const hidePopup = () => {
    if (!popupBackdrop) return;
    popupBackdrop.classList.remove("show");
    popupBackdrop.setAttribute("aria-hidden", "true");
  };

  if (popupClose) popupClose.addEventListener("click", hidePopup);

  if (popupBackdrop) {
    popupBackdrop.addEventListener("click", (e) => {
      if (e.target === popupBackdrop) hidePopup();
    });
  }

  // ESC to close popup
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") hidePopup();
  });

  // ---------- Trigger popup after Netlify form success ----------
  // thanks.html will set localStorage key and redirect back to /#contact
  const FLAG_KEY = "mc_enquiry_success";
  const flag = localStorage.getItem(FLAG_KEY);

  if (flag === "1") {
    localStorage.removeItem(FLAG_KEY);
    showPopup();
    setTimeout(hidePopup, 4000);
  }
})();