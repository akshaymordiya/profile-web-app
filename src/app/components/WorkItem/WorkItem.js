"use client";
import React from "react";
import EastIcon from "@mui/icons-material/East";

const WorkItem = () => {
  const data = [
    {
      id: 1,
      image: "/assets/port-inner-up-1.jpg",
      title: "Space Needle",
      count: "01",
      icon: <EastIcon />,
      brand: "Branding",
      view: " View Project",
    },
    {
      id: 2,
      image: "/assets/port-inner-up-2.jpg",
      title: "Space Needle",
      count: "01",
      icon: <EastIcon />,
      brand: "Branding",
      view: " View Project",
    },
    {
      id: 3,
      image: "/assets/port-inner-up-3.jpg",
      title: "Space Needle",
      count: "01",
      icon: <EastIcon />,
      brand: "Branding",
      view: " View Project",
    },
    {
      id: 4,
      image: "/assets/port-inner-up-4.jpg",
      title: "Space Needle",
      count: "01",
      icon: <EastIcon />,
      brand: "Branding",
      view: " View Project",
    },
    {
      id: 5,
      image: "/assets/port-inner-up-5.jpg",
      title: "Space Needle",
      count: "01",
      icon: <EastIcon />,
      brand: "Branding",
      view: " View Project",
    },
    {
      id: 6,
      image: "/assets/port-inner-up-6.jpg",
      title: "Space Needle",
      count: "01",
      icon: <EastIcon />,
      brand: "Branding",
      view: " View Project",
    },
  ];

  // const [innerheight, setInnerHeight] = useState(0);
  // const [count, setCount] = useState(0);
  const firstHalf = data.slice(0, 3); // Get the first 3 items
  const secondHalf = data.slice(3); // Get the remaining items

  return (
    <>
      <div className="Portfolio-area">
        <div className="container">
          <div className="row  gx-90">
            <div className="col-lg-6">
              <div className="portfolio-item-wrapper">
                {firstHalf.map((item, index) => {
                  const imageHeight1 =
                    // index % 4 === 0 || index % 4 === 3 ? "560px" : "420px";
                    index % 2 === 0 ? "560px" : "420px";
                  return (
                    <div
                      key={index}
                      className="portfolio-item"
                      style={{ marginBottom: "70px" }}
                    >
                      <a href="#">
                        <div
                          className="portfolio-thumb"
                          style={{ height: imageHeight1 }}
                        >
                          <div className="portfolio-thumb-img">
                            <img src={item?.image} alt="portfolio" />
                          </div>
                        </div>
                        <div className="portfolio-content">
                          <h3 className="portfolio-title">{item?.title}</h3>
                          <div className="d-flex align-items-center">
                            <span className="portfolio-count">
                              {item?.count}
                            </span>
                            <span className="portfolio-meta-arrow">
                              {item?.icon}
                            </span>
                            <div className="portfolio-meta-hover">
                              <span>{item?.brand}</span>
                              <span className="portfolio-meta-link">
                                {item?.view}
                              </span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="portfolio-item-wrapper">
                {secondHalf.map((item, index) => {
                  const imageHeight2 =
                    index % 4 === 0 || index % 4 === 3 ? "560px" : "420px";
                  return (
                    <div
                      key={index}
                      className="portfolio-item"
                      style={{ marginBottom: "70px" }}
                    >
                      <a href="#">
                        <div
                          className="portfolio-thumb"
                          style={{ height: imageHeight2 }}
                        >
                          <div className="portfolio-thumb-img">
                            <img src={item?.image} alt="portfolio" />
                          </div>
                        </div>
                        <div className="portfolio-content">
                          <h3 className="portfolio-title">{item?.title}</h3>
                          <div className="d-flex align-items-center">
                            <span className="portfolio-count">
                              {item?.count}
                            </span>
                            <span className="portfolio-meta-arrow">
                              {item?.icon}
                            </span>
                            <div className="portfolio-meta-hover">
                              <span>{item?.brand}</span>
                              <span className="portfolio-meta-link">
                                {item?.view}
                              </span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  );
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
