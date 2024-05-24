"use client";
import React from "react";
import CTA from "../CTA";
import "./footerservice.scss";
import Footerasocial from "./footerasocial";
import Aos from "../AOS/aos";
import Grid from "../Grid";
const FooterService = () => {
  return (
    <>
      <Aos />
      <div className="footer-bg position-relative fix z-index-1">
        <div className="footer-circle-1">
          <span></span>
        </div>
        <div className="footer-circle-2">
          <span></span>
        </div>
        <div className="footer-circle-3">
          <span></span>
        </div>

        <div
          className="footer-area"
          style={{ paddingTop: "120px", paddingBottom: "80px" }}
        >
          <div className="container">
            <div className="row">
              <div
                className="footer-title text-center"
                data-aos="flip-up"
                data-aos-duration="2000"
              >
                Let's talk about <br /> the next big thing
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
                  linkText="Discuss Project"
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
                  linkText="Write A Message"
                />
              </Grid.Item>
            </Grid>
            <Footerasocial />
          </div>
        </div>
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
              © 2024 Diego, All Rights Reserved •<span> Credit</span>
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
           <span>2024 Portfolio</span>
          </Grid.Item>
        </Grid>
        
      </div>
    </>
  );
};

export default FooterService;
