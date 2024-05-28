import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";

const Icons = {
    "Fname": DriveFileRenameOutlineIcon
}

export const getIcon = (keys = []) => {
    const iconsMap = {}
    keys.forEach(key => {
        iconsMap[key] = Icons[key]
    })
    return iconsMap
}

export default Icons;