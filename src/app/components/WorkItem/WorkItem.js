"use client";
import React from "react";
import EastIcon from "@mui/icons-material/East";
import Grid from "../Grid";

const data = [
  {
    id: 1,
    image: "/assets/port-inner-up-1.jpg",
    title: "Space Needle",
    brand: "Branding",
  },
  {
    id: 2,
    image: "/assets/port-inner-up-2.jpg",
    title: "Crisis Cleanup",
    brand: "Branding",
  },
  {
    id: 3,
    image: "/assets/port-inner-up-3.jpg",
    title: "Space Needle",
    brand: "Branding",
  },
  {
    id: 4,
    image: "/assets/port-inner-up-4.jpg",
    title: "Space Needle",
    brand: "Space Needle",
  },
  {
    id: 5,
    image: "/assets/port-inner-up-5.jpg",
    title: "Crisis Cleanup",
    brand: "Crisis Cleanup",
  },
  {
    id: 6,
    image: "/assets/port-inner-up-6.jpg",
    title: "Space Needle",
    brand: "Space Needle",
  },
];

const BASE_CLASSNAME = "porfolio-area";

const WorkItem = () => {
  const innerimage = (item, index, ImageHeight) => {
    const count = String(index + 1).padStart(2, "0");
    return (
      <div
        key={index}
        className="portfolio-item"
        style={{ marginBottom: "30px" }}
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
              <span className="portfolio-meta-arrow">
                <EastIcon />
              </span>
              <div className="portfolio-meta-hover">
                <span>{item?.brand}</span>
                <span className="portfolio-meta-link">View Project</span>
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
      <div className="Portfolio-area ">
        <div className="container">
          <Grid classNames="portfolio-gap">
            <Grid.Item
              xs={12}
              sm={12}
              md={12}
              lg={6}
              xlg={6}
              itemClass="portfolio-item-wrapper"
            >
              {firstHalf?.map((item, index) => {
                const imageHeight1 = index % 2 === 0 ? "560px" : "420px";
                return innerimage(item, index, imageHeight1);
              })}
            </Grid.Item>
            <Grid.Item
              xs={12}
              sm={12}
              md={12}
              lg={6}
              xlg={6}
              itemClass="portfolio-item-wrapper"
            >
              {secondHalf?.map((item, index) => {
                const imageHeight2 = index % 2 === 0 ? "420px" : "560px";
                return innerimage(item, index, imageHeight2);
              })}
            </Grid.Item>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default WorkItem;
