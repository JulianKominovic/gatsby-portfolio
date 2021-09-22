import styled from "styled-components";

const Hexagon = styled.img`
  object-fit: cover;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  grid-column: ${(props) => props.col};
  grid-row: ${(props) => props.row};

  position: relative;
`;

export { Hexagon };
