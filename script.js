// Hamburger toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Dark/Bright mode toggle
const toggleSwitch = document.getElementById('theme-checkbox');
const modeText = document.getElementById('mode-text');
const currentTheme = localStorage.getItem('theme') || 'light';

document.documentElement.setAttribute('data-theme', currentTheme);
if (currentTheme === 'dark') {
  toggleSwitch.checked = true;
  modeText.textContent = 'Light Mode';
}

toggleSwitch.addEventListener('change', function() {
  if (this.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    modeText.textContent = 'Light Mode';
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    modeText.textContent = 'Dark Mode';
  }
});
