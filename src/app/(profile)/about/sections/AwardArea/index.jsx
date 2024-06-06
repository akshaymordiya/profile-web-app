import React from "react";
import SectionTitle from "@/app/components/SectionTitle";
import Grid from "@/app/components/Grid";
import IMG from "@/app/components/IMG";
import Awards from "./Client/Award";
//Data JSON
import about from "../../../../../data/about.page.json";
//style. scss
import "./index.scss";

const AwardArea = () => {
  const BASE_CLASSNAME = "grid-container";
  return (
    <>
      <section className="award-area">
        <Grid classNames={`${BASE_CLASSNAME}_wrap`}>
          <Grid.Item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xlg={5}
            itemClass="award-wrapper"
          >
            <SectionTitle
              animationduration="2000"
              animationdelay="100"
              animationName="flip-up"
              interClass="award-section-title"
              title={about.awards.title}
            />
            <div className="award-text-wrapper position-relative">
              <h3 className="award-text-outline">{about.awards.textoutline}</h3>
              <h3 className="award-text-fill">{about.awards.textfill}</h3>
              <IMG
                src={about.awards.image}
                containerClasses="award-shape"
                imageClasses="award-shape-1"
                useContainer
                useRawImgTag
              />
            </div>
          </Grid.Item>
          <Grid.Item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xlg={7}
            itemClass="award-item-wrapper"
          >
            <Awards />
          </Grid.Item>
        </Grid>
      </section>
    </>
  );
};

export default AwardArea;
