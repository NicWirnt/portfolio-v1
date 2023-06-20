import React, { useEffect } from "react";
import bg from "../../imgs/bg_03.jpg";

const About = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const parallaxImage = document.getElementById("parallax-image");
      parallaxImage.style.transform = `translateY(${scrollTop * 0.8}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="  h-screen w-full relative flex flex-col justify-start px-52 py-40 font-mono text-gray-400 bg-blend-exclusion tracking-widest ">
      {/* <img
        id="parallax-image"
        className="opacity-50 w-full h-[100%] absolute top-0 left-0 z-0"
        src={bg}
        alt="bg"
      /> */}
      <div className=" text-xl font-bold z-10">ABOUT ME</div>
      <div className="flex flex-col text-4xl gap-4 mt-6 leading-relaxed z-10">
        <span>
          I'm passionate full stack developer aiming to deliver the best digital
          experience over the digital world
        </span>
        <span></span>
      </div>
    </div>
  );
};

export default About;
