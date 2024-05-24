import React from "react";
import "./brandbutton.scss";
import Aos from "../AOS/aos";
import Grid from "../Grid";

const BrandButton = () => {
  const repitions = 6;
  const snowfleck = Array(repitions).fill(null);
  return (
    <>
      <Aos />
      <Grid
        classNames="brand-area"
        style={{ paddingBottom: "100px", paddingTop: "100px" }}
      >
        {snowfleck.map((index) => {
              return (
        <Grid.Item
          xs={12}
          sm={12}
          md={2}
          lg={2}
          xlg={2}
          itemClass="btn-brand"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <span>Snowflake</span>
        </Grid.Item>
         );
        })}
      </Grid>
    </>
  );
};

export default BrandButton;
