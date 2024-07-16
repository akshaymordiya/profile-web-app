"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Ratings from "@/app/components/Ratings";
import IMG from "@/app/components/IMG";

import './index.scss';

const BASE_CLASSNAME = "testimonial-slider-container";

const settings = {
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
};

const SlideNav = ({
  data
}) => {
  return (
    <div className={BASE_CLASSNAME}>
      <Slider 
        {...settings}
      >
        {data.map((feedback,index) => {
          return (
            <div key={index} className={`${BASE_CLASSNAME}_item`}>
              <div className="quote_img">
                <img src={feedback.images.quote} />
              </div>
              <div className={`${BASE_CLASSNAME}_item_content`}>
                <Ratings 
                  ratings={feedback.ratings}
                >
                  <p className="rating_text">{feedback.ratings} Ratings</p>
                </Ratings>
                <p className="text">
                  "{feedback.feedback}"
                </p>
              </div>
              <div className={`${BASE_CLASSNAME}_item_user`}>
                <div className="details">
                  <h4>{feedback.author.name}</h4>{feedback.author.position !== "" && (
                    <p>{feedback.author.position} at <span>{feedback.author.company}</span></p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SlideNav;
