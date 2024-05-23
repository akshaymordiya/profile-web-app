import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import ProgressBar from "../Progressbar/ProgressBar";
import Experience from "../Experience/Experience";

const data = [
  {
    skillslabel: "Figma",
    Value: "90%",
    valueMax: "90%",
  },
  {
    skillslabel: "Sketch",
    Value: "82%",
    valueMax: "82%",
  },
  {
    skillslabel: "Photoshop",
    Value: "65%",
    valueMax: "65%",
  },
  {
    skillslabel: "Invision",
    Value: "58%",
    valueMax: "58%",
  },
];

const expdata = [
  {
    expskillslabel: "UI/UX Lead Designer",
    expyearlength: "2022 - Present",
    expcompany:"Amazon INC"
  },
  {
    expskillslabel: "Product Lead Designer",
    expyearlength: "2018 - 2022",
    expcompany:"Amazon INC"
  },
  {
    expskillslabel: "Graphic Designer",
    expyearlength: "2016 - 2018",
    expcompany:"Amazon INC"
  },
];

const educationdata = [
  {
    expskillslabel: " Stanford University",
    expyearlength: "2014 - 2016",
    univercity: "of California.",
  },
  {
    expskillslabel: "Specialization Course.",
    expyearlength: "2012 - 2014",
    univercity: "MIT University",
  },
  {
    expskillslabel: "Level High School.",
    expyearlength: "2009 - 2012",
    univercity: "San Fransisco",
  },
];

const SkillSets = () => {
  return (
    <>
      <div className="personal-info-skill" style={{ marginBottom: "85px" }}>
        <SectionTitle
          title="Skillsets"
          interClass="personal-info-right-title"
          Icon={<WbIncandescentIcon />}
        />
        {data.map((item, index) => {
          return (
            <ProgressBar
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
        style={{ marginBottom: "85px" }}
      >
        <SectionTitle
          title="Experience"
          interClass="personal-info-right-title"
          Icon={<WbIncandescentIcon />}
        />
        {expdata.map((item, index) => {
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
        style={{ marginBottom: "85px" }}
      >
        <SectionTitle
          title="Education"
          interClass="personal-info-right-title"
          Icon={<SchoolOutlinedIcon />}
        />
        {educationdata.map((item, index) => {
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
