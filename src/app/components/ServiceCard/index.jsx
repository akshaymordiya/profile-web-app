import React from "react";
import FlipToFrontIcon from '@mui/icons-material/FlipToFront';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import './index.scss';

const ServiceCard = () => {
  const data = [
    {
      id: 1,
      title: "Design Strategy",
      desc: " We always ensure that it combines a clean and beautiful visual design.",
      icon:<PhonelinkIcon />
    },
    {
      id: 2,
      title: "Product Leadership",
      desc: " We always ensure that it combines a clean and beautiful visual design.",
      icon :<AutoModeIcon />
    },
    {
      id: 3,
      title: "Front-End Development",
      desc: " We always ensure that it combines a clean and beautiful visual design.",
      icon: <FlipToFrontIcon />
    },
  ];

  return (
    <>
        <div className="service-right-wrap">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="stack__card d-flex justify-content-md-center justify-content-start"
              >
                <div
                  className="service-item d-flex align-items-start services-panel"
                  style={{ marginBottom: "25px" }}
                >
                  <div className="service-icon">
                    <span>
                     {item?.icon}
                    </span>
                    </div>
                    <div className="service-content">
                      <h3 className="service-content-title">{item?.title}</h3>
                      <p>{item?.desc}</p>
                      <div className="service-content-tag">
                        <span className="me-2">UI/UX Audit</span>
                        <span>Workshops</span>
                      </div>
                    </div>
                  </div>
                </div>
            );
          })}
          <div className="service-btn-box">
            <a href="#">
              Call me to get more extra service
              <span>Call Now</span>
            </a>
          </div>
        </div>
    </>
  );
};

export default ServiceCard;
