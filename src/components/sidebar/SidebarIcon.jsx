import React from "react";

const SidebarIcon = ({ icons, text }) => {
  return (
    <div className="left-sidebar group ">
      {icons}
      {/* <span className="left-sidebar-text group-hover:scale-100">{text}</span> */}
    </div>
  );
};

export default SidebarIcon;
