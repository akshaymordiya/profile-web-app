"use client";
import React, { useState } from "react";
//icons
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
//utils
import { renderIconComponent } from "@/Icons";
//style scss
import './index.scss'

const BASE_CLASSNAME = 'skill-box-container'

const ServiceCategories = ({
  skillSet = [],
  skillTitle = ""
}) => {

  const [openAccordian, setOpenAccordian] = useState({
    key: `${skillTitle}_0`
  });

  const handleAccordianClick = (key) => setOpenAccordian(prev => key === prev.key ? ({
    key: ""
  }) : ({
    key
  }))

  return skillSet.map((s, index) => (
    (
      <div
        className={`${BASE_CLASSNAME}`}
        key={`${skillTitle}_${index}`}
        onClick={() => handleAccordianClick(`${skillTitle}_${index}`)}
      > 
        <div className={`${BASE_CLASSNAME}_title_box`}>
          <div className={`${BASE_CLASSNAME}_title_box_title`}>
              <span>
                {renderIconComponent(s.icons.left)}
              </span>
              <span>{s.title}</span>
          </div>  
          <div className={`${BASE_CLASSNAME}_accordian`}>
            <span >
              {openAccordian.key === `${skillTitle}_${index}` ? (
                <ExpandLessRoundedIcon />
              ) : (
                <ExpandMoreRoundedIcon />
              )}
            </span>
          </div>
        </div>
        <p className={`${BASE_CLASSNAME}_content_text ${openAccordian.key === `${skillTitle}_${index}` ? "show": ""}`}>{s.content}</p>
      </div>
    )
  ))
};

export default ServiceCategories;
