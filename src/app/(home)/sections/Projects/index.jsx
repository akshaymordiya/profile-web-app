import React from "react";

import "./index.scss";
// import "../../../globals.css";
import Grid from "@/app/components/Grid";
import SectionBox from "@/app/components/SectionBox";
import CTA from "@/app/components/CTA";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import IMG from "@/app/components/IMG";
import homeData from "../../../../data/home.page.json";

const Projects = () => {
  const BASE_CLASSNAME = "project_area";
  return (
    <>
      <section className={`${BASE_CLASSNAME}_grid`}>
        <Grid classNames="project-title-wrap">
          <Grid.Item
            sm={12}
            xs={12}
            md={8}
            lg={8}
            xlg={8}
            itemClass="project-title-box"
          >
            <SectionBox
              title={homeData.projects.title}
              itemClass="section-title"
            />
          </Grid.Item>
        </Grid>
        <Grid classNames={`${BASE_CLASSNAME}_content`}>
          {homeData.projects.workproject.map((item, index) => (
            <Grid.Item
              key={index}
              xs={12}
              sm={12}
              md={12}
              lg={6}
              xlg={6}
              itemClass="project-item"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <IMG
                src={item?.image}
                containerClasses="project-thumb"
                useRawImgTag
                useContainer
              />
              <div className="project-content">
                <div className="project-category">
                  <span>{item?.brand}</span>
                </div>
                <SectionBox
                  title={item?.title}
                  containerClass="project-content-title"
                />
                <div className="project-brand">
                  <div className="project-meta">
                    <span>{item?.date}</span>
                    <span>{item?.time}</span>
                  </div>
                </div>
              </div>
            </Grid.Item>
          ))}
        </Grid>
        <div className="view-btn">
        <CTA
          linkClass="btn-blue"
          linkText="View All Post"
          linkHref="/work"
          icon={CreateRoundedIcon}
          iconProps={{
            fontSize: "lg",
          }}
        />
        </div>
      </section>
      
    </>
  );
};

export default Projects;
