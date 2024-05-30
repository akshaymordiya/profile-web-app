import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LanguageIcon from "@mui/icons-material/Language";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import FlipToFrontIcon from '@mui/icons-material/FlipToFront';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import StarIcon from "@mui/icons-material/Star";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import VerticalSplitOutlinedIcon from "@mui/icons-material/VerticalSplitOutlined";
import ViewQuiltOutlinedIcon from "@mui/icons-material/ViewQuiltOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import AodOutlinedIcon from "@mui/icons-material/AodOutlined";
import AndroidOutlinedIcon from "@mui/icons-material/AndroidOutlined";
import CoronavirusOutlinedIcon from "@mui/icons-material/CoronavirusOutlined";
import AutoAwesomeMotionOutlinedIcon from "@mui/icons-material/AutoAwesomeMotionOutlined";
import EastIcon from "@mui/icons-material/East";
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';

const Icons = {
    "Fname": DriveFileRenameOutlineIcon,
    "RightIcon": SubdirectoryArrowRightIcon,
    "Arrowoutward" : ArrowOutwardIcon,
    "IncadescentIcon" :WbIncandescentIcon,
    "SchoolIcon": SchoolOutlinedIcon,
    "MailIcon": MailOutlineIcon,
    "LangIcon": LanguageIcon,
    "SubscribIcon": SubscriptionsOutlinedIcon,
    "Arrowforward" : ArrowForwardOutlinedIcon,
    "Download": SaveAltIcon,
    "AutoIcon": AutoModeIcon,
    "Flipfront": FlipToFrontIcon,
    "PhonelinkIcon": PhonelinkIcon,
    "Star": StarIcon,
    "Arrowoutline": ArrowOutwardOutlinedIcon,
    "VerticalSplit": VerticalSplitOutlinedIcon,
    "AutomotionIcon" : AutoAwesomeMotionOutlinedIcon,
    "InstaIcon": InstagramIcon,
    "BitcoinIcon": CurrencyBitcoinIcon,
    "AodIcon": AodOutlinedIcon,
    "AndroidIcon": AndroidOutlinedIcon,
    "Viewoutline": ViewQuiltOutlinedIcon,
    "CoronaIcon": CoronavirusOutlinedIcon,
    "Arrowicon": EastIcon
}

export const getIcon = (keys = []) => {
    const iconsMap = {}
    keys.forEach(key => {
        iconsMap[key] = Icons[key]
    })
    return iconsMap
}

export const renderIconComponent = (key, returnReference = false) => {
    const Component = Icons[key];

    if(!Component) return <></>;

    if(returnReference){
        return Component;
    }

    return <Component />
}

export default Icons;