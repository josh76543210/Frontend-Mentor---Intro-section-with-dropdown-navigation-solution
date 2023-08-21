"use strict";

////////////////////////////
// Variables

////////////////////////////
// Elements
const openNavBtn = document.querySelector("button[aria-expanded]");
const closeNavBtn = document.querySelector(".header__navbar-btn--close");
const featuresBtn = document.querySelector(".header__nav-link--features");
const featuresCtrl = document.querySelector(".header__nav-item--features");
const companyBtn = document.querySelector(".header__nav-link--company");
const companyCtrl = document.querySelector(".header__nav-item--company");
const navOverlayEl = document.querySelector(".header__nav");

////////////////////////////
// Event-listeners
window.onresize = closeNav;
window.onscroll = closeNav;
openNavBtn.addEventListener("click", openNav);
closeNavBtn.addEventListener("click", closeNav);
featuresBtn.addEventListener("click", toggleFeatures);
companyBtn.addEventListener("click", toggleCompany);
navOverlayEl.addEventListener("click", function (e) {
  // if in mobile screen and overlay is clicked
  if (
    window.matchMedia("(max-width: 58em)").matches &&
    e.target.classList.contains("header__nav")
  ) {
    // close nav
    closeNav();
  }
});
document.addEventListener("click", function (e) {
  console.log(e.target);
  // if desktop screen and submenu and submenu selector not clicked
  if (
    !window.matchMedia("(max-width: 58em)").matches &&
    !e.target.classList.contains("header__nav-sublist") &&
    !e.target.classList.contains("header__nav-link--features") &&
    !e.target.classList.contains("header__nav-link--company") &&
    !e.target.classList.contains("header__nav-subitem")
  ) {
    // close submenus
    featuresCtrl.setAttribute("aria-expanded", false);
    companyCtrl.setAttribute("aria-expanded", false);
  }
});

////////////////////////////
// Functions
// open mobile navigation
function openNav() {
  openNavBtn.setAttribute("aria-expanded", true);
}

// Close mobile navigation
function closeNav() {
  openNavBtn.setAttribute("aria-expanded", false);
  featuresCtrl.setAttribute("aria-expanded", false);
  companyCtrl.setAttribute("aria-expanded", false);
}

// toggle features submenu
function toggleFeatures() {
  const expanded = featuresCtrl.getAttribute("aria-expanded") === "true";
  featuresCtrl.setAttribute("aria-expanded", !expanded);
  // close other submenu
  companyCtrl.setAttribute("aria-expanded", false);
}

// toggle company submenu
function toggleCompany() {
  const expanded = companyCtrl.getAttribute("aria-expanded") === "true";
  companyCtrl.setAttribute("aria-expanded", !expanded);
  // close other submenu
  featuresCtrl.setAttribute("aria-expanded", false);
}
