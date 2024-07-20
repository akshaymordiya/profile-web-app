import React from "react";

//components
import IMG from "@/app/components/IMG";
import Grid from "@/app/components/Grid";
import AnimatedCharactors from "@/app/components/AnimatedCharactors";
import Animation from '@/app/components/Animation';
import CTA from "@/app/components/CTA";

//data
import techWork from "../../../../../../public/assets/lottie/browser.json"

import { renderIconComponent } from "@/Icons";
import "./index.scss";

const BASE_CLASSNAME = "about_hero_container";

const Hero = ({
  data = {}
}) => {

  const {
    words,
    resume,
    icons,
    images,
    shapes
  } = data

  return (
    <div className={BASE_CLASSNAME}>
      <IMG
        src={shapes.one.src}
        useContainer
        containerClasses={shapes.one.class}
        alt={shapes.one.alt}
        useRawImgTag
      />
      <Grid classNames={`${BASE_CLASSNAME}_grid
      `}>
        <Grid.Item
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xlg={6}
          itemClass="about_content"
          data-speed="0.5"
        >
          {words.map((word) => (
            <AnimatedCharactors
              key={word}
              leftSpaceOnLastCharactor
              charactors={word}
              wrapperClass="animated-letter"
            />
          ))}
          <br />
          <CTA
            btn_color="btn-border-sm"
            linkText="Download CV"
            linkClass="btn-border-sm"
            icon={renderIconComponent(icons.download, true)}
            linkHref={resume}
            isDownload
          />
        </Grid.Item>
        <Grid.Item
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xlg={6}
          itemClass="about_image"
          data-speed="0.5"
        >
          <Animation 
            animationData={techWork}
            loop
            autoplay
            className='lottie_animation-browser'
          />
        </Grid.Item>
      </Grid>
    </div>
  );
};

export default Hero;