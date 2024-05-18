import React from 'react';

import CTA from '@/app/components/CTA';
import IMG from '@/app/components/IMG';
import SocialLinks from '@/app/components/SocialLinks';
import Scroll from '@/app/components/Scroll';
import Grid from '@/app/components/Grid';
import AnimatedCharactors from '@/app/components/AnimatedCharactors';

import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

import { TbArrowDownRight } from "react-icons/tb";

import "./index.scss";

const BASE_CLASSNAME = "hero-container"

const Hero = () => {
  return (
    <section className={BASE_CLASSNAME}>
      {['top', 'bottom'].map((pos, index) => (
        <IMG 
          key={`img-${index + 3}`}
          src={`/assets/hero-shape-2-${index + 1}.png`}
          useContainer
          useRawImgTag
          containerClasses={`shape ${pos}`}
          imageClasses='shape_img'
          alt={`'shape-${index + 1}`}
        />
      ))}
      <SocialLinks
        wrapperClasses={`${BASE_CLASSNAME}_social_links_container`}
        linkClasses="social_link" 
      />
      <Scroll
        scrollHref='#about'
        text='Scroll'
        scrollClass='scroll_down'
        icon={KeyboardDoubleArrowDownIcon}
        iconProps={{
          className: "scroll_icon"
        }}
      />
      <Grid classNames={`${BASE_CLASSNAME}_grid`}>
        <Grid.Item 
          xs={12}
          sm={12}
          md={12}
          lg={12} 
          xlg={7} itemClass='charactor_Wrapper top'
        >
          <AnimatedCharactors
            charactors='creative'
            capitlized
            leftSpaceOnLastCharactor
            charactorClass='charactor_bg'
          />
        </Grid.Item>
        <Grid.Item
          xs={12}
          sm={12}
          md={12}
          lg={12} 
          xlg={5} itemClass='video_animation'>
          <span>
            <video
              id="myvideo"
              src="/assets/diego-video.mp4"
              autoPlay
              loop
              playsInline
            ></video>
          </span>
        </Grid.Item>
        <Grid.Item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xlg={12} itemClass='charactor_Wrapper bottom'>
          <AnimatedCharactors
            charactors='visual'
            capitlized
            leftSpaceOnLastCharactor
            wrapperClass='first_text'
            charactorClass='charactor_bg'
          />
          <AnimatedCharactors 
            charactors='Designer'
            capitlized
            leftSpaceOnLastCharactor
            charactorClass='charactor_bg'
          />
        </Grid.Item>
        <Grid.Item
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xlg={5}
          itemClass='cta'
        >
          <CTA 
            linkText='View Our Work'
            linkHref='/work'
            linkClass='btn-blue'
            icon={TbArrowDownRight}
            iconProps={{
              className: 'navagation_icon',
              fontSize: 'sm'
            }}
          />
        </Grid.Item>
        <Grid.Item
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xlg={7} 
          itemClass='description_text'
        >
            Hello, I am Diego a designer from Barcelona. Specialised in creating fantastic digital experiences.!
        </Grid.Item>
      </Grid>
    </section>
  )
}

export default Hero