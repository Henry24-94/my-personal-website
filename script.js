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
    // Using 'checkbox' ID from the HTML structure provided
    const toggleSwitch = document.getElementById('checkbox'); 
    const modeText = document.getElementById('mode-text');
    const htmlElement = document.documentElement;

    // Use 'theme' key from localStorage
    const currentTheme = localStorage.getItem('theme') || 'light'; 

    if (toggleSwitch && modeText) {
        // Apply saved theme on load
        htmlElement.setAttribute('data-theme', currentTheme);

        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
            // Text should suggest the action: switch to Light Mode.
            modeText.textContent = 'Light Mode';
        } else {
            // Text should suggest the action: switch to Dark Mode.
            modeText.textContent = 'Dark Mode';
        }

        // Event listener for theme change
        toggleSwitch.addEventListener('change', function() {
            if (this.checked) {
                htmlElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                modeText.textContent = 'Light Mode'; 
            } else {
                htmlElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                modeText.textContent = 'Dark Mode'; 
            }
        });
    }
});
