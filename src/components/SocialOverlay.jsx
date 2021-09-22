import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { VerticalLine } from "./decoration/Deco";
import { FaGithub, FaLinkedin, FaDev } from "react-icons/fa";
import { ExternalLink } from "./links/Links";

const OverlayContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  z-index: 999;
  bottom: 0;
  right: 60px;
`;

const SocialOverlay = () => {
  const colors = useContext(ThemeContext);
  return (
    <OverlayContainer>
      <ExternalLink
        theme={colors}
        href="https://dev.to/juliankominovic"
        rel="noreferrer noopener"
        target="_blank"
      >
        <FaDev />
      </ExternalLink>
      <ExternalLink
        theme={colors}
        href="https://www.linkedin.com/in/jkominovic/"
        rel="noreferrer noopener"
        target="_blank"
      >
        <FaLinkedin />
      </ExternalLink>
      <ExternalLink
        theme={colors}
        href="https://github.com/JulianKominovic"
        rel="noreferrer noopener"
        target="_blank"
      >
        <FaGithub />
      </ExternalLink>
      <VerticalLine></VerticalLine>
    </OverlayContainer>
  );
};

export default SocialOverlay;
