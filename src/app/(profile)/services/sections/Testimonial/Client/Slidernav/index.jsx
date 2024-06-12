"use client";
import React from "react";
import Rating from "@mui/material/Rating";
import Slider from "react-slick";
import Grid from "@/app/components/Grid";
//style  scss
import "./index.scss";
import Link from "next/link";

const SlideNav = ({ content: { testimonial, testimonilafeedback } }) => {
  // const [nav1, setNav1] = useState(null);
  // const [nav2, setNav2] = useState(null);
  // let sliderRef1 = useRef(null);
  // let sliderRef2 = useRef(null);

  // useEffect(() => {
  //   setNav1(sliderRef1);
  //   setNav2(sliderRef2);
  // }, []);
  const nav1Settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
          itemClass="testimonial-slider"
          data-speed="0.5"
        >
          <Slider {...nav1Settings}>
            {testimonilafeedback?.map((item, index) => {
              return (
                <div key={index} className="testimonial-item">
                  <div className="testimonial-item-top">
                    <div className="testimonial-quote">
                      <img src={item?.img} />
                    </div>
                    <div className="testimonial-user-item">
                      <div className="testimonial-user-thumb">
                        <img src={item?.image} alt="avtar-image" />
                      </div>
                      <div className="testimonial-user-content">
                        <h3 className="testimonial-user-title">
                          {item?.title}
                        </h3>
                        <span className="testimonial-user-designation">
                          {item?.position}
                          <Link href="#">{item?.passion}</Link>
                        </span>
                      </div>
                      <div
                        className="testimonial-user-border"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="testimonial-rating">
                    <Rating
                      name="half-rating-read"
                      defaultValue={item?.Rating.min}
                      precision={item?.Rating.max}
                      readOnly
                    />
                  </div>
                  {/* <p>{item?.feedback}</p> */}

                  <div className="testimonial-content">
                    <p>{item?.description}</p>
                  </div>
                </div>
              );
            })}
          </Slider>
          {/* <Slider asNavFor={nav2} ref={(slider) => (sliderRef1 = slider)}>
            {testimonilafeedback?.map((item,index) => {
              return (
                <div key={index} className="testimonial-item">
                  <div className="testimonial-quote">
                    <img src={item?.img} />
                  </div>
                  <div className="testimonial-item-top">
                    <div className="testimonial-rating">
                      <Rating
                        name="half-rating-read"
                        defaultValue={item?.Rating.min}
                        precision={item?.Rating.max}
                        readOnly
                      />
                    </div>
                    <p>{item?.feedback}</p>
                  </div>
                  <div className="testimonial-content">
                    <p>
                     {item?.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
          <Slider
          {...nav1Settings}
            asNavFor={nav1}
            ref={(slider) => (sliderRef2 = slider)}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
          >
            {testimonial?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="testimonial-user-item"
                >
                  <div className="testimonial-user-thumb">
                    <img src={item?.image} alt="avtar-image" />
                  </div>
                  <div className="testimonial-user-content">
                    <h3 className="testimonial-user-title">{item?.title}</h3>
                    <span className="testimonial-user-designation">
                      {item?.position}
                      <Link href="#">{item?.passion}</Link>
                    </span>
                  </div>
                  <div
                    className="testimonial-user-border"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              );
            })}
          </Slider> */}
        </Grid.Item>
      </Grid>
    </>
  );
};

export default SlideNav;
