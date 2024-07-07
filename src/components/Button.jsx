"use client";

import React, { useRef } from "react";
import { FiDownload } from "react-icons/fi";

const Button = () => {
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    const btn = btnRef.current;
    // console.log(btnRef);
    console.log("X", e.pageX - btn.offsetLeft);
    console.log("Y", e.pageY - btn.offsetTop);
    const x = e.pageX - btn.offsetLeft;
    const y = e.pageY - btn.offsetTop;
    btn.style.setProperty("--x", x + "px");
    btn.style.setProperty("--y", y + "px");
  };

  return (
    <a
      href="https://drive.google.com/file/d/1zo6569oGglpLYRKYBwOgVcchL_340WTb/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="btn" ref={btnRef} onMouseMove={handleMouseMove}>
        <span className="flex flex-row">
          <p>Resume </p>
          <FiDownload className="mt-1 mx-1" />
        </span>
      </button>
    </a>
  );
};

export default Button;
