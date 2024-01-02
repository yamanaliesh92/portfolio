"use client";
import { IProjectsData } from "@/types";

import { FC, useRef } from "react";

interface IProps {
  item: IProjectsData;
}

const Project: FC<IProps> = ({ item }) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="group w-[340px]  sm:w-[550px] rounded-md flex cursor-pointer p-3 bg-gray-100 border-black/5 dark:bg-white/10 dark:first-line:hover:bg-white/20 "
      id="projects"
    >
      <div className="flex flex-col flex-1 py-4 px-5">
        <a
          href={item.link}
          target="_blank"
          className="text-2xl underline text-blue-500  font-semibold"
        >
          {item.title}
        </a>

        <h1 className="text-gray-700 mt-2 dark:text-white/70">
          {item.description}
        </h1>

        <ul className=" grid grid-cols-3    sm:grid-cols-4 md:grid-cols-5 gap-2 mt-4">
          {item.tags.map((tag) => {
            return (
              <div
                key={tag}
                className="bg-black h-[28px]  w-[80px] uppercase  flex justify-center rounded-full  items-center text-white p-[6px]  text-[0.6rem] dark:text-white/70"
              >
                {tag}
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Project;
