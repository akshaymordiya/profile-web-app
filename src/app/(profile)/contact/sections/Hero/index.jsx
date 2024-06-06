import AnimatedCharactors from "@/app/components/AnimatedCharactors";
import Grid from "@/app/components/Grid";
import IMG from "@/app/components/IMG";
import React from "react";
import "./index.scss";
import contact from "../../../../../data/contact.page.json";
import Link from "next/link";

const Hero = () => {
  const BASE_CLASSNAME = "contact-area";
  return (
    <>
      <div className={`${BASE_CLASSNAME}`}>
        <Grid classNames={`${BASE_CLASSNAME}_wrapper`}>
          <Grid.Item xs={12} sm={12} md={12} lg={12} xlg={12}>
            <Grid>
              <Grid.Item
                xs={12}
                sm={12}
                md={12}
                lg={9}
                xlg={10}
                itemClass="contact-title"
              >
                <span className="contact-subtitle">Contact Us</span>
                <br />
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
                <br />
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
                itemClass="contactShape"
              >
                <div className="contactshape1 ">
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
            <Grid classNames="contact-mail-box">
              <Grid.Item
                sm={12}
                xs={12}
                md={6}
                lg={6}
                xlg={6} 
                itemClass="contact-mail-info"
              >
                <span>{contact.mailinfo.title}</span>
                <Link href="mailto:abc@gmail.com">{contact.mailinfo.text}</Link>
              </Grid.Item>
              <Grid.Item
                sm={12}
                xs={12}
                md={6}
                lg={6}
                xlg={6}
                itemClass="contact-mail-text"
              >
                <p>
                 {contact.mailinfo.para}
                </p>
              </Grid.Item>
            </Grid>
          </Grid.Item>
        </Grid>
      </div>
    </>
  );
};

export default Hero;
