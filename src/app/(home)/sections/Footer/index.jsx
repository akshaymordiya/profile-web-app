import React from "react";
import "./index.scss";
import homeData from "../../../../data/home.page.json";
import menu from "../../../../data/menu.json";
import sociallink from "../../../../data/socialLinks.json";
import IMG from "@/app/components/IMG";
import Grid from "@/app/components/Grid";
import SectionTitle from "@/app/components/SectionTitle";
import { renderIconComponent } from "@/Icons";

const Footer = () => {
  const BASE_CLASSNAME = "footer_wrapper";
  return (
    <>
      <footer>
        <div className={`${BASE_CLASSNAME}`}>
          {homeData.footer.map((item) => (
            <IMG
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
                <SectionTitle
                  animationName="flip-up"
                  interClass="footer-title"
                  title={homeData.footerArea.title}
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
                        {menu.map((item) => (
                          <li>
                            <a href="#">{item?.title}</a>
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
              <a>
                <img src={homeData.footerArea.cirlceImg} alt="" />
                <span>{renderIconComponent(homeData.footerArea.icon)}</span>
              </a>
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
                  {sociallink.map((item) => (
                    <li>
                      <a href={item?.link} target="_blank">
                        {item?.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </Grid.Item>
            </Grid>
            {/* <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-3 col-lg-3 col-md-3">
                  <div className="copyright-left text-center text-md-start">
                    <p>© 2024 Themepure.</p>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-9 d-none d-md-block">
                  <div className="copyright-social text-end">
                    <ul>
                      <li>
                        <a href="#" target="_blank">
                          <FaFacebookF /> Facebook
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <FaTwitter /> Twitter
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <FaDribbble /> Dribble
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <FaInstagram /> Instagram
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
