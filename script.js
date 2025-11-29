// Mobile menu toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const header = document.querySelector("header");
const themeToggle = document.getElementById("theme-toggle");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});

// Smooth scrolling
document.documentElement.style.scrollBehavior = "smooth";

// Scroll animations
const animatedSections = document.querySelectorAll(".animate, .fade-up, .slide-up, .slide-left");

function checkScroll() {
    const triggerBottom = window.innerHeight / 1.15;

    animatedSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.classList.add("show");
        }
    });
}
window.addEventListener("scroll", checkScroll);
window.addEventListener("load", checkScroll);

// Navbar color change when scrolling
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
});

// Dark / Light Mode
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        themeToggle.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
});

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";
}
