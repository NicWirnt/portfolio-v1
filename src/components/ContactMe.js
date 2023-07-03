import React from "react";
import { BiMailSend } from "react-icons/bi";

const ContactMe = () => {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center min-h-[25vw]  "
      id="contact"
    >
      <div
        className="
        
        text-white
        font-shadows-into-light
        text-2xl
        flex flex-col justify-center items-center
       
        "
      >
        <div className="text-2xl md:text-6xl mb-10 text-[#EB5939]">
          Get in touch
        </div>
        <div className="flex flex-col items-center justify-center text-base md:text-2xl">
          <div>Don't miss an opportunity</div>
          <div>to work with passionate</div>
          <div>developers!!</div>
        </div>

        <div className="">
          <button className="bg-neutral-500 p-2 rounded-md mt-10 hover:bg-[#EB5939] hover:translate-y-2 transition-all duration-300 flex flex-row text-base md:text-2xl ">
            <a
              href="mailto:downloadfordelta@gmail.com"
              className="flex flex-row justify-center items-center gap-2"
            >
              Contact Me <BiMailSend />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
