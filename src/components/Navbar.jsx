"use client"; // Add this directive at the top of the file

import React, { useState, useEffect } from "react";
import { Slide } from "react-awesome-reveal";
import { Black_Ops_One } from "@next/font/google";

const blackOps = Black_Ops_One({ subsets: ["latin"], weight: "400" });

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.01, // Adjust this value as needed
    });

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.01) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Adjust breakpoint as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial value

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`${
        blackOps.className
      } tracking-wider w-full p-4 max-sm:py-1 max-sm:px-1 max-sm:pl-4 fixed top-0 z-50 transition-all duration-0 ${
        isMobile || isScrolled ? "glass" : "bg-transparent"
      } text-[#141414]`}
    >
      <div className="flex justify-between items-center">
        <a
          onClick={() => handleScroll("home")}
          className={`text-lg font-bold hover:scale-105 transition-transform ${
            activeSection === "home" ? "text-[#000]" : ""
          }`}
          onMouseEnter={props.onMouseEnter}
          onMouseLeave={props.onMouseLeave}
        >
          Shreyash S. Sahu
        </a>
        <div className="lg:hidden" onClick={toggleMenu}>
          <svg
            className={`ham hamRotate ham4 ${isOpen ? "active" : ""}`}
            viewBox="0 0 100 100"
            width="50"
            height="50"
          >
            <path
              className="line top black"
              d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
              stroke="black"
              fill="none"
            />
            <path
              className="line middle black"
              d="m 70,50 h -40"
              stroke="black"
              fill="none"
            />
            <path
              className="line bottom black"
              d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
              stroke="black"
              fill="none"
            />
          </svg>
        </div>
        <ul className="hidden lg:flex space-x-4 text-[#6b6b6b]">
          <li
            className="hover:scale-110 transition-transform"
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
          >
            <a
              onClick={() => handleScroll("home")}
              className={`${
                activeSection === "home"
                  ? "text-black font-bold shadow-teal-200"
                  : ""
              }`}
            >
              Home
            </a>
          </li>
          <li
            className="hover:scale-110 transition-transform"
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
          >
            <a
              onClick={() => handleScroll("socials")}
              className={`  ${
                activeSection === "socials"
                  ? "text-black font-bold shadow-teal-200"
                  : ""
              }`}
            >
              Profiles
            </a>
          </li>
          <li
            className="hover:scale-110 transition-transform"
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
          >
            <a
              onClick={() => handleScroll("projects")}
              className={`  ${
                activeSection === "projects"
                  ? "text-black font-bold shadow-teal-200"
                  : ""
              }`}
            >
              Projects
            </a>
          </li>
          <li
            className="hover:scale-110 transition-transform"
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
          >
            <a
              onClick={() => handleScroll("skills")}
              className={`  ${
                activeSection === "skills"
                  ? "text-black font-bold shadow-teal-200"
                  : ""
              }`}
            >
              Skills
            </a>
          </li>
          <li
            className="hover:scale-110 transition-transform"
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
          >
            <a
              onClick={() => handleScroll("contact")}
              className={`  ${
                activeSection === "contact" ? "text-black font-bold" : ""
              }`}
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
        <ul className="mt-4 space-y-2 text-[#515151]">
          <Slide direction="down" duration={300}>
            <li>
              <a
                onClick={() => handleScroll("home")}
                className={`block px-2 py-1 rounded  ${
                  activeSection === "home"
                    ? "text-black border border-1 "
                    : "font-black"
                }`}
              >
                Home
              </a>
            </li>
          </Slide>
          <Slide direction="down" duration={300}>
            <li>
              <a
                onClick={() => handleScroll("socials")}
                className={`block px-2 py-1 rounded  ${
                  activeSection === "socials"
                    ? "text-black border border-1 "
                    : "font-black"
                }`}
              >
                Profiles
              </a>
            </li>
          </Slide>
          <Slide direction="down" duration={300}>
            <li>
              <a
                onClick={() => handleScroll("projects")}
                className={`block px-2 py-1 rounded  ${
                  activeSection === "projects"
                    ? "text-black border border-1 "
                    : ""
                }`}
              >
                Projects
              </a>
            </li>
          </Slide>
          <Slide direction="down" duration={300}>
            <li>
              <a
                onClick={() => handleScroll("skills")}
                className={`block px-2 py-1 rounded  ${
                  activeSection === "skills"
                    ? "text-black border border-1 "
                    : ""
                }`}
              >
                Skills
              </a>
            </li>
          </Slide>
          <Slide direction="down" duration={300}>
            <li>
              <a
                onClick={() => handleScroll("contact")}
                className={`block px-2 py-1 rounded  ${
                  activeSection === "contact"
                    ? "text-black border border-1 "
                    : ""
                }`}
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
