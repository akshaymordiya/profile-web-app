import React from "react";
import "./index.scss";
import homeData from "../../../../data/home.page.json";
import menu from "../../../../data/menu.json";
import sociallink from "../../../../data/socialLinks.json";
import IMG from "@/app/components/IMG";
import Grid from "@/app/components/Grid";
import SectionBox from "@/app/components/SectionBox";
import { renderIconComponent } from "@/Icons";
import Link from "next/link";

const Footer = () => {
  const BASE_CLASSNAME = "footer_wrapper";
  return (
    <>
      <footer>
        <div className={`${BASE_CLASSNAME}`}>
          {homeData.footer.map((item, index) => (
            <IMG
              key={index}
              containerClasses={item?.footerclass}
              src={item?.footerimg}
              useContainer
              useRawImgTag
            />
          ))}
          <Grid classNames={`${BASE_CLASSNAME}_grid`}>
            <Grid.Item xs={12} sm={12} md={12} lg={9} xlg={7}>
              <div className="footer-title-box">
                <span className="footer-subtitle">
                  {homeData.footerArea.subtitle}
                </span>
                <SectionBox
                  title={homeData.footerArea.title}
                  itemClass="footer-title"
                />
                <div className="footer-widget">
                  <Grid classNames="footer-widget-top">
                    <Grid.Item
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      xlg={6}
                      itemClass="footer-content"
                    >
                      <IMG
                        src={homeData.footerArea.image}
                        useRawImgTag
                        useContainer
                        containerClasses="footer-logo"
                      />
                      <div className="footer-text">
                        <p>{homeData.footerArea.paragraph}</p>
                      </div>
                    </Grid.Item>
                    <Grid.Item
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      xlg={6}
                      itemClass="footer-menu"
                    >
                      <ul>
                        {menu.map((item, index) => (
                          <li key={index}>
                            <Link href='/'>{item?.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </Grid.Item>
                  </Grid>
                </div>
              </div>
            </Grid.Item>
            <Grid.Item
              xs={12}
              sm={12}
              md={12}
              lg={3}
              xlg={5}
              itemClass="footer-link"
            >
              <Link href="/">
                <img src={homeData.footerArea.cirlceImg} alt="" />
                <span>{renderIconComponent(homeData.footerArea.icon)}</span>
              </Link>
            </Grid.Item>
          </Grid>

          <div className="copyright-area">
            <Grid classNames="copyright-border-top">
              <Grid.Item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xlg={6}
                itemClass="copyright-left"
              >
                <p>{homeData.footerArea.copyright}</p>
              </Grid.Item>
              <Grid.Item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xlg={6}
                itemClass="copyright-social"
              >
                <ul>
                  {sociallink.map((item, index) => (
                    <li key={index}>
                      <Link href={item?.link} target="_blank">
                        {item?.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Grid.Item>
            </Grid>
            
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
