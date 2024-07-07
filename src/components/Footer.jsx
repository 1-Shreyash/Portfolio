import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="w-screen min-h-60 bg-black text-white flex flex-col sm:flex-row justify-around items-center py-8 mb:px-40 max-sm:py-4">
      <div className="m-4 mb:m-8 mb:mt-0">
        <h1 className="text-4xl sm:text-6xl my-4 sm:my-8">Wanna</h1>
        <h1 className="text-4xl sm:text-6xl my-4 sm:my-8">Collaborate..?</h1>
        <a
          href="mailto:sahushreyash48@gmail.com"
          className="text-lg sm:text-xl"
        >
          Mail me at : sahushreyash48@gmail.com
        </a>
      </div>
      <div className="sm:m-4 mb:m-16 flex flex-row max-sm:justify-center max-sm:items-center sm:flex-col max-sm:mt-12 max-sm:mb-8">
        <div className="text-lg sm:text-2xl">Let's Connect : </div>
        <div className="min-h-[40px] flex flex-row justify-center items-center mx-4 sm:my-4 sm:ml-2">
          <a
            href="https://github.com/1-Shreyash"
            target="_blank"
            className="scale-[150%] sm:scale-[200%] mr-2 sm:mr-4"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sahushreyash48/"
            target="_blank"
            className="scale-[150%] sm:scale-[200%] m-2 sm:m-4"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/shreyashss777/"
            target="_blank"
            className="scale-[150%] sm:scale-[200%] m-2 sm:m-4"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/Shreyashss777"
            target="_blank"
            className="scale-[150%] sm:scale-[200%] m-2 sm:m-4"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
