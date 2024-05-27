"use client";
import React, { useEffect } from "react";
import { CountUp } from "countup.js";
import "./index.scss";

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
  const data = [
    {
      countnumber: "56",
      countext: " Projects \n Completed",
    },
    {
      countnumber: "12",
      countext: "Years \n Of Experience",
    },
    {
      countnumber: "34",
      countext: "Client \n Satisfaction",
    },
  ];

  return (
    <>
      {data.map((item, index) => {
        return (
          <div key={index} className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-4">
            <div className="funfact-item space-left-1">
              <div className="funfact-number">
                <span className="purecounter counter-item text-center">
                  <div className="d-flex align-items-center justify-content-center ">
                    <strong id={`count${index + 1}`}>{item?.countnumber}</strong>
                    <span></span>
                  </div>
                </span>
              </div>
              <div className="funfact-content">
                <h4 className="funfact-title">
                 {item?.countext}
                </h4>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Counter;
