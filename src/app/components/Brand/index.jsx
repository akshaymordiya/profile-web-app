import React from "react";

//components
import Grid from "@/app/components/Grid";

import "./index.scss";

const BrandButton = ({
  data = []
}) => {
  return (
    <Grid classNames="brand-area">
      {data.map(() => {
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
  );
};

export default BrandButton;
