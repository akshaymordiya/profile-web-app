import AnimatedCharactors from "@/app/components/AnimatedCharactors";
import Grid from "@/app/components/Grid";
import IMG from "@/app/components/IMG";
import React from "react";
import "./index.scss";
import Link from "next/link";

const BASE_CLASSNAME = "contact-area_container";

const Hero = ({ data = {} }) => {
  const { mailinfo } = data;

  return (
    <Grid 
      classNames={BASE_CLASSNAME}
    >
      <Grid.Item 
        xs={12} 
        sm={12} 
        md={12} 
        lg={9} 
        xlg={10}
        itemClass={`${BASE_CLASSNAME}_col-1`}
      >
        <span className="title">{data.title}</span>
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
        itemClass={`${BASE_CLASSNAME}_col-2`}
      >
        <div className="shape">
          <IMG
            src={data.flowerImg}
            imageClasses="flower-img"
            useRawImgTag
            alt="flower-img"
          />
          <IMG src={data.flowerText}
            useRawImgTag
            alt="flower-text" />
        </div>
      </Grid.Item>
      <Grid.Item
        sm={12}
        xs={12}
        md={6}
        lg={6}
        xlg={6}
        itemClass={`${BASE_CLASSNAME}_col-3`}
      >
        <span className="mail_text">{mailinfo.title}</span>
        <Link href={`mailto:${mailinfo.text}`} className="mail_link">{mailinfo.text}</Link>
      </Grid.Item>
      <Grid.Item
        sm={12}
        xs={12}
        md={6}
        lg={6}
        xlg={6}
        itemClass={`${BASE_CLASSNAME}_col-4`}
      >
        <p className="text">{mailinfo.para}</p>
      </Grid.Item>
    </Grid>
  );
};

export default Hero;
