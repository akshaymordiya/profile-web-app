import AnimatedCharactors from "@/app/components/AnimatedCharactors";
import Grid from "@/app/components/Grid";
import IMG from "@/app/components/IMG";
import React from "react";
import contact from "../../../../data/contact.page.json";

const Hero = () => {
  const BASE_CLASSNAME = "contact-area";
  return (
    <>
      <div className="contact-area">
        <div className="container">
          <span className="contact-subtitle">Contact Us</span>
          <Grid classNames={`${BASE_CLASSNAME}_wrapper`}>
            <Grid.Item xs={12} sm={12} md={12} lg={11} xlg={11}>
              <Grid>
                <Grid.Item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={9}
                  xlg={10}
                  itemClass="contact-title"
                >
                  {contact.getIntouch.name.map((item, index) => (
                    <AnimatedCharactors
                      key={index}
                      charactorClass="animated-letter"
                      capitlized
                      charactors={item}
                      leftSpaceOnLastCharactor
                    />
                  ))}
                  <IMG
                    src={contact.getIntouch.image}
                    alt="contactImg"
                    useRawImgTag
                    imageClasses="contact-img"
                  />
                  {contact.getIntouch.Subname.map((item, index) => (
                    <AnimatedCharactors
                      key={index}
                      charactorClass="animated-letter"
                      capitlized
                      charactors={item}
                      leftSpaceOnLastCharactor
                    />
                  ))}
                </Grid.Item>
                <Grid.Item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={3}
                  xlg={2}
                  itemClass="contactShape d-sm-block"
                >
                  <div className="contactshape1 text-lg-end">
                    <IMG
                      src={contact.getIntouch.flowerImg}
                      imageClasses="flower-img"
                      useRawImgTag
                      alt="flower-img"
                    />
                    <IMG
                      src={contact.getIntouch.flowerText}
                      useRawImgTag
                      alt="flower-text"
                    />
                  </div>
                </Grid.Item>
              </Grid>
            </Grid.Item>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Hero;
