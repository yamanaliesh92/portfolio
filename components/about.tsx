"use client";

"use client";
import React from "react";

import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] mt-20 text-center  leading-8 sm:mb-40  scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <h1 className="text-2xl font-bold">About me</h1>
      <p className="mb-3">
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is . I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.My email is{" "}
        <span className="underline font-semibold">yaman9892xxx@gmail.com</span>
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">how to play the guitar.</span>
      </p>
    </motion.section>
  );
};

export default About;
