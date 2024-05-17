import React from "react";
import "./brandbutton.scss";

const BrandButton = () => {
  const repitions = 6;
  const snowfleck = Array(repitions).fill(null);
  return (
    <>
      <div className="brand-area brand-plr" style={{paddingBottom:"100px"}}>
        <div className="container-fluid">
          <div className="row align-items-center">
            {snowfleck.map((index) => {
              return (
                <div key={index} className="col-xl-2">
                  <div className="btn-brand">
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
