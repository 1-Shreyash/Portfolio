import React from "react";
import Project from "./Project";
import Healthify from "../../images/Healthify.png";
import ProjectQ from "../../images/Project-Q.png";
import MernApp from "../../images/MERN_APP.png";
import FlipkartClone from "../../images/FlipkartClone.png";
import ManzarSite from "../../images/ManzarSite.png";
import Stopwatch from "../../images/Stopwatch.png";
import TicTacToe from "../../images/Tic-Tac-Toe.png";
import TodoTracker from "../../images/TodoTracker.png";
import DigitalClock from "../../images/DigitalClock.png";
import Reveal from "../Reveal";
import Button from "../ProjectBtn";
import { Black_Ops_One } from "@next/font/google";

const blackOps = Black_Ops_One({ subsets: ["latin"], weight: "400" });
const projects = [
  {
    name: "Healthify",
    img: Healthify,
    tech: "React.js, Firebase",
    desc: "Nutrition Tracking App",
    git: "https://github.com/1-Shreyash/Nutrition_Analyser",
    deploy: "https://healthify123.netlify.app/",
  },
  {
    name: "Project Q",
    img: ProjectQ,
    tech: "React.js, Firebase, MongoDb",
    desc: "Solving Problem of Traditional Queues",
    git: "https://github.com/dev-discover1/Project-Q",
    deploy: "https://deploy-preview-10--project-q.netlify.app",
  },
  {
    name: "MERN App",
    img: MernApp,
    desc: "User Authentication and Contact Form",
    tech: "JWT Auth, Express, MongoDb",
    git: "https://github.com/1-Shreyash/MERN1",
    deploy: "",
  },
  {
    name: "Flipkart Clone",
    img: FlipkartClone,
    tech: "HTML, CSS, JS",
    desc: "Clone of Flipkart",
    git: "https://github.com/1-Shreyash/Flipkart-Clone-Project",
    deploy: "https://1-shreyash.github.io/Flipkart-Clone-Project/",
  },
  {
    name: "Manzar Site",
    img: ManzarSite,
    tech: "HTML, CSS, JS",
    desc: "Built College Manzar Site",
    git: "https://github.com/1-Shreyash/Manzar-CSE-A",
    deploy: "https://1-shreyash.github.io/Manzar-CSE-A/",
  },
  {
    name: "Stopwatch",
    img: Stopwatch,
    tech: "HTML, CSS, JS",
    desc: "A stopwatch with play-pause and record time lapse feature",
    git: "https://github.com/1-Shreyash/Stop-Watch",
    deploy: "https://1-shreyash.github.io/Stop-Watch/",
  },
  {
    name: "Tic Tac Toe",
    img: TicTacToe,
    tech: "HTML, CSS, JS",
    desc: "Classic Tic-Tac-Toe Game",
    git: "https://github.com/1-Shreyash/TIC-TAC-TOE",
    deploy: "https://1-shreyash.github.io/TIC-TAC-TOE/",
  },
  {
    name: "Todo Tracker",
    img: TodoTracker,
    tech: "HTML, CSS, JS",
    desc: "TODO List",
    git: "https://github.com/1-Shreyash/TO-DO-LIST",
    deploy: "https://1-shreyash.github.io/TO-DO-LIST/",
  },
  {
    name: "Digital Clock",
    img: DigitalClock,
    tech: "HTML, CSS, JS",
    desc: "Color Changes according to the time of the day.",
    git: "https://github.com/1-Shreyash/Color-Changing-Clock",
    deploy: "https://1-shreyash.github.io/Color-Changing-Clock/",
  },
];

const makeProjectCards = (item, index) => {
  return (
    <Reveal key={index} index={index}>
      <Project
        img={item.img}
        name={item.name}
        tech={item.tech}
        desc={item.desc}
        github={item.git}
        deploy={item.deploy}
      />
    </Reveal>
  );
};

const ProjectPage = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-12 md:py-20">
      <span className="w-fit flex flex-col justify-start items-start">
        <h1 className={`font-bold text-5xl mt-12`}>My</h1>
        <h1
          className={`${blackOps.className} text-5xl mb-12 mt-2 text-outliner1`}
        >
          Projects..
        </h1>
      </span>
      <div className="h-fit grid grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2 ">
        {projects.map((skill, index) => makeProjectCards(skill, index))}
      </div>
      <Button />
    </div>
  );
};

export default ProjectPage;
