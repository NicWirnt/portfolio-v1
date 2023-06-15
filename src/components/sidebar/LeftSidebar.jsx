import React, { useState } from "react";
import { BiHomeSmile } from "react-icons/bi";
import { AiOutlineHome, AiOutlineMenuUnfold } from "react-icons/ai";
import {
  BsFacebook,
  BsLinkedin,
  BsInstagram,
  BsChevronDown,
} from "react-icons/bs";

import SidebarIcon from "./SidebarIcon";
import MobileMenu from "../MobileMenu";

const LeftSidebar = () => {
  const [hoverState, setHoverState] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleOnClickMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  console.log(showMobileMenu);
  return (
    <div className="flex flex-col z-20">
      <div className="md:hidden flex flex-row items-center mt-5 ml-5 fixed text-white z-30">
        <BsChevronDown
          className={`transition ${
            showMobileMenu ? "rotate-180" : "rotate-0"
          } cursor-pointer`}
          onClick={handleOnClickMobileMenu}
        />
        <MobileMenu showMobileMenu={showMobileMenu} />
      </div>
      <div className="hidden md:block">
        <div
          className="fixed text-2xl left-2 top-0 m-5 left-sidebar group z-10"
          onMouseEnter={() => setHoverState(true)}
          onMouseLeave={() => setHoverState(false)}
        >
          {hoverState ? <BiHomeSmile /> : <AiOutlineHome />}
          {/* <span className="left-sidebar-text group-hover:scale-100">Home</span> */}
        </div>
        <div className="fixed text-white flex flex-col justify-between bottom-20 left-8 gap-6 z-50">
          <SidebarIcon icons={<BsFacebook />} />
          <SidebarIcon icons={<BsLinkedin />} />
          <SidebarIcon icons={<BsInstagram />} />
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
