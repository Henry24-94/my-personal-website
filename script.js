// Ensure the script runs only after the entire page is loaded
document.addEventListener('DOMContentLoaded', () => {

    // ===================================
    // 1. Hamburger toggle functionality
    // ===================================
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });
    }

    // ===================================
    // 2. Dark/Light mode toggle functionality
    // ===================================
    const toggleSwitch = document.getElementById('checkbox'); // Changed from 'theme-checkbox' to 'checkbox' to match the HTML ID I provided previously
    const modeText = document.getElementById('mode-text');
    const currentTheme = localStorage.getItem('theme') || 'light';
    const htmlElement = document.documentElement;

    if (toggleSwitch && modeText) {
        // Apply saved theme on load
        htmlElement.setAttribute('data-theme', currentTheme);

        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
            // If the current mode is dark, the text should offer to switch to Light Mode.
            modeText.textContent = 'Light Mode';
        } else {
            // If the current mode is light, the text should offer to switch to Dark Mode.
            modeText.textContent = 'Dark Mode';
        }

        // Event listener for theme change
        toggleSwitch.addEventListener('change', function() {
            if (this.checked) {
                htmlElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                modeText.textContent = 'Light Mode'; // Now suggesting the other mode
            } else {
                htmlElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                modeText.textContent = 'Dark Mode'; // Now suggesting the other mode
            }
        });
    }
});
