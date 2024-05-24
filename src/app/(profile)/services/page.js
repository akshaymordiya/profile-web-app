import React from "react";
import "./page.scss";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import ResponsiveSlider from "@/app/components/slider/Slider";
// import ServicePanalArea from "@/app/components/servicePanalarea/ServicePanalArea";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import ViewQuiltOutlinedIcon from "@mui/icons-material/ViewQuiltOutlined";
import VerticalSplitOutlinedIcon from "@mui/icons-material/VerticalSplitOutlined";
import AodOutlinedIcon from "@mui/icons-material/AodOutlined";
import AndroidOutlinedIcon from "@mui/icons-material/AndroidOutlined";
import CoronavirusOutlinedIcon from "@mui/icons-material/CoronavirusOutlined";
import AutoAwesomeMotionOutlinedIcon from "@mui/icons-material/AutoAwesomeMotionOutlined";
import StarIcon from "@mui/icons-material/Star";
import SlideNav from "@/app/components/Slidernav/SlideNav";
import BrandButton from "@/app/components/Brand/BrandButton";
import ServicePrice from "@/app/components/ServicePrice/ServicePrice";
import ServiceCategory from "@/app/components/servicecategory/ServiceCategory";
import FooterService from "@/app/components/footerservice/FooterService";
import CustomCursor from "@/app/components/MouseCursor/MouseCursor";
import Aos from "@/app/components/AOS/aos";
import Grid from "@/app/components/Grid";
import InnerServiceList from "@/app/components/inner_service_list/InnerServiceList";
import SectionTitle from "@/app/components/SectionTitle/SectionTitle";
import ServiceCard from "@/app/components/servicecard/ServiceCard";

