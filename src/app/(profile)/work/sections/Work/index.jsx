import React from "react";
import Grid from "@/app/components/Grid";
import WorkItem from "./WorkBox";
//style css
import "./index.scss";

const BASE_CLASSNAME = "work_portfolio_container"

const Work = ({ data = {} }) => {
  return (
    <Grid
      classNames={BASE_CLASSNAME}
    >
      <Grid.Item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xlg={6}
        itemClass="column"
      >
        {data.left.map((work, index) => (
          <WorkItem
            key={work.id}
            work={work}
            imageClass={index % 2 === 0 ? "" : ""}
          />
        ))}
      </Grid.Item>
      <Grid.Item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xlg={6}
        itemClass="column"
      >
        {data.right.map((work, index) => (
          <WorkItem
            key={work}
            work={work}
            imageClass={index % 2 !== 0 ? "" : ""}
          />
        ))}
      </Grid.Item>
    </Grid>
  );
};

export default Work;
