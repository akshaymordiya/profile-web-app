"use client";
import React from "react";
import Slider from "react-slick";
import Grid from "../Grid";

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
    <>
      <Grid>
        <Grid.Item
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xlg={6}
          itemClass="inner-slider-active-1"
          data-speed="0.5"
        >
          <Slider {...settings}>
            <div>
              <img src="/assets/services-slider-1.jpg" />
            </div>
            <div>
              <img src="/assets/services-slider-2.jpg" />
            </div>
          </Slider>
        </Grid.Item>
        <Grid.Item
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xlg={6}
          itemClass="inner-slider-active-2"
          data-speed="0.5"
        >
          <Slider {...settings}>
            <div>
              <img src="/assets/services-slider-3.jpg" />
            </div>
            <div>
              <img src="/assets/services-slider-4.jpg" />
            </div>
          </Slider>
        </Grid.Item>
      </Grid>
    </>
  );
};

export default ResponsiveSlider;
