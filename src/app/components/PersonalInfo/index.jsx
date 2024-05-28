import React from "react";
import Grid from "../Grid";
import Services from "../Services";
import SectionTitle from "../SectionTitle";
import about from "../../../data/about.page.json";
import SkillSets from "../Skillsets";
import IMG from "../IMG";
import { getIcon } from "@/Icons";

const PersonalInfo = () => {
  const BASE_CLASSNAME = "grid-container";
  const { Fname } = getIcon(["Fname"]);
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
                I'm Diego <span className="line"></span> a self though & self
                learned designer based in USA. I started as a financial planner
                & social media marketer, but now I do mix of everything from
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
                Icon={<Fname />}
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
