        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });


        function loadTheme() {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                setTheme(savedTheme, false);
            }
        }


        function setTheme(theme, save = true) {
            switch (theme) {
                case 'theme-ocean':
                    document.documentElement.style.setProperty('--navbar-color', '#1b0c63');
                    document.documentElement.style.setProperty('--background-color', '#1b0c63');
                    document.documentElement.style.setProperty('--cover-color', '#412ea3');
                    document.documentElement.style.setProperty('--content-background', '#7e6bdb');
                    document.documentElement.style.setProperty('--footer-background', '#1b0c63');
                    break;
                case 'theme-spooky':
                    document.documentElement.style.setProperty('--navbar-color', '#a86b32');
                    document.documentElement.style.setProperty('--background-color', '#a86b32');
                    document.documentElement.style.setProperty('--cover-color', '#eda45f');
                    document.documentElement.style.setProperty('--content-background', '##c47123');
                    document.documentElement.style.setProperty('--footer-background', '#a86b32');
                    break;
                    case 'theme-FA':
                    document.documentElement.style.setProperty('--navbar-color', '#32a852');
                    document.documentElement.style.setProperty('--background-color', '#32a852');
                    document.documentElement.style.setProperty('--cover-color', '#70ff97');
                    document.documentElement.style.setProperty('--content-background', '#70ff97');
                    document.documentElement.style.setProperty('--footer-background', '#32a852');
                    break;
                    case 'theme-meximath':
                    document.documentElement.style.setProperty('--navbar-color', '#0033a1');
                    document.documentElement.style.setProperty('--background-color', '#0033a1');
                    document.documentElement.style.setProperty('--cover-color', '#5a50e6');
                    document.documentElement.style.setProperty('--content-background', '#5a50e6');
                    document.documentElement.style.setProperty('--footer-background', '#0033a1');
                    break;
                    case 'theme-selentay':
                    document.documentElement.style.setProperty('--navbar-color', '#240046');
                    document.documentElement.style.setProperty('--background-color', '#240046');
                    document.documentElement.style.setProperty('--cover-color', '#255bcf');
                    document.documentElement.style.setProperty('--content-background', '#255bcf');
                    document.documentElement.style.setProperty('--footer-background', '#240046');
                    break;
                default:
                    document.documentElement.style.setProperty('--navbar-color', '#0d0d0d');
                    document.documentElement.style.setProperty('--background-color', '#0d0d0d');
                    document.documentElement.style.setProperty('--cover-color', '#0d0d0d');
                    document.documentElement.style.setProperty('--content-background', '#0d0d0d');
                    document.documentElement.style.setProperty('--footer-background', '#0d0d0d');
            }
            if (save) {
                localStorage.setItem('theme', theme);
            }
        }

        // Apply the theme on load
        window.onload = loadTheme;
