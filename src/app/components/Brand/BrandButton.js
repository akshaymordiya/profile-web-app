import React from "react";
import "./brandbutton.scss";
import Aos from "../AOS/aos";

const BrandButton = () => {
  const repitions = 6;
  const snowfleck = Array(repitions).fill(null);
  return (
    <>
      <Aos />
      <div className="brand-area brand-plr" style={{ paddingBottom: "100px",paddingTop:"100px" }}>
        <div className="container-fluid">
          <div className="row align-items-center">
            {snowfleck.map((index) => {
              return (
                <div key={index} className="col-xl-2">
                  <div
                    className="btn-brand"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <span>Snowflake</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandButton;
