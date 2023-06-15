import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
const MobileMenu = ({ showMobileMenu }) => {
  if (!showMobileMenu) {
    return null;
  }

  return (
    <div className="bg-neutral-300 bg-opacity-80 absolute top-8 left-0 py-5 flex flex-col border-4 border-gray-400 rounded-sm w-40 z-50">
      <div className="flex flex-col gap-32 justify-between text-black">
        <div>
          <div className="px-3 text-center hover:underline cursor-pointer">
            Home
          </div>
          <div className="px-3 text-center hover:underline cursor-pointer">
            About
          </div>
          <div className="px-3 text-center hover:underline cursor-pointer">
            MyWork
          </div>
          <div className="px-3 text-center hover:underline cursor-pointer">
            Contact Me
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-xl text-white">
          <div className="cursor-pointer m-2">
            <BsFacebook className="transition-all duration-300 transform hover:scale-105 hover:animate-bounce hover:text-gray-800" />
          </div>
          <div className="cursor-pointer m-2">
            <BsLinkedin className="transition-all duration-300 transform hover:scale-105 hover:animate-bounce  hover:text-gray-800" />
          </div>
          <div className="cursor-pointer m-2">
            <BsInstagram className="transition-all duration-300 transform hover:scale-105 hover:animate-bounce  hover:text-gray-800" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
