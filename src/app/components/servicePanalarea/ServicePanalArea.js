import React from "react";
import Shape1 from "../shape1/Shape1";
import './panalarea.scss'
import ServiceCard from "../servicecard/ServiceCard";

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
              <div className="stack_card">
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
            <ServiceCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePanalArea;
