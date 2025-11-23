document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const themeToggleBtn = document.getElementById('dark-mode-toggle');
    const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('i') : null;

    // Function to get CSS variable values
    function getCSSVariableValue(variable) {
        return getComputedStyle(document.body).getPropertyValue(variable).trim();
    }


    // Function to toggle dark mode
    function toggleTheme() {
        if (!themeToggleBtn) return; // Exit if toggle button doesn't exist

        body.classList.toggle('dark-theme');

        // Change the icon if it exists
        if (themeIcon) {
            if (body.classList.contains('dark-theme')) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
                localStorage.setItem('theme', 'dark');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
                localStorage.setItem('theme', 'light');
            }
        }

    }

    // Apply saved theme from localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        if (themeIcon) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    } else if (savedTheme === 'light') {
        body.classList.remove('dark-theme');
        if (themeIcon) {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    } else {
        // If no preference saved, use system preference
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        if (prefersDarkScheme.matches) {
            body.classList.add('dark-theme');
            if (themeIcon) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }
        }
    }
    // Add event listener to theme toggle button if it exists
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }
});