//TODO:: The child page of Services route
function Services() {
  const BASE_CLASSNAME = "services-container";

  return (
    <>
      <Aos />
      <Navbar />
      <main>
        <Grid classNames={`${BASE_CLASSNAME} inner-slider-area`}>
          <Grid.Item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xlg={6}
            itemClass="inner-slider-content-main"
            data-speed="0.5"
          >
            <div className="inner-slider-content-wrap">
              <SectionTitle
                interClass="inner-slider-title"
                title="High Quality Projects"
              />
              <InnerServiceList
                listclass="inner-service-list list-1"
                listName="Over 40 Websites Built With Envato"
              />
              <InnerServiceList
                listclass="inner-service-list list-2"
                listName="Visual Designer for 10+ years"
              />
              <InnerServiceList
                listclass="inner-service-list list-3"
                listName="UI/UX Designer, Envato"
              />
            </div>
          </Grid.Item>
          <Grid.Item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xlg={6}
            itemClass="inner-slider-main"
            data-speed="0.5"
          >
            <ResponsiveSlider />
          </Grid.Item>
        </Grid>

        <div className="service-area">
          <div className="service-circle-img">
            <span className="text-img">
              <img src="/assets/footer-circle-img.png" alt="" />
            </span>
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
          {/* <Image
          src='/assets/service-shape-1.png'
          alt='circle_shape-img'
          useContainer
          containerClasses="service-shape-1"
        />
          <Image
          src='/assets/service-shape-2.png'
          alt='circle_shape-img'
          useContainer
          containerClasses="service-shape-2"
        />
          <Image
          src='/assets/star.png'
          alt='circle_shape-img'
          useContainer
          containerClasses="service-shape-3"
        /> */}
          <Grid classNames={`${BASE_CLASSNAME}_grid container`}>
            <Grid.Item xs={12} sm={12} md={12} lg={6} xlg={5} data-speed="0.5">
              <div className="stack_card">
                <div className="service-title-box services-panel-pin">
                  <span
                    className="section-subtitle"
                    data-aos="flip-up"
                    data-aos-duration="800"
                  >
                    OUR PROCESS
                  </span>
                  {/* <SectionTitle
                    interClass="section-title"
                    title="How WeCarry Out Our Projects"
                    para="We offer a range of services to help elevate your brand & drive results."
                    data-aos="flip-up"
                    data-aos-duration="1000"
                  /> */}
                  <h3 className="section-title">
                    How We
                    <br />
                    Carry Out Our
                    <br />
                    Projects
                  </h3>
                  <p>
                    We offer a range of services to help elevate <br />
                    your brand & drive results.
                  </p>
                </div>
              </div>
            </Grid.Item>
            <Grid.Item xs={12} sm={12} md={12} lg={6} xlg={7} data-speed="0.5">
              <ServiceCard />
            </Grid.Item>
          </Grid>
        </div>
        <div
          className="inner-info-area"
          style={{ paddingTop: "120px", paddingBottom: "90px" }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-9">
                <div
                  className="inner-info-title-box"
                  style={{ marginBottom: "90px" }}
                >
                  <h4
                    className="inner-info-title"
                    data-aos="flip-up"
                    data-aos-duration="2000"
                  >
                    Refined branding and web design <br />
                    strategically created to tell your story, make <br />
                    a connection and establish a cutting-edge <br />
                    online and offline presence.
                  </h4>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-9">
                <div className="row" style={{ marginBottom: "100px" }}>
                  <div className="col-xl-4">
                    <div className="inner-info-service">
                      <h4 className="inner-left-title">
                        <span>
                          <StarIcon />
                        </span>
                        Design
                      </h4>
                    </div>
                  </div>
                  <div className="col-xl-8">
                    <div className="inner-service-category-wrap">
                      <ServiceCategory
                        serviceTitle="Web Design"
                        serviceIconLeft={<ViewQuiltOutlinedIcon />}
                        serviceIconRight={<ArrowOutwardOutlinedIcon />}
                      />
                      <ServiceCategory
                        serviceTitle="UI/UX Design"
                        serviceIconLeft={<VerticalSplitOutlinedIcon />}
                        serviceIconRight={<ArrowOutwardOutlinedIcon />}
                      />
                      <ServiceCategory
                        serviceTitle="Mobile App Design"
                        serviceIconLeft={<AodOutlinedIcon />}
                        serviceIconRight={<ArrowOutwardOutlinedIcon />}
                      />
                      <ServiceCategory
                        serviceTitle="Branding"
                        serviceIconLeft={<AndroidOutlinedIcon />}
                        serviceIconRight={<ArrowOutwardOutlinedIcon />}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-9">
                <div className="row">
                  <div className="col-xl-4">
                    <div className="inner-info-service">
                      <h4 className="inner-left-title">
                        <span>
                          <StarIcon />
                        </span>
                        Development
                      </h4>
                    </div>
                  </div>
                  <div className="col-xl-8">
                    <div className="inner-service-category-wrap">
                      <ServiceCategory
                        serviceTitle="Web Development"
                        serviceIconLeft={<AutoAwesomeMotionOutlinedIcon />}
                        serviceIconRight={<ArrowOutwardOutlinedIcon />}
                      />
                      <ServiceCategory
                        serviceTitle="Software Development"
                        serviceIconLeft={<CoronavirusOutlinedIcon />}
                        serviceIconRight={<ArrowOutwardOutlinedIcon />}
                      />
                      <ServiceCategory
                        serviceTitle="CMS Development"
                        serviceIconLeft={<AodOutlinedIcon />}
                        serviceIconRight={<ArrowOutwardOutlinedIcon />}
                      />
                      <ServiceCategory
                        serviceTitle="Front-End Development"
                        serviceIconLeft={<AndroidOutlinedIcon />}
                        serviceIconRight={<ArrowOutwardOutlinedIcon />}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section
          className="testimonial-area inner-customize"
          style={{ paddingBottom: "160px", paddingTop: "25px" }}
        >
          <div className="container">
            <SlideNav />
          </div>
        </section>
        <section
          className="inner-price-area inner-price-customize"
          style={{ paddingBottom: "70px" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="inner-price-title-box text-center">
                  <h4
                    className="inner-section-title"
                    data-aos="flip-up"
                    data-aos-duration="1200"
                  >
                    Services & Pricing
                  </h4>
                  <p data-aos="flip-up" data-aos-duration="1400">
                    No surprises. No hassles. Just right.
                  </p>
                </div>
              </div>
            </div>
            <ServicePrice />
          </div>
        </section>

        <BrandButton />
        <FooterService />
      </main>
      <CustomCursor />
    </>
  );
}

export default Services;
