import React from "react";
import "./page.scss";
import Navbar from "@/app/components/Navbar";
import ResponsiveSlider from "@/app/components/slider/Slider";
import ServicePanalArea from "@/app/components/servicePanalarea/ServicePanalArea";
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
import Footerasocial from "@/app/components/footerservice/footerasocial";
import FooterService from "@/app/components/footerservice/FooterService";

//TODO:: The child page of Services route
function Services() {
  return (
    <>
      <Navbar />
      <main>
        <div className="inner-slider-area inner-slider-plr">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6 col-xl-6">
                <div className="inner-slider-content-main d-flex justify-content-xl-end justify-content-start">
                  <div className="inner-slider-content-wrap">
                    <div className="inner-slider-title-box">
                      <h4 className="inner-slider-title">
                        High Quality <br /> Projects
                      </h4>
                    </div>
                    <div className="inner-service-list-wrap">
                      <div className="inner-service-list list-1 wow tpfadeUp">
                        <span>Over 40 Websites Built With Envato</span>
                      </div>
                      <div className="inner-service-list list-2 wow tpfadeUp">
                        <span>Visual Designer for 10+ years</span>
                      </div>
                      <div className="inner-service-list list-3 wow tpfadeUp">
                        <span>UI/UX Designer, Envato</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-6">
                <div className="inner-slider-main">
                  <ResponsiveSlider />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ServicePanalArea />
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
                  <h4 className="inner-info-title">
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
                  <h4 className="inner-section-title">Services & Pricing</h4>
                  <p>No surprises. No hassles. Just right.</p>
                </div>
              </div>
            </div>
            <ServicePrice />
          </div>
        </section>

        <BrandButton />
        <FooterService />
      </main>
    </>
  );
}

export default Services;
