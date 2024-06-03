import React from "react";
import "./index.scss";
import service from "../../../../../data/service.page.json";
import { renderIconComponent } from "@/Icons";

const ServiceCard = () => {
  return (
    <>
      <div className="service-right-wrap">
        {service.services.servicecard.rightsideservice.map((item, index) => (
          <div key={index} className="stack__card">
            <div
              className="service-item services-panel"
              style={{ marginBottom: "25px" }}
            >
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
          <a href="#">
            {service.services.servicecard.servicetext}
            <span>{service.services.servicecard.lightbtn}</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
