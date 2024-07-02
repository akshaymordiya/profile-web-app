import React from "react";
import Grid from "@/app/components/Grid";
import SectionBox from "@/app/components/SectionBox";
import ServiceCategory from "./ServiceCategory";

import { getIcon, renderIconComponent } from "@/Icons";

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
        {data.data.map(skill => (
          <React.Fragment>
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
              {skill.list.map((s, index) => {
                return (
                  <ServiceCategory
                    key={index}
                    title={s.title}
                    iconLeft={renderIconComponent(s.icons.left)}
                    iconRight={renderIconComponent(s.icons.right)}
                    link={s.url}
                  />
                );
              })}
            </Grid.Item>
          </React.Fragment>
        ))}
      </Grid>
    </div>
  );
};

export default Skills;
