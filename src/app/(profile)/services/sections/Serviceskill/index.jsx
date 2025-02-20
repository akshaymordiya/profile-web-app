import React from "react";
import Grid from "@/app/components/Grid";
import SectionBox from "@/app/components/SectionBox";
import ServiceCategories from "./ServiceCategories";

import { renderIconComponent } from "@/Icons";

import "./index.scss";

const BASE_CLASSNAME ="services_skills_container";

const Skills = ({
  data
}) => {
  return (
    <div className={BASE_CLASSNAME}>
      <SectionBox
        containerClass={`${BASE_CLASSNAME}_title`}
        title={data.paragraph}
      />
      <Grid classNames={`${BASE_CLASSNAME}_grid`}>
        {data.data.map((skill, index) => (
          <React.Fragment key={index}>
            <Grid.Item
              xs={12}
              sm={12}
              md={5}
              lg={5}
              xlg={5}
              itemClass={`${BASE_CLASSNAME}_grid_col-left`}
            >
              <SectionBox
                title={skill.title}
                icon={skill.icon}
                containerClass="left-title"
              />
            </Grid.Item>
            <Grid.Item
              xs={12}
              sm={12}
              md={7}
              lg={7}
              xlg={7}
              itemClass={`${BASE_CLASSNAME}_grid_col-right`}
            >
              <ServiceCategories
                skillSet={skill.list}
                skillTitle={skill.title}
              />
            </Grid.Item>
          </React.Fragment>
        ))}
      </Grid>
    </div>
  );
};

export default Skills;
