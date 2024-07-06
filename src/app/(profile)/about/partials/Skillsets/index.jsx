import React from "react";
//components
import SectionBox from "@/app/components/SectionBox";
import ProgressBar from "@/app/components/Progressbar";
import Experience from "@/app/components/Experience";
import { renderIconComponent } from "@/Icons";
import "./index.scss";

const BASE_CLASSNAME = "personal-info";

const SkillSets = ({ content: { skills, experiences, educations } }) => {
  return (
    <div className={BASE_CLASSNAME}>
      <div className={`${BASE_CLASSNAME}-skill mb`}>
        <SectionBox
          title={skills.title}
          icon={skills.icon}
          containerClass="section-box"
        >
          {skills.skillsets.map((item, index) => (
            <ProgressBar
              data-aos="fade-left"
              key={index}
              label={item?.skillslabel}
              progressValue={item?.Value}
            />
          ))}
        </SectionBox>
      </div>
      {[
        {
          class: "experience",
          ...experiences,
        },
        {
          class: "education",
          ...educations,
        },
      ].map((element, index) => (
        <div key={index} className={`${BASE_CLASSNAME}-${element.class} mb`}>
          <SectionBox
            title={element.title}
            icon={element.icon}
            containerClass="section-box"
          />
          {element.data.map((item, index) => {
            return (
              <Experience
                key={index}
                label={item.label}
                timeline={item.timeline}
                value={item.value}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default SkillSets;
