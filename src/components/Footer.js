import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white pb-2 mt-10 w-full text-xs md:text-base">
      <div> Copyright ©️ Nico Wiranata 2023 All rights reserved</div>
      <div className="font-shadows-into-light shadow-lg text-[#EB5939] ">
        {" "}
        Powered by: ReactJs Tailwind
      </div>
    </div>
  );
};

export default Footer;
