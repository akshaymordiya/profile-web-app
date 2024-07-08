"use client";
import React from "react";
import Slider from "react-slick";
import IMG from "@/app/components/IMG";

//style css
import './index.scss';

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

const BASE_CLASSNAME = 'hero_slider'

const WorkSilder = ({content :{slider}}) => {
  
  return (
    <div className={BASE_CLASSNAME}>
      <Slider {...settings}>
        {slider.map((item, index) => (
          <IMG
            key={index}
            src={item?.slide}
            useContainer
            useRawImgTag
            containerClasses={`${BASE_CLASSNAME}_img_thumb`}
          />
        ))}
      </Slider>
    </div>
  );
};

export default WorkSilder;
