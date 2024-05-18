import React from 'react';

import "./index.scss";

const Services = () => {
  return (
    <section
        id="services"
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
                <span className="section-subtitle">
                    OUR PROCESS
                </span>
                <h3 className="section-title">
                  
                    How We
                  <br />
                    Carry Out Our 
                    <br />
                    Projects
                </h3>
                <p>
                    We offer a range of services to help elevate <br />
                    your brand & drive results.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7">
            <div className="service-right-wrap">
              <div className="stack__card justify-content-md-center justify-content-start">
                <div className="service-item d-flex align-items-start services-panel" style={{marginBottom:"25px"}} >
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
              <div className="stack__card justify-content-md-center justify-content-start">
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
              <div className="stack__card justify-content-md-center justify-content-start">
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
    </section>
  )
}

export default Services