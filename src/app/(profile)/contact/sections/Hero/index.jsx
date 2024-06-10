import AnimatedCharactors from "@/app/components/AnimatedCharactors";
import Grid from "@/app/components/Grid";
import IMG from "@/app/components/IMG";
import React from "react";
import "./index.scss";
import Link from "next/link";

const Hero = ({ data = {} }) => {
  const BASE_CLASSNAME = "contact-area";
  const { mailinfo } = data;
  return (
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
              <span className="contact-subtitle">{data.title}</span>
              <br />
              {data.name.map((item, index) => (
                <AnimatedCharactors
                  key={index}
                  charactorClass="animated-letter"
                  capitlized
                  charactors={item}
                  leftSpaceOnLastCharactor
                />
              ))}
              <IMG
                src={data.image}
                alt="contactImg"
                useRawImgTag
                imageClasses="contact-img"
              />
              <br />
              {data.Subname.map((item, index) => (
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
              <div className="contactshape1">
                <IMG
                  src={data.flowerImg}
                  imageClasses="flower-img"
                  useRawImgTag
                  alt="flower-img"
                />
                <IMG src={data.flowerText} useRawImgTag alt="flower-text" />
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
              <span>{mailinfo.title}</span>
              <Link href={`mailto:${mailinfo.text}`}>{mailinfo.text}</Link>
            </Grid.Item>
            <Grid.Item
              sm={12}
              xs={12}
              md={6}
              lg={6}
              xlg={6}
              itemClass="contact-mail-text"
            >
              <p>{mailinfo.para}</p>
            </Grid.Item>
          </Grid>
        </Grid.Item>
      </Grid>
    </div>
  );
};

export default Hero;
