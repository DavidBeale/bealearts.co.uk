
import UnknownIcon from '../../images/languages/unknown.png';
import JavaScriptIcon from '../../images/languages/javascript.png';
import JavaIcon from '../../images/languages/java.png';
import ColdFusionIcon from '../../images/languages/coldfusion.png';
import ActionScriptIcon from '../../images/languages/actionscript.png';
import ArduinoIcon from '../../images/languages/arduino.png';


export default function getLanguageIcon(language) {
    return languageIcons[language] || languageIcons.Unknown;
}


const languageIcons = {
    Unknown: UnknownIcon,
    JavaScript: JavaScriptIcon,
    Java: JavaIcon,
    ColdFusion: ColdFusionIcon,
    ActionScript: ActionScriptIcon,
    Arduino: ArduinoIcon
};
