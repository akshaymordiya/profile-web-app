import React from "react";
import SectionBox from "@/app/components/SectionBox";
import WorkSilder from "./Client/WorkSlider";
import Grid from "@/app/components/Grid";

//style scss
import "./index.scss";

const Hero = ({ data = {} }) => {
  const BASE_CLASSNAME = "porfolio_area";
  const { content } = data;
  return (
    <>
      <Grid classNames={`${BASE_CLASSNAME}_wrapper`}>
        <Grid.Item
          xs={12}
          sm={12}
          lg={12}
          md={12}
          xlg={12}
          itemClass="porfolio-overlay"
          data-speed="0.5"
        >
          <div className="porfolio-text-1">
            <SectionBox
              containerClass="porfolio-slider-title"
              title={data.title}
            />
          </div>
          <WorkSilder content={content} />
        </Grid.Item>
      </Grid>
      <Grid classNames={`${BASE_CLASSNAME}_projectlist`}>
        <Grid.Item
          xs={12}
          sm={12}
          lg={12}
          md={12}
          xlg={12}
          itemClass="portfolio-list-text"
          data-speed="0.5"
        >
          <p>{data.projectTitle}</p>
          <p>{data.projectTitle}</p>
        </Grid.Item>
      </Grid>
    </>
  );
};

export default Hero;
