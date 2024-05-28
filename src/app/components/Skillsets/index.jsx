import React from "react";
import SectionTitle from "../SectionTitle";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import ProgressBar from "../Progressbar";
import Experience from "../Experience";
import about from '../../../data/about.page.json'
import Aos from "../AOS";
import 'aos/dist/aos.css';

const SkillSets = () => {
  return (
    <>
    <Aos />
      <div className="personal-info-skill" style={{ marginBottom: "85px" }}>
        <SectionTitle
          title={about.personalinfo.skills.title}
          interClass="personal-info-right-title"
          Icon={<WbIncandescentIcon />}
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
      <div
        className="personal-info-experience"
        data-aos="fade-left"
      >
        <SectionTitle
          title={about.personalinfo.expdata.title}
          interClass="personal-info-right-title"
          Icon={<WbIncandescentIcon />}
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
      <div
        className="personal-info-education"
        data-aos="fade-right"
      >
        <SectionTitle
          title={about.personalinfo.edudata.title}
          interClass="personal-info-right-title"
          Icon={<SchoolOutlinedIcon />}
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
