/* =========================================
   Mahligai Cinta Event Hall — FULL script.js
   - Auto add IG + TikTok
   - Popup success
   - Footer year
========================================= */

document.addEventListener("DOMContentLoaded", () => {

  // ================= SOCIAL LINKS =================
  const IG = "https://www.instagram.com/mahligaicintaeventhall";
  const TT = "https://www.tiktok.com/@mahligaicintaeventhall";

  const menu = document.querySelector(".menu");

  if (menu) {
    const socials = document.createElement("div");
    socials.style.display = "flex";
    socials.style.gap = "10px";
    socials.style.marginLeft = "10px";

    socials.innerHTML = `
      <a href="${IG}" target="_blank" style="font-weight:600;color:#b8975b">IG</a>
      <a href="${TT}" target="_blank" style="font-weight:600;color:#b8975b">TikTok</a>
    `;

    menu.appendChild(socials);
  }

  // ================= FOOTER YEAR =================
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // ================= POPUP =================
  const popup = document.getElementById("popupBackdrop");
  const closeBtn = document.getElementById("popupClose");

  function showPopup() {
    if (!popup) return;
    popup.classList.add("show");
  }

  function hidePopup() {
    if (!popup) return;
    popup.classList.remove("show");
  }

  if (closeBtn) closeBtn.addEventListener("click", hidePopup);

  // ================= SUCCESS FLAG =================
  const flag = localStorage.getItem("mc_enquiry_success");

  if (flag === "1") {
    localStorage.removeItem("mc_enquiry_success");
    showPopup();
    setTimeout(hidePopup, 4000);
  }

});