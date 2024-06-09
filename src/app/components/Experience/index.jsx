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
          lg={4}
          xs={4}
          sm={4}
          md={4}
          xlg={4}
          itemClass={`${BASE_CLASSNAME}_grid-col-1`}
        >
          <span>{timeline}</span>
        </Grid.Item>
        <Grid.Item
          lg={8}
          xs={8}
          sm={8}
          md={8}
          xlg={8}
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
