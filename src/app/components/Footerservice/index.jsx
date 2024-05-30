import React from "react";
import CTA from "../CTA";
import "./index.scss";
import Footerasocial from "./Footersocial";
import Grid from "../Grid";
import footer from "../../../data/footerservice.json";

const FooterService = () => {
  return (
    <>
      <div className="footer-bg">
        <div className="footer-circle-1">
          <span></span>
        </div>
        <div className="footer-circle-2">
          <span></span>
        </div>
        <div className="footer-circle-3">
          <span></span>
        </div>

        <div className="footer-area">
          <div className="container">
            <div className="row">
              <div
                className="footer-title"
                data-aos="flip-up"
                data-aos-duration="2000"
              >
                {footer.footers.title}
              </div>
            </div>
            <Grid classNames="footer-btn-box">
              <Grid.Item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                itemClass="footer-btn"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <CTA
                  btn_color="btn-black-xl"
                  linkClass="btn-black-xl w-100"
                  linkHref="/contact"
                  linkText={footer.footers.button.black_btn}
                />
              </Grid.Item>
              <Grid.Item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                itemClass="footer-btn"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <CTA
                  btn_color="btn-grey-xl"
                  linkClass="btn-grey-xl w-100"
                  linkHref="/contact"
                  linkText={footer.footers.button.white_btn}
                />
              </Grid.Item>
            </Grid>
            <Footerasocial />
          </div>
        </div>
        <div className="container">
          <Grid classNames="copyright-area">
            <Grid.Item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xlg={6}
              itemClass="copyright-content-left"
            >
              <p>
                {footer.footers.copyright.title}
                <span>{footer.footers.copyright.subtitle}</span>
              </p>
            </Grid.Item>
            <Grid.Item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xlg={6}
              itemClass="copyright-content-right"
            >
              <span>{footer.footers.copyright.text}</span>
            </Grid.Item>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default FooterService;
