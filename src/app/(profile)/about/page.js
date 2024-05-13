import React from "react";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import "./page.scss";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";
//TODO:: The child page of about route
const About = () => {
  // const secondSectionRef = useRef(null);

  // const scrollToNextSection = () => {
  //   if (secondSectionRef.current) {
  //     window.scrollTo({
  //       top: secondSectionRef.current.offsetTop,
  //       behavior: 'smooth'
  //     });
  //   }
  // };


  return (
    <>
      <div id="smooth-content">
        <main>
          <div className="services-area service-ptb z-index-1 position-relative fix">
            <div className="services-shape-1">
              <img src="/assets/hero-shape-2-1.png" alt="" />
            </div>
            <div className="service__text d-none d-lg-block col-md-4">
              <span>ABOUT ME</span>
            </div>
            {/* <a href="#" className="pointer" onClick={scrollToNextSection}>
              <div className="header-scrool-down d-none d-lg-inline-flex">
                <span className="text">Scroll</span>
                <span>
                  <SouthIcon />
                </span>
              </div>
            </a> */}

            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-lg-5">
                  <div className="servicetitle-box">
                    <h3 className="service__title">
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          marginRight: "30px",
                        }}
                      >
                        <div className="animated-letter">I</div>
                        <div className="animated-letter">'</div>
                        <div className="animated-letter">m</div>
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          marginRight: "30px",
                        }}
                      >
                        <div className="animated-letter">D</div>
                        <div className="animated-letter">i</div>
                        <div className="animated-letter">e</div>
                        <div className="animated-letter">g</div>
                        <div className="animated-letter">o</div>
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          marginRight: "30px",
                        }}
                      >
                        <div className="animated-letter">L</div>
                        <div className="animated-letter">u</div>
                        <div className="animated-letter">n</div>
                        <div className="animated-letter">a</div>
                      </div>
                    </h3>
                  </div>
                  <div className="servicebtn-box">
                    <a href="#" className="btn-border-sm">
                      Download CV
                      <span>
                        <SaveAltIcon />
                      </span>
                    </a>
                  </div>
                </div>

                <div className="col-xl-8 col-lg-7">
                  <div className="service-right-box text-end position-relative mt-5">
                    <div className="service-signature">
                      <img
                        src="/assets/service-signature.png"
                        alt="service-signature"
                      />
                    </div>
                    <div className="servicecircle-img">
                      <img
                        src="/assets/service-circle-img.png"
                        alt="service-circle"
                      />
                    </div>
                    <div className="service-img">
                      <img
                        src="/assets/service-hero-1.webp"
                        alt="service_img"
                        style={{
                          color: "transparent",
                          height: "auto",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="service-info-area" style={{ paddingBottom: "160px" }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="service-info-text">
                    <div>
                      I'm Diego <span className="line"></span> a self though &
                      self learned designer based in USA. I started as a
                      financial planner & social media marketer, but now I do
                      mix of everything from &nbsp;
                      <a className="service-hover-item">
                        Product Design <span> </span>
                        <div
                          className="service-hover-bg"
                          style={{ backgroundImage: "url(/assets/ab-1.png)" }}
                        ></div>
                      </a>
                      , &nbsp;
                      <a className="service-hover-item">
                        Photography <span> </span>
                        <div
                          className="service-hover-bg"
                          style={{ backgroundImage: "url(/assets/ab-2.png)" }}
                        ></div>
                      </a>
                      , &nbsp;
                      <a className="service-hover-item">
                        Web Design <span> </span>
                        <div
                          className="service-hover-bg"
                          style={{ backgroundImage: "url(/assets/ab-3.png)" }}
                        ></div>
                      </a>
                      , &nbsp;
                      <a className="service-hover-item">
                        Graphic Design <span> </span>
                        <div
                          className="service-hover-bg"
                          style={{ backgroundImage: "url(/assets/ab-4.png)" }}
                        ></div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="personal-info-area black-bg-3 pb-30 tp-personal-info-pin-section">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div
                    className="personal-info-left"
                    style={{ marginRight: "200px" }}
                  >
                    <div className="services-wrapper services-capsule-wrapper">
                      <div className="personal-info-left-content">
                        <h4 className="personal-info-left-title">
                          <DriveFileRenameOutlineIcon />
                          Personal Info
                        </h4>
                        <p>
                          Perceived end knowledge certainly day sweetness why
                          cordially.
                        </p>
                        <a href="#">example@gmail.com</a>
                        <a href="#">
                          <span>
                            <img src="/assets/whatsap.png" />
                          </span>
                          +491 234 5678
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="personal-info-right-wrap">
                    <div
                      className="personal-info-skill wow rightToLeft"
                      data-wow-duration=".9s" data-wow-delay=".3s"
                      style={{ marginBottom: "85px" }}
                    >
                      <h4 className="personal-info-right-title">
                        <span>
                          <WbIncandescentIcon />
                        </span>
                        Skillsets
                      </h4>
                      <div className="progress-bar-wrap">
                        <div className="progress-bar-item">
                          <label>Figma</label>
                          <div className="progress-bar">
                            <div className="progress">
                              <div
                                className="progress-barr wow slideInLeft"
                                data-wow-duration="2s" data-wow-delay="5s"
                                style={{ width: "90%" }}
                              >
                                <span>90%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="progress-bar-item">
                          <label>Sketch</label>
                          <div className="progress-bar">
                            <div className="progress">
                              <div
                                className="progress-barr wow slideInLeft"
                                data-wow-duration="2s" data-wow-delay="5s"
                                style={{ width: "82%" }}
                              >
                                <span>82%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="progress-bar-item">
                          <label>Photoshop</label>
                          <div className="progress-bar">
                            <div className="progress">
                              <div
                                className="progress-barr wow slideInLeft"
                                style={{ width: "65%" }}
                              >
                                <span>65%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="progress-bar-item">
                          <label>Invision</label>
                          <div className="progress-bar">
                            <div className="progress">
                              <div
                                className="progress-barr wow slideInLeft"
                                style={{ width: "58%" }}
                              >
                                <span>58%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="personal-info-experience rightToLeft"
                      style={{ marginBottom: "85px" }}
                    >
                      <h4
                        className="personal-info-right-title"
                        style={{ marginBottom: "35px" }}
                      >
                        <span>
                          <WbIncandescentIcon />
                        </span>
                        Experience
                      </h4>
                      <div className="personal-info-exprience-box d-flex align-items-start ">
                        <span className="personal-info-exprience-length">
                          2022 - Present
                        </span>
                        <div className="personal-info-exprience-content">
                          <h4 className="personal-info-exprience-title">
                            UI/UX Lead Designer
                          </h4>
                          <span>Amazon INC</span>
                        </div>
                      </div>
                      <div className="personal-info-exprience-box d-flex align-items-start ">
                        <span className="personal-info-exprience-length">
                          2018 - 2022
                        </span>
                        <div className="personal-info-exprience-content">
                          <h4 className="personal-info-exprience-title">
                            Product Lead Designer
                          </h4>
                          <span>Amazon INC</span>
                        </div>
                      </div>
                      <div className="personal-info-exprience-box d-flex align-items-start ">
                        <span className="personal-info-exprience-length">
                          2016 - 2018
                        </span>
                        <div className="personal-info-exprience-content">
                          <h4 className="personal-info-exprience-title">
                            Graphic Designer
                          </h4>
                          <span>Amazon INC</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="personal-info-education rightToLeft"
                      style={{ marginBottom: "85px" }}
                    >
                      <h4
                        className="personal-info-right-title"
                        style={{ marginBottom: "35px" }}
                      >
                        <span>
                          <WbIncandescentIcon />
                        </span>
                        Education
                      </h4>
                      <div className="personal-info-exprience-box d-flex align-items-start ">
                        <span className="personal-info-exprience-length">
                          2014 - 2016
                        </span>
                        <div className="personal-info-exprience-content">
                          <h4 className="personal-info-exprience-title">
                            Stanford University
                          </h4>
                          <span>of California.</span>
                        </div>
                      </div>
                      <div className="personal-info-exprience-box d-flex align-items-start ">
                        <span className="personal-info-exprience-length">
                          2012 - 2014
                        </span>
                        <div className="personal-info-exprience-content">
                          <h4 className="personal-info-exprience-title">
                            Specialization Course.
                          </h4>
                          <span>MIT University</span>
                        </div>
                      </div>
                      <div className="personal-info-exprience-box d-flex align-items-start ">
                        <span className="personal-info-exprience-length">
                          2009 - 2012
                        </span>
                        <div className="personal-info-exprience-content">
                          <h4 className="personal-info-exprience-title">
                            Level High School.
                          </h4>
                          <span>San Fransisco</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="funfact-area funfact-plr z-index-1 position-relative fix"
            style={{ paddingTop: "110px", paddingBottom: "60px" }}
          >
            <div className="funfact-bg funfact-overlay">
              <div
                className="funfact-bg-item"
                style={{ backgroundImage: "url(/assets/funfact-bg-1-2.jpg)" }}
              ></div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 mb-40">
                  <div className="funfact-item space-left-1">
                    <div className="funfact-number">
                      <span className="purecounter counter-item text-center">
                        <div className="d-flex align-items-center justify-content-center ">
                          <strong>56</strong>
                          <span></span>
                        </div>
                      </span>
                    </div>
                    <div className="funfact-content">
                      <h4 className="funfact-title">
                        Projects <br /> Completed
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 mb-40">
                  <div className="funfact-item space-left-1">
                    <div className="funfact-number">
                      <span className="purecounter counter-item text-center">
                        <div className="d-flex align-items-center justify-content-center ">
                          <strong>12</strong>
                          <span></span>
                        </div>
                      </span>
                    </div>
                    <div className="funfact-content">
                      <h4 className="funfact-title">
                        Years <br /> Of Experience
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 mb-40">
                  <div className="funfact-item space-left-1">
                    <div className="funfact-number">
                      <span className="purecounter counter-item text-center">
                        <div className="d-flex align-items-center justify-content-center ">
                          <strong>34</strong>
                          <span></span>
                        </div>
                      </span>
                    </div>
                    <div className="funfact-content">
                      <h4 className="funfact-title">
                        Client
                        <br /> Satisfaction
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="award-area award-customize"
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
          >+
            <div className="container">
              <div className="award-inner" style={{ paddingBottom: "80px" }}>
                <div className="row">
                  <div className="col-xl-5">
                    <div className="award-wrapper">
                      <div
                        className="section-title-wrapper"
                        style={{ marginBottom: "30px" }}
                      >
                        <div className="section-title-inner position-relative ">
                          <h3 className="award-section-title">
                          Awards &  <br />  recognitions
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default About;
