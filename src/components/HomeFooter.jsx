import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaDribbble,
  FaInstagram,
} from "react-icons/fa";

const HomeFooter = () => {
  return (
    <>
      <footer>
        <div className="footer-wrapper footer-overlay-bg black-bg-2 position-relative z-index-1 fix">
          <div className="footer-shape-1">
            <img src="/assets/footer-shape.png" alt="" />
          </div>
          <div className="footer-img">
            <img src="/assets/footer-3-1.png" alt="" />
          </div>
          <div
            className="footer-area"
            style={{ paddingTop: "120px", paddingBottom: "120px" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-7 col-lg-7">
                  <div className="footer-title-box">
                    <span className="footer-subtitle">Contact Me</span>
                    <h3 className="footer-title">
                      Let's work <br /> Together
                    </h3>
                  </div>
                  <div className="footer-widget">
                    <div className="footer-widget-top d-flex align-items-center justify-content-between">
                      <div className="footer-logo">
                        <a href="#">
                          <img src="/assets/logo-white.png" alt="" />
                        </a>
                      </div>
                      <div className="footer-menu">
                        <ul>
                          <li>
                            <a href="#">About</a>
                          </li>
                          <li>
                            <a href="#">Works</a>
                          </li>
                          <li>
                            <a href="#">Services</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="footer-text">
                      <p>
                        A template made for professional designers,
                        photographers and all people who work with creativity
                        and those who don't, this template is yours, use it as
                        you want happy.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-5">
                  <div className="footer-link text-xxl-start text-center">
                    <a className="position-relative d-inline-block tp-mouse-move-btn">
                      <img src="/assets/foooter-btn.png" alt="" />
                      <span>
                        <FiArrowUpRight />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="copyright-area">
            <div className="copyright-border-top">
              <div className="container">
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
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomeFooter;
