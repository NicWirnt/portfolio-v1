import React, { useEffect } from "react";
import bg_01 from "../../imgs/bg_01copy.jpg";

const Skills = () => {
  return (
    <div className="h-screen w-full pb-10 relative flex flex-col justify-start px-52  font-mono text-gray-400">
      <div></div>
      <div className="flex flex-col gap-2 text-7xl z-20">
        <div className="flex flex-row justify-between mb-6">
          <div className="text-xl">What i do</div>
          <div className="hidden"></div>
        </div>
        <div>REACT</div>
        <div>MONGO DB</div>
        <div>EXPRESS</div>
        <div>NODE JS</div>
        <div>FUN</div>
      </div>
    </div>
  );
};

export default Skills;
