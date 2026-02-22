// ===== Netlify Form + Popup =====
const form = document.getElementById("enquiryForm");
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

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(form);

      const params = new URLSearchParams();
      for (const [key, value] of formData.entries()) params.append(key, value);

      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });

      if (res.ok) {
        form.reset();
        showPopup();
        setTimeout(hidePopup, 4000);
      } else {
        alert("Oops! Enquiry gagal dihantar. Cuba lagi ya.");
      }
    } catch (err) {
      alert("Network error. Cuba lagi ya.");
    }
  });
}