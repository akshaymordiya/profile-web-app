import React from "react";

//components
import IMG from "@/app/components/IMG";
import Grid from "@/app/components/Grid";
import AnimatedCharactors from "@/app/components/AnimatedCharactors";
import CTA from "@/app/components/CTA";

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
          {images.map((img) => (
            <IMG
              key={img.src}
              src={img.src}
              useContainer
              useRawImgTag
              containerClasses={img.class}
              alt={img.alt}
            />
          ))}
        </Grid.Item>
      </Grid>
    </div>
  );
};

export default Hero;