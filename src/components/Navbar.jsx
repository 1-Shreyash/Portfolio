"use client"; // Add this directive at the top of the file

import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

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
    <nav className="w-full bg-black p-4 fixed top-0 z-50 transition-all duration-500">
      <div className="flex justify-between items-center">
        <a
          onClick={() => handleScroll("home")}
          className="text-white text-lg font-bold cursor-pointer"
        >
          Shreyash S. Sahu
        </a>
        <div className="lg:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <IoClose size={30} className="text-white" />
          ) : (
            <FaBars size={30} className="text-white" />
          )}
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
          isOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden lg:hidden transition-all duration-500`}
      >
        <ul className="mt-4 space-y-2 text-white">
          <li>
            <a
              onClick={() => handleScroll("home")}
              className="block px-2 py-1 hover:bg-blue-600 rounded cursor-pointer"
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => handleScroll("projects")}
              className="block px-2 py-1 hover:bg-blue-600 rounded cursor-pointer"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              onClick={() => handleScroll("skills")}
              className="block px-2 py-1 hover:bg-blue-600 rounded cursor-pointer"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              onClick={() => handleScroll("contact")}
              className="block px-2 py-1 hover:bg-blue-600 rounded cursor-pointer"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
