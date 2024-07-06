"use client";
import React, { useState, useEffect } from 'react';
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

const IconCmp = ({
  type,
  classNames = ""
}) => {
  if(type === ""){
    return
  }

  const Icon = icons[type];

  return <Icon className={classNames} />
}

IconCmp.displayName = "IconCmp"

const Alert = ({
  show = false,
  type = "",
  text = "",
  onClose,
  duration = 20000
}) => {

  const [isClosing, setIsClosing] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  if (!mounted) return null;

  return createPortal(
    <div className={`${BASE_CLASSNAME} ${type} ${(show && !isClosing)  ? "open": "close" }`}>
      <div className={`${BASE_CLASSNAME}_left`}>
        <IconCmp
          type={type}
          classNames='icon'
        />
        <p>{text}</p>
      </div>
      <HighlightOffIcon className={`${BASE_CLASSNAME}_right`} onClick={handleClose} />
    </div>,
    document?.getElementById("alert-box")
  )
}

Alert.displayName = "Alert";

export default Alert