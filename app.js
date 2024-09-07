document.addEventListener("DOMContentLoaded", function () {
  const openMenuButton = document.getElementById("open-menu");
  const closeMenuButton = document.getElementById("close-menu");
  const mobileMenu = document.getElementById("mobile");
  const nav = document.getElementById("nav");

  openMenuButton.addEventListener("click", function () {
    mobileMenu.classList.remove("hidden");
    nav.classList.add("hidden");
  });

  closeMenuButton.addEventListener("click", function () {
    mobileMenu.classList.add("hidden");
    nav.classList.remove("hidden");
  });
});