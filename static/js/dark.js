// dark.js

document.addEventListener("DOMContentLoaded", function() {
    const toggle = document.getElementById("dark-mode-toggle");

    if (!toggle) {
        console.warn("Dark mode toggle button not found.");
        return;
    }

    const toggleIcon = toggle.querySelector('i');

    if (!toggleIcon) {
        console.warn("Toggle button icon not found.");
        return;
    }

    // Function to set theme
    function setTheme(mode) {
        console.log(`Setting theme to ${mode}`);
        localStorage.setItem("dark-mode-storage", mode);
        if (mode === "dark") {
            document.body.classList.add("dark-theme");
            toggleIcon.classList.remove("fa-moon");
            toggleIcon.classList.add("fa-sun");
        } else if (mode === "light") {
            document.body.classList.remove("dark-theme");
            toggleIcon.classList.remove("fa-sun");
            toggleIcon.classList.add("fa-moon");
        }
    }

    // Initialize theme based on localStorage
    const savedTheme = localStorage.getItem("dark-mode-storage") || "light";
    console.log(`Saved theme: ${savedTheme}`);
    setTheme(savedTheme);

    // Event listener for toggle button
    toggle.addEventListener("click", () => {    
        if (document.body.classList.contains("dark-theme")) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    });
});
