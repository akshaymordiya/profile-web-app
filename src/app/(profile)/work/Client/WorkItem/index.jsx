"use client";
import React, { useMemo } from "react";
import Grid from "@/app/components/Grid";
import work from "../../../../../data/work.page.json";
import { renderIconComponent } from "@/Icons";
import Link from "next/link";

const Item = ({
  item,
  index,
  imageHeight
}) => {
  const Icon  = useMemo(() => {
    return renderIconComponent(item.icon, true);
  }, []);

  const count = useMemo(() => {
    return String(index + 1).padStart(2, "0")
  }, [index]);

  return (
    <div key={index} className="portfolio-item">
      <Link href={`/work/${item.id}`} >
        <div  
          className="portfolio-thumb img-1"
          style={{ height: imageHeight }}
        >
          <div className="portfolio-thumb-img">
            <img src={item?.image} alt="portfolio" />
          </div>
        </div>
        <div className="portfolio-content">
          <h3 className="portfolio-title">{item?.title}</h3>
          <div className="portfolio-counter">
            <span className="portfolio-count">{count}</span>
            <span className="portfolio-meta-arrow">
              {/* {<Icon />} */}
            </span>
            <div className="portfolio-meta-hover">
              <span>{item?.brand}</span>
              <span className="portfolio-meta-link">{item?.view}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

const WorkItem = () => {
  const firstHalf = work.projectList?.slice(0, 3);
  const secondHalf = work.projectList?.slice(3);
  
  return (
    <>
      <div className="Portfolio-area ">
        <div className="container">
          <Grid classNames="portfolio-gap">
            <Grid.Item
            xs={12}
            sm={12}
              md={12}
              lg={6}
              xlg={6}
              itemClass="portfolio-item-wrapper"
            >
              {firstHalf?.map((item, index) => (
                <Item
                  item={item}
                  index={index}
                  imageHeight={index %  2 === 0 ? "560px" : "420px"}
                />
              ))}
            </Grid.Item>
            <Grid.Item
            xs={12}
            sm={12}
              md={12}
              lg={6}
              xlg={6}
              itemClass="portfolio-item-wrapper"
            >
              {secondHalf?.map((item, index) => (
                <Item
                  item={item}
                  index={index}
                  imageHeight={index %  2 === 0 ? "420px" : "560px"}
                />
              ))}
            </Grid.Item>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default WorkItem;
