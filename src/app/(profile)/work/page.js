import Navbar from "@/app/components/Navbar";
import React from "react";
import "./page.scss";
import WorkSilder from "@/app/components/WorkSlider/WorSlider";
import WorkItem from "@/app/components/WorkItem/WorkItem";
import BrandButton from "@/app/components/Brand/BrandButton";
import FooterService from "@/app/components/footerservice/FooterService";
import CustomCursor from "@/app/components/MouseCursor/MouseCursor";

//TODO:: The child page of work route
const Work = () => {
  return (
    <>
      <Navbar />
      <div
        className="porfolio-slider-area porfolio-ptb position-relative fix"
        style={{ paddingTop: "140px" }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="porfolio-overlay">
              <div className="porfolio-text-1">
                <h4 className="porfolio-slider-title">
                  Award-Winning Projects <br /> Design & Dev.
                </h4>
              </div>
              <WorkSilder />
            </div>
          </div>
        </div>
      </div>
      <div
        className="porfolio-wrapper portfolio-effect portfolio-list-scroll-text-animation position-relative fix"
        style={{ paddingTop: "80px", paddingBottom: "50px" }}
      >
        <div
          className="portfolio-list-text text-end d-flex align-items-center"
          style={{ paddingBottom: "80px" }}
        >
          <p>Latest Project</p>
          <p>Latest Project</p>
        </div>
      </div>
      <WorkItem />
      <BrandButton />
      <FooterService />
      <CustomCursor />
    </>
  );
};

export default Work;
