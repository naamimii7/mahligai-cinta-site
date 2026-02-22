const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", () => {
    const show = mobileMenu.style.display === "block";
    mobileMenu.style.display = show ? "none" : "block";
  });
}