"use client";
import React, { useEffect } from "react";
import CTA from "../CTA";
import "./footerservice.scss";
import Footerasocial from "./footerasocial";
import Aos from "../AOS/aos";
const FooterService = () => {

  return (
    
    <>
    <Aos />
      <div className="footer-bg position-relative fix z-index-1">
        <div className="footer-circle-1">
          <span></span>
        </div>{" "}
        <div className="footer-circle-2">
          <span></span>
        </div>
        <div className="footer-circle-3">
          <span></span>
        </div>
        <div
          className="footer-area footer-inner-customize"
          style={{ paddingTop: "120px", paddingBottom: "80px" }}
        >
          <div className="container">
            <div className="row">
              <div className="footer-title text-center" data-aos="flip-up" data-aos-duration="2000">
                Let's talk about <br /> the next big thing
              </div>
            </div>
            <div className="footer-btn-box">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 ">
                  <div
                    className="footer-btn text-center"
                    data-aos="fade-up"
                    data-aos-duration="800"
                  >
                    <CTA
                      btn_color="btn-black-xl"
                      linkClass="btn-black-xl w-100"
                      linkHref="/contact"
                      linkText="Discuss Project"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 ">
                  <div
                    className="footer-btn text-center"
                    data-aos="fade-up"
                    data-aos-duration="800"
                  >
                    <CTA
                      btn_color="btn-grey-xl"
                      linkClass="btn-grey-xl w-100"
                      linkHref="/contact"
                      linkText="Write A Message"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Footerasocial />
          </div>
        </div>
        <div className="copyright-area" style={{ paddingBottom: "20px" }}>
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-md-6">
                <div className="copyright-content-left text-center text-md-start">
                  <p>
                    © 2024 Diego, All Rights Reserved •<span> Credit</span>
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-md-6">
                <div className="copyright-content-right text-center text-md-end">
                  <span>2024 Portfolio</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterService;
