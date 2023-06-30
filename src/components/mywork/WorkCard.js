import React, { useState } from "react";

import { BiChevronDown } from "react-icons/bi";
import InfoModal from "../InfoModal";
import LinkText from "../LinkText";

const WorkCard = ({ works }) => {
  const [visible, setVisible] = useState(false);
  const [modalItem, setModalItem] = useState({});

  const handleOnClick = (item) => {
    setModalItem(item);
    setVisible(!visible);
  };

  return (
    <>
      {works.map((item, i) => (
        <div className="group bg-zinc-900 col-span relative h-[12vw]" key={i}>
          <InfoModal
            item={modalItem}
            visible={visible}
            setVisible={setVisible}
          />
          <img
            className="
                cursor-pointer
                object-cover
                transition
                duration
                shadow-xl
                rounded-md
                group-hover:opacity-90
                sm:group-hover:opacity-0
                delay-300
                w-full
                h-[12vw] 
"
            src={item.thumbnail}
            alt="myWorkTumbnail"
          />
          <div
            className="
opacity-0
absolute
top-0
transition
duration-200
z-10
invisible
sm:visible
delay-300
w-full
scale-0
group-hover:scale-100
group-hover:-translate-y-[6vw]
group-hover:translate-x-[2vw]
group-hover:opacity-100
"
          >
            <img
              src={item.thumbnail}
              alt="MyWorkThumbnail"
              className="
cursor-pointer
object-cover
transition
duration
shadow-xl
rounded-t-md
w-full
h-[12vw]
"
            />
            <div
              className="
z-10
bg-zinc-800
p-2
lg:p-4
absolute
w-full
transition
shadow-xl
rounded-b-md
"
            >
              <div className="flex flex-col gap-3">
                <div className="flex flex-row mt-4 gap-2 items-center">
                  <p className="text-neutral-500 text-sm lg:text-base">
                    {item.title}
                  </p>
                  <div
                    className="
      cursor-pointer
      ml-auto
      w-6 h-6
      lg:w-10 lg:h-10
      border-white
      border-2
      rounded-full
      flex justify-center items-center
      transition
      hover:border-neutral-300
      "
                    onClick={() => handleOnClick(item)}
                  >
                    <BiChevronDown
                      className="text-white hover:text-neutral-300"
                      size={30}
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-4 gap-2 items-center">
                  <p className="text-white text-sm lg:text-base">
                    {item.description}
                  </p>
                  <p className="text-white text-sm lg:text-base cursor-pointer">
                    <LinkText link={item.link} />
                  </p>
                  <p className="text-white text-sm lg:text-base">
                    Built with:
                    {item.technologies}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default WorkCard;
