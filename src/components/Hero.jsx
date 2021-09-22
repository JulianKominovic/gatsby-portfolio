import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { HeroText } from "./text/Text";
import { BackgroundImage } from "./decoration/Deco";

const Container = styled.div`
  height: 100vh;
  position: relative;
  overflow: hidden;
  padding: 250px 100px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Hero = () => {
  const theme = useContext(ThemeContext);

  return (
    <Container id="home">
      <BackgroundImage
        width="100%"
        bottom="0"
        position="absolute"
        src="/img/backwave.svg"
        zIndex="1"
      ></BackgroundImage>
      <BackgroundImage
        width="100%"
        bottom="0"
        position="absolute"
        src="/img/frontwave.svg"
        zIndex="1"
      ></BackgroundImage>
      <HeroText theme={theme}>HELLO</HeroText>
    </Container>
  );
};

export default Hero;
