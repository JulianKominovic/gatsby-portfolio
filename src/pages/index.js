import React from "react";
import Hero from "components/Hero";
import Navbar from "components/Navbar";
import { useMediaQuery } from "@react-hook/media-query";

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
import MobileSkills from "../components/MobileSkills";

const IndexPage = () => {
  const match = useMediaQuery("screen and (max-width:640px)");
  return (
    <ThemeStoring>
      <Themes>
        <GlobalBackground />
        <Navbar position={match ? "bottom: 0;" : null} />
        <SocialOverlay />
        <MailOverlay />
        <Hero />

        <About />

        <Projects />
        {match ? <MobileSkills /> : <Skills />}
        <Contact />
      </Themes>
    </ThemeStoring>
  );
};

export default IndexPage;
