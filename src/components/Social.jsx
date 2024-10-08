import React from "react";
import { Black_Ops_One } from "@next/font/google";
const blackOps = Black_Ops_One({ subsets: ["latin"], weight: "400" });
import Github from "../images/github.png";
import Codechef from "../images/codechef.png";
import GFG from "../images/gfg.png";
import Leetcode from "../images/leetcode.png";
import CodeForces from "../images/code-forces.png";
import Reveal from "react-awesome-reveal";

const Social = () => {
  return (
    <div className="flex flex-col justify-center items-center py-20 md:py-64">
      <span className="w-fit flex flex-col justify-start items-start">
        <h1 className={`font-bold text-5xl mt-12 max-md:mt-24`}>Coding</h1>
        <h1
          className={`${blackOps.className} text-5xl mb-12 mt-2 text-outliner1`}
        >
          Profiles..
        </h1>
      </span>
      <div className="w-screen flex flex-col md:flex-row justify-center items-center mt-12">
        <div className="md:min-w-[51%] flex flex-row justify-around">
          <Reveal>
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full shadow-lg flex justify-center items-center m-2  hover:scale-110 duration-300 ease-in-out">
              <a href="https://leetcode.com/u/ShreyashShahu/" target="_blank">
                <img src={Leetcode.src} alt="" className="h-16 w-auto" />
              </a>
            </div>
          </Reveal>
          <Reveal>
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full shadow-lg flex justify-center items-center m-2  hover:scale-110 duration-300 ease-in-out">
              <a
                href="https://www.codechef.com/users/shreyash_sahu1"
                target="_blank"
              >
                <img src={Codechef.src} alt="" className="h-16 w-12" />
              </a>
            </div>
          </Reveal>
          <Reveal>
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full shadow-lg flex justify-center items-center m-2  hover:scale-110 duration-300 ease-in-out">
              <a
                href="https://github.com/1-Shreyash?tab=repositories"
                target="_blank"
              >
                <img src={Github.src} alt="" className="w-full" />
              </a>
            </div>
          </Reveal>
        </div>
        <div className="max-w-[90%] md:min-w-[34%] flex flex-row justify-around">
          <Reveal>
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full shadow-lg flex justify-center items-center m-2  hover:scale-110 duration-300 ease-in-out border border-1">
              <a
                href="https://codeforces.com/profile/1-Shreyash"
                target="_blank"
              >
                <img src={CodeForces.src} alt="" className="h-16 w-16" />
              </a>
            </div>
          </Reveal>
          <Reveal>
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full shadow-lg flex justify-center items-center m-2  hover:scale-110 duration-300 ease-in-out">
              <a
                href="https://www.geeksforgeeks.org/user/sahu4azk/"
                target="_blank"
              >
                <img src={GFG.src} alt="" className="h-16 w-16" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Social;
