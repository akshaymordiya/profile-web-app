import React from "react";
import AnimatedCharactors from "@/app/components/AnimatedCharactors";
import CTA from "@/app/components/CTA";
import IMG from "@/app/components/IMG";
import Grid from "@/app/components/Grid";
//Data JSON
import about from '../../../../../data/about.page.json';
//Render Icon
import { renderIconComponent } from "@/Icons";
//style scss
import './index.scss';

const Hero = () => {
  const BASE_CLASSNAME = "grid-container";
  return (
    <>
      <div className="services-area">
        <IMG
          src="/assets/hero-shape-2-1.png"
          useContainer
          containerClasses={"services-shape-1"}
          alt="service_shape"
          useRawImgTag
        />
        <div className="about-content-wrapper">
          <Grid classNames={`${BASE_CLASSNAME}_grid`}>
            <Grid.Item
              xs={12}
              sm={12}
              md={12}
              lg={6}
              xlg={6}
              itemClass="service__title"
              data-speed="0.5"
            >
              {(about.hero.name ?? []).map((hero) => (
                <AnimatedCharactors
                  key={hero}
                  leftSpaceOnLastCharactor
                  charactors={hero}
                  wrapperClass="animated-letter"
                />
              ))}
              <br />
              <CTA
                btn_color="btn-border-sm"
                linkText="Download CV"
                linkClass="btn-border-sm"
                icon={renderIconComponent(about.hero.icons.download, true)}
              />
            </Grid.Item>
            <Grid.Item
              xs={12}
              sm={12}
              md={12}
              lg={6}
              xlg={6}
              itemClass="service-right-box"
              data-speed="0.5"
            >
              {(about.hero.images ?? []).map((hero) => (
                <IMG
                  key={hero}
                  src={hero?.src}
                  useContainer
                  useRawImgTag
                  containerClasses={hero?.containerclass}
                  alt={hero?.alt}
                />
              ))}
            </Grid.Item>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Hero;
