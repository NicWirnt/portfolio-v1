import React from "react";
import "./App.css";

import LeftSidebar from "./components/sidebar/LeftSidebar";
import About from "./components/about/About";
import RightSidebar from "./components/sidebar/RightSidebar";
import AnimCursor from "./components/cursor/AnimCursor";
import Skills from "./components/skills/Skills";
import MyWorkList from "./components/mywork/MyWorkList";
import ParallaxHero from "./components/parallax/Parallax_Hero";

import ParallaxExpertise from "./components/parallax/ParallaxExpertise";

import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="bg-black cursor-default">
      <RightSidebar />
      <LeftSidebar />
      <ParallaxHero />
      <About />
      <ParallaxExpertise />
      <Skills />
      <MyWorkList />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
