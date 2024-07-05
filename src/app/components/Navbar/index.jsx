"use client";
import React, { useEffect, useState } from "react";

//components
import Logo from "../Logo";
import Menu from "../Menu";
import CTA from "../CTA";

//icon
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";

import "./index.scss";

const BASE_CLASSNAME = "header";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null);
  const [showNavBg, setShowNavBg] = useState(false);
 
  const toggleMenu = () => {
    setVisible(!visible); 
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (scrollY < lastScrollY) {
        setScrollDirection('up');
      }

      setShowNavBg(scrollY !== 0);
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
 
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div 
      className={`${BASE_CLASSNAME} ${scrollDirection === 'down' ? "hide" : "show" } ${showNavBg ? "white_bg" : ""}`}
    >
      <Logo />
      <Menu
        className={`${BASE_CLASSNAME}_menu_container`}
        hiddenOnSmallerDevices
        isVisible={visible}
        toggleMenu={toggleMenu}
        itemclass="link_item"
      />
      <div className={`${BASE_CLASSNAME}_contact-container`}>
        <CTA
          linkText="Let's Talk"
          linkHref="/contact"
          linkClass="contact_btn"
          icon={CreateRoundedIcon}
          iconProps={{
            fontSize: "sm",
          }}
        />
        <MenuOpenRoundedIcon className="menu_icon" onClick={toggleMenu} />
      </div>
    </div>
  );
};

export default Navbar;
