"use client";
import React, { useEffect, useRef, useState } from "react";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import "./page.scss";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import "animate.css";
import Footer from "@/app/components/footer/Footer";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import Counter from "@/app/components/sections/counterup/countup";
import Navbar from "@/app/components/Navbar";
import WOW from "wow.js";

const data = [
  {
    id: 1,
    title: "Awwwwards SOTD",
    subtitle: "FOR DISPLAY 2023",
    image: "/assets/award-5.jpg",
  },
  {
    id: 2,
    title: "Wix.Com",
    subtitle: "INTERVIEW 2022",
    image: "/assets/award-6.jpg",
  },
  {
    id: 3,
    title: "Awwwwards SOTD",
    subtitle: "FOR DISPLAY 2023",
    image: "/assets/award-10.jpg",
  },
  {
    id: 4,
    title: "Awwwwards SOTD",
    subtitle: "FOR DISPLAY 2023",
    image: "/assets/award-1.jpg",
  },
  {
    id: 5,
    title: "Awwwwards SOTD",
    subtitle: "FOR DISPLAY 2023",
    image: "/assets/award-4.jpg",
  },
  {
    id: 6,
    title: "Awwwwards SOTD",
    subtitle: "FOR DISPLAY 2023",
    image: "/assets/award-3.jpg",
  },
];

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const followImgRef = useRef(null);
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    if (followImgRef.current) {
      const imgWidth = followImgRef.current.offsetWidth;
      const imgHeight = followImgRef.current.offsetHeight;
      const imgCenterX = clientX - imgWidth / 0.2;
      const imgCenterY = clientY - imgHeight / 0.7;
      followImgRef.current.style.transform = `translateX(${imgCenterX}px) translateY(${imgCenterY}px)`;
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  
  useEffect(() => {
    new WOW().init();
  }, []);

  return (
    <>
      <Navbar />
      <div id="smooth-content">
        <main>
          <div className="services-area service-ptb z-index-1 position-relative fix">
            <div className="services-shape-1">
              <img src="/assets/hero-shape-2-1.png" alt="" />
            </div>
            <div className="service__text d-none d-lg-block col-md-4">
              <span>ABOUT ME</span>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-lg-5">
                  <div className="servicetitle-box">
                    <h3 className="service__title">
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          marginRight: "30px",
                        }}
                      >
                        <div className="animated-letter">I</div>
                        <div className="animated-letter">'</div>
                        <div className="animated-letter">m</div>
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          marginRight: "30px",
                        }}
                      >
                        <div className="animated-letter">D</div>
                        <div className="animated-letter">i</div>
                        <div className="animated-letter">e</div>
                        <div className="animated-letter">g</div>
                        <div className="animated-letter">o</div>
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          marginRight: "30px",
                        }}
                      >
                        <div className="animated-letter">L</div>
                        <div className="animated-letter">u</div>
                        <div className="animated-letter">n</div>
                        <div className="animated-letter">a</div>
                      </div>
                    </h3>
                  </div>
                  <div className="servicebtn-box">
                    <a href="#" className="btn-border-sm">
                      Download CV
                      <span>
                        <SaveAltIcon />
                      </span>
                    </a>
                  </div>
                </div>

                <div className="col-xl-8 col-lg-7">
                  <div className="service-right-box text-end position-relative mt-5">
                    <div className="service-signature">
                      <img
                        src="/assets/service-signature.png"
                        alt="service-signature"
                      />
                    </div>
                    <div className="servicecircle-img">
                      <img
                        src="/assets/service-circle-img.png"
                        alt="service-circle"
                      />
                    </div>
                    <div className="service-img">
                      <img
                        src="/assets/service-hero-1.webp"
                        alt="service_img"
                        style={{
                          color: "transparent",
                          height: "auto",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="service-info-area" style={{ paddingBottom: "80px" }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="service-info-text">
                    <div>
                      I'm Diego <span className="line"></span> a self though &
                      self learned designer based in USA. I started as a
                      financial planner & social media marketer, but now I do
                      mix of everything from &nbsp;
                      <a className="service-hover-item">
                        Product Design <span> </span>
                        <div
                          className="service-hover-bg"
                          style={{ backgroundImage: "url(/assets/ab-1.png)" }}
                        ></div>
                      </a>
                      , &nbsp;
                      <a className="service-hover-item">
                        Photography <span> </span>
                        <div
                          className="service-hover-bg"
                          style={{ backgroundImage: "url(/assets/ab-2.png)" }}
                        ></div>
                      </a>
                      , &nbsp;
                      <a className="service-hover-item">
                        Web Design <span> </span>
                        <div
                          className="service-hover-bg"
                          style={{ backgroundImage: "url(/assets/ab-3.png)" }}
                        ></div>
                      </a>
                      , &nbsp;
                      <a className="service-hover-item">
                        Graphic Design <span> </span>
                        <div
                          className="service-hover-bg"
                          style={{ backgroundImage: "url(/assets/ab-4.png)" }}
                        ></div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="personal-info-area personal-info-pin-section"
            style={{ paddingBottom: "30px" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div
                    className="personal-info-left"
                    style={{ marginRight: "200px" }}
                  >
                    <div className="services-wrapper services-capsule-wrapper">
                      <div className="personal-info-left-content">
                        <h4 className="personal-info-left-title">
                          <DriveFileRenameOutlineIcon />
                          Personal Info
                        </h4>
                        <p>
                          Perceived end knowledge certainly day sweetness why
                          cordially.
                        </p>
                        <a href="#">example@gmail.com</a>
                        <a href="#">
                          <span>
                            <img src="/assets/whatsap.png" />
                          </span>
                          +491 234 5678
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="personal-info-right-wrap">
                    <div
                      className="personal-info-skill wow fadeInUp"
                      data-wow-duration="3s"
                      data-wow-delay="5s"
                      style={{ marginBottom: "85px" }}
                    >
                      <h4 className="personal-info-right-title">
                        <span>
                          <WbIncandescentIcon />
                        </span>
                        Skillsets
                      </h4>
                      <div className="progress-bar-wrap">
                        <div className="progress-bar-item">
                          <label>Figma</label>
                          <div className="progress-bar">
                            <div className="progress">
                              <div
                                className="progress-barr wow slideInLeft"
                                data-wow-duration="2s"
                                data-wow-delay="5s"
                                style={{ width: "90%" }}
                              >
                                <span>90%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="progress-bar-item">
                          <label>Sketch</label>
                          <div className="progress-bar">
                            <div className="progress">
                              <div
                                className="progress-barr wow slideInLeft"
                                data-wow-duration="2s"
                                data-wow-delay="5s"
                                style={{ width: "82%" }}
                              >
                                <span>82%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="progress-bar-item">
                          <label>Photoshop</label>
                          <div className="progress-bar">
                            <div className="progress">
                              <div
                                className="progress-barr wow slideInLeft"
                                data-wow-duration="2s"
                                data-wow-delay="5s"
                                style={{ width: "65%" }}
                              >
                                <span>65%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="progress-bar-item">
                          <label>Invision</label>
                          <div className="progress-bar">
                            <div className="progress">
                              <div
                                className="progress-barr wow slideInLeft "
                                data-wow-duration="2s"
                                data-wow-delay="5s"
                                style={{ width: "58%" }}
                              >
                                <span>58%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="personal-info-experience animate__animated animate__fadeInLeft animate__delay-4s"
                      style={{ marginBottom: "85px" }}
                    >
                      <h4
                        className="personal-info-right-title"
                        style={{ marginBottom: "35px" }}
                      >
                        <span>
                          <WbIncandescentIcon />
                        </span>
                        Experience
                      </h4>
                      <div className="personal-info-exprience-box d-flex align-items-start ">
                        <span className="personal-info-exprience-length">
                          2022 - Present
                        </span>
                        <div className="personal-info-exprience-content">
                          <h4 className="personal-info-exprience-title">
                            UI/UX Lead Designer
                          </h4>
                          <span>Amazon INC</span>
                        </div>
                      </div>
                      <div className="personal-info-exprience-box d-flex align-items-start ">
                        <span className="personal-info-exprience-length">
                          2018 - 2022
                        </span>
                        <div className="personal-info-exprience-content">
                          <h4 className="personal-info-exprience-title">
                            Product Lead Designer
                          </h4>
                          <span>Amazon INC</span>
                        </div>
                      </div>
                      <div className="personal-info-exprience-box d-flex align-items-start ">
                        <span className="personal-info-exprience-length">
                          2016 - 2018
                        </span>
                        <div className="personal-info-exprience-content">
                          <h4 className="personal-info-exprience-title">
                            Graphic Designer
                          </h4>
                          <span>Amazon INC</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="personal-info-education animate__animated animate__fadeInRight animate__delay-5s"
                      style={{ marginBottom: "85px" }}
                    >
                      <h4
                        className="personal-info-right"
                        style={{ marginBottom: "35px" }}
                      >
                        <span>
                          <SchoolOutlinedIcon />
                        </span>
                        Education
                      </h4>
                      <div className="personal-info-exprience-box d-flex align-items-start ">
                        <span className="personal-info-exprience-length">
                          2014 - 2016
                        </span>
                        <div className="personal-info-exprience-content">
                          <h4 className="personal-info-exprience-title">
                            Stanford University
                          </h4>
                          <span>of California.</span>
                        </div>
                      </div>
                      <div className="personal-info-exprience-box d-flex align-items-start ">
                        <span className="personal-info-exprience-length">
                          2012 - 2014
                        </span>
                        <div className="personal-info-exprience-content">
                          <h4 className="personal-info-exprience-title">
                            Specialization Course.
                          </h4>
                          <span>MIT University</span>
                        </div>
                      </div>
                      <div className="personal-info-exprience-box d-flex align-items-start ">
                        <span className="personal-info-exprience-length">
                          2009 - 2012
                        </span>
                        <div className="personal-info-exprience-content">
                          <h4 className="personal-info-exprience-title">
                            Level High School.
                          </h4>
                          <span>San Fransisco</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Counter />

          <section
            className="award-area award-customize"
            style={{ paddingTop: "120px", paddingBottom: "0px" }}
          >
            <div className="container">
              <div className="award-inner" style={{ paddingBottom: "80px" }}>
                <div className="row">
                  <div className="col-xl-5">
                    <div className="award-wrapper">
                      <div
                        className="section-title-wrapper"
                        style={{ marginBottom: "30px" }}
                      >
                        <div className="section-title-inner position-relative ">
                          <h3 className="award-section-title">
                            Awards & <br /> recognitions
                          </h3>
                        </div>
                      </div>
                      <div className="award-text-wrapper posotion-relative">
                        <h3 className="award-text-outline d-none d-xl-block">
                          Award
                        </h3>
                        <h3 className="award-text-fill d-none d-xl-block">
                          Award
                        </h3>
                        <div className="award-shape">
                          <img
                            src="/assets/award-shape-1.png"
                            className="award-shape-1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-7">
                    <div
                      className="award-item-wrapper"
                      style={{ paddingTop: "100px", paddingLeft: "70px" }}
                    >
                      {data.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="award-item position-relative hover-reveal-item"
                          >
                            <a
                              href="#"
                              className="d-block"
                              onMouseEnter={() => {
                                setIsHovered(true);
                                setCurrentImageIndex(index);
                              }}
                              onMouseLeave={() => {
                                setIsHovered(false);
                                setCurrentImageIndex(null);
                              }}
                            >
                              <div className="award-item-inner d-flex align-items-center justify-content-between flex-wrap">
                                <div className="award-arrow">
                                  <SubdirectoryArrowRightIcon />
                                </div>
                                <div className="award-content">
                                  <h3 className="award-title">{item?.title}</h3>
                                  <p>{item?.subtitle}</p>
                                </div>
                                <div className="award-btn-wrapper">
                                  <span className="award-btn">
                                    <span>
                                      <ArrowOutwardIcon />
                                      <ArrowOutwardIcon />
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </a>
                            {index === currentImageIndex && (
                              <img
                                src={item?.image}
                                alt={`Image ${index + 1}`}
                                ref={
                                  index === currentImageIndex
                                    ? followImgRef
                                    : null
                                }
                                className="hover-reveal-bg"
                                style={{
                                  opacity:
                                    isHovered && index === currentImageIndex
                                      ? 1
                                      : 0,
                                  transition: "opacity 0.2s ease-in-out",
                                }}
                              />
                            )}
                            <div className="award-inner-border"></div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div
            className="brand-area brand-plr"
            style={{ paddingBottom: "100px" }}
          >
            <div className="container-fluid">
              <div className="row col-xl-6 col-lg-4 col-md-3 col-sm-2">
                <div className="col-xl-6 mb-20">
                  <div className="brand-item"></div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </main>
      </div>
    </>
  );
};

export default About;
