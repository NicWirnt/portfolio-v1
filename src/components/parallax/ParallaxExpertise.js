import React, { useEffect, useState } from "react";
import { Parallax } from "react-parallax";
import space03 from "../../imgs/space_06.jpg";

const ParallaxExpertise = () => {
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
      bgImage={space03}
      strength={200}
      blur={{ min: -15, max: 15 }}
      bgImageStyle={
        isSmallScreen
          ? {
              maxHeight: "300px",
              alignItems: "center",
              marginTop: "200px",
              opacity: 0.5,
            }
          : { opacity: 0.3 }
      }
    >
      <div className="h-screen w-full flex flex-col gap-8 justify-center items-center text-white font-shadows-into-light">
        <div className="text-xl md:text-4xl lg:text-6xl drop-shadow-2xl">
          <span className="text-[#EB5939] ">EXPERTISE</span> AND{" "}
          <span className="text-[#EB5939]">PASSION</span>
        </div>
        <div className="text-xl md:text-2xl lg:text-4xl">COLLIDE HERE</div>
      </div>
    </Parallax>
  );
};

export default ParallaxExpertise;
