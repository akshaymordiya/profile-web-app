import Grid from "@/app/components/Grid";
import SectionTitle from "@/app/components/SectionTitle";
import ServiceCategory from "@/app/components/ServiceCategory";
import React from "react";
import service from "../../../../data/service.page.json";
import { getIcon } from "@/Icons";

const Skills = () => {
  const BASE_CLASSNAME = "services-container";
  const { Star, Arrowoutline, VerticalSplit, AutomotionIcon } = getIcon([
    "Star",
    "Arrowoutline",
    "VerticalSplit",
    "AutomotionIcon",
  ]);
  return (
    <>
      <div className="inner-info-area">
        <Grid classNames={`${BASE_CLASSNAME}_grid container`}>
          <Grid.Item
            xs={12}
            sm={12}
            md={12}
            lg={9}
            xlg={9}
            itemClass="inner-info-title-box container"
          >
            <SectionTitle
              interClass="inner-info-title"
              title={service.services.paragraph}
              animationName="flip-up"
              animationduration="2000"
              animationdelay="300"
            />
          </Grid.Item>
        </Grid>
        <Grid classNames={`${BASE_CLASSNAME}_wrapper container`}>
          <Grid.Item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xlg={12}
            itemClass="testinominal-slide"
          >
            <Grid>
              <Grid.Item
                xs={12}
                sm={12}
                md={6}
                lg={4}
                xlg={4}
                itemClass="inner-info-service"
                data-speed="0.5"
              >
                <SectionTitle
                  title={service.services.skill.title}
                  Icon={<Star />}
                  interClass="inner-left-title"
                />
              </Grid.Item>
              <Grid.Item
                xs={12}
                sm={12}
                md={12}
                lg={8}
                xlg={8}
                itemClass="inner-service-category-wrap"
                data-speed="0.5"
              >
                {service.services.skill.designskill.map((item, index) => {
                  return (
                    <ServiceCategory
                      key={index}
                      serviceTitle={item?.title}
                      serviceIconLeft={<VerticalSplit />}
                      serviceIconRight={<Arrowoutline />}
                    />
                  );
                })}
              </Grid.Item>
            </Grid>
            <Grid>
              <Grid.Item
                xs={12}
                sm={12}
                md={6}
                lg={4}
                xlg={4}
                itemClass="inner-info-service"
                data-speed="0.5"
              >
                <SectionTitle
                  title={service.services.skilldev.title}
                  Icon={<Star />}
                  interClass="inner-left-title"
                />
              </Grid.Item>
              <Grid.Item
                xs={12}
                sm={12}
                md={12}
                lg={8}
                xlg={8}
                itemClass="inner-service-category-wrap"
                data-speed="0.5"
              >
                {service.services.skilldev.development.map((item, index) => {
                  return (
                    <ServiceCategory
                      key={index}
                      serviceTitle={item?.title}
                      serviceIconLeft={<AutomotionIcon />}
                      serviceIconRight={<Arrowoutline />}
                    />
                  );
                })}
              </Grid.Item>
            </Grid>
          </Grid.Item>
        </Grid>
      </div>
    </>
  );
};

export default Skills;
