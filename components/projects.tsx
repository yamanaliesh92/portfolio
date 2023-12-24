"use client";
import { projectsData } from "@/lib/data";
import React from "react";
import Project from "./project";

const Projects = () => {
  return (
    <div className="max-w-[45rem] mt-4 text-center scroll-mt-28" id="projects">
      <h1 className="text-2xl font-semibold">My Project</h1>
      {projectsData.map((item) => {
        return (
          <div key={item.id} className="w-full flex flex-col  px-4 py-6">
            <Project item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
