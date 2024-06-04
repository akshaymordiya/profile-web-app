import React from "react";

import "./index.scss";
// import "../../../globals.css";
import Grid from "@/app/components/Grid";
import SectionTitle from "@/app/components/SectionTitle";
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
            <SectionTitle
            animationName="flip-up"
              title="Articles & Publications"
              interClass="section-title"
            />
          </Grid.Item>
        </Grid>
        <Grid classNames={`${BASE_CLASSNAME}_grid`}>
          {homeData.projects.workproject.map((item) => (
            <Grid.Item
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
                <SectionTitle
                  title={item?.title}
                  interClass="project-content-title"
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
      {/* <div className="blog-area">
        <div className="container">
          <div className="blog-title-wrap " style={{ marginBottom: "60px" }}>
            <div className="row align-items-end">
              <div className="col-xl-6 col-lg-8 col-md-8">
                <div className="blog-title-box">
                  <h4 className="section-title">
                    Articles & <br />
                    Publications
                  </h4>
                </div>
              </div>
              <div className="col-xl-6 col-lg-4 col-md-4 ">
                <div className="blog-btn text-start d-flex justify-content-start justify-content-md-end">
                  <div
                    className="text-end"
                    style={{
                      width: "250px",
                      transform: " translate(0px, 0px)",
                    }}
                  >
                    <a className="btn-blue text-start text-md-end" href="#">
                      <span className="text">View Our Work</span>
                      <span><TbArrowDownRight /></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row gx-50">
            <div className="col-xl-6">
              <div className="blog-item" style={{ marginBottom: "70px" }}>
                <div className="blog-content">
                  <h4 className="blog-content-title">
                    <a href="#">
                      16 witty tips to get <br />
                      six-figure clients on Dribbble
                    </a>
                  </h4>
                  <div
                    className="d-flex align-items-center justify-content-between"
                    style={{ marginBottom: "30px" }}
                  >
                    <div className="blog-category">
                      <span>Branding</span>
                    </div>
                    <div className="blog-meta">
                      <span>October 3, 2024</span>
                      <span>7 min read</span>
                    </div>
                  </div>
                </div>
                <div className="blog-thumb">
                  <a href="#">
                    <img src="/assets/blog-3-1.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="blog-item" style={{ marginBottom: "70px" }}>
                <div className="blog-content">
                  <h4 className="blog-content-title">
                    <a href="#">
                      Bluwalk redesign: sign-up <br />
                      rate increased twice and counting
                    </a>
                  </h4>
                  <div
                    className="d-flex align-items-center justify-content-between"
                    style={{ marginBottom: "30px" }}
                  >
                    <div className="blog-category">
                      <span>Branding</span>
                    </div>
                    <div className="blog-meta">
                      <span>November 4, 2024</span>
                      <span>7 min read</span>
                    </div>
                  </div>
                </div>
                <div className="blog-thumb">
                  <a href="#">
                    <img src="/assets/blog-3-2.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Projects;
