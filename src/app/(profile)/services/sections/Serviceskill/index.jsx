import React from "react";
import Grid from "@/app/components/Grid";
import SectionTitle from "@/app/components/SectionTitle";
import ServiceCategory from "./ServiceCategory";
// data json
import service from "../../../../../data/service.page.json";
//style  scss
import './index.scss';
// render icon
import { renderIconComponent } from "@/Icons";


const Skills = () => {
  const BASE_CLASSNAME ="services-container";
 
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
            <SectionTitle
              interClass="inner-info-title"
              title={service.services.paragraph}
              animationName="flip-up"
              animationduration="2000"
              animationdelay="300"
            />
          </Grid.Item>
        </Grid>
        <Grid classNames={`${BASE_CLASSNAME}_wrapper `}>
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
                  Icon={renderIconComponent(service.services.skill.icon)}
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
                      serviceIconLeft={renderIconComponent(item?.iconleft)}
                      serviceIconRight={renderIconComponent(item?.iconright)}
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
                  Icon={renderIconComponent(service.services.skill.icon)}
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
                      serviceIconLeft={renderIconComponent(item?.iconleft)}
                      serviceIconRight={renderIconComponent(item?.iconright)}
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
