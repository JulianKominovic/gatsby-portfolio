import React from "react";
import styled from "styled-components";
import { HorizontalLine } from "./decoration/Deco";
import { Text } from "./text/Text";

const Overlay = styled.aside`
  position: absolute;
  right: 0;
  top: 200px;
  opacity: 0.2;
  z-index: 999;

  @media screen and (max-width: 600px) {
    top: ${(props) => props.top || "100px"};
  }
`;

const SectionOverlay = ({ text, top }) => {
  return (
    <Overlay id="section-overlay" top={top}>
      <Text size="24px" style={{ marginInlineEnd: "10px" }}>
        {text}
      </Text>
      <HorizontalLine width="100%"></HorizontalLine>
    </Overlay>
  );
};

export default SectionOverlay;
