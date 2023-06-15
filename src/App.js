import React from "react";
import "./App.css";

import Herov2 from "./components/hero/Herov2";
import LeftSidebar from "./components/sidebar/LeftSidebar";
import About from "./components/about/About";
import RightSidebar from "./components/sidebar/RightSidebar";
import AnimCursor from "./components/cursor/AnimCursor";
import Skills from "./components/skills/Skills";
import MyWorkList from "./components/mywork/MyWorkList";
function App() {
  return (
    <div className="bg-[#262626] cursor-default">
      <AnimCursor />
      <RightSidebar />
      <LeftSidebar />
      <Herov2 />
      <About />
      <Skills />
      <MyWorkList />
    </div>
  );
}

export default App;
