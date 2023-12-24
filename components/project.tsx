"use client";
import { IProjectsData } from "@/types";
import Image from "next/image";
import { FC, useRef } from "react";
import { useScroll, motion } from "framer-motion";

interface IProps {
  item: IProjectsData;
}

const Project: FC<IProps> = ({ item }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  return (
    <div
      className="group flex cursor-pointer p-3 bg-gray-100 border-black/5 dark:bg-white/10 dark:first-line:hover:bg-white/20 "
      id="projects"
    >
      <div className="flex flex-col flex-1 py-4 px-5">
        <h3 className="t text-2xl font-semibold">{item.title}</h3>

        <h1 className="text-gray-700 mt-2 dark:text-white/70">
          {item.description}
        </h1>
        <a
          className="w-fit h-fit p-4 rounded-lg bg-white text-gray-400 cursor-pointer my-3"
          href={item.link}
          target="_blank"
        >
          see the code
        </a>
        <ul className="flex flex-wrap gap-2 mt-4">
          {item.tags.map((tag) => {
            return (
              <div
                key={tag}
                className="bg-black rounded-full text-white p-4  text-[0.7rem] dark:text-white/70"
              >
                {tag}
              </div>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-1 w-full ml-2 py-4 px-5">
        <Image
          src={item.imageUrl}
          width={110}
          alt="d"
          height={110}
          className="w-full h-[200px] object-cover transition group-hover:rotate-2 group-hover:scale-105 group-hover:-translate-x-3 group-hover:-translate-y-3"
        />
      </div>
    </div>
  );
};

export default Project;
