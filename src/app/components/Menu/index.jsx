import React from 'react'
import Link from 'next/link';

import menuItems from "../../../data/menu.json";

import "./index.scss";

const BASE_CLASSNAME = "menu_container";

const Menu = ({
  items = menuItems,
  className = "",
  itemclass = "",
  hiddenOnSmallerDevices = false,
  useAsVerticalMenu = false
}) => {
  return (
    <div className={`
      ${BASE_CLASSNAME} ${className}
      ${hiddenOnSmallerDevices ? "hidden-on-small" : ""}
      ${useAsVerticalMenu ? "vertical" : ""}
    `}>
      {(items ?? []).map(item => (
        <Link
          key={item.title}
          className={`
            ${BASE_CLASSNAME}_link 
            ${itemclass}
          `}
          href={item.page}
        >
          {item.title}
        </Link>
      ))}
    </div>
  )}

export default Menu