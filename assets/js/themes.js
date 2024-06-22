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

        function setTheme(theme) {
            switch (theme) {
                case 'theme-ocean':
                    document.documentElement.style.setProperty('--navbar-color', '#1b0c63');
                    document.documentElement.style.setProperty('--background-color', '#412ea3');
                    document.documentElement.style.setProperty('--cover-color', '#412ea3');
                    document.documentElement.style.setProperty('--content-background', '#7e6bdb');
                    document.documentElement.style.setProperty('--footer-background', '#1b0c63');
                    break;
                case 'theme-test':
                    document.documentElement.style.setProperty('--navbar-color', '#333333');
                    document.documentElement.style.setProperty('--background-color', '#1a1a1a');
                    document.documentElement.style.setProperty('--cover-color', '#000000');
                    document.documentElement.style.setProperty('--content-background', '#1a1a1a');
                    document.documentElement.style.setProperty('--footer-background', '#333333');
                    break;
                default:
                    document.documentElement.style.setProperty('--navbar-color', '#0d0d0d');
                    document.documentElement.style.setProperty('--background-color', '#0d0d0d');
                    document.documentElement.style.setProperty('--cover-color', '#0d0d0d');
                    document.documentElement.style.setProperty('--content-background', '#0d0d0d');
                    document.documentElement.style.setProperty('--footer-background', '#0d0d0d');
            }
        }
