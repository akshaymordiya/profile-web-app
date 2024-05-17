import React from "react";
import CTA from "../CTA";
import "./price.scss";

const ServicePrice = () => {
  const data = [
    {
      id: 1,
      head_title: "1 month",
      head_des: "Paid monthly",
      body_des: "Cancel anytime",
      body_title: "$1300/mo",
      button_title: "Get started",
    },
    {
      id: 2,
      head_title: "3 month",
      head_des: "Paid monthly",
      body_des: "Save $800",
      body_title: "$4200/mo",
      button_title: "Get started",
    },
    {
      id: 3,
      head_title: "Not sure?",
      head_des: "Check the skill",
      price_text:"You can order \n 1 free task",
      body_des: "-",
      body_title: "-",
      button_title: "Free Skill Check",
    },
  ];

  return (
    <>
      <div className="row">
        {data.map((item, index) => {
          return (
            <div
              className="col-md-4 col-sm-6 col-xs-12"
              key={index}
              style={{ marginBottom: "70px" }}
            >
              <div className="price-item position-relative">
                <div
                  className="price-head text-center"
                  style={{ marginBottom: "100px" }}
                >
                  <h4 className="price-head-title">{item?.head_title}</h4>
                  <span>{item?.head_des}</span>
                </div>
                <div
                  className="price-body text-center"
                  style={{ marginBottom: "25px" }}
                >
                  {item?.price_text ? <div className="price-text">{item?.price_text}</div> : (
                    <>
                      <span>{item?.body_des}</span>
                      <h4 className="price-body-title">{item?.body_title}</h4>
                    </>
                  )}
                </div>
                <div className="price-btn-box text-center">
                  <CTA
                    linkText={item?.button_title}
                    linkClass="btn-price-white"
                    linkHref="/contact"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ServicePrice;
