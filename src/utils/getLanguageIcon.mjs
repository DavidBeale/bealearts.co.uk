
export default function getLanguageIcon(language) {
    return languageIcons[language] || languageIcons.Unknown;
}

const languageIcons = {
    Unknown: '/images/languages/unknown.png',
    JavaScript: '/images/languages/javascript.png',
    Java: '/images/languages/java.png',
    ColdFusion: '/images/languages/coldfusion.png',
    ActionScript: '/images/languages/actionscript.png',
    Arduino: '/images/languages/arduino.png'
};
