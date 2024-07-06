import React from "react";
import Grid from "@/app/components/Grid";
import IMG from "@/app/components/IMG";
import ImgGallary from "@/app/components/ImgGallary";
import Link from "next/link";

//data json

//style scss
import "./index.scss";

const BASE_CLASSNAME = "work-details-wrapper";

const WorkDetails = ({ 
  data
}) => {
  return (
    <Grid classNames={BASE_CLASSNAME}>
      <Grid.Item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xlg={6}
        itemClass={`${BASE_CLASSNAME}_img_gallary`}
      >
        <ImgGallary 
          primaryImg={data.images.main}
          gallary={data.images.gallary}
        />
      </Grid.Item>
      <Grid.Item xs={12} sm={12} md={6} lg={6} xlg={6} itemClass={`${BASE_CLASSNAME}_content`}>
        <h3 className="title">{data?.title}</h3>
        <div className="author_date">
          <span>{data?.author}, &nbsp;{data?.date}</span>
        </div>
        <p className="description">{data?.description}</p>
        <div className="tags">
          <h3 className="tags_title">{data?.tags.title}</h3>
          <div className="tags_list">
            {data.tags.list.map(tag => (
              <span 
                key={tag}
                className="tag"
              >{tag}</span>
            ))}
          </div>
        </div>
        {data?.url && (
          <Link href={data.url} target="_blank" className="link">Visit Website</Link>
        )}
      </Grid.Item>
    </Grid>
  );
};

export default WorkDetails;
