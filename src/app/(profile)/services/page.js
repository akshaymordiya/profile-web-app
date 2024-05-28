import React from "react";
import "./page.scss";
import Navbar from "@/app/components/Navbar";
import ResponsiveSlider from "@/app/components/Slider";
import shapeImage from "../../../../public/assets/service-shape-1.png";
import shapeImagecircle from "../../../../public/assets/service-shape-2.png";
import starImage from "../../../../public/assets/star.png";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import ViewQuiltOutlinedIcon from "@mui/icons-material/ViewQuiltOutlined";
import VerticalSplitOutlinedIcon from "@mui/icons-material/VerticalSplitOutlined";
import AodOutlinedIcon from "@mui/icons-material/AodOutlined";
import AndroidOutlinedIcon from "@mui/icons-material/AndroidOutlined";
import CoronavirusOutlinedIcon from "@mui/icons-material/CoronavirusOutlined";
import AutoAwesomeMotionOutlinedIcon from "@mui/icons-material/AutoAwesomeMotionOutlined";
import StarIcon from "@mui/icons-material/Star";
import SlideNav from "@/app/components/Slidernav";
import BrandButton from "@/app/components/Brand";
import ServicePrice from "@/app/components/ServicePrice";
import ServiceCategory from "@/app/components/ServiceCategory";
import FooterService from "@/app/components/FooterService";
import CustomCursor from "@/app/components/MouseCursor";
import Aos from "@/app/components/AOS";
import Grid from "@/app/components/Grid";
import InnerServiceList from "@/app/components/InnerServiceList";
import SectionTitle from "@/app/components/SectionTitle";
import ServiceCard from "@/app/components/ServiceCard";
import IMG from "@/app/components/IMG";

//TODO:: The child page of Services route
function Services() {
  const BASE_CLASSNAME = "services-container";

  const desingData = [
    {
      title: "Web Design",
      iconleft: <ViewQuiltOutlinedIcon />,
    },
    {
      title: "UI/UX Design",
      iconleft: <VerticalSplitOutlinedIcon />,
    },
    {
      title: "Mobile App Design",
      iconleft: <AodOutlinedIcon />,
    },
    {
      title: "Branding",
      iconleft: <AndroidOutlinedIcon />,
    },
  ];
  const devData = [
    {
      title: "Web Development",
      iconleft: <AutoAwesomeMotionOutlinedIcon />,
    },
    {
      title: "Software Development",
      iconleft: <CoronavirusOutlinedIcon />,
    },
    {
      title: "CMS Development",
      iconleft: <AodOutlinedIcon />,
    },
    {
      title: "Front-End Development",
      iconleft: <AndroidOutlinedIcon />,
    },
  ];

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
                animationName="flip-up"
                animationduration="2000"
                animationdelay="300"
                interClass="inner-slider-title"
                title="High Quality Projects"
              />
              <InnerServiceList
                animationName="fade-up"
                animationduration="2000"
                animationdelay="300"
                listclass="inner-service-list list-1"
                listName="Over 40 Websites Built With Envato"
              />
              <InnerServiceList
                animationName="fade-up"
                animationduration="2000"
                animationdelay="500"
                listclass="inner-service-list list-2"
                listName="Visual Designer for 10+ years"
              />
              <InnerServiceList
                animationName="fade-up"
                animationduration="2000"
                animationdelay="700"
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
          <IMG
            src={shapeImage}
            containerClasses="service-shape-1"
            alt="shape-img"
            useContainer
          />
          <IMG
            src={shapeImagecircle}
            alt="circle_shape-img"
            useContainer
            containerClasses="service-shape-2"
          />
          <IMG
            src={starImage}
            alt="star-img"
            useContainer
            containerClasses="service-shape-3"
          />
          <Grid classNames={`${BASE_CLASSNAME}_grid container`}>
            <Grid.Item
              xs={12}
              sm={12}
              md={12}
              lg={6}
              xlg={5}
              itemClass="service-card"
              data-speed="0.5"
            >
              <div className="stack_card">
                <div className="service-title-box services-panel-pin">
                  <span
                    className="section-subtitle"
                    data-aos="flip-up"
                    data-aos-duration="1200"
                  >
                    OUR PROCESS
                  </span>
                  <h3
                    className="section-title"
                    data-aos="flip-up"
                    data-aos-duration="2000"
                    data-aos-delay="300"
                  >
                    How We
                    <br />
                    Carry Out Our
                    <br />
                    Projects
                  </h3>
                  <p
                    data-aos="flip-up"
                    data-aos-duration="2000"
                    data-aos-delay="300"
                  >
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
                title="Refined branding and web design 
                      strategically created to tell your story, make
                      a connection and establish a cutting-edge 
                      online and offline presence."
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
                    title="Design"
                    Icon={<StarIcon />}
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
                  {desingData.map((item) => {
                    return (
                      <ServiceCategory
                        serviceTitle={item?.title}
                        serviceIconLeft={item?.iconleft}
                        serviceIconRight={<ArrowOutwardOutlinedIcon />}
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
                    title="Development"
                    Icon={<StarIcon />}
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
                  {devData.map((item) => {
                    return (
                      <ServiceCategory
                        serviceTitle={item?.title}
                        serviceIconLeft={item?.iconleft}
                        serviceIconRight={<ArrowOutwardOutlinedIcon />}
                      />
                    );
                  })}
                </Grid.Item>
              </Grid>
            </Grid.Item>
          </Grid>
        </div>

        <section className="testimonial-area">
          <Grid classNames="container">
            <Grid.Item xs={12} sm={12} md={12} lg={12} xlg={12}>
              <SlideNav />
            </Grid.Item>
          </Grid>
        </section>

        <section className="inner-price-area">
          <Grid>
            <Grid.Item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xlg={12}
              itemClass="inner-price-title-box"
            >
              <SectionTitle
                interClass="inner-section-title"
                title="Services & Pricing"
                para="No surprises. No hassles. Just right."
                animationName="flip-up"
                animationduration="2000"
                animationdelay="200"
              />
            </Grid.Item>
          </Grid>
          <div className="container">
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
