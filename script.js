// Hamburger toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// Dark mode toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Toggle icon between moon and sun
  const icon = themeToggle.querySelector("i");
  icon.classList.toggle("ri-moon-line");
  icon.classList.toggle("ri-sun-line");
});

// Optional: load saved theme from localStorage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  themeToggle.querySelector("i").classList.replace("ri-moon-line", "ri-sun-line");
}

// Save theme preference
themeToggle.addEventListener("click", () => {
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
