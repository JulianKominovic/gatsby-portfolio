import React from "react";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";
import { Hexagon } from "./Hexagons";

const NodeShape = styled.div`
  position: relative;
  cursor: pointer;
  height: 116px;
  & > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 55%;
    height: auto;
    transform: translate(-50%, -50%);
    color: white;
  }

  &:hover:before {
    transform: rotate(180deg) scale(1.2);
    transition: transform 0.3s ease;
    opacity: 1;
  }

  &:hover:after {
    transform: rotate(-360deg) scale(1.2);
    transition: transform 0.8s ease-in-out;
    opacity: 1;
  }

  &:before {
    transition: transform 0.3s ease;
    height: auto;
    width: 100%;
    opacity: 1;
    transform: rotate(0);
    transform-origin: 50% 47.5%;
    position: absolute;
    content: url("/img/hexagonnode.svg");
  }

  &:after {
    transition: transform 0.3s ease;
    height: auto;
    width: 100%;
    opacity: 1;
    transform: rotate(0);
    transform-origin: 50% 47.5%;
    position: absolute;
    top: 0;
    left: 0;
    content: url("/img/hexagonnode.svg");
  }
`;

const NodeContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: ${(props) => (props.direction === "row" ? "start" : "center")};
  justify-content: center;
  flex-direction: ${(props) => props.direction || "row"};
  grid-column: ${(props) => props.grid.col};
  grid-row: ${(props) => props.grid.row};
`;
const Node = ({ icon, after, before, row, col, id, direction, tooltip }) => {
  return (
    <NodeContainer direction={direction} grid={{ row, col }}>
      {before}

      <NodeShape data-tip data-for={id}>
        {icon}
        <Hexagon src="/img/hexagonnode.svg"></Hexagon>
      </NodeShape>
      {after}
    </NodeContainer>
  );
};

export default Node;
