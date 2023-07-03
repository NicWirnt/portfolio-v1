import React from "react";

const RightSidebar = () => {
  return (
    <div className="text-neutral-300 hidden md:flex flex-col items-center justify-center fixed right-16 top-20 gap-5 z-50 ">
      <div className="right-sidebar ">
        <a href="#about">About</a>
        <div className="right-sidebar-line"></div>
      </div>
      <div className="right-sidebar">
        <a href="#myWork">My Work</a>
      </div>
      <div className="right-sidebar">
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default RightSidebar;
