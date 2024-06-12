"use client";
import React from "react";
import Slider from "react-slick";
import Grid from "@/app/components/Grid";
import IMG from "@/app/components/IMG";
//style scss
import "./index.scss";

const ResponsiveSlider = ({ content: { slider1, slider2 } }) => {
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
    <>
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
            {slider1.map((item) => (
              <IMG src={item?.slide} useRawImgTag />
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
            {slider2.map((item) => (
              <IMG src={item?.slide} useRawImgTag />
            ))}
          </Slider>
        </Grid.Item>
      </Grid>
    </>
  );
};

export default ResponsiveSlider;
