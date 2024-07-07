"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Reveal = ({ children, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const mainControls = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControls.start("visible");
    }
  }, [inView, mainControls]);

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
