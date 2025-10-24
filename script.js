// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  const icon = themeToggle.querySelector('i');
  if (document.body.classList.contains('dark-mode')) {
    icon.classList.replace('ri-moon-line', 'ri-sun-line');
  } else {
    icon.classList.replace('ri-sun-line', 'ri-moon-line');
  }
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
