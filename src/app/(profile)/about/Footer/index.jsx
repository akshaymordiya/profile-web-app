import React from "react";
import "./index.scss";
import IMG from "../../../components/IMG";
import Grid from "../../../components/Grid";
import SectionTitle from "../../../components/SectionTitle";
import FooterwidgetTitle from "../Footer/FooterWidgetitle";
import about from "../../../../data/about.page.json";
import { renderIconComponent } from "@/Icons";
import Link from "next/link";

const Footer = () => {

  const BASE_CLASSNAME = "footer-container";
  return (
    <>
      <footer>
        <div className="footer-main-wrapper">
          <div className="footer-area">
            <IMG
              src={about.footer.footerImg}
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
                    src={about.footer.whitelogo}
                    useRawImgTag
                    alt="Logo-white"
                    useContainer
                    containerClasses="footer-logo"
                  />
                  <div className="footer-content">
                    <p>{about.footer.paragraph}</p>
                  </div>
                  <div className="footer-social">
                    {
                      about.footer.socialmedia.map((item)=> (
                        <Link href="/" target="_blank">
                      <span>{renderIconComponent(item?.icon)}</span>
                    </Link>
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
                  <SectionTitle
                    interClass="footer-widget-title"
                    title={about.footer.explore.title}
                  />
                  <ul>
                    {about.footer.explore.exploredata.map((item, i) => {
                      return (
                        <li key={i}>
                          <Link href='/'>
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
                    title={about.footer.address.title}
                  />
                  <FooterwidgetTitle
                    parentclass="footer-widget-address"
                    title={about.footer.address.subtitle}
                    parag={about.footer.address.paragraph}
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
                    title={about.footer.contact.title}
                  />
                  <FooterwidgetTitle
                    parentclass="footer-widget-mail"
                    title={about.footer.contact.email}
                  />
                  <FooterwidgetTitle
                    parentclass="footer-widget-mail"
                    title={about.footer.contact.number}
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
              <span>{about.footer.copyright.title}</span>
            </Grid.Item>
          </Grid>
        </div>
      </footer>
    </>
  );
};

export default Footer;
