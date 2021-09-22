import React from "react";
import Hero from "components/Hero";
import Navbar from "components/Navbar";

import "../normalize.css";
import Themes from "../themes";
import { ThemeStoring } from "context/ThemeStore";
import SocialOverlay from "components/SocialOverlay";
import About from "components/About";
import MailOverlay from "components/MailOverlay";
import GlobalBackground from "components/GlobalBackground";
import Projects from "components/Projects";
import Skills from "components/Skills";
import Contact from "components/Contact";

const IndexPage = () => {
  return (
    <ThemeStoring>
      <Themes>
        <GlobalBackground />
        <Navbar />
        <SocialOverlay />
        <MailOverlay />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </Themes>
    </ThemeStoring>
  );
};

export default IndexPage;
