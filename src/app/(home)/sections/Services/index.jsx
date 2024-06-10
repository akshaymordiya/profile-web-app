import React from "react";
import IMG from "@/app/components/IMG";
import Grid from "@/app/components/Grid";
import ServiceBox from "@/app/(home)/sections/Services/Client/ServiceBox";
import homeData from "../../../../data/home.page.json";
import "./index.scss";
import SectionTitle from "@/app/components/SectionTitle";

const Services = () => {
  const BASE_CLASSNAME = "services_container";
  return (
    <section id="services" className={`${BASE_CLASSNAME}`}>
      <div className={`${BASE_CLASSNAME}_service_shape_cirlce`}>
        <IMG
          src={homeData.service.circleimg}
          alt="circle_shape-img"
          useContainer
          useRawImgTag
          containerClasses="img_container"
          imageClasses="circle_img"
        />
        <div className="half-circle-svg_container">
          <svg
            width="260"
            height="70"
            viewBox="0 0 260 70"
            fill="#ffffff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M68.7285 34.1352C48.3941 10.6976 13.8796 0.514191 0 0.514191C93.4783 0.514191 276.081 -0.642708 258.863 0.514191C236.79 1.99739 217.224 6.94161 191.137 34.1352C140.468 93.9609 98.3272 68.2507 68.7285 34.1352Z"
              fill="currentcolor"
            ></path>
          </svg>
        </div>
      </div>

      {homeData.service.images.map((item, index) => (
        <IMG
          key={index}
          src={item?.image}
          alt={item?.alt}
          useContainer
          useRawImgTag
          containerClasses={item?.containerclass}
          imageClasses={item?.imageclass}
        />
      ))}
      <Grid classNames={`${BASE_CLASSNAME}_grid_wrapper`}>
        <Grid.Item xs={12} sm={12} md={12} lg={6} xlg={6}>
          <div className={`${BASE_CLASSNAME}_grid_wrapper_col-left`}>
            <div className="sticky-wrapper">
              <span className="pre-title" data-aos="flip-up">
                {homeData.service.title}
              </span>
              <SectionTitle
                animationName="flip-up"
                animationduration="2000"
                animationdelay="200"
                interClass="title"
                title="How We Carry Out Our Projects"
                para="We offer a range of services to help elevate your brand & drive results."
              />
            </div>
          </div>
        </Grid.Item>
        <Grid.Item xs={12} sm={12} md={12} lg={6} xlg={6}>
          <ServiceBox />
        </Grid.Item>
      </Grid>
    </section>
  );
};

export default Services;
