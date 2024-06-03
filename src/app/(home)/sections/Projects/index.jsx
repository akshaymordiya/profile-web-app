import React from "react";

import "./index.scss";
import "../../../globals.css";

const Projects = () => {
  return (
    <div
      className="blog-area black-bg-3 pt-320 pb-50 fix"
      style={{ paddingTop: "150px", paddingBottom: "50px" }}
    >
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
                    <span>
                      {/* <TbArrowDownRight /> */}
                    </span>
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
    </div>
  );
};

export default Projects;
