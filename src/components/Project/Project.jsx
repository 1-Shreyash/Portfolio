import React from "react";
import { FaGithub } from "react-icons/fa"; // Import the icons
import { LuExternalLink } from "react-icons/lu";

const Project = (props) => {
  return (
    <div
      key={props.name}
      className="w-80 h-[430px] m-4 p-4 flex flex-col border shadow-lg bg-white rounded-xl"
    >
      <div className="min-h-60 flex justify-center items-center">
        <img
          src={props.img.src}
          alt={props.name}
          className="w-full h-auto rounded-md"
        />
      </div>
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-2xl m-2">{props.name}</h1>
        <span className="m-2">
          <div className="flex justify-between items-center">
            {props.deploy && (
              <a
                href={props.deploy}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-600"
              >
                <LuExternalLink size={24} />
              </a>
            )}
            <a
              href={props.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 m-1 hover:text-gray-600"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </span>
      </div>
      <div className="text-sm m-2 text-gray-500">{props.tech}</div>
      <di className="text-lg m-2">{props.desc}</di>
    </div>
  );
};

export default Project;
