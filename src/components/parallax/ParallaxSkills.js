import React from "react";
import { Parallax } from "react-parallax";

const ParallaxSkills = () => {
  return (
    <Parallax strength={200} blur={3}>
      <div className="h-screen w-full py-20 relative flex flex-col justify-start px-52  font-mono text-gray-400">
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
    </Parallax>
  );
};

export default ParallaxSkills;
