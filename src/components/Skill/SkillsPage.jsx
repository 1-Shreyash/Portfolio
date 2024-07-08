import React from "react";
import { DiJavascript1, DiNodejs, DiPython, DiReact } from "react-icons/di";
import { FaGolang } from "react-icons/fa6";
import {
  SiAndroid,
  SiCss3,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFramer,
  SiGithub,
  SiHtml5,
  SiKotlin,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiRedux,
} from "react-icons/si";
import { FaJava, FaBootstrap } from "react-icons/fa";
import { CgCPlusPlus, CgDatabase } from "react-icons/cg";
import Reveal from "../Reveal";

const languages = [
  { name: "Javascript", icon: <DiJavascript1 /> },
  { name: "Python", icon: <DiPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Typescript", icon: <SiTypescript /> },
  { name: "C/C++", icon: <CgCPlusPlus /> },
  { name: "DSA", icon: <CgDatabase /> },
  { name: "Go", icon: <FaGolang /> },
];

const web = [
  { name: "Html", icon: <SiHtml5 /> },
  { name: "CSS/SASS", icon: <SiCss3 /> },
  { name: "ReactJs", icon: <DiReact /> },
  { name: "NextJs", icon: <SiNextdotjs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "Framer Motion", icon: <SiFramer /> },
  { name: "SQL", icon: <SiMysql /> },
  { name: "Git/GitHub", icon: <SiGithub /> },
  { name: "Figma/Ui-Ux", icon: <SiFigma /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Android", icon: <SiAndroid /> },
  { name: "Node.js", icon: <DiNodejs /> },
  { name: "Kotlin", icon: <SiKotlin /> },
];
const makeSkillCard = (item, index) => {
  return (
    <Reveal key={index} index={index}>
      <div className="w-48 bg-neutral-100 max-sm:w-40 flex flex-row m-4 max-sm:m-2 justify-between items-center px-4 py-3 border-black text-lg max-sm:text-base rounded-md hover:scale-110 ease-in-out duration-200 hover:shadow-lg">
        <div className="text-sm">{item.name}</div>
        <div className="scale-[150%] max-sm:scale-[120%]">{item.icon}</div>
      </div>
    </Reveal>
  );
};

const SkillsPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl">Skills</h1>
      <h1 className="text-2xl max-sm:text-lg max-sm:mt-4  self-start">
        Languages :{" "}
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {languages.map((skill, index) => makeSkillCard(skill, index))}
      </div>
      <h1 className="text-2xl max-sm:text-lg max-sm:mt-4 self-start">
        Developement :{" "}
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {web.map((skill, index) => makeSkillCard(skill, index))}
      </div>
    </div>
  );
};

export default SkillsPage;
