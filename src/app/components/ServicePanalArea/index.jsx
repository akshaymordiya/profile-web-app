import React from "react";
import Shapes from "../Shapes";
import "./index.scss";
import ServiceCard from "../ServiceCard";
import Aos from "../AOS/aos";
import SectionBox from "../SectionBox";

const ServicePanalArea = () => {
  return (
    <>
      <Aos />
      <div
        id="service"
        className="service-area services-panel-area service-overlay-bg black-bg-2 position-relative z-index-1"
        style={{ paddingTop: "150px", paddingBottom: "125px" }}
      >
        <Shapes />
        <div className="container position-sticky">
          <div className="row">
            <div className="col-xl-5 col-lg-5 ">
              <div className="stack_card">
                <div className="service-title-box services-panel-pin">
                  <span
                    className="section-subtitle"
                    data-aos="flip-up"
                    data-aos-duration="800"
                  >
                    OUR PROCESS
                  </span>
                  <SectionBox
                    containerClass="section-title"
                    title="How We Carry Out Our Projects"
                  >
                    <p>We offer a range of services to help elevate your brand & drive results.</p>
                  </SectionBox>
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
