'use client';
import React, { useMemo } from 'react'
import { createPortal } from "react-dom"
import Link from 'next/link';

//hooks
import { usePathname } from 'next/navigation'
import useBreakpoint from '@/hooks/useBreakpoints';

import menuItems from "../../../data/menu.json";

import "./index.scss";

const BASE_CLASSNAME = "menu_container";

const Menu = ({
  items = menuItems,
  className = "",
  itemclass = "",
  hiddenOnSmallerDevices = false,
  useAsVerticalMenu = false,
  isVisible = false,
  toggleMenu = () => {}
}) => {
  const pathname = usePathname();
  
  const breakpoint = useBreakpoint();

  const isMenuHide = useMemo(() => {
    return hiddenOnSmallerDevices && ['xs', 'sm', 'md', 'lg'].includes(breakpoint)
  }, [breakpoint, hiddenOnSmallerDevices]);

  if(isMenuHide){
    if(isVisible){
      return (
        <div className='portal-wrapper'>
          {createPortal(
            <div
              className='portal'
            >
              <p>Content in the portal</p>
              <button onClick={toggleMenu}>Click Me</button>
            </div>,
            document.getElementById("portal")
          )}
        </div>
      )
    }
    return
  }

  return (
        <div className={`
          ${BASE_CLASSNAME} ${className} counter-row
          ${hiddenOnSmallerDevices ? "hidden-on-small" : ""}
          ${useAsVerticalMenu ? "vertical" : ""}
        `}>
          {(items ?? []).map(item => (
            <Link
              key={item.title}
              className={`
                ${BASE_CLASSNAME}_link 
                ${itemclass}
                ${pathname === item.page ? 'active' : ''}
              `}
              href={item.page}
            >
              {item.title}
            </Link>
          ))}
        </div>
  )}

export default Menu