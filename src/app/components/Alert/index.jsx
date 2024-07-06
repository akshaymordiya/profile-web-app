"use client";
import React, { useState, useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';

//icons
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import "./index.scss";

const BASE_CLASSNAME = "alert";

const icons = {
  "info": InfoOutlinedIcon,
  "success": TaskAltIcon,
  "error": WarningAmberIcon
}

const Alert = ({
  show = false,
  type = "",
  text = "",
  onClose,
  duration = 20000
}) => {

  const [isClosing, setIsClosing] = useState(false);

  const Icon = useMemo(() => {
    if(type === ""){
      return () => <React.Fragment></React.Fragment>
    }

    return icons[type]
  }, [type]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, [2000]);
  }

  useEffect(() => {
    if(show){
      setTimeout(() => {
        handleClose();
      }, duration)
    }
  }, [show, duration]);

  return createPortal(
    <div className={`${BASE_CLASSNAME} ${type} ${(show && !isClosing)  ? "open": "close" }`}>
      <div className={`${BASE_CLASSNAME}_left`}>
        <Icon className="icon" />
        <p>{text}</p>
      </div>
      <HighlightOffIcon className={`${BASE_CLASSNAME}_right`} onClick={handleClose} />
    </div>,
    document.getElementById("alert-box")
  )
}

Alert.displayName = "Alert";

export default Alert