import React from "react";
import Grid from "@/app/components/Grid";
import SectionBox from "@/app/components/SectionBox";
import InnerServiceList from "./InnerServiceList";
import ResponsiveSlider from "./Client/Slider";

// style scss
import './index.scss';

const BASE_CLASSNAME = "services_hero-container";

const Hero = ({
  data = {}
}) => {

  return (
    <Grid classNames={`${BASE_CLASSNAME}`}>
      <Grid.Item
        xs={12}
        sm={12}
        md={12}
        lg={6}
        xlg={6}
        itemClass={`${BASE_CLASSNAME}_col-1`}
      >
        <div className={`${BASE_CLASSNAME}_col-1-box`}>
          <SectionBox
            containerClass="title"
            title={data.title}
          >
            {data.services.map((service, index) => (
            <InnerServiceList
              key={index}
              listItemClass={`list-${index + 1}`}
              animationName= "slideInLeft"
              animationduration= "2"
              animationdelay={service?.animationdelay}
              listName={service?.listName}
            />
          ))}
          </SectionBox>
        </div>
      </Grid.Item>
      <Grid.Item
        xs={12}
        sm={12}
        md={12}
        lg={6}
        xlg={6}
        itemClass={`${BASE_CLASSNAME}_col-2`}
      >
        <ResponsiveSlider content={data.slider} />
      </Grid.Item>
    </Grid>
  );
};

export default Hero;
