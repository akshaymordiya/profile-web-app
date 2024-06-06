import React from "react";
import ProgressBar from "@/app/components/Progressbar";
import SectionTitle from "@/app/components/SectionTitle";
import Experience from "@/app/components/Experience";
//Data JSON
import about from "../../../../../../data/about.page.json";
//Render Icon
import { renderIconComponent } from "@/Icons";
// style scss
import "./index.scss";

const SkillSets = () => {
  return (
    <>
      <div className="personal-info-skill" style={{ marginBottom: "85px" }}>
        <SectionTitle
          title={about.personalinfo.skills.title}
          interClass="personal-info-right-title"
          // Icon={<IncadescentIcon />}
          Icon={renderIconComponent(about.personalinfo.skills.icon)}
        />
        {about.personalinfo.skills.skillsets.map((item, index) => {
          return (
            <ProgressBar
              data-aos="fade-left"
              key={index}
              label={item?.skillslabel}
              ProgressValue={item?.Value}
              Progressmax={item?.valueMax}
            />
          );
        })}
      </div>
      <div className="personal-info-experience" data-aos="fade-left">
        <SectionTitle
          title={about.personalinfo.expdata.title}
          interClass="personal-info-right-title"
          Icon={renderIconComponent(about.personalinfo.skills.icon)}
        />
        <div className="personal-info-gap">
          {about.personalinfo.expdata.experience.map((item, index) => {
            return (
              <Experience
                key={index}
                title={item?.expskillslabel}
                year={item?.expyearlength}
                subtitle={item?.expcompany}
              />
            );
          })}
        </div>
      </div>
      <div className="personal-info-education" data-aos="fade-right">
        <SectionTitle
          title={about.personalinfo.edudata.title}
          interClass="personal-info-right-title"
          Icon={renderIconComponent(about.personalinfo.edudata.icon)}
        />
        <div className="personal-info-gap">
          {about.personalinfo.edudata.education.map((item, index) => {
            return (
              <Experience
                key={index}
                title={item?.expskillslabel}
                year={item?.expyearlength}
                subtitle={item?.univercity}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SkillSets;
