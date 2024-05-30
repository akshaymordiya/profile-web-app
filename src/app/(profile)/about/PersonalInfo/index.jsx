import React from "react";
import Services from "../Services";
import about from "../../../../data/about.page.json";
import SkillSets from "../Skillsets";
import { renderIconComponent } from "@/Icons";
import Grid from "@/app/components/Grid";
import IMG from "@/app/components/IMG";
import SectionTitle from "@/app/components/SectionTitle";

const PersonalInfo = () => {
  const BASE_CLASSNAME = "grid-container";

  return (
    <>
      <div className="service-info-area">
        <div className="container">
          <Grid classNames={`${BASE_CLASSNAME}_grid`}>
            <Grid.Item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xlg={12}
              itemClass="service-info-text"
              data-speed="0.5"
            >
              <div>
                {about.personalinfo.para.title}
                &nbsp;
                {(about.personalinfo.para.product ?? []).map(
                  (service, index) => (
                    <Services
                      key={index}
                      ServiceName={service?.name}
                      ServiceImage={service?.image}
                    />
                  )
                )}
              </div>
            </Grid.Item>
          </Grid>
        </div>
      </div>

      <div className="personal-info-area personal-info-pin-section">
        <div className="container">
          <Grid classNames={`${BASE_CLASSNAME}_grid`}>
            <Grid.Item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xlg={6}
              itemClass="personal-info-left"
              data-speed="0.5"
            >
              <SectionTitle
                interClass="personal-info-left-title"
                Icon={renderIconComponent(about.hero.icon)}
                title={about.personalinfo.info.title}
                para={about.personalinfo.info.para}
              />
              <a href="#">{about.personalinfo.info.email}</a>
              <a href="#">
                <span>
                  <IMG useRawImgTag src={about.personalinfo.info.image} />
                </span>
                {about.personalinfo.info.number}
              </a>
            </Grid.Item>
            <Grid.Item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xlg={6}
              itemClass="personal-info-right-wrap"
              data-speed="0.5"
            >
              <SkillSets />
            </Grid.Item>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
