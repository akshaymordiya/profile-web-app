"use client";
import React, { useEffect, useRef, useState } from "react";
import Rating from "@mui/material/Rating";
import Slider from "react-slick";
import Grid from "../Grid";

const SlideNav = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  const repetitions = 4;
  const sliderepest = Array(repetitions).fill(null);

  const data = [
    {
      id: 1,
      title: "Rudra Ghosh",
      position: "Founder & CEO at",
      passion: " Dulalix",
      image: "/assets/avata-1.png",
    },
    {
      id: 2,
      title: "Albert Flores",
      position: "Marketing Officer at",
      passion: " Google Inc",
      image: "/assets/avata-2.png",
    },
    {
      id: 3,
      title: "Robert Henricks",
      position: "UI/UX Designer",
      passion: " Webflow",
      image: "/assets/avata-3.png",
    },
    {
      id: 4,
      title: "Flores Flores",
      position: "Founder & CEO at",
      passion: "Dribblr",
      image: "/assets/user-1.jpg",
    },
  ];
  return (
    <>
      <Grid>
        <Grid.Item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xlg={12}
          itemClass="testimonial-slider"
          data-speed="0.5"
        >
          <Slider asNavFor={nav2} ref={(slider) => (sliderRef1 = slider)}>
            {sliderepest.map((index) => {
              return (
                <div key={index} className="testimonial-item">
                  <div className="testimonial-quote">
                    <img src="/assets/quote.svg" />
                  </div>
                  <div className="testimonial-item-top d-flex align-items-center">
                    <div className="testimonial-rating">
                      <Rating
                        name="half-rating-read"
                        defaultValue={5}
                        precision={5}
                        readOnly
                      />
                    </div>
                    <p>5.0 Rating</p>
                  </div>
                  <div className="testimonial-content">
                    <p>
                      "Will gave our website and brand whole new life while
                      staying true to who we are. We would never have thought of
                      going in the direction he pitched but we couldn't be
                      happier."
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
          <Slider
            asNavFor={nav1}
            ref={(slider) => (sliderRef2 = slider)}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
          >
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="testimonial-user-item d-flex justify-content-center align-items-center"
                >
                  <div className="testimonial-user-thumb">
                    <img src={item?.image} alt="avtar-image" />
                  </div>
                  <div className="testimonial-user-content">
                    <h3 className="testimonial-user-title">{item?.title}</h3>
                    <span className="testimonial-user-designation">
                      {item?.position}
                      <a href="#">{item?.passion}</a>
                    </span>
                  </div>
                  <div
                    className="testimonial-user-border"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              );
            })}
          </Slider>
        </Grid.Item>
      </Grid>
    </>
  );
};

export default SlideNav;
