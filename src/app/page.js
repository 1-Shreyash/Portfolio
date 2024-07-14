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
import Social from "@/components/Social";

const varelaRound = Varela_Round({ subsets: ["latin"], weight: "400" });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});
const mplus = M_PLUS_Rounded_1c({ subsets: ["latin"], weight: "700" });
const blackOps = Black_Ops_One({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <div className={`${roboto.className}`}>
      <Navbar />
      <section id="home" className="flex flex-col items-center justify-center">
        <Bounce duration={400}>
          <h1
            className={`${blackOps.className} tracking-widest md:text-xl mt-60 md:mt-80 stylish-regular font-bold`}
          >
            Hola, My name is
          </h1>
        </Bounce>
        <Zoom delay={200}>
          {/* <Fade bottom> */}
          <h1
            className={`${mplus.className} text-outliner text-[40px] md:text-[100px] tracking-normal text-center max-md:underline`}
          >
            <span className="hidden md:inline-block">&lt;</span>Shreyash S. Sahu
            <span className="hidden md:inline-block">/&gt;</span>
          </h1>
          {/* </Fade> */}
        </Zoom>
        <div className={`md:text-2xl font-thin m-8 text-center`}>
          Full Stack Developer And Competetive Programmer
        </div>
        {/* <Zoom triggerOnce> */}
        <Button />
        {/* </Zoom> */}
        <div className="w-[80%] md:w-[60%] m-12 mb-0 md:mt-36 text-center md:text-3xl tracking-wider">
          A skilled software developer with extensive experience in building
          reliable and innovative digital solutions. Demonstrates
          professionalism and passion in transforming ideas into reality.
        </div>
      </section>
      <section id="socials" className="flex items-center justify-center mt-10">
        <Social />
      </section>
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center mt-10"
      >
        <ProjectPage />
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
      <Footer />
    </div>
  );
}
