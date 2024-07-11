import React from "react";
//components
import Link from "next/link";
import IMG from "@/app/components/IMG";
import Grid from "@/app/components/Grid";
//icons
import CallMadeIcon from '@mui/icons-material/CallMade';
//utils
import { renderIconComponent } from "@/Icons";
//data
import footer from "../../../../data/footer.json";

import "./index.scss";

const BASE_CLASSNAME = "footer-home_wrapper";

const Footer = () => {
  return (
    <footer className={BASE_CLASSNAME}>
      <IMG 
        src={footer.images.shape_top}
        useRawImgTag
        imageClasses={`${BASE_CLASSNAME}_shape`}
      />
      <Grid classNames={`${BASE_CLASSNAME}_grid`}>
        <Grid.Item
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xlg={6}
          itemClass={`${BASE_CLASSNAME}_grid_col-1`}
        >
          <div className="header_title">
            <p>CONTACT ME</p>
            <span>___</span>
            <h1>Let's work
            <br/>Together</h1>
          </div>
          <div className="content">
            <div className="menu">
              <IMG 
                src={footer.images.logo}
                useRawImgTag
                imageClasses="logo"
              />
              <ul className="menu_items">
                {footer.grid.explore.data.map((d, index) => (
                  <li
                    key={`${d.title}_${index}`}
                    className="menu_items-item"
                  >
                    <Link
                      href={d.link}
                      className="menu_items-item_link"
                    >
                      {d.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <p className="paragraph">{footer.largeParagraph}</p>
          </div>
        </Grid.Item>
        <Grid.Item
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xlg={6}
          itemClass={`${BASE_CLASSNAME}_grid_col-2`}
        >
          <IMG
            src={footer.images.user}
            useRawImgTag
            imageClasses="user_img"
          />
          <div className="circle_shape_wrapper">
            <IMG 
              src={footer.images.circle_shape}
              useRawImgTag
              imageClasses="circle_shape"
              useLink
              href="/contact"
              linkClass="link"
            />
            <CallMadeIcon className="cross_icon" />
          </div>
        </Grid.Item>
      </Grid>
      <div className={`${BASE_CLASSNAME}_copyright`}>
        <span className="text">{footer.copyright.title}</span>
        <div className="social_links">
          {footer.socialMedia.map(d => (
            <Link 
              key={d.title}
              href={d.link}
              className="link"
            >
              {renderIconComponent(d.icon)}
              <span>{d.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}; 

export default Footer;
