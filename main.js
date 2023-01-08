const menuEmail = document.querySelector(".navbar-email");
const menuIcon = document.querySelector(".menu");
const orderIcon = document.querySelector(".navbar-shopping-cart");

const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuIcon.addEventListener("click", toggleMobileMenu);
orderIcon.addEventListener("click", toggleOrderAside);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  aside.classList.add("inactive");
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  aside.classList.add("inactive");
}

function toggleOrderAside() {
  aside.classList.toggle("inactive");
  desktopMenu.classList.add("inactive");
  mobileMenu.classList.add("inactive");
}