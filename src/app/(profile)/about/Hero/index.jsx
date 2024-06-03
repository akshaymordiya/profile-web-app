import React from "react";
import IMG from "../../../components/IMG";
import Grid from "../../../components/Grid";
import AnimatedCharactors from "../../../components/AnimatedCharactors";
import CTA from "../../../components/CTA";
import about from '../../../../data/about.page.json';
import { renderIconComponent } from "@/Icons";

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
        <div className="container">
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
