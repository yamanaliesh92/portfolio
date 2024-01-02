"use client";
import { LibrariesData, skillsData } from "@/lib/data";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div
      id="skills"
      className="max-w-[45rem] h-fit mb-28 mt-10 text-center leading-8 scroll-mt-28 "
    >
      <h3 className="text-2xl font-semibold mb-3">My Skills</h3>

      <div className="my-3 flex flex-col ">
        {skillsData.map((skill) => {
          return (
            <div className="flex flex-col border-b gray-400 mb-4">
              <h1 className="font-bold text-start  text-[20px] text-red-500">
                {skill.name}
              </h1>
              <h4 className="mb-4"> {skill.title} </h4>
            </div>
          );
        })}
      </div>

      <h3 className="text-2xl font-semibold mb-3">
        Some Of The Libraries I Used
      </h3>

      <ul className="flex flex-wrap justify-center text-lg text-gray-800 gap-2">
        {LibrariesData.map((item) => {
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
