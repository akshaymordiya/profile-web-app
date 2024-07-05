"use client";
import React, { useMemo } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";

//components
import Logo from "../Logo";
//hooks
import { usePathname } from "next/navigation";
import useBreakpoint from "@/hooks/useBreakpoints";
//icons
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';
//data
import menuItems from "../../../data/menu.json";
//style
import "./index.scss";

const BASE_CLASSNAME = "menu_container";

const Menu = ({
  items = menuItems,
  className = "",
  itemclass = "",
  hiddenOnSmallerDevices = false,
  isVisible = true,
  toggleMenu = () => {},
}) => {
  const pathname = usePathname();

  const breakpoint = useBreakpoint();

  const isDesktopMenuHide = useMemo(() => {
    return (
      hiddenOnSmallerDevices && ["xs", "sm", "md"].includes(breakpoint)
    );
  }, [breakpoint, hiddenOnSmallerDevices]);

  const MenuBody = (
    <div
      className={`${BASE_CLASSNAME} ${className}`}
    >
      {(items ?? []).map((item, index) => (
        <Link
          key={item.title}
          className={`${BASE_CLASSNAME}_link ${itemclass} ${pathname === item.page ? "active" : ""} ${isDesktopMenuHide ? `link_${index + 1}` : ''}`}
          href={item.page}
        >
          {isDesktopMenuHide && (
            <span>0{index + 1}</span>
          )}
          {item.title}
          {isDesktopMenuHide && (
            <div className="link_icon">
              <LaunchOutlinedIcon />
            </div>
          )}
        </Link>
      ))}
    </div>
  )

  if(isDesktopMenuHide){
    return createPortal(
      (
        <div className={`${BASE_CLASSNAME}_portal ${isVisible ? "show" : "close"}`}>
          <div className={`${BASE_CLASSNAME}_portal_header`}>
            <Logo />
            <HighlightOffIcon 
              className="close" 
              onClick={toggleMenu}
            />
          </div>
          {MenuBody}
        </div>
      ),
      document.getElementById("menu-portal")
    )
  }


  return MenuBody;
};

export default Menu;
