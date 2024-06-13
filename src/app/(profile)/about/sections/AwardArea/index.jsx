import React from "react";

//components
import Grid from "@/app/components/Grid";
import IMG from "@/app/components/IMG";
import Section from "@/app/components/Section";
import Awards from "../AwardArea/Client/Award";

import "./index.scss";
import ParallaxScroll from "@/app/components/ParallaxScroll";

const BASE_CLASSNAME = "awards_container";

const AwardArea = ({
  data = {}
}) => {
  return (
    <Section
      title={data.title}
      addSeprator
      text={data.paragraph}
      sectionClass={BASE_CLASSNAME}
    >
      <Grid classNames={`${BASE_CLASSNAME}_grid`}>
        <Grid.Item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xlg={5}
          itemClass={`${BASE_CLASSNAME}_grid-col-1`}
        >
          <div className="award-text-wrapper position-relative">
            <ParallaxScroll speed={0.1} enableLogs>
              <h3 className="award-text-outline">
                {data.textoutline}
              </h3>
            </ParallaxScroll>
            <ParallaxScroll speed={0.3} >
              <h3 className="award-text-fill">{data.textfill}</h3>
            </ParallaxScroll>
            <ParallaxScroll speed={0.2}>
              <IMG
                src={data.image}
                containerClasses="award-shape"
                imageClasses="award-shape-1"
                useContainer
                useRawImgTag
              />
            </ParallaxScroll>
          </div>
        </Grid.Item>
        <Grid.Item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xlg={7}
          itemClass={`${BASE_CLASSNAME}_grid-col-2`}
        >
          <Awards awardItems={data.awardItems} />
        </Grid.Item>
      </Grid>
    </Section>
  );
};

export default AwardArea;
