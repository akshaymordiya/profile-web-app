"use client";
import React from "react";
import EastIcon from "@mui/icons-material/East";

const data = [
  {
    id: 1,
    image: "/assets/port-inner-up-1.jpg",
    title: "Space Needle",
    icon: <EastIcon />,
    brand: "Branding",
    view: " View Project",
  },
  {
    id: 2,
    image: "/assets/port-inner-up-2.jpg",
    title: "Crisis Cleanup",
    icon: <EastIcon />,
    brand: "Branding",
    view: " View Project",
  },
  {
    id: 3,
    image: "/assets/port-inner-up-3.jpg",
    title: "Space Needle",
    icon: <EastIcon />,
    brand: "Branding",
    view: " View Project",
  },
  {
    id: 4,
    image: "/assets/port-inner-up-4.jpg",
    title: "Space Needle",
    icon: <EastIcon />,
    brand: "Space Needle",
    view: " View Project",
  },
  {
    id: 5,
    image: "/assets/port-inner-up-5.jpg",
    title: "Crisis Cleanup",
    icon: <EastIcon />,
    brand: "Crisis Cleanup",
    view: " View Project",
  },
  {
    id: 6,
    image: "/assets/port-inner-up-6.jpg",
    title: "Space Needle",
    icon: <EastIcon />,
    brand: "Space Needle",
    view: " View Project",
  },
];
const WorkItem = () => {
  const innerimage = (item, index, ImageHeight) => {
    const count = String(index + 1).padStart(2, "0");
    return (
      <div
        key={index}
        className="portfolio-item"
        style={{ marginBottom: "70px" }}
      >
        <a href="#">
          <div className="portfolio-thumb" style={{ height: ImageHeight }}>
            <div className="portfolio-thumb-img">
              <img src={item?.image} alt="portfolio" />
            </div>
          </div>
          <div className="portfolio-content">
            <h3 className="portfolio-title">{item?.title}</h3>
            <div className="d-flex align-items-center">
              <span className="portfolio-count">{count}</span>
              <span className="portfolio-meta-arrow">{item?.icon}</span>
              <div className="portfolio-meta-hover">
                <span>{item?.brand}</span>
                <span className="portfolio-meta-link">{item?.view}</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  };

  const firstHalf = data?.slice(0, 3); // Get the first 3 items
  const secondHalf = data?.slice(3); // Get the remaining items

  return (
    <>
      <div className="Portfolio-area">
        <div className="container">
          <div className="row  gx-90">
            <div className="col-lg-6">
              <div className="portfolio-item-wrapper">
                {firstHalf?.map((item, index) => {
                  const imageHeight1 = index % 2 === 0 ? "560px" : "420px";
                  return innerimage(item, index, imageHeight1);
                })}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="portfolio-item-wrapper">
                {secondHalf.map((item, index) => {
                  const imageHeight2 = index % 2 === 0 ? "420px" : "560px";
                  return innerimage(item, index, imageHeight2);
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkItem;
