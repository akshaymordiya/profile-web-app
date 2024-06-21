"use client";
import React from "react";
import Slider from "react-slick";
import Grid from "@/app/components/Grid";
//data json
import service from "../../../../../../../data/service.page.json";
//style scss
import './index.scss';

const ResponsiveSlider = () => {
  const settings = {
    loop: true,
    autoplay: true,
    arrows: false,
    centerPadding: "10px",
    touchMove: false,
    vertical: true,
    verticalScrolling: true,
    cssEase: "linear",
    speed: 5000,
    autoplaySpeed: 5000,
    dots: false,
    infinite: true,
  };
  return (
    <Grid>
      <Grid.Item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xlg={6}
        itemClass="inner-slider-active-1"
        data-speed="0.5"
      >
        <Slider {...settings}>
          {service.hero.slider.slider1.map((item) => (
            <img src={item?.slide} useRawImgTag />
          ))}
        </Slider>
      </Grid.Item>
      <Grid.Item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xlg={6}
        itemClass="inner-slider-active-2"
        data-speed="0.5"
      >
        <Slider {...settings}>
          {service.hero.slider.slider2.map((item) => (
            <img src={item?.slide} useRawImgTag />
          ))}
        </Slider>
      </Grid.Item>
    </Grid>
  );
};

export default ResponsiveSlider;
