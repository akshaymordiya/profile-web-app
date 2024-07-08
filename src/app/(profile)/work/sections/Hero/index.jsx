import React from "react";
import SectionBox from "@/app/components/SectionBox";
import WorkSilder from "./Client/WorkSlider";
import Grid from "@/app/components/Grid";
import Fade from "@/app/components/Fade";

//style scss
import "./index.scss";
import ParallaxScroll from "@/app/components/ParallaxScroll";

const BASE_CLASSNAME = "work_hero_container";

const Hero = ({ data = {} }) => {
  const { content } = data;
  return (
    <React.Fragment>
      <div className={BASE_CLASSNAME}>
        <WorkSilder content={content} />
        <Fade animationType="flipX"
          delay={200}
          >
          <SectionBox
            itemClass={`${BASE_CLASSNAME}_title`}
            title={data.title}
          />
        </Fade>
      </div>
      <div className="parallax_text_container">
        <ParallaxScroll speed={0.5} direction="x">   
          <div className={`text`}>
            <p>{data.projectTitle}</p>
            <p>{data.projectTitle}</p>
          </div>
        </ParallaxScroll>
      </div>
    </React.Fragment>
  );
};

export default Hero;
