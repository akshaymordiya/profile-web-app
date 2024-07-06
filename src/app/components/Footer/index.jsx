import React from "react";
import "./index.scss";

//components
import IMG from "../IMG";
import Grid from "../Grid";
import SectionBox from "../SectionBox";
import footer from "../../../data/global.footer.json";
import { renderIconComponent } from "@/Icons";
import Link from "next/link";
import FooterwidgetTitle from "./FooterWidgetitle";
import Section from "../Section";

const Footer = () => {
  const BASE_CLASSNAME = "footer-container";
  return (
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
          <Section>
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
                  {footer.socialmedia.map((item, index) => (
                    <Link key={index} href="/" target="_blank">
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
                <SectionBox
                  itemClass="footer-widget-title"
                  title={footer.explore.title}
                />
                <ul>
                  {footer.explore.exploredata.map((item, i) => {
                    return (
                      <li key={i}>
                        <Link href="#">
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
                <SectionBox
                  itemClass="footer-widget-title"
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
                  itemClass="footer-widget-title"
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
          </Section>
        </div>
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
            <span>{footer.copyright.title}</span>
          </Grid.Item>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
