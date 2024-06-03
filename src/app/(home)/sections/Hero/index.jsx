"use client";
import React from 'react';

import CTA from '@/app/components/CTA';
import IMG from '@/app/components/IMG';
import SocialLinks from '@/app/components/SocialLinks';
import Scroll from '@/app/components/Scroll';
import Grid from '@/app/components/Grid';
import AnimatedCharactors from '@/app/components/AnimatedCharactors';
import Animation from '@/app/components/Animation';
import ParallaxScroll from '@/app/components/ParallaxScroll';

//icons
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import CallMadeIcon from '@mui/icons-material/CallMade';

//lottie animations
import menWork from "../../../../../public/assets/lottie/men-work.json";

import "./index.scss";

const BASE_CLASSNAME = "hero-container"


const Hero = () => {
  return (
    <section className={BASE_CLASSNAME} >
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
        scrollHref='#services'
        text='Scroll'
        scrollClass='scroll_down'
        icon={KeyboardDoubleArrowDownIcon}
        iconProps={{
          className: "scroll_icon"
        }}
      />
      <ParallaxScroll speed={0.2}>
        <Grid classNames={`${BASE_CLASSNAME}_grid`}>
          <Grid.Item 
            xs={12}
            sm={12}
            md={12}
            lg={12} 
            xlg={8} 
            itemClass='charactor_Wrapper'
            data-speed="0.5"
          >
            <AnimatedCharactors
              charactors='creative'
              capitlized
              leftSpaceOnLastCharactor
              wrapperClass='word_text'
              charactorClass='charactor_bg'
            />
            <AnimatedCharactors
              charactors='visual'
              capitlized
              leftSpaceOnLastCharactor
              wrapperClass='word_text'
              charactorClass='charactor_bg'
            />
            <AnimatedCharactors 
              charactors='Designer'
              capitlized
              leftSpaceOnLastCharactor
              wrapperClass='word_text'
              charactorClass='charactor_bg'
            />
          </Grid.Item>
          <Grid.Item
            xs={12}
            sm={12}
            md={12}
            lg={12} 
            xlg={4} itemClass='lottie_animation'
            data-speed="0.5"
          >
            <Animation 
              animationData={menWork}
              loop
              autoplay
              className='lottie_animation_wrapper'
            />
          </Grid.Item>
          <Grid.Item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xlg={5}
            itemClass='cta'
            data-speed="0.8"
          >
            <CTA 
              linkText='View Our Work'
              linkHref='/work'
              linkClass='btn-blue'
              icon={CallMadeIcon}
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
            data-speed="0.8"
          >
              Hello, I am Diego a designer from Barcelona. Specialised in creating fantastic digital experiences.!
          </Grid.Item>
        </Grid>
      </ParallaxScroll>
    </section>
  )
}

export default Hero