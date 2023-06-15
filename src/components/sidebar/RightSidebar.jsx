import React from "react";

const RightSidebar = () => {
  return (
    <div className="text-neutral-300 hidden md:flex flex-col items-center justify-center fixed right-16 top-20 gap-5 z-50 ">
      <div className="right-sidebar ">About</div>
      <div className="right-sidebar">My Work</div>
      <div className="right-sidebar">Contact</div>
    </div>
  );
};

export default RightSidebar;
