import React from "react";
import Grid from "@/app/components/Grid";
import SectionBox from "@/app/components/SectionBox";
import InnerServiceList from "./InnerServiceList";
import ResponsiveSlider from "./Client/Slider";
// style scss
import "./index.scss";
import Fade from "@/app/components/Fade";

const Hero = ({ data = {} }) => {
  const { slider } = data;
  const BASE_CLASSNAME = "services-container";
  return (
    <>
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
            <Fade animationType="slideInBottom" delay={200}>
              <SectionBox itemClass="inner-slider-title" title={data.title} />
            </Fade>

            {data.servicelist.map((item, index) => (
              <Fade animationType="slideInBottom" delay={index * 300}>
                <InnerServiceList
                  key={index}
                  listclass={item?.listclass}
                  listName={item?.listName}
                />
              </Fade>
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
          <ResponsiveSlider content={slider} />
        </Grid.Item>
      </Grid>
    </>
  );
};

export default Hero;
