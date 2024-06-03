"use client";
import React from "react";
import Slider from "react-slick";
import work from '../../../../../../data/work.page.json'
import Grid from "@/app/components/Grid";
import IMG from "@/app/components/IMG";

const WorkSilder = () => {
  const settings = {
    loop: true,
    autoplay: true,
    arrows: false,
    centerPadding: "10px",
    touchMove: false,
    cssEase: "linear",
    speed: 5000,
    autoplaySpeed: 5000,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Grid>
        <Grid.Item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xlg={12}
          itemClass="porfolio-slider-active"
        >
          <Slider {...settings}>
            {work.hero.slider.map((item) => (
              <IMG
                src={item?.slide}
                useContainer
                useRawImgTag
                containerClasses="porfolio-thumb"
              />
            ))}
          </Slider>
        </Grid.Item>
      </Grid>
    </>
  );
};

export default WorkSilder;
