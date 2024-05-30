import React from "react";
import SectionTitle from "@/app/components/SectionTitle";
import WorkSilder from "./Client/WorkSlider";
import work from '../../../../data/work.page.json'
import Grid from "@/app/components/Grid";

const Hero = () => {
    const BASE_CLASSNAME = "porfolio-area";
  return (
    <>
    
      <div className="porfolio-slider-area">
        <div className="container-fluid">
          <div className="row">
            <div className="porfolio-overlay">
              <div className="porfolio-text-1">
                <SectionTitle
                  interClass="porfolio-slider-title"
                  animationName="flip-up"
                  title={work.hero.title}
                  animationduration="2000"
                  animationdelay="300"
                />
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
          <p>{work.projectTitle}</p>
          <p>{work.projectTitle}</p>
        </Grid.Item>
      </Grid>
   
    </>
  );
};

export default Hero;
