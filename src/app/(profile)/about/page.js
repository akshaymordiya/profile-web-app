import React from "react";
import "./page.scss";
import Footer from "@/app/components/Footer";
import Counter from "@/app/components/CounterUp";
import Navbar from "@/app/components/Navbar";
import BrandButton from "@/app/components/Brand";
import CustomCursor from "@/app/components/MouseCursor";
import Grid from "@/app/components/Grid";
import IMG from "@/app/components/IMG";
import SectionTitle from "@/app/components/SectionTitle";
import Awards from "@/app/components/Award";
import Aos from "@/app/components/AOS";
import "aos/dist/aos.css";
import AboutHero from "@/app/components/AboutHero";
import PersonalInfo from "@/app/components/PersonalInfo";

const About = () => {
  const BASE_CLASSNAME = "grid-container";

  return (
    <>
      <Aos />
      <Navbar />
      <div id="smooth-content">
        <main>
          <AboutHero />
          <PersonalInfo />
          <Counter />

          {/* <section
            className="award-area"
            style={{ paddingTop: "120px", paddingBottom: "0px" }}
          >
            <div className="container">
              <Grid classNames={`${BASE_CLASSNAME}_grid`}>
                <Grid.Item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xlg={5}
                  itemClass="award-wrapper"
                  style={{ marginBottom: "30px" }}
                >
                  <SectionTitle
                    animationduration="2000"
                    animationdelay="100"
                    animationName="flip-up"
                    interClass="award-section-title"
                    title="Awards & recognitions"
                  />
                  <div className="award-text-wrapper position-relative">
                    <h3 className="award-text-outline">Award</h3>
                    <h3 className="award-text-fill">Award</h3>
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
                  lg={12}
                  xlg={7}
                  itemClass="award-item-wrapper"
                >
                  <Awards />
                </Grid.Item>
              </Grid>
            </div>
          </section> */}
          <BrandButton snowflakeCount={10} delay={200} />
          {/* <BrandButton /> */}
          <Footer />
        </main>
      </div>
      <CustomCursor />
    </>
  );
};

export default About;
