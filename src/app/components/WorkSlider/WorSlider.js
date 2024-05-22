"use client";
import React from "react";
import Slider from "react-slick";

const WorkSilder = () => {
  const settings = {
    loop:true,
    autoplay: true,
    arrows: false,
    centerPadding: "10px",
    touchMove: false,
    cssEase: "linear",
    speed:5000,
    autoplaySpeed:5000,
    dots: false,
    infinite: true,
    slidesToShow: 3,
  };
  return (
    <>
      <div className="row">
        <div className="col-xl-12">
          <div className="slick-slider porfolio-slider-active">
            <Slider {...settings}>
              <div className="porfolio-thumb">
                <img src="/assets/port-inner-1.jpg"/>
              </div>
              <div className="porfolio-thumb" >
                <img src="/assets/port-inner-2.jpg"/>
              </div>
              <div className="porfolio-thumb" >
                <img src="/assets/port-inner-3.jpg"/>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkSilder;
