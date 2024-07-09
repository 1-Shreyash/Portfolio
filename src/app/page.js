"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Button from "../components/Button";
import ProjectPage from "../components/Project/ProjectPage";
import SkillsPage from "@/components/Skill/SkillsPage";
import ContactForm from "@/components/Contact/ContactForm";
import Footer from "@/components/Footer";
import { Fade, Bounce, Zoom } from "react-awesome-reveal";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section
        id="home"
        className="bg-[#fafafa] flex flex-col items-center justify-center"
      >
        <Bounce duration={400}>
          <h1 className="md:text-xl mt-80">Hola My name is,</h1>
        </Bounce>
        <Zoom delay={200}>
          {/* <Fade bottom> */}
          <h1 className="text-outliner text-[35px] sm:text-[50px] md:text-[100px]">
            &lt; Shreyash S. Sahu /&gt;
          </h1>
          {/* </Fade> */}
        </Zoom>
        <div className="md:text-2xl m-8">
          Full Stack Developer And Competetive Programmer
        </div>
        {/* <Zoom triggerOnce> */}
        <Button />
        {/* </Zoom> */}
        <div className="w-[80%] m-40 md:text-2xl text-center">
          A highly skilled software developer with extensive experience in
          building reliable and innovative digital solutions. Demonstrates
          professionalism and passion in transforming ideas into reality.
        </div>
      </section>
      <section
        id="projects"
        className="min-h-screen bg-[#fafafa] flex flex-col items-center justify-center"
      >
        <ProjectPage />
      </section>
      <section
        id="skills"
        className="min-h-screen bg-[#fafafa] flex items-center justify-center"
      >
        <SkillsPage />
      </section>
      <section
        id="contact"
        className="min-h-screen bg-[#fafafa] flex flex-col items-center justify-center"
      >
        <h2 className="text-3xl font-bold mb-4">Let's Talk :</h2>
        <ContactForm />
      </section>
      <Footer />
    </div>
  );
}
