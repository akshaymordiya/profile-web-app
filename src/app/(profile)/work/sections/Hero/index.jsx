import React from "react";
import SectionBox from "@/app/components/SectionBox";
import WorkSilder from "./Client/WorkSlider";
import Grid from "@/app/components/Grid";
//data json
import work from "../../../../../data/work.page.json";
//style scss
import "./index.scss";

const Hero = () => {
  const BASE_CLASSNAME = "porfolio-area";
  return (
    <>
      <div className="porfolio-slider-area">
        <div className="porfolio-overlay">
          <div className="porfolio-text-1">
            <SectionBox
              containerClass="porfolio-slider-title"
              title={work.hero.title}
            />
          </div>
          <WorkSilder />
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
