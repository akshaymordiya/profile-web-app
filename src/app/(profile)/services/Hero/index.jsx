import Grid from "@/app/components/Grid";
import SectionTitle from "@/app/components/SectionTitle";
import React from "react";
import InnerServiceList from "./InnerServiceList";
import service from "../../../../data/service.page.json";
import Aos from "@/app/components/AOS";
import 'aos/dist/aos.css'
import ResponsiveSlider from "@/app/components/Slider";

const Hero = () => {
  const BASE_CLASSNAME = "services-container";
  return (
    <>
    <Aos />
      <Grid classNames={`${BASE_CLASSNAME} inner-slider-area`}>
        <Grid.Item
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xlg={6}
          itemClass="inner-slider-content-main"
          data-speed="0.5"
        >
          <div className="inner-slider-content-wrap">
            <SectionTitle
              animationName="flip-up"
              animationduration="2000"
              animationdelay="300"
              interClass="inner-slider-title"
              title={service.hero.title}
            />
            {service.hero.servicelist.map((item, index) => (
              <InnerServiceList
                key={index}
                animationName= "fade-up"
                animationduration= "2000"
                animationdelay={item?.animationdelay}
                listclass={item?.listclass}
                listName={item?.listName}
              />
            ))}
          </div>
        </Grid.Item>
        <Grid.Item
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xlg={6}
          itemClass="inner-slider-main"
          data-speed="0.5"
        >
          <ResponsiveSlider />
        </Grid.Item>
      </Grid>
    </>
  );
};

export default Hero;
