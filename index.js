const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", function () {
  mobileMenu.style.display =
    mobileMenu.style.display === "none" || mobileMenu.style.display === ""
      ? "block"
      : "none";
});
const textArray = ["Competitive Programmer", "Web Developer"];