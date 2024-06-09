import React from "react";
import "./index.scss";

//components
import IMG from "../IMG";
import Grid from "../Grid";
import SectionBox from "../SectionBox";

import footer from "../../../data/global.footer.json";
import { getIcon, renderIconComponent } from "@/Icons";

const FooterwidgetTitle = ({ title = "", parag = "", parentclass = "" }) => {
  return (
    <>
      <div className={parentclass}>
        <a href="#" target="_blank">
          {title}
          <span></span>
          <br />
          {parag}
        </a>
      </div>
    </>
  );
};

const Footer = () => {
  const { Arrowforward } = getIcon([
    "Arrowforward",
    "MailIcon",
    "LangIcon",
    "SubscribIcon",
  ]);

  const BASE_CLASSNAME = "footer-container";
  return (
    <>
      <footer>
        <div className="footer-main-wrapper">
          <div className="footer-area">
            <IMG
              src={footer.footerImg}
              useRawImgTag
              alt="footer-img"
              useContainer
              containerClasses="footer-shape"
            />
            <div className="container">
              <Grid classNames={`${BASE_CLASSNAME}`}>
                <Grid.Item
                  xs={12}
                  sm={6}
                  md={8}
                  lg={4}
                  xlg={4}
                  itemClass="footer-widget"
                >
                  <IMG
                    src={footer.whitelogo}
                    useRawImgTag
                    alt="Logo-white"
                    useContainer
                    containerClasses="footer-logo"
                  />
                  <div className="footer-content">
                    <p>{footer.paragraph}</p>
                  </div>
                  <div className="footer-social">
                    {
                      footer.socialmedia.map((item)=> (
                        <a href="#" target="_blank">
                      <span>{renderIconComponent(item?.icon)}</span>
                    </a>
                      ))
                    }
                  </div>
                </Grid.Item>
                <Grid.Item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={2}
                  xlg={2}
                  itemClass="footer-widget"
                >
                  <SectionBox
                    interClass="footer-widget-title"
                    title={footer.explore.title}
                  />
                  <ul>
                    {footer.explore.exploredata.map((item, i) => {
                      return (
                        <li key={i}>
                          <a href="#">
                            <Arrowforward />
                            {item?.title}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </Grid.Item>
                <Grid.Item
                  xs={12}
                  sm={6}
                  md={8}
                  lg={3}
                  xlg={3}
                  itemClass="footer-widget"
                >
                  <SectionBox
                    interClass="footer-widget-title"
                    title={footer.address.title}
                  />
                  <FooterwidgetTitle
                    parentclass="footer-widget-address"
                    title={footer.address.subtitle}
                    parag={footer.address.paragraph}
                  />
                </Grid.Item>
                <Grid.Item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  xlg={3}
                  itemClass="footer-widget"
                >
                  <SectionBox
                    interClass="footer-widget-title"
                    title={footer.contact.title}
                  />
                  <FooterwidgetTitle
                    parentclass="footer-widget-mail"
                    title={footer.contact.email}
                  />
                  <FooterwidgetTitle
                    parentclass="footer-widget-mail"
                    title={footer.contact.number}
                  />
                </Grid.Item>
              </Grid>
            </div>
          </div>
          <Grid classNames="copyright-bdr-top container">
            <Grid.Item
              sm={12}
              xs={12}
              md={12}
              lg={12}
              xlg={12}
              itemClass="copyright-text"
              data-speed="0.5"
            >
              <span>{footer.copyright.title}</span>
            </Grid.Item>
          </Grid>
        </div>
      </footer>
    </>
  );
};

export default Footer;