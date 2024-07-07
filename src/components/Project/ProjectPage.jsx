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
    deploy: "1-shreyash.github.io/Flipkart-Clone-Project/",
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
    <div className="flex flex-col justify-center items-center py-40">
      <h1 className="text-4xl m-12">Projects</h1>
      <div className="h-fit grid sm:grid-cols-2 md:grid-cols-3">
        {projects.map((skill, index) => makeProjectCards(skill, index))}
      </div>
    </div>
  );
};

export default ProjectPage;
