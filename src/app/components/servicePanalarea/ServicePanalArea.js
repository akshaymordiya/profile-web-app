import React from "react";
import Shape1 from "../shape1/Shape1";

const ServicePanalArea = () => {
  return (
    <>
      <div
        // ref={secondSectionRef}
        id="service"
        className="service-area services-panel-area service-overlay-bg black-bg-2 z-index-1"
        style={{ paddingTop: "150px", paddingBottom: "125px" }}
      >
        <Shape1 />
        <div className="container position-sticky">
          <div className="row">
            <div className="col-xl-5 col-lg-5 ">
              <div className="stack__card">
                <div className="service-title-box services-panel-pin">
                  <span className="section-subtitle">OUR PROCESS</span>
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
                  <div
                    className="service-item d-flex align-items-start services-panel"
                    style={{ marginBottom: "25px" }}
                  >
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
      </div>
    </>
  );
};

export default ServicePanalArea;
