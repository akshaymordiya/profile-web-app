import React, { useState } from "react";
import "./index.scss";
import Grid from "../Grid";
import IMG from "../IMG";
import menuData from "../../../data/menu.json";
import Link from "next/link";
import socilamedia from "../../../data/socialLinks.json";

const ResponsiveNav = ({ toggleMenu }) => {
  const [isVisible, setIsVisible] = useState(true);
  const BASE_CLASSNAME = "portal_area";
  return (
    <>
      <div className={`${BASE_CLASSNAME}`}>
        <button onClick={toggleMenu}>x</button>
        <Grid classNames={`${BASE_CLASSNAME}_wrapper`}>
          <Grid.Item
            sm={12}
            md={12}
            xs={12}
            lg={6}
            xlg={6}
            itemClass={`${BASE_CLASSNAME}_wrapper_col-1`}
          >
            <IMG
              src="assets/logo-black.png"
              useRawImgTag
              alt="footer-img"
              useContainer
              containerClasses="mobilenav-logo"
            />
            <nav className={`responsive-nav counter-row ${isVisible ? '' : 'hidden'}`}>
              <ul>
                {menuData.map((item, index) => (
                  <li key={index}>
                    <Link
                      onClick={() => {
                        setIsVisible(false);
                        toggleMenu && toggleMenu();
                      }}
                      href={item?.page}
                    >
                      {item?.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </Grid.Item>
          <Grid.Item
            sm={12}
            md={12}
            xs={12}
            lg={6}
            xlg={6}
            itemClass={`${BASE_CLASSNAME}_wrapper_col-2`}
          >
            <div className="left-side">
              <div className="number">
                <Link href="tel:61404093954">+61404093 954</Link>
              </div>
              <div className="mailtext">
                <Link href="mailto:hellocontact@gmail.com">
                  hello contact@gmail.com
                </Link>
              </div>
              <p>If in doubt. reach out.</p>
            </div>
            <div className="right-side">
              <ul>
                {socilamedia.map((item, index) => (
                  <li key={index}>
                    <Link href={item?.link} target="_blank">
                      {item?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Grid.Item>
        </Grid>
      </div>
    </>
  );
};

export default ResponsiveNav;
