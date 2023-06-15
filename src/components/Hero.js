import React, { useState } from "react";
import herobg from "../imgs/hero03.jpg";
import "./hero.css";

const Hero = () => {
  const [hovering, setHovering] = useState(false);

  const mouseHover = () => {
    setHovering(true);
    console.log(hovering);
  };

  return (
    <div className="relative h-[56.25vw]">
      <img
        className="
    w-full h-[70vw]
    object-cover
    brightness-[70%]
    "
        src={herobg}
      ></img>
      <div
        className="absolute right-[20%] top-[10%] ml-4"
        onMouseEnter={mouseHover}
      >
        <div className="text-6xl text-white font-bold drop-shadow-xl">
          <span className="loader__dot">.</span>
          <span className="loader__dot">.</span>
          <span className="loader__dot">.</span>
          <span className="loader__dot">.</span>
          <span className="loader__dot">.</span>
          <span className="loader__dot">.</span>
        </div>
        <p
          className="
        text-white lg:text-6xl font-bold drop-shadow-xl
        "
        >
          Building
        </p>
      </div>
    </div>
  );
};

export default Hero;
