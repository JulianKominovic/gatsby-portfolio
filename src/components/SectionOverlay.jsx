import React from "react";
import styled from "styled-components";
import { HorizontalLine } from "./decoration/Deco";
import { Text } from "./text/Text";

const Overlay = styled.div`
  position: absolute;
  right: 0;
  top: 200px;
  opacity: 0.2;
  z-index: 999;
`;

const SectionOverlay = ({ text }) => {
  return (
    <Overlay>
      <Text size="24px" style={{ marginInlineEnd: "10px" }}>
        {text}
      </Text>
      <HorizontalLine width="100%"></HorizontalLine>
    </Overlay>
  );
};

export default SectionOverlay;
