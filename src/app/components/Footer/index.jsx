
import React from "react";
import "./index.scss";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import whitelogo from "../../../../public/assets/logo-white.png";
import footershape from "../../../../public/assets/footer-shape-2.png";
import LanguageIcon from "@mui/icons-material/Language";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import IMG from "../IMG";
import Grid from "../Grid";
import SectionTitle from "../SectionTitle";
import FooterwidgetTitle from "../FooterWidgetitle";
const data = [
  {
    icon: <MailOutlineIcon />,
  },
  {
    icon: <LanguageIcon />,
  },
  {
    icon: <MailOutlineIcon />,
  },
  {
    icon: <SubscriptionsOutlinedIcon />,
  },
];
const datatitle = [
  {
    title: "About",
  },
  {
    title: "Services",
  },
  {
    title: "Portfolio",
  },
  {
    title: "Contact",
  },
];
const Footer = () => {
  const BASE_CLASSNAME = "footer-container";
  return (
    <>
      <footer>
        <div className="footer-main-wrapper">
          <div className="footer-area" style={{ padding: "80px 0px 60px 0px" }}>
            <IMG
              src={footershape}
              alt="Logo-white"
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
                    src={whitelogo}
                    alt="Logo-white"
                    useContainer
                    containerClasses="footer-logo"
                  />
                  <div className="footer-content">
                    <p>Feel free to reach out with questions or inquiries.</p>
                  </div>
                  <div className="footer-social">
                    {data.map((item, index) => {
                      return (
                        <a key={index} href="#" target="_blank">
                          <span>{item?.icon}</span>
                        </a>
                      );
                    })}
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
                    title="Explore"
                  />
                  <ul>
                    {datatitle.map((item, i) => {
                      return (
                        <li key={i}>
                          <a href="#">
                            <ArrowForwardOutlinedIcon />
                            {item?.title}
                          </a>
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
                  style={{ paddingLeft: "25px" }}
                >
                  <SectionTitle
                    interClass="footer-widget-title"
                    title="Address"
                  />
                  <FooterwidgetTitle
                    parentclass="footer-widget-address"
                    title="California"
                    parag=" 987 Design Blvd, Suite 543, Beverly Hills, CA 902"
                  />
                </Grid.Item>
                <Grid.Item
                  xs={12}
                  sm={6}
                  md={8}
                  lg={3}
                  xlg={3}
                  itemClass="footer-widget"
                  style={{ paddingLeft: "45px" }}
                >
                  <SectionTitle
                    interClass="footer-widget-title"
                    title="Say Hello"
                  />
                  <FooterwidgetTitle
                    parentclass="footer-widget-mail"
                    title="hello@youremail.com"
                  />
                  <FooterwidgetTitle
                    parentclass="footer-widget-mail"
                    title="+1(789) 8001234"
                  />
                </Grid.Item>
              </Grid>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-4 col-lg-4 col-md-8 mb-40">
                  <div className="footer-widget">
                    <IMG
                      src={whitelogo}
                      alt="Logo-white"
                      useContainer
                      containerClasses="footer-logo"
                    />
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
                </div> */}
                {/* <div className="col-xl-2 col-lg-2 col-md-4 mb-40">
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
                </div> */}

                {/* <div className="col-xl-3 col-lg-3 col-md-8 mb-40">
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
                </div> */}

                {/* <div className="col-xl-3 col-lg-3 col-md-4 mb-40">
                  <div style={{ paddingLeft: "45px" }}>
                    <h4 className="footer-widget-title">Say Hello</h4>
                    <div className="footer-widget-mail">
                      <a href="#" target="_blank">
                        hello@youremail.com
                      </a>
                    </div>
                    <div className="footer-widget-mail">
                      <a href="#" target="_blank">
                        +1(789) 8001234
                      </a>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <Grid
            classNames="copyright-bdr-top container"
            style={{ padding: "20px 0px" }}
          >
            <Grid.Item
              sm={12}
              xs={12}
              md={12}
              lg={12}
              xlg={12}
              itemClass="copyright-text"
              data-speed="0."
            >
              <span> ThemePure @ 2024. All Rights Reserved.</span>
            </Grid.Item>
          </Grid>
        </div>
      </footer>
    </>
  );
};

export default Footer;
