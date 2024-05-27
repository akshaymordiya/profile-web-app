import React from "react";
import CTA from "../CTA";
import "./index.scss";
import Grid from "../Grid";

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
      price_text: "You can order \n 1 free task",
      body_des: "-",
      body_title: "-",
      button_title: "Free Skill Check",
    },
  ];

  return (
    <>
      <Grid>
        {data.map((item, index) => {
          return (
            <Grid.Item
              xs={12}
              sm={6}
              md={4}
              lg={4}
              xlg={4}
              itemClass="price-item"
              key={index}
            >
              <div className="price-head">
                <h4>{item?.head_title}</h4>
                <span>{item?.head_des}</span>
              </div>
              <div className="price-body">
                {item?.price_text ? (
                  <div className="price-text">{item?.price_text}</div>
                ) : (
                  <>
                    <span>{item?.body_des}</span>
                    <h4>{item?.body_title}</h4>
                  </>
                )}
              </div>
              <div className="price-btn-box text-center">
                <CTA
                  btn_color="btn-price-white"
                  linkText={item?.button_title}
                  linkClass="btn-price-white"
                  linkHref="/contact"
                />
              </div>
            </Grid.Item>
          );
        })}
      </Grid>
    </>
  );
};

export default ServicePrice;
