import React from "react";
import "./index.scss";

//components
import Link from "next/link";
import IMG from "../IMG";
import Grid from "../Grid";
import SectionBox from "../SectionBox";
import Section from "../Section";
import FooterwidgetTitle from "./FooterWidgetitle";
//utils
import { renderIconComponent } from "@/Icons";
//data
import footer from "../../../data/footer.json";

const BASE_CLASSNAME = "footer-cm_container";

const Footer = () => {
  return (
    <footer className={BASE_CLASSNAME}>
      <IMG 
        src={footer.images.shape}
        useRawImgTag
        imageClasses={`${BASE_CLASSNAME}_shape_img`}
      />
      <Grid classNames={`${BASE_CLASSNAME}_grid`}>
        <Grid.Item
          sm={12}
          xs={12}
          md={6}
          lg={3}
          xlg={3}
          itemClass={`${BASE_CLASSNAME}_grid_col-1`}
        >
          <IMG
            src={footer.images.logo}
            useRawImgTag
            imageClasses="logo"
          />
          <p>{footer.paragraph}</p>
          <div className="social_media_container">
            {footer.socialMedia.map(s => (
              <Link 
                key={s.title} className="social_media_container_link"
                href={s.link}
              >     {renderIconComponent(s. icon)}
              </Link>
            ))}
          </div>
        </Grid.Item>
        {Object.entries(footer.grid).map(([key,value]) => (
          <Grid.Item
            key={key}
            sm={12}
            xs={12}
            md={6}
            lg={3}
            xlg={3}
            itemClass={`${BASE_CLASSNAME}_grid_col-menu`}
          >
            <div className={`${BASE_CLASSNAME}_grid_col-menu_box`}>
              <h2 className={`${BASE_CLASSNAME}_grid_col-menu_box_title`}>{value.title}</h2>
              <ul className={`${BASE_CLASSNAME}_grid_col-menu_box_items_list`}>
                {value.data.map((d, index) => (
                  <li key={`${key}_${index}`} className={`${BASE_CLASSNAME}_grid_col-menu_box_items_list_item`}>
                    {d?.link ? (
                      <Link
                        href={d.link}
                        className="link"
                      >
                        {renderIconComponent(d.icon)}
                        <span>{d.title}</span>
                      </Link>
                    ) : (
                      <div className="text">
                        {renderIconComponent(d.icon)}
                        <span>{d.title}</span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Grid.Item>
        ))}
      </Grid>
      <div className={`${BASE_CLASSNAME}_copyright`}>
        <span>{footer.copyright.title}</span>
      </div>
    </footer>
  );
};

export default Footer;
