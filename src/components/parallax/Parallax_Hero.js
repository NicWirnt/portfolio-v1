import React, { useEffect, useState } from "react";
import space_01 from "../../imgs/space_02.jpg";
import { Parallax } from "react-parallax";

const Parallax_Hero = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600);
    };

    // Initial check
    handleResize();

    // Listen for window resize event
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Parallax
      className="img01"
      bgImage={space_01}
      bgImageStyle={
        isSmallScreen
          ? {
              maxHeight: "300px",
              alignItems: "center",
              marginTop: "150px",
              opacity: 0.3,
            }
          : { opacity: 0.5 }
      }
      strength={400}
      blur={{ min: -15, max: 15 }}
    >
      <div className=" h-screen w-full relative flex flex-col justify-center drop-shadow-2xl">
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
    </Parallax>
  );
};

export default Parallax_Hero;
