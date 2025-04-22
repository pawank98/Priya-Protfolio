// Select DOM elements
const hamburger = document.querySelector(".nav__hamburger");
const linksContainer = document.querySelector(".nav__menu");
const links = document.querySelectorAll(".nav__menu__link");

// Toggle mobile menu on hamburger click
hamburger.addEventListener("click", () => {
  linksContainer.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Close menu when a nav link is clicked (only on small screens)
function closeMenuOnLinkClick() {
  links.forEach((link) => {
    link.addEventListener("click", () => {
      linksContainer.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });
}

// Close menu if resized below mobile width and a link is clicked
function handleResize() {
  if (window.innerWidth <= 550) {
    closeMenuOnLinkClick();
  }
}

// Initialize on load and on resize
window.addEventListener("resize", handleResize);
window.addEventListener("DOMContentLoaded", handleResize);
