import React from "react";
import Grid from "@/app/components/Grid";
import SectionBox from "@/app/components/SectionBox";
import "./index.scss";
import ServiceSkill from "../../partials/ServiceSkill";
import Fade from "@/app/components/Fade";

const Skills = ({ data = {} }) => {
  const BASE_CLASSNAME = "services-container";
  const { content } = data;
  return (
    <>
      <div className="inner-info-area">
        <Grid classNames={`${BASE_CLASSNAME}_grid `}>
          <Grid.Item
            xs={12}
            sm={12}
            md={12}
            lg={9}
            xlg={9}
            itemClass="inner-info-title-box"
          >
            <Fade animationType="slideInBottom">
              <SectionBox
                containerClass="inner-info-title"
                title={data.paragraph}
              />
            </Fade>
          </Grid.Item>
        </Grid>
        <ServiceSkill content={content} />
      </div>
    </>
  );
};

export default Skills;
