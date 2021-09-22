import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { FaMoon, FaSun } from "react-icons/fa";
import { Context } from "../context/ThemeStore";
import { NormalButton } from "./buttons/Buttons";
import { ExternalLink, InternalLink } from "./links/Links";
const Main = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 8vh;
  padding: 0 160px;
  backdrop-filter: blur(10px);
  z-index: 999;
`;

const Division = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  gap: 20px;
`;

const Navbar = () => {
  const colors = useContext(ThemeContext);
  const { theme, toggleTheme } = useContext(Context);

  return (
    <Main>
      <Division>
        <InternalLink theme={colors} to="/#home">
          Home
        </InternalLink>
        <InternalLink theme={colors} to="/#about">
          About me
        </InternalLink>
        <InternalLink theme={colors} to="/#projects">
          Projects
        </InternalLink>
        <InternalLink theme={colors} to="/#skills">
          Skills
        </InternalLink>
        <InternalLink theme={colors} to="/#contact">
          Contact
        </InternalLink>
      </Division>
      <Division>
        <NormalButton theme={colors} onClick={toggleTheme}>
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </NormalButton>
      </Division>
    </Main>
  );
};

export default Navbar;
