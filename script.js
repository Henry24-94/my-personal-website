/* Mobile Menu Toggle */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
});

/* Close menu when clicking a link (mobile) */
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.style.display = "none";
  });
});

/* Dark Mode Toggle */
const toggle = document.querySelector(".theme-toggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

/* Smooth section reveal */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0px)";
        entry.target.style.transition = "0.8s ease";
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".section").forEach(sec => {
  observer.observe(sec);
});
