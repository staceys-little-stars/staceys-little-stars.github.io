const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");
const year = document.querySelector("[data-year]");

function setNav(open) {
  document.body.classList.toggle("nav-open", open);
  navToggle?.setAttribute("aria-expanded", String(open));
}

navToggle?.addEventListener("click", () => {
  setNav(!document.body.classList.contains("nav-open"));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => setNav(false));
});

document.addEventListener("click", (event) => {
  if (!document.body.classList.contains("nav-open")) {
    return;
  }

  if (siteNav?.contains(event.target) || navToggle?.contains(event.target)) {
    return;
  }

  setNav(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setNav(false);
  }
});

window.matchMedia("(min-width: 920px)").addEventListener("change", (event) => {
  if (event.matches) {
    setNav(false);
  }
});

if (year) {
  year.textContent = new Date().getFullYear();
}
