import React from "react";
import Link from "next/link";
import IMG from "../IMG";
import Grid from "../Grid";
import SectionTitle from "../SectionTitle";
import FooterwidgetTitle from "./FooterWidgetitle";
// Data json
import footerData from "../../../data/footer.json";
//Render Icon
import { renderIconComponent } from "@/Icons";
//style scss
import "./index.scss";

const Footer = () => {
  const BASE_CLASSNAME = "footer-container";
  return (
    <>
      <footer>
        <div className="footer-main-wrapper">
          <div className="footer-area">
            <IMG
              src={footerData.footer.footerImg}
              useRawImgTag
              alt="footer-img"
              useContainer
              containerClasses="footer-shape"
            />
            <div className={`${BASE_CLASSNAME}_grid`}>
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
                    src={footerData.footer.whitelogo}
                    useRawImgTag
                    alt="Logo-white"
                    useContainer
                    containerClasses="footer-logo"
                  />
                  <div className="footer-content">
                    <p>{footerData.footer.paragraph}</p>
                  </div>
                  <div className="footer-social">
                    {footerData.footer.socialmedia.map((item) => (
                      <Link href="/" target="_blank">
                        <span>{renderIconComponent(item?.icon)}</span>
                      </Link>
                    ))}
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
                  <SectionTitle
                    interClass="footer-widget-title"
                    title={footerData.footer.explore.title}
                  />
                  <ul>
                    {footerData.footer.explore.exploredata.map((item, i) => {
                      return (
                        <li key={i}>
                          <Link href="/">
                            {/* <Arrowforward /> */}
                            {item?.title}
                          </Link>
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
                  <SectionTitle
                    interClass="footer-widget-title"
                    title={footerData.footer.address.title}
                  />
                  <FooterwidgetTitle
                    parentclass="footer-widget-address"
                    title={footerData.footer.address.subtitle}
                    parag={footerData.footer.address.paragraph}
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
                  <SectionTitle
                    interClass="footer-widget-title"
                    title={footerData.footer.contact.title}
                  />
                  <FooterwidgetTitle
                    parentclass="footer-widget-mail"
                    title={footerData.footer.contact.email}
                  />
                  <FooterwidgetTitle
                    parentclass="footer-widget-mail"
                    title={footerData.footer.contact.number}
                  />
                </Grid.Item>
              </Grid>
            </div>
          </div>
          <div className="copyright-container">
          <Grid classNames="copyright-bdr-top">
            <Grid.Item
              sm={12}
              xs={12}
              md={12}
              lg={12}
              xlg={12}
              itemClass="copyright-text"
              data-speed="0.5"
            >
              <span>{footerData.footer.copyright.title}</span>
            </Grid.Item>
          </Grid>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
