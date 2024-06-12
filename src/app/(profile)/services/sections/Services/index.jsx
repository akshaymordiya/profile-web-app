import React from "react";
import IMG from "@/app/components/IMG";
import Grid from "@/app/components/Grid";
import ServiceCard from "./ServiceCard";
//style scss
import "./index.scss";
import Fade from "@/app/components/Fade";

const Servicees = ({ data = {} }) => {
  const { info, content } = data;
  const BASE_CLASSNAME = "services_wrapper";
  return (
    <>
      <div className={`${BASE_CLASSNAME}`}>
        <div className="service-circle-img">
          <IMG
            src={data.circleImg}
            alt="circleImg"
            containerClasses="text-img"
            useContainer
            useRawImgTag
          />
          <div className="shape d-none d-lg-block">
            <svg
              width="260"
              height="70"
              viewBox="0 0 260 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M68.7285 34.1352C48.3941 10.6976 13.8796 0.514191 0 0.514191C93.4783 0.514191 276.081 -0.642708 258.863 0.514191C236.79 1.99739 217.224 6.94161 191.137 34.1352C140.468 93.9609 98.3272 68.2507 68.7285 34.1352Z"
                fill="currentcolor"
              ></path>
            </svg>
          </div>
        </div>
        {data.innerImg.map((item, index) => (
          <IMG
            key={index}
            src={item?.img}
            containerClasses={item?.class}
            alt={item?.alt}
            useContainer
            useRawImgTag
          />
        ))}

        <Grid classNames={`${BASE_CLASSNAME}_grid`}>
          <Grid.Item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xlg={5}
            itemClass="service-card"
            data-speed="0.5"
          >
            <div className="stack_card">
              <div className="service-title-box">
                <Fade animationType="slideInBottom" delay={200}>
                  <span className="section-subtitle">{info.subtitle}</span>
                </Fade>
                <Fade
                  animationType="slideInBottom"
                  delay={200}
                  className="section-title"
                >
                  <h3>{info.title}</h3>
                </Fade>
                <Fade animationType="slideInBottom" delay={200}>
                  <p>{info.paragraph}</p>
                </Fade>
              </div>
            </div>
          </Grid.Item>
          <Grid.Item xs={12} sm={12} md={12} lg={6} xlg={7} data-speed="0.5">
            <ServiceCard content={content} />
          </Grid.Item>
        </Grid>
      </div>
    </>
  );
};

export default Servicees;
