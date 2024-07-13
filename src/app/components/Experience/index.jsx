import React from "react";
//components
import Grid from "@/app/components/Grid";

import "./index.scss";

const BASE_CLASSNAME = "experience_box"

const Experience = ({ timeline = "", label = "", value = "", containerClass = "" }) => {
  return (
    <div className={`${BASE_CLASSNAME} ${containerClass}`}>
      <Grid classNames={`${BASE_CLASSNAME}_grid`}>
        <Grid.Item 
          lg={5}
          xs={5}
          sm={5}
          md={5}
          xlg={5}
          itemClass={`${BASE_CLASSNAME}_grid-col-1`}
        >
          <span>{timeline}</span>
        </Grid.Item>
        <Grid.Item
          lg={7}
          xs={7}
          sm={7}
          md={7}
          xlg={7}
          itemClass={`${BASE_CLASSNAME}_grid-col-2`}
        >
          <h4>{label}</h4>
          <span>{value}</span>
        </Grid.Item>
      </Grid>
    </div>
  );
};

export default Experience;
