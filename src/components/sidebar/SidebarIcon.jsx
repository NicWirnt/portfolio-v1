import React from "react";

const SidebarIcon = ({ icons, text, link }) => {
  return (
    <div className="left-sidebar group ">
      <a target="blank" href={link}>
        {icons}
        <span className="left-sidebar-text group-hover:scale-100 md:text-base">
          {text}
        </span>
      </a>
    </div>
  );
};

export default SidebarIcon;
