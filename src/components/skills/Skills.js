import React, { useState } from "react";
import "./style.css";

const Skills = () => {
  return (
    <div className="h-full pb-10 relative flex flex-col justify-start  py-20  font-mono text-neutral-300 bg-neutral-700 bg-opacity-25">
      <div className="flex flex-col gap-2 text-4xl md:text-6xl lg:text-7xl z-20">
        <div className="flex flex-row justify-between md:mb-6">
          <div className="text-2xl w-screen ml-10 md:ml-52">What i do</div>
        </div>
        <div className="slide flex flex-row items-center justify-between ">
          <span className="ml-8 mr-8 md:ml-44">REACT</span>
          <span className="text-sm md:text-lg text-black hidden">
            open source javascript framework
          </span>
        </div>

        <div className="slide flex flex-row items-center justify-between">
          <span className="ml-8 mr-8 md:ml-44">MONGO DB</span>
          <span className="text-sm md:text-lg hidden">
            database cross-platform document-oriented
          </span>
        </div>
        <div className="slide flex flex-row items-center justify-between">
          <span className="ml-8 mr-8 md:ml-44">EXPRESS</span>
          <span className="text-sm md:text-lg hidden">
            web app minimum and flexible framework
          </span>
        </div>
        <div className="slide flex flex-row items-center justify-between">
          <span className="ml-8 mr-8 md:ml-44">NODE JS</span>
          <span className="text-sm md:text-lg hidden">
            cross-platform open-source back-end
          </span>
        </div>
        <div className="slide flex flex-row items-center justify-between ">
          <span className="ml-8 mr-8 md:ml-44">FUN</span>
          <span className="text-sm md:text-lg hidden">
            don't forget to have all the fun!
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
