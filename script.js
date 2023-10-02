<script>
        const themeLink = document.getElementById("theme-link");
        const toggleThemeButton = document.getElementById("toggle-theme");

        function toggleTheme() {
            if (themeLink.getAttribute("href") === "style.css") {
                themeLink.setAttribute("href", "temaEscuro.css");
            } else {
                themeLink.setAttribute("href", "style.css");
            }
        }
        toggleThemeButton.addEventListener("click", toggleTheme);
    </script>
