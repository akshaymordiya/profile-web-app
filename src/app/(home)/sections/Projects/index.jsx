import React from "react";
import Link from "next/link";
//components
import Grid from "@/app/components/Grid";
import SectionBox from "@/app/components/SectionBox";
import CTA from "@/app/components/CTA";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import IMG from "@/app/components/IMG";

import "./index.scss";

const BASE_CLASSNAME = "project_area_container";

const Projects = ({
  data: {
    secData,
    list
  }
}) => {
  return (
    <SectionBox
      title={secData.title}
      containerClass={BASE_CLASSNAME}
    >
       <Grid classNames={`${BASE_CLASSNAME}_grid`}>
        {list.map((item, index) => (
          <Grid.Item
            key={index}
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xlg={6}
            itemClass={`${BASE_CLASSNAME}_grid_col`}
          >
            <Link
              href={`/work/${item.id}`}
              className="work_link"
            >
              <IMG
                src={item.images.main}
                containerClasses="featured_img"
                useRawImgTag
                useContainer
                useParallaxEffect
                parallaxSpeed={0.3}
                applyParallaxToImgElement
                id={`work_featured_img_${item.id}`}

              />
              <div className="content">
                <div className="tags">
                  {item.tags.list.map(t => (
                    <span 
                    key={t}
                    className="tag">{t}</span>
                  ))}
                  <span>{item?.brand}</span>
                </div>
                <h2>{item.title}</h2>
                <div className="author">
                  <h4>{item.author}</h4>
                  <span>{item.date}</span>
                </div>
              </div>
            </Link>
          </Grid.Item>
        ))}
      </Grid>
      <div className="view_all_cta">
        <CTA
          linkClass="btn-blue"
          linkText="View All Post"
          linkHref="/work"
          icon={CreateRoundedIcon}
          iconProps={{
            fontSize: "lg",
          }}
        />
      </div>
    </SectionBox>
  );
};

export default Projects;
