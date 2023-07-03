import React from "react";

const About = () => {
  //parallax useeffects
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.pageYOffset;
  //     const parallaxImage = document.getElementById("parallax-image");
  //     parallaxImage.style.transform = `translateY(${scrollTop * 0.8}px)`;
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div
      className=" w-full relative flex flex-col justify-start px-4 md:px-52 md:py-10 font-mono text-neutral-300 bg-blend-exclusion tracking-widest bg-black "
      id="about"
    >
      <div className=" text-xl font-bold z-10">ABOUT ME</div>
      <div className="flex flex-col text-base md:text-4xl gap-4 mt-6 leading-relaxed z-10">
        <span>
          I'm passionate full stack developer aiming to deliver the best
          experience over the digital world.
        </span>
        <span></span>
      </div>
    </div>
  );
};

export default About;
