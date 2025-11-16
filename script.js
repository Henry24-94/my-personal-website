// Mobile menu toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Auto-close menu on link click (mobile)
document.querySelectorAll(".nav-link").forEach(link =>
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    })
);

// Smooth scrolling (modern browsers support this)
document.documentElement.style.scrollBehavior = "smooth";
