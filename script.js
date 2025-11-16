document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
    const storageKey = 'solomon-color-scheme';
    const darkIcon = '<i class="fas fa-sun"></i>'; // Sun icon for light mode
    const lightIcon = '<i class="fas fa-moon"></i>'; // Moon icon for dark mode

    // 1. Function to apply the theme
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            toggle.innerHTML = darkIcon; // Show sun icon when in dark mode
        } else {
            body.classList.remove('dark-mode');
            toggle.innerHTML = lightIcon; // Show moon icon when in light mode
        }
    };

    // 2. Initial load: Check for stored preference or system preference
    const savedPreference = localStorage.getItem(storageKey);
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedPreference) {
        // Use saved preference
        applyTheme(savedPreference);
    } else if (systemPreference) {
        // Use system preference if no saved preference exists
        applyTheme('dark');
    } else {
        // Default to light mode (already set by applyTheme)
        applyTheme('light');
    }

    // 3. Toggle click handler
    toggle.addEventListener('click', () => {
        const isCurrentlyDark = body.classList.contains('dark-mode');
        const newTheme = isCurrentlyDark ? 'light' : 'dark';

        // Apply and save the new theme
        applyTheme(newTheme);
        localStorage.setItem(storageKey, newTheme);
    });
});
