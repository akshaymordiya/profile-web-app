'use client'
import React, { useEffect } from "react";
import { CountUp } from "countup.js";
import "./counter.scss";

const Counter = () => {
  useEffect(() => {
    const count1 = new CountUp("count1", 56);
    const count2 = new CountUp("count2", 12);
    const count3 = new CountUp("count3", 34);

    if(count1.error && count2.error && count3.error ){
        console.warn(error)
    }else{
        count1.start();
        count2.start();
        count3.start();
    }
  }, []);

  return (
    <>
      <div
            className="funfact-area funfact-plr z-index-1 position-relative fix"
            style={{ paddingTop: "110px", paddingBottom: "60px" }}
          >
            <div className="funfact-bg funfact-overlay">
              <div
                className="funfact-bg-item"
                style={{ backgroundImage: "url(/assets/funfact-bg-1-2.jpg)" }}
              ></div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 mb-40">
                  <div className="funfact-item space-left-1">
                    <div className="funfact-number">
                      <span className="purecounter counter-item text-center">
                        <div className="d-flex align-items-center justify-content-center ">
                         <strong id="count1">56</strong>
                          <span></span>
                        </div>
                      </span>
                    </div>
                    <div className="funfact-content">
                      <h4 className="funfact-title">
                        Projects <br /> Completed
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 mb-40">
                  <div className="funfact-item space-left-1">
                    <div className="funfact-number">
                      <span className="purecounter counter-item text-center">
                        <div className="d-flex align-items-center justify-content-center ">
                          <strong id="count2">12</strong>
                          <span></span>
                        </div>
                      </span>
                    </div>
                    <div className="funfact-content">
                      <h4 className="funfact-title">
                        Years <br /> Of Experience
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 mb-40">
                  <div className="funfact-item space-left-1">
                    <div className="funfact-number">
                      <span className="purecounter counter-item text-center">
                        <div className="d-flex align-items-center justify-content-center ">
                          <strong id="count3">34</strong>
                          <span></span>
                        </div>
                      </span>
                    </div>
                    <div className="funfact-content">
                      <h4 className="funfact-title">
                        Client
                        <br /> Satisfaction
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

    </>
  );
};

export default Counter;
