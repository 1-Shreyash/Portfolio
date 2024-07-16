"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Button from "../components/Button";
import ProjectPage from "../components/Project/ProjectPage";
import SkillsPage from "@/components/Skill/SkillsPage";
import ContactForm from "@/components/Contact/ContactForm";
import Footer from "@/components/Footer";
import { Fade, Bounce, Zoom } from "react-awesome-reveal";
import {
  Varela_Round,
  M_PLUS_Rounded_1c,
  Roboto,
  Black_Ops_One,
} from "@next/font/google";
import { motion } from "framer-motion";
import Social from "@/components/Social";
import { useState, useEffect } from "react";
import SelfImage from "../components/SelfImage";

const varelaRound = Varela_Round({ subsets: ["latin"], weight: "400" });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});
const mplus = M_PLUS_Rounded_1c({ subsets: ["latin"], weight: "700" });
const blackOps = Black_Ops_One({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  // Preload the image

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 5,
      y: mousePosition.y - 5,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30,
        duration: 0,
      },
      // rotate: -360,
    },
    text: {
      scale: 30,
      x: mousePosition.x - 5,
      y: mousePosition.y - 5,
      backgroundColor: "black",
      mixBlendMode: "multiply",
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30,
        duration: 0,
      },
      // rotate: 360,
    },
    text2: {
      scale: 15,
      x: mousePosition.x - 5,
      y: mousePosition.y - 5,
      backgroundColor: "black",
      mixBlendMode: "multiply",
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 300,
        duration: 0,
      },
      // rotate: 60,
    },
    textNav: {
      scale: 5,
      x: mousePosition.x - 5,
      y: mousePosition.y - 5,
      backgroundColor: "white",
      mixBlendMode: "difference",
      transition: {
        type: "smooth",
        duration: 0,
      },
      // rotate: 360,
    },
    textFooter: {
      x: mousePosition.x - 5,
      y: mousePosition.y - 5,
      backgroundColor: "white",
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30,
        duration: 0,
      },
    },

    textFooter2: {
      scale: 5,
      x: mousePosition.x - 5,
      y: mousePosition.y - 5,
      backgroundColor: "white",
      mixBlendMode: "difference",
      transition: {
        type: "smooth",
        duration: 0,
      },
      // rotate: 360,
    },

    textProfile: {
      scale: 5,
      x: mousePosition.x - 5,
      y: mousePosition.y - 5,
      backgroundColor: "green",
      // mixBlendMode: "multiply",
      transition: {
        type: "smooth",
        duration: 0,
      },
      // rotate: 360,
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textEnter2 = () => setCursorVariant("text2");
  const textEnterNav = () => setCursorVariant("textNav");
  const textEnterFooter = () => setCursorVariant("textFooter");
  const textEnterFooter2 = () => setCursorVariant("textFooter2");
  const textLeave = () => setCursorVariant("default");
  const textEnterProfile = () => setCursorVariant("textProfile");

  return (
    <div className={`${roboto.className} cursor-none`}>
      <Navbar onMouseEnter={textEnterNav} onMouseLeave={textLeave} />
      <section
        id="home"
        className="md:min-w-screen flex flex-col items-center justify-center"
      >
        <div>
          <img
            src="/self.jpeg"
            className="w-40 h-40 mt-40 mb-12 shadow-sm rounded-full visibile md:hidden"
            alt=""
          />
        </div>
        <Bounce duration={400}>
          <div
            className="md:w-[90vw] flex justify-center items-center mt-50 pt-30 md:pt-40 md:mt-40"
            onMouseEnter={textEnter2}
            onMouseLeave={textLeave}
          >
            <h1
              className={`${blackOps.className} tracking-widest md:text-xl  stylish-regular font-bold z-0`}
            >
              Hola, My name is
            </h1>
          </div>
        </Bounce>
        <Zoom delay={200}>
          <h1
            className={`${mplus.className} md:w-[90vw] text-outliner text-[40px] md:text-[100px] tracking-normal text-center max-md:underline`}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            <span className="hidden md:inline-block">&lt;</span>
            Shreyash S. Sahu
            <span className="hidden md:inline-block">/&gt;</span>
          </h1>
        </Zoom>
        <div
          className={`w-[90vw] md:text-2xl mb-4 font-thin p-4 text-center`}
          onMouseEnter={textEnter2}
          onMouseLeave={textLeave}
        >
          Full Stack Developer And Competitive Programmer
        </div>
        <Button />
        <div className="w-[80%] md:w-[60%] m-12 mb-0 md:mt-36 text-center md:text-3xl tracking-wider">
          A skilled software developer with extensive experience in building
          reliable and innovative digital solutions. Demonstrates
          professionalism and passion in transforming ideas into reality.
        </div>
      </section>
      <section id="socials" className="flex items-center justify-center pt-10">
        <Social />
      </section>
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center mt-10"
      >
        <ProjectPage onMouseEnter={textEnterProfile} onMouseLeave={textLeave} />
      </section>
      <section
        id="skills"
        className="min-h-screen flex items-center justify-center"
      >
        <SkillsPage />
      </section>
      <section
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center"
      >
        <span className="flex flex-row">
          <span className="w-fit flex flex-col justify-start items-start">
            <h1 className={`font-bold text-5xl mt-12`}>Drop a</h1>
            <h1
              className={`${blackOps.className} text-5xl mb-12 mt-2 text-outliner1`}
            >
              Message..
            </h1>
          </span>
        </span>
        <ContactForm />
      </section>
      <Footer
        onMouseEnter={textEnterFooter}
        onMouseEnter2={textEnterFooter2}
        onMouseLeave={textLeave}
        onMouseLeave2={textEnterFooter}
      />
      <motion.div
        className="cursor invisible md:visible"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "tween", ease: "backOut" }}
      >
        {(cursorVariant === "text" || cursorVariant === "text2") && (
          <SelfImage />
        )}
        {cursorVariant === "textProfile" && (
          <div className="w-full h-full text-white text-[3px] flex justify-center items-center">
            View
          </div>
        )}
      </motion.div>
    </div>
  );
}
