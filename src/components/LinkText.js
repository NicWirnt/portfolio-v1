import React from "react";
import { AiOutlineLink } from "react-icons/ai";

const LinkText = ({ link, text }) => {
  return (
    <a
      href={link}
      className="flex flex-row items-center justify-center"
      target="_blank"
      rel="noopener noreferrer"
    >
      Visit {text}
      <AiOutlineLink className="ml-2" />
    </a>
  );
};

export default LinkText;
