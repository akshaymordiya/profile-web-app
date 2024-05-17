import React from "react";
import "./footer.scss";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LanguageIcon from "@mui/icons-material/Language";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-main-wrapper position-relative z-index-1 fix">
          <div className="footer-area" style={{ padding: "80px 0px 60px 0px" }}>
            <div className="footer-shape">
              <img src="/assets/footer-shape-2.png" />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-8 mb-40">
                  <div className="footer-widget">
                    <div className="footer-logo">
                      <img src="/assets/logo-white.png" />
                    </div>
                    <div className="footer-content">
                      <p>Feel free to reach out with questions or inquiries.</p>
                    </div>
                    <div className="footer-social">
                      <a href="#" target="_blank">
                        <span>
                          <MailOutlineIcon />
                        </span>
                      </a>
                      <a href="#" target="_blank">
                        <span>
                          <LanguageIcon />
                        </span>
                      </a>
                      <a href="#" target="_blank">
                        <span>
                          <MailOutlineIcon />
                        </span>
                      </a>
                      <a href="#" target="_blank">
                        <span>
                          <SubscriptionsOutlinedIcon />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 mb-40">
                  <div className="footer-widget">
                    <h4 className="footer-widget-title">Explore</h4>
                    <ul>
                      <li>
                        <a href="#">
                          <ArrowForwardOutlinedIcon />
                          About
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <ArrowForwardOutlinedIcon />
                          Services
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <ArrowForwardOutlinedIcon />
                          Portfolio
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <ArrowForwardOutlinedIcon />
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-3 col-md-8 mb-40">
                  <div style={{ paddingLeft: "25px" }}>
                    <h4 className="footer-widget-title">Address</h4>
                    <div className="footer-widget-address">
                      <a href="#" target="_blank">
                        California
                        <span></span>
                        <br />
                        987 Design Blvd, Suite 543, Beverly Hills, CA 902
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-3 col-md-4 mb-40">
                  <div style={{ paddingLeft: "45px" }}>
                    <h4 className="footer-widget-title">Say Hello</h4>
                    <div className="footer-widget-mail">
                      <a href="#" target="_blank">
                        {" "}
                        hello@youremail.com{" "}
                      </a>
                    </div>
                    <div className="footer-widget-mail">
                      <a href="#" target="_blank">
                        +1(789) 8001234
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="copyright-area copyright-bdr-top"
            style={{ padding: "20px 0px" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="copyright-text text-center">
                    <span> ThemePure @ 2024. All Rights Reserved.</span>
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

export default Footer;
