// Mobile menu toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => { navMenu.classList.toggle("active"); });

document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => { navMenu.classList.remove("active"); });
});

// Smooth scrolling
document.documentElement.style.scrollBehavior = "smooth";

// Scroll animations
const animatedSections = document.querySelectorAll(".animate");
function checkScroll() {
  const triggerBottom = window.innerHeight / 1.2;
  animatedSections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) { section.classList.add("show"); }
  });
}
window.addEventListener("scroll", checkScroll);
window.addEventListener("load", checkScroll);
