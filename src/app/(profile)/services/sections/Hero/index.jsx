
import React from "react";
import Grid from "@/app/components/Grid";
import SectionBox from "@/app/components/SectionBox";
import InnerServiceList from "./InnerServiceList";
import ResponsiveSlider from "./Client/Slider";
// data json
import service from "../../../../../data/service.page.json";
//aos animation 
import Aos from "@/app/components/AOS";
import 'aos/dist/aos.css'
// style scss
import './index.scss';



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
            <SectionBox
              containerClass="inner-slider-title"
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
