"use client";

import React, { useRef } from "react";
import { ImArrowRight2 } from "react-icons/im";

const Button = () => {
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    const btn = btnRef.current;
    const x = e.pageX - btn.offsetLeft;
    const y = e.pageY - btn.offsetTop;
    btn.style.setProperty("--x", x + "px");
    btn.style.setProperty("--y", y + "px");
  };

  return (
    <a
      href="https://github.com/1-Shreyash?tab=repositories"
      target="_blank"
      className="m-12"
    >
      <button className="btn" ref={btnRef} onMouseMove={handleMouseMove}>
        <span className="flex flex-row">
          <p>View More</p>
          <ImArrowRight2 className="mt-1 mx-1" />
        </span>
      </button>
    </a>
  );
};

export default Button;
