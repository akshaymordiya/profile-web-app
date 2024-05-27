import Navbar from "@/app/components/Navbar";
import React from "react";
import "./page.scss";
import WorkSilder from "@/app/components/WorkSlider";
import WorkItem from "@/app/components/WorkItem";
import BrandButton from "@/app/components/Brand";
import FooterService from "@/app/components/Footerservice";
import CustomCursor from "@/app/components/MouseCursor";
import Grid from "@/app/components/Grid";
import Aos from "@/app/components/AOS";
import 'aos/dist/aos.css';

//TODO:: The child page of work route
const Work = () => {
  const BASE_CLASSNAME = "porfolio-area";
  return (
    <>
    <Aos />
      <Navbar />
      <div
        className="porfolio-slider-area porfolio-ptb position-relative fix"
        style={{ paddingTop: "140px" }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="porfolio-overlay">
              <div className="porfolio-text-1">
                <h4 className="porfolio-slider-title"  data-aos="flip-up" data-aos-duration="2000" data-aos-delay="300">
                  Award-Winning Projects <br /> Design & Dev.
                </h4>
              </div>
              <WorkSilder />
            </div>
          </div>
        </div>
      </div>
      <Grid classNames={`${BASE_CLASSNAME}-wrapper`}>
        <Grid.Item
          xs={12}
          sm={12}
          lg={12}
          md={12}
          xlg={12}
          itemClass="portfolio-list-text"
          data-speed="0.5"
        >
          <p>Latest Project</p>
          <p>Latest Project</p>
        </Grid.Item>
      </Grid>
      <WorkItem />
      <BrandButton />
      <FooterService />
      <CustomCursor />
    </>
  );
};

export default Work;
