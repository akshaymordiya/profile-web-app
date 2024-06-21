import Grid from "@/app/components/Grid";
import SectionBox from "@/app/components/SectionBox";
import React from "react";
import { renderIconComponent } from "@/Icons"; 
import ServiceCategory from "../ServiceCategory";
import './index.scss';

const ServiceSkill = ({content: { design, development }}) => {
  const BASE_CLASSNAME ="services-container";
  return (
    <>
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
                <SectionBox
                  title={design.title}
                  icon={design.icon}
                  containerClass="inner-left-title"
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
                {design.designskill.map((item, index) => {
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
                <SectionBox
                  title={development.title}
                  icon={development.icon}
                  containerClass="inner-left-title"
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
                {development.developmentskill.map((item, index) => {
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
    </>
  );
};

export default ServiceSkill;
