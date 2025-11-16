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
    const toggleSwitch = document.getElementById('checkbox'); 
    const modeText = document.getElementById('mode-text');
    const htmlElement = document.documentElement;

    // Retrieve saved theme or default to 'light'
    const currentTheme = localStorage.getItem('theme') || 'light'; 

    if (toggleSwitch && modeText) {
        // Apply saved theme on page load
        htmlElement.setAttribute('data-theme', currentTheme);

        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
            // Display the mode the switch will change to
            modeText.textContent = 'Light Mode'; 
        } else {
            // Display the mode the switch will change to
            modeText.textContent = 'Dark Mode';
        }

        // Event listener for theme change
        toggleSwitch.addEventListener('change', function() {
            if (this.checked) {
                // Switch to Dark Mode
                htmlElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                modeText.textContent = 'Light Mode'; 
            } else {
                // Switch to Light Mode
                htmlElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                modeText.textContent = 'Dark Mode'; 
            }
        });
    }
});
