import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import { Context } from "../context/ThemeStore";

import { InternalLink } from "./links/Links";
import { Main, Division } from "./specific-components/NavbarComponents";

const Navbar = ({ position }) => {
  const colors = useContext(ThemeContext);
  const { theme, toggleTheme } = useContext(Context);

  return (
    <Main position={position} id="navbar">
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
      {/*NOT IMPLEMENTED YET*/}
      {/* <NormalButton theme={colors} onClick={toggleTheme}>
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </NormalButton> */}
    </Main>
  );
};

export default Navbar;
