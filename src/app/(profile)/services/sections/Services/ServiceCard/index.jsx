import React from "react";
//style scss
import "./index.scss";
// render icons
import { renderIconComponent } from "@/Icons";
import Link from "next/link";

const ServiceCard = ({content : {rightsideservice, button}}) => {
  return (
    <>
      <div className="service-right-wrap">
        {rightsideservice.map((item, index) => (
          <div key={index} className="stack__card">
            <div className="service-item">
              <div className="service-icon">
                <span>{renderIconComponent(item?.icon)}</span>
              </div>
              <div className="service-content">
                <h3 className="service-content-title">{item?.title}</h3>
                <p>{item?.desc}</p>
                <div className="service-content-tag">
                  <span className="me-2">{item?.tag1}</span>
                  <span>{item?.tag2}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="service-btn-box">
          <Link href="#">
            {button.servicetext}
            <span>{button.lightbtn}</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
