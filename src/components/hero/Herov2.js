import React, { useEffect } from "react";
import hero_bg from "../../imgs/hero_bg.jpg";
import hero_03 from "../../imgs/bg_02.jpg";

const Herov2 = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const parallaxImage = document.getElementById("parallax-image");
      parallaxImage.style.transform = `translateY(${scrollTop * 0.5}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className=" h-screen w-full relative flex flex-col justify-center ">
      <div>
        <img
          id="parallax-image"
          className="opacity-50 w-full h-[100%] absolute top-0"
          src={hero_03}
          alt=""
        />
      </div>
      <div className="text-white mt-5 font-serif flex justify-center items-center flex-col z-20">
        <div>
          <span className="font-mono">NICO WIRANATA</span>
        </div>

        <div className="hero-text">
          <span>LEARNING</span>
        </div>

        <div className="hero-text text-[#EB5939]">GOOD</div>
        <div className="hero-text">STUFF</div>
        <div className="hero-text">SINCE</div>
        <div className="hero-text text-[#EB5939]">2022</div>
      </div>
    </div>
  );
};

export default Herov2;
