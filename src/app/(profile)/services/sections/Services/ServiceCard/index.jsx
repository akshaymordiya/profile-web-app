import React from "react";
//style scss
import "./index.scss";
//data json
import service from "../../../../../../data/service.page.json";
// render icons
import { renderIconComponent } from "@/Icons";
import Link from "next/link";

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
          <Link href="#">
            {service.services.servicecard.servicetext}
            <span>{service.services.servicecard.lightbtn}</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
