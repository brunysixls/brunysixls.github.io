function setCookie(name, value, options) {
    options = options || {};

    let expires = options.expires;

    if (typeof expires == "number" && expires) {
        const d = new Date();
        d.setTime(d.getTime() + expires * 24 * 60 * 60 * 1000);
        expires = options.expires = d;
    }

    if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);

    let updatedCookie = name + "=" + value;

    for (const propName in options) {
        updatedCookie += "; " + propName;
        const propValue = options[propName];
        if (propValue !== true) {
            updatedCookie += "=" + propValue;
        }
    }

    document.cookie = updatedCookie;
}

function getCookie(name) {
    const matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

document.addEventListener("DOMContentLoaded", function() {
    const selectedPreset = getCookie("tabCloakPreset");

    const presets = {
        google: {
            favicon: "../../assets/Images/cloaks/google.ico",
            title: "Google"
        },
        bing: {
            favicon: "../../assets/Images/cloaks/bing.ico",
            title: "Bing"
        },
        gmail: {
            favicon: "../../assets/Images/cloaks/gmail.ico",
            title: "Gmail"
        },
        desmos: {
            favicon: "../../assets/Images/cloaks/desmos.ico",
            title: "Desmos | Graphing Calculator"
        },
        googleclassroom: {
            favicon: "../../assets/Images/cloaks/googleclassroom.ico",
            title: "Home"
        },
        wikipedia: {
            favicon: "../../assets/Images/cloaks/wikipedia.ico",
            title: "Wikipedia"
        },
        chrometab: {
            favicon: "../../assets/Images/cloaks/chromenewtab.ico",
            title: "New Tab"
        },
        googledrive: {
            favicon: "../../assets/Images/cloaks/googledrive.ico",
            title: "My Drive"
        },
        IXL: {
            favicon: "../../assets/Images/cloaks/ixl.ico",
            title: "IXL | Math"
        },
        meximath: {
            favicon: "../../assets/Images/cloaks/meximath.ico",
            title: "MexiMath"
        },
        szvycentral: {
            favicon: "../../assets/Images/cloaks/szvycentral.ico",
            title: "Szvy Central"
        },
        pablocp: {
            favicon: "../../assets/Images/cloaks/pablocp.ico",
            title: "PabloCP"
        }
        ,
        fa: {
            favicon: "../../assets/Images/cloaks/fa.ico",
            title: "Frogies Arcade"
        },
        schoology: {
            favicon: "../../assets/Images/cloaks/schoology.ico",
            title: "Home | Schoology"
        },
        clever: {
            favicon: "../../assets/Images/cloaks/clever.ico",
            title: "Clever | Portal"
        }
    };

    if (selectedPreset && presets[selectedPreset]) {
        const preset = presets[selectedPreset];
        document.title = preset.title;

        const newFavicon = document.createElement("link");
        newFavicon.rel = "icon";
        newFavicon.href = preset.favicon;
    
        const existingFavicon = document.querySelector("link[rel='icon']");
        if (existingFavicon) {
            document.head.removeChild(existingFavicon);
        }
    
        document.head.appendChild(newFavicon);
    }
});  
