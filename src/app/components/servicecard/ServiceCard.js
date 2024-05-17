import React from "react";

const ServiceCard = () => {
  const data = [
    {
      id: 1,
      title: "Design Strategy",
      desc: " We always ensure that it combines a clean and beautiful visual design.",
    },
    {
      id: 2,
      title: "Product Leadership",
      desc: " We always ensure that it combines a clean and beautiful visual design.",
    },
    {
      id: 3,
      title: "Front-End Development",
      desc: " We always ensure that it combines a clean and beautiful visual design.",
    },
  ];

  return (
    <>
      <div className="col-xl-7 col-lg-7">
        <div className="service-right-wrap">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="stack__card justify-content-md-center justify-content-start"
              >
                <div
                  className="service-item d-flex align-items-start services-panel"
                  style={{ marginBottom: "25px" }}
                >
                  <div className="service-icon">
                    <span>
                      <img src="" alt="" />
                    </span>
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
      </div>
    </>
  );
};

export default ServiceCard;
