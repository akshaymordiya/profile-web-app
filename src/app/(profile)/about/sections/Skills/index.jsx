import React from 'react';
import Link from 'next/link';
//components
import IMG from "@/app/components/IMG";
import SectionBox from "@/app/components/SectionBox";
import Grid from "@/app/components/Grid";
//partials
import SkillSets from '../../partials/Skillsets';


import "./index.scss";
import ParallaxScroll from '@/app/components/ParallaxScroll';

const BASE_CLASSNAME = "skills_container"

const Skills = ({
  data = {}
}) => {

  const {
    info,
    content
  } = data

  return (
    <div className={`${BASE_CLASSNAME} personal-info-pin-section`}>
      <Grid classNames={`${BASE_CLASSNAME}_grid`}>
        <Grid.Item
          xs={12}
          sm={12}
          md={6}
          lg={4}
          xlg={4}
          itemClass={`${BASE_CLASSNAME}_grid-col-1`}
          data-speed="0.5"
        >
          <ParallaxScroll speed={0.2}>
            <SectionBox
              icon={info.icon}
              iconProps={{
                class: "box_icon"              
              }}
              title={info.title}
              containerClass='box'
            >
              <div className="box_content">
                <p>{info.description}</p>
                <Link 
                  href={`mailto:${info.email}`}
                  className='link'
                >
                  {info.email}
                </Link>
                <Link href={`tel:${info.number}`} className='link'>   
                  <span>
                    <IMG 
                      useRawImgTag 
                      src={info.image} 
                    />
                  </span>
                  {info.number}
                </Link>
              </div>
            </SectionBox>
          </ParallaxScroll>
        </Grid.Item>
        <Grid.Item
          xs={12}
          sm={12}
          md={6}
          lg={8}
          xlg={8}
          itemClass={`${BASE_CLASSNAME}_grid-col-2`}
          data-speed="0.5"
        >
          <SkillSets content={content} />
        </Grid.Item>
      </Grid>
    </div>
  )
}

export default Skills