"use client";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div
      id="skills"
      className="max-w-[45rem] mb-28 mt-10 text-center leading-8 scroll-mt-28 "
    >
      <h3 className="text-2xl font-semibold mb-3">My Skills</h3>
      <ul className="flex flex-wrap justify-center text-lg text-gray-800 gap-2">
        {skillsData.map((item) => {
          return (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.05,
              }}
              className="bg-gray-300 cursor-pointer dark:text-white/80 dark:bg-white/10 px-5 rounded-xl"
            >
              {item}
            </motion.div>
          );
        })}
      </ul>
    </div>
  );
};

export default Skills;
