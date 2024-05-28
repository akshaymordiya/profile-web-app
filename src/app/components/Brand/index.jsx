import React from "react";
import "./index.scss";
import Aos from "../AOS";
import Grid from "../Grid";

const BrandButton = () => {
  const repitions = 6;
  const snowfleck = Array(repitions).fill(null);
  return (
    <>
      <Aos />
      <Grid
        classNames="brand-area"
      >
        {snowfleck.map(() => {
              return (
        <Grid.Item
          xs={12}
          sm={12}
          md={6}
          lg={4}
          xlg={2}
          itemClass="btn-brand"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="200"
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
