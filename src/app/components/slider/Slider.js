"use client";
import React from "react";
import Slider from "react-slick";

const ResponsiveSlider = () => {
  const settings = {
    loop:true,
    autoplay: true,
    arrows: false,
    centerPadding: "10px",
    touchMove: false,
    vertical: true,
    verticalScrolling: true,
    cssEase: "linear",
    speed:5000,
    autoplaySpeed:5000,
    dots: false,
    infinite: true
  };
  return (
    <>
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6">
          <div className="slick-slider inner-slider-active-1 slick-vertical">
            <Slider {...settings}>
              <div>
                <img src="/assets/services-slider-1.jpg" />
              </div>
              <div>
                <img src="/assets/services-slider-2.jpg" />
              </div>
            </Slider>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6">
          <div className="slick-slider inner-slider-active-2 slick-vertical">
            <Slider {...settings}>
              <div>
                <img src="/assets/services-slider-3.jpg" />
              </div>
              <div>
                <img src="/assets/services-slider-4.jpg" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResponsiveSlider;
