import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import ProgressBar from "../../../components/Progressbar";
import Experience from "../../../components/Experience";
import about from "../../../../data/about.page.json";
import Aos from "../../../components/AOS";
import "aos/dist/aos.css";
import { renderIconComponent } from "@/Icons";

const SkillSets = () => {

  return (
    <>
      <Aos />
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
      <div className="personal-info-education" data-aos="fade-right">
        <SectionTitle
          title={about.personalinfo.edudata.title}
          interClass="personal-info-right-title"
          Icon={renderIconComponent(about.personalinfo.edudata.icon)}
        />
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
    </>
  );
};

export default SkillSets;
