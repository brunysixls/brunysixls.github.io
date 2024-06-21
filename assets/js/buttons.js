function makeFullScreen() {
            const iframe = document.querySelector('iframe');
            if (iframe.requestFullscreen) {
                iframe.requestFullscreen();
            } else if (iframe.mozRequestFullScreen) { 
                iframe.mozRequestFullScreen();
            } else if (iframe.webkitRequestFullscreen) { 
                iframe.webkitRequestFullscreen();
            } else if (iframe.msRequestFullscreen) { 
                iframe.msRequestFullscreen();
            }
        }

        function refreshIframe() {
            const iframe = document.querySelector('iframe');
            iframe.src = iframe.src;
        }

        function checkForHacks() {
            alert('No Mods/Hacks Avalible');
        }
