import React from "react";
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
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import CallMadeIcon from '@mui/icons-material/CallMade';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import WebIcon from '@mui/icons-material/Web';
import GridViewSharpIcon from '@mui/icons-material/GridViewSharp';
import WebhookRoundedIcon from '@mui/icons-material/WebhookRounded';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import ExplicitIcon from '@mui/icons-material/Explicit';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';

const icons = {
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
    "Arrowicon": EastIcon,
    "KeyboardArrow": KeyboardDoubleArrowDownIcon,
    "CallIcon": CallMadeIcon,
    "SettingsEthernetIcon":SettingsEthernetIcon,
    "WebIcon": WebIcon,
    "GridViewSharpIcon": GridViewSharpIcon,
    "WebhookRoundedIcon": WebhookRoundedIcon,
    "ConnectWithoutContactIcon": ConnectWithoutContactIcon,
    "EmailRoundedIcon": EmailRoundedIcon,
    "ExplicitIcon": ExplicitIcon,
    "Github": GitHubIcon,
    "LinkedIn": LinkedInIcon,
    "NavArrow": NorthEastIcon,
    "LocationOn": LocationOnIcon,
    "Call": CallIcon
}

export const getIcon = (keys = []) => {
    const iconsMap = {}
    keys.forEach(key => {
        iconsMap[key] = icons[key]
    })
    return iconsMap
}

export const renderIconComponent = (key, returnReference = false) => {
    const Component = icons[key];

    if (!Component) {
        const EmptyComponent = () => (
            <React.Fragment>
            </React.Fragment>
        );
        EmptyComponent.displayName = 'EmptyComponent';

        if (returnReference) {
            return EmptyComponent;
        }

        return <EmptyComponent />;
    } 

    if(returnReference){
        return Component;
    }

    return <Component />
}

export default icons;