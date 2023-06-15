import React from "react";
import WorkCard from "./WorkCard";

const MyWorkList = () => {
  return (
    <div className="px-4 md:px-12 mt-4 space-y-8 h-screen">
      <div className="text-neutral-300 text-xl lg:text-2xl px-40 font-semibold mb-4">
        My Work
      </div>
      <div className="grid grid-cols-3 gap-2">
        <WorkCard />
      </div>
    </div>
  );
};

export default MyWorkList;
