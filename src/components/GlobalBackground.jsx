import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { BackgroundImage, Background } from "./decoration/Deco";

const GlobalBackground = () => {
  const theme = useContext(ThemeContext);
  return (
    <Background theme={theme} zIndex="-1">
      <BackgroundImage src="/img/ellipsis1.svg"></BackgroundImage>
      <BackgroundImage
        top="30%"
        left="50%"
        src="/img/ellipsis2.svg"
      ></BackgroundImage>
    </Background>
  );
};

export default GlobalBackground;
