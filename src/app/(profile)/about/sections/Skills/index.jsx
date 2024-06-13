import React from 'react';
import Link from 'next/link';
//components
import IMG from "@/app/components/IMG";
import SectionBox from "@/app/components/SectionBox";
import Grid from "@/app/components/Grid";
//partials
import SkillSets from '../../partials/Skillsets';

import "./index.scss";
import Sticky from '@/app/components/Sticky';

const BASE_CLASSNAME = "skills_container"

const Skills = ({
  data = {}
}) => {

  const {
    info,
    content
  } = data

  return (
    <Sticky
      behaviour={{
        "parent": "sticky_grid_container",
        "pos_left": {
          "id": "sticky_grid-col_left",
          "isSticky": true
        },
        "pos_right" : {
          "id": "sticky_grid-col_right"
        },
      }}
      removeStickyonSmallerDevices
    >
      <div className={`${BASE_CLASSNAME}`}>
        <Grid 
          classNames={`${BASE_CLASSNAME}_grid`}
          id="sticky_grid_container"
        >
          <Grid.Item
            xs={12}
            sm={12}
            md={6}
            lg={4}
            xlg={4}
            itemClass={`${BASE_CLASSNAME}_grid-col-1`}
            data-speed="0.5"
            id="sticky_grid-col_left"
          >
            <SectionBox
              icon={info.icon}
              iconProps={{
                class: "box_icon"              
              }}
              title={info.title}
              containerClass='box'
            >
              <div className="box_content" >
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
          </Grid.Item>
          <Grid.Item
            xs={12}
            sm={12}
            md={6}
            lg={8}
            xlg={8}
            itemClass={`${BASE_CLASSNAME}_grid-col-2`}
            data-speed="0.5"
            id="sticky_grid-col_right"
          >
            <SkillSets content={content} />
          </Grid.Item>
        </Grid>
      </div>
    </Sticky>
  )
}

export default Skills