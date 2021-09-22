import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { HorizontalLine } from "./decoration/Deco";
import { FiMail } from "react-icons/fi";
import { ExternalLink } from "./links/Links";

const OverlayContainer = styled.div`
  position: fixed;
  display: flex;

  align-items: center;
  gap: 10px;
  z-index: 1000;
  top: 50%;
  bottom: 50%;
  left: 0;
`;

const MailOverlay = () => {
  const colors = useContext(ThemeContext);
  return (
    <OverlayContainer>
      <HorizontalLine width="40px"></HorizontalLine>
      <ExternalLink
        theme={colors}
        href="mailto:juliankominovic@gmail.com"
        rel="noreferrer noopener"
        target="_blank"
      >
        <FiMail style={{ paddingBlockStart: "4px" }} />
      </ExternalLink>
    </OverlayContainer>
  );
};

export default MailOverlay;
