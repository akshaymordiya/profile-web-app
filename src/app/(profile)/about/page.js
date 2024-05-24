"use client";
import React from "react";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import "./page.scss";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import "animate.css";
import Footer from "@/app/components/footer/Footer";
import Counter from "@/app/components/sections/counterup/countup";
import Navbar from "@/app/components/Navbar";
import BrandButton from "@/app/components/Brand/BrandButton";
import CustomCursor from "@/app/components/MouseCursor/MouseCursor";
import Grid from "@/app/components/Grid";
import AnimatedCharactors from "@/app/components/AnimatedCharactors";
import CTA from "@/app/components/CTA";
import IMG from "@/app/components/IMG";
import Signature from "../../../../public/assets/service-signature.png";
import CircleImg from "../../../../public/assets/service-circle-img.png";
import ServiceImg from "../../../../public/assets/service-hero-1.webp";
import Services from "@/app/components/services/Services";
import ServiceShape from "../../../../public/assets/hero-shape-2-1.png";
import SectionTitle from "@/app/components/SectionTitle/SectionTitle";
import SkillSets from "@/app/components/Skillsets/SkillSets";
import Awards from "@/app/components/Award/Awards";

const About = () => {
  const BASE_CLASSNAME = "grid-container";

  return (
    <>
      <Navbar />
      <div id="smooth-content">
        <main>
          <div className="services-area">
            <IMG
              src={ServiceShape}
              useContainer={true}
              containerClasses={"services-shape-1"}
              alt="service_shape"
            />
            <div className="container">
              <Grid classNames={`${BASE_CLASSNAME}_grid`}>
                <Grid.Item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  xlg={6}
                  itemClass="service__title"
                  data-speed="0.5"
                >
                  <AnimatedCharactors
                    charactors="I'm"
                    wrapperClass="animated-letter"
                  />
                  <AnimatedCharactors
                    charactors="Diego"
                    wrapperClass="animated-letter"
                  />
                  <AnimatedCharactors
                    charactors="luna"
                    wrapperClass="animated-letter"
                  />

                  <CTA
                    btn_color="btn-border-sm"
                    linkText="Download CV"
                    linkClass="btn-border-sm"
                    linkHref="#"
                    icon={SaveAltIcon}
                  />
                </Grid.Item>

                <Grid.Item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  xlg={6}
                  itemClass="service-right-box"
                  data-speed="0.5"
                >
                  <IMG
                    src={Signature}
                    useContainer={true}
                    containerClasses={"service-signature"}
                    alt="Circle_img"
                  />
                  <IMG
                    src={CircleImg}
                    useContainer={true}
                    containerClasses={"servicecircle-img"}
                    alt="service-circle"
                  />
                  <IMG
                    src={ServiceImg}
                    useContainer={true}
                    containerClasses={"service-img"}
                    style={{
                      width: "100px",
                      Height: "100px",
                      color: "transparent",
                      height: "auto",
                    }}
                    alt="service_img"
                  />
                </Grid.Item>
              </Grid>
            </div>
          </div>

          <div className="service-info-area" style={{ paddingBottom: "80px" }}>
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
                    I'm Diego <span className="line"></span> a self though &
                    self learned designer based in USA. I started as a financial
                    planner & social media marketer, but now I do mix of
                    everything from &nbsp;
                    <Services
                      ServiceName={"Product Design,"}
                      ServiceImage={"/assets/ab-1.png"}
                    />
                    <Services
                      ServiceName={"Photography,"}
                      ServiceImage={"/assets/ab-2.png"}
                    />
                    <Services
                      ServiceName={"Web Design,"}
                      ServiceImage={"/assets/ab-3.png"}
                    />
                    <Services
                      ServiceName={"Graphic Design"}
                      ServiceImage={"/assets/ab-4.png"}
                    />
                  </div>
                </Grid.Item>
              </Grid>
            </div>
          </div>

          <div
            className="personal-info-area personal-info-pin-section"
            style={{ paddingBottom: "30px" }}
          >
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
                    Icon={<DriveFileRenameOutlineIcon />}
                    title="Personal Info"
                    para=" Perceived end knowledge certainly day sweetness why cordially."
                  />
                  <a href="#">example@gmail.com</a>
                  <a href="#">
                    <span>
                      <img src="/assets/whatsap.png" />
                    </span>
                    +491 234 5678
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
          <div
            className="funfact-area funfact-plr z-index-1 position-relative fix"
            style={{ paddingTop: "110px", paddingBottom: "60px" }}
          >
            <div className="container">
              <div className="row">
                <Counter />
              </div>
            </div>
          </div>

          <section
            className="award-area award-customize"
            style={{ paddingTop: "120px", paddingBottom: "0px" }}
          >
            <div className="container">
              <Grid classNames={`${BASE_CLASSNAME}_grid`}>
                <Grid.Item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={6}
                  xlg={5}
                  itemClass="award-wrapper"
                  style={{ marginBottom: "30px" }}
                >
                  <SectionTitle
                    interClass="award-section-title"
                    title="Awards & recognitions"
                  />
                  <div className="award-text-wrapper posotion-relative">
                    <h3 className="award-text-outline d-none d-xl-block">
                      Award
                    </h3>
                    <h3 className="award-text-fill d-none d-xl-block">Award</h3>

                    <IMG
                      src="/assets/award-shape-1.png"
                      containerClasses="award-shape"
                      imageClasses="award-shape-1"
                      useContainer={true}
                      useRawImgTag={true}
                    />
                  </div>
                </Grid.Item>
                <Grid.Item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={6}
                  xlg={7}
                  itemClass="award-item-wrapper"
                  style={{ paddingTop: "100px", paddingLeft: "70px" }}
                >
                  <Awards />
                </Grid.Item>
              </Grid>
            </div>
          </section>
          <BrandButton />
          <Footer />
        </main>
      </div>
      <CustomCursor />
    </>
  );
};

export default About;
