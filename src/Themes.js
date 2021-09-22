import React, { useContext } from "react";
import { Context } from "./context/ThemeStore";
import { ThemeProvider } from "styled-components";

const THEMES = {
  light: {
    bg: "#fff",
    elements: "#000",
    text: "#ffffff",
    buttonBg: "#454649",
    navbar: "#333",
  },
  dark: {
    bg: "#080609",
    elements: "#fff",
    text: "#ffffff",
    buttonBg: "#aaa",
    navbar: "#000",
  },
};

const Themes = ({ children }) => {
  const { theme } = useContext(Context);
  return <ThemeProvider theme={THEMES[theme]}>{children}</ThemeProvider>;
};

export default Themes;
