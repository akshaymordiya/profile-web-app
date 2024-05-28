"use client";
import React, { useEffect } from "react";
import { CountUp } from "countup.js";
import "./index.scss";
import Aos from "../AOS";
import "aos/dist/aos.css";
import about from '../../../data/about.page.json'

const Counter = () => {
  useEffect(() => {
    const count1 = new CountUp("count1", 56);
    const count2 = new CountUp("count2", 12);
    const count3 = new CountUp("count3", 34);

    if (count1.error && count2.error && count3.error) {
      console.warn(error);
    } else {
      count1.start();
      count2.start();
      count3.start();
    }
  }, []);

  return (
    <>
      <Aos />
      <div className="funfact-area">
        <div className="container">
          <div className="row">
            {about.counter.map((item, index) => {
              return (
                <div
                  key={index}
                  className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-4"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-delay="300"
                >
                  <div className="funfact-item space-left-1">
                    <div className="funfact-number">
                      <span>
                        <div className="counter-item">
                          <strong id={`count${index + 1}`}>
                            {item?.countnumber}
                          </strong>
                          <span></span>
                        </div>
                      </span>
                    </div>
                    <div className="funfact-content">
                      <h4 className="funfact-title">{item?.countext}</h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
