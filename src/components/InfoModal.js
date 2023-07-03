import React from "react";

import { AiOutlineClose } from "react-icons/ai";
import LinkText from "./LinkText";

const InfoModal = ({ item, visible, setVisible }) => {
  const handleOnClose = () => {
    setVisible(!visible);
  };

  if (!visible) {
    return null;
  }

  return (
    <div
      className="
  z-50
  transition-all
  duration-300
  bg-black
  bg-opacity-80
  flex
  justify-center
  items-center
  overflow-x-hidden
  overflow-y-auto
  fixed
  inset-0
  "
    >
      <div
        className="
        relative
        w-auto
        mx-auto
        max-w-3xl
        rounded-md
        overflow-hidden
        "
      >
        <div
          className={`
          ${visible ? "scale-100" : "scale-0-"}
          transform
          duration-300
          relative
          flex-auto
          bg-zinc-900
          drop-shadow-md
          `}
        >
          <div className="relative h-auto">
            <img
              className="
            w-full
            opacity-70
            object-cover
            h-full
            "
              alt="thumbnail"
              src={item.thumbnail}
            />
            <div
              className="
            cursor-pointer
            absolute
            top-10
            right-3
            h-10
            w-10
            rounded-full
            bg-black
            bg-opacity-70
            flex
            items-center
            justify-center
            "
              onClick={handleOnClose}
            >
              <AiOutlineClose className="text-white" size={20} />
            </div>
            <div className="absolute bottom-[10%] left-10">
              <p
                className="
                text-white text-3xl md:text-4xl h-full lg:text-5xl font-bold mb-80
                "
              >
                {item.title}
              </p>
              <div className="flex flex-row justify-center items-center py-2 text-white bg-black rounded-md cursor-pointer">
                <LinkText link={item.link} />
              </div>
            </div>
          </div>
          <div className="px-12 py-8">
            <p className="text-white">{item.description}</p>
            <p className="text-white">Technologies : {item.technologies}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
