import React from "react";
import Link from "next/link";
//render icon
import { renderIconComponent } from "@/Icons";
//components
import ParallaxScroll from "@/app/components/ParallaxScroll";

import "./index.scss"

const BASE_CLASSNAME = "work_item_box";

const WorkItem = ({
  work,
  imageClass = ""
}) => {

  return (
    <Link 
      href={`/work/${work.id}`} className={BASE_CLASSNAME}
    >
      <div className={`${BASE_CLASSNAME}_img_wrapper ${imageClass}`}>
          <ParallaxScroll speed={0.2}>
        <div className={`${BASE_CLASSNAME}_img_wrapper_thumb`}>
            <img src={work.images.main} alt={`${work.id}_work-thumbnail`} />
        </div>
        </ParallaxScroll>
      </div>
      <div className={`${BASE_CLASSNAME}_content`}>
        <h3 className="title">{work.title}</h3>
        <div className="details">
          <span className="counts">{String(work.id).padStart(2, "0")}</span>
          <span className="icon">{renderIconComponent(work.icons.easticon)}</span>
          <div className="author">
            <span>{work.author}</span>
            <span className="link">View Project</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkItem