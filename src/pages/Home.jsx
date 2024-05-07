import HomeFooter from "@/components/HomeFooter";
import HomeHeader from "@/components/HomeHeader";
import React from "react";
import { CgArrowLongDown } from "react-icons/cg";
import { TbArrowDownRight } from "react-icons/tb";

const MainPage = () => {
  return (
    <>
      <HomeHeader />
      <div id="home-content">
        <main>
          <div className="home-area black-bg-3 home-ptb z-index-1 smooth position-relative btn-trigger-3">
            <div className="shape-1">
              <img src="/assets/hero-shape-2-1.png" alt="" />
            </div>
            <div className="shape-2">
              <img src="/assets/hero-shape-2-2.png" alt="" />
            </div>
            <div className="social-wrap d-none d-lg-inline-flex">
              <a target="_blank" href="#">
                Facebook
              </a>
              <a target="_blank" href="#">
                Twitter
              </a>
              <a target="_blank" href="#">
                Dribble
              </a>
              <a target="_blank" href="#">
                Istagram
              </a>
            </div>
            <a href="#" className="pointer">
              <div className="header-scrool-down d-none d-lg-inline-flex">
                <span className="text">Scroll</span>
                <span>
                  <CgArrowLongDown />
                </span>
              </div>
            </a>

            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="header_content">
                    <h3 className="header__title tp-char-animation">
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          marginRight: "30px",
                        }}
                      >
                        <div className="animated-letter">C</div>
                        <div className="animated-letter">r</div>
                        <div className="animated-letter">e</div>
                        <div className="animated-letter">a</div>
                        <div className="animated-letter">t</div>
                        <div className="animated-letter">i</div>
                        <div className="animated-letter">v</div>
                        <div className="animated-letter">e</div>
                      </div>
                      <span>
                        <video
                          id="myvideo"
                          src="/assets/diego-video.mp4"
                          autoPlay
                          loop
                          playsInline
                        ></video>
                      </span>
                      <br />
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          marginRight: "30px",
                        }}
                      >
                        <div className="animated-letter">V</div>
                        <div className="animated-letter">i</div>
                        <div className="animated-letter">s</div>
                        <div className="animated-letter">u</div>
                        <div className="animated-letter">a</div>
                        <div className="animated-letter">l</div>
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          marginRight: "30px",
                        }}
                      >
                        <div className="animated-letter">D</div>
                        <div className="animated-letter">e</div>
                        <div className="animated-letter">s</div>
                        <div className="animated-letter">i</div>
                        <div className="animated-letter">g</div>
                        <div className="animated-letter">n</div>
                        <div className="animated-letter">e</div>
                        <div className="animated-letter">r</div>
                      </div>
                    </h3>
                  </div>
                  <div className="homebtn-box d-flex align-items-center justify-content-start justify-content-md-center">
                    <div
                      style={{
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        opacity: "1",
                        transform: " translate(0px, 0px)",
                        marginRight: "30px",
                      }}
                    >
                      <a className="btn-blue" href="#">
                        <span className="text">View Our Work</span>
                        <span>
                          <TbArrowDownRight />
                        </span>
                      </a>
                    </div>
                    <p>
                      Hello, I am Diego a designer from Barcelona. Specialised{" "}
                      <br /> in creating fantastic digital experiences.!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="service"
            className="service-area services-panel-area service-overlay-bg black-bg-2 z-index-1"
            style={{ paddingTop: "150px", paddingBottom: "125px" }}
          >
            <div className="service-circle-img">
              <span className="text-img">
                <img src="/assets/footer-circle-img.png" alt="" />
              </span>
              <div className="shape d-none d-lg-block">
                <svg
                  width="260"
                  height="70"
                  viewBox="0 0 260 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M68.7285 34.1352C48.3941 10.6976 13.8796 0.514191 0 0.514191C93.4783 0.514191 276.081 -0.642708 258.863 0.514191C236.79 1.99739 217.224 6.94161 191.137 34.1352C140.468 93.9609 98.3272 68.2507 68.7285 34.1352Z"
                    fill="currentcolor"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="service-shape-1">
              <img src="/assets/service-shape-1.png" alt="" />
            </div>
            <div className="service-shape-2 d-none d-lg-block">
              <img src="/assets/service-shape-2.png" alt="" />
            </div>
            <div className="service-shape-3">
              <img src="/assets/star.png" alt="" />
            </div>
            <div className="container position-sticky">
              <div className="row">
                <div className="col-xl-5 col-lg-5 ">
                  <div className="stack__card">
                    <div className="service-title-box services-panel-pin">
                      <span className="section-subtitle tp_title_anim">
                        <div
                          style={{
                            display: "block",
                            textAlign: "start",
                            position: "relative",
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transformOrigin: "59.9688px 10px",
                            transform: "translate3d(0px, 0px, 0px)",
                            opacity: "1",
                          }}
                        >
                          OUR PROCESS
                        </div>
                      </span>
                      <h3 className="section-title">
                        <div
                          style={{
                            display: "block",
                            textAlign: "start",
                            position: "relative",
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transformOrigin: "238px 40px",
                            transform: "translate3d(0px, 0px, 0px)",
                            opacity: "1",
                          }}
                        >
                          How We
                        </div>
                        <div
                          style={{
                            display: "block",
                            textAlign: "start",
                            position: "relative",
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transformOrigin: "238px 40px",
                            transform: "translate3d(0px, 0px, 0px)",
                            opacity: "1",
                          }}
                        >
                          Carry Out Our
                        </div>
                        <div
                          style={{
                            display: "block",
                            textAlign: "start",
                            position: "relative",
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transformOrigin: "238px 40px",
                            transform: "translate3d(0px, 0px, 0px)",
                            opacity: "1",
                          }}
                        >
                          Projects
                        </div>
                      </h3>
                      <p>
                        <div
                          style={{
                            display: "block",
                            textAlign: "start",
                            position: "relative",
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transformOrigin: "238px 13px",
                            transform: "translate3d(0px, 0px, 0px)",
                            opacity: "1",
                          }}
                        >
                          We offer a range of services to help elevate
                        </div>
                        <div
                          style={{
                            display: "block",
                            textAlign: "start",
                            position: "relative",
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transformOrigin: "238px 13px",
                            transform: "translate3d(0px, 0px, 0px)",
                            opacity: "1",
                          }}
                        >
                          your brand & drive results.
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-7">
                  <div className="service-right-wrap">
                    <div className="stack__card">
                      <div className="service-item d-flex align-items-start mb-25 services-panel">
                        <div className="service-icon">
                          <span>
                            <img src="" alt="" />
                          </span>
                          <div className="service-content">
                            <h3 className="service-content-title">
                              Design <br /> Strategy
                            </h3>
                            <p>
                              We always ensure that it combines a clean <br />
                              and beautiful visual design.
                            </p>
                            <div className="service-content-tag">
                              <span className="me-2">UI/UX Audit</span>
                              <span>Workshops</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="stack__card">
                      <div className="service-item d-flex align-items-start mb-25 services-panel">
                        <div className="service-icon">
                          <span>
                            <img src="" alt="" />
                          </span>
                          <div className="service-content">
                            <h3 className="service-content-title">
                              Design <br /> Strategy
                            </h3>
                            <p>
                              We always ensure that it combines a clean <br />
                              and beautiful visual design.
                            </p>
                            <div className="service-content-tag">
                              <span className="me-2">UI/UX Audit</span>
                              <span>Workshops</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="stack__card">
                      <div className="service-item d-flex align-items-start mb-25 services-panel">
                        <div className="service-icon">
                          <span>
                            <img src="" alt="" />
                          </span>
                          <div className="service-content">
                            <h3 className="service-content-title">
                              Design <br /> Strategy
                            </h3>
                            <p>
                              We always ensure that it combines a clean <br />
                              and beautiful visual design.
                            </p>
                            <div className="service-content-tag">
                              <span className="me-2">UI/UX Audit</span>
                              <span>Workshops</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="service-btn-box">
                      <a href="#">
                        Call me to get more extra service
                        <span>Call Now</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="project-area position-relative black-bg-3"
            style={{ paddingTop: "110px" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div
                    className="project-title-box text-center"
                    style={{ paddingBottom: "30px" }}
                  >
                    <h3 className="section-title">Featured Projects</h3>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="stack_card">
                    <img src="/assets/portfolio-1.jpg" alt="" />
                  </div>
                  <div className="stack_card">
                    <img src="/assets/portfolio-2.jpg" alt="" />
                  </div>
                  <div className="stack_card">
                    <img src="/assets/portfolio-3.jpg" alt="" />
                  </div>
                  <div className="stack_card">
                    <img src="/assets/portfolio-4.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="blog-area black-bg-3 pt-320 pb-50 fix"
            style={{ paddingTop: "150px", paddingBottom: "50px" }}
          >
            <div className="container">
              <div
                className="blog-title-wrap "
                style={{ marginBottom: "60px" }}
              >
                <div className="row align-items-end">
                  <div className="col-xl-6 col-lg-8 col-md-8">
                    <div className="blog-title-box">
                      <h4 className="section-title">
                        Articles & <br />
                        Publications
                      </h4>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-4 col-md-4 ">
                    <div className="blog-btn text-start text-md-end">
                      <div
                        className="text-start text-md-end"
                        style={{
                          width: "250px",
                          transform: " translate(300px, 0px)",
                        }}
                      >
                        <a className="btn-blue text-start text-md-end" href="#">
                          <span className="text">View Our Work</span>
                          <span>
                            <TbArrowDownRight />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row gx-50">
                <div className="col-xl-6">
                  <div className="blog-item" style={{ marginBottom: "70px" }}>
                    <div className="blog-content">
                      <h4 className="blog-content-title">
                        <a href="#">
                          16 witty tips to get <br />
                          six-figure clients on Dribbble
                        </a>
                      </h4>
                      <div
                        className="d-flex align-items-center justify-content-between"
                        style={{ marginBottom: "30px" }}
                      >
                        <div className="blog-category">
                          <span>Branding</span>
                        </div>
                        <div className="blog-meta">
                          <span>October 3, 2024</span>
                          <span>7 min read</span>
                        </div>
                      </div>
                    </div>
                    <div className="blog-thumb">
                      <a href="#">
                        <img src="/assets/blog-3-1.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="blog-item" style={{ marginBottom: "70px" }}>
                    <div className="blog-content">
                      <h4 className="blog-content-title">
                        <a href="#">
                          Bluwalk redesign: sign-up <br />
                          rate increased twice and counting
                        </a>
                      </h4>
                      <div
                        className="d-flex align-items-center justify-content-between"
                        style={{ marginBottom: "30px" }}
                      >
                        <div className="blog-category">
                          <span>Branding</span>
                        </div>
                        <div className="blog-meta">
                          <span>November 4, 2024</span>
                          <span>7 min read</span>
                        </div>
                      </div>
                    </div>
                    <div className="blog-thumb">
                      <a href="#">
                        <img src="/assets/blog-3-2.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <HomeFooter />
      </div>
    </>
  );
};

export default MainPage;
