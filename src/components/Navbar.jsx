"use client"; // Add this directive at the top of the file

import React, { useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close the menu after clicking a link
  };

  return (
    <nav className="w-full bg-black p-4 max-sm:py-1 max-sm:px-1 max-sm:pl-4 fixed top-0 z-50 transition-all duration-500">
      <div className="flex justify-between items-center">
        <a
          onClick={() => handleScroll("home")}
          className="text-white text-lg font-bold cursor-pointer"
        >
          Shreyash S. Sahu
        </a>
        <div className="lg:hidden" onClick={toggleMenu}>
          <svg
            className={`ham hamRotate ham4 ${isOpen ? "active" : ""}`}
            viewBox="0 0 100 100"
            width="50" // Adjust width
            height="50" // Adjust height
          >
            <path
              className="line top"
              d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
            />
            <path className="line middle" d="m 70,50 h -40" />
            <path
              className="line bottom"
              d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
            />
          </svg>
        </div>
        <ul className="hidden lg:flex space-x-4 text-white">
          <li>
            <a
              onClick={() => handleScroll("home")}
              className="cursor-pointer hover:text-gray-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => handleScroll("projects")}
              className="cursor-pointer hover:text-gray-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              onClick={() => handleScroll("skills")}
              className="cursor-pointer hover:text-gray-300"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              onClick={() => handleScroll("contact")}
              className="cursor-pointer hover:text-gray-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div
        className={`${
          isOpen ? "max-h-screen pb-4" : "max-h-0"
        } overflow-hidden lg:hidden transition-all duration-500`}
      >
        <ul className="mt-4 space-y-2 text-white">
          <Slide direction="down" duration={300}>
            <li>
              <a
                onClick={() => handleScroll("home")}
                className="block px-2 py-1 hover:bg-blue-600 rounded cursor-pointer"
              >
                Home
              </a>
            </li>
          </Slide>
          <Slide direction="down" duration={300}>
            <li>
              <a
                onClick={() => handleScroll("projects")}
                className="block px-2 py-1 hover:bg-blue-600 rounded cursor-pointer"
              >
                Projects
              </a>
            </li>
          </Slide>
          <Slide direction="down" duration={300}>
            <li>
              <a
                onClick={() => handleScroll("skills")}
                className="block px-2 py-1 hover:bg-blue-600 rounded cursor-pointer"
              >
                Skills
              </a>
            </li>
          </Slide>
          <Slide direction="down" duration={300}>
            <li>
              <a
                onClick={() => handleScroll("contact")}
                className="block px-2 py-1 hover:bg-blue-600 rounded cursor-pointer"
              >
                Contact
              </a>
            </li>
          </Slide>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
