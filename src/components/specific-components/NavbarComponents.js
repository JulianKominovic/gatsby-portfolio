import styled from "styled-components";

export const Main = styled.nav`
  position: fixed;
  ${(props) => props.position + ";" || "top: 0;"}
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 8vh;

  backdrop-filter: blur(10px);
  z-index: 999;
`;

export const Division = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  gap: 20px;
`;
