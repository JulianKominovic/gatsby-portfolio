import styled from "styled-components";
import { Text } from "../text/Text";
export const FlexContainer = styled.section`
  width: 100%;
  min-height: 70vh;
  padding: 160px 200px 100px 200px;
  z-index: 1;
  gap: 120px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  @media screen and (max-width: 1300px) {
    flex-direction: column;
    align-items: center;
    gap: 0px;
    padding: 200px 80px 100px 80px;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 0px;
    padding: 200px 20px 100px 20px;
  }
`;

export const Image = styled.img`
  aspect-ratio: 1/1;
  object-fit: cover;
  width: 30vw;
  border-radius: 50%;
  background-color: #8f8f8f;
`;

export const TextContainer = styled.article`
  width: 70%;
  min-height: 50vh;
  gap: 50px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  @media screen and (max-width: 1300px) {
    margin-block-end: 100px;
    text-align: center;
  }
`;

export const PinsContainer = styled.div`
  flex-direction: column;
  width: 100%;
`;

export const PinsText = styled(Text)`
  text-align: left;
  display: flex;
  gap: 10px;
  align-items: center;
  @media screen and (max-width: 1300px) {
    align-items: center;
    flex-direction: row;
  }
  @media screen and (max-width: 500px) {
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    row-gap: 4px;
    margin: 16px 0;
  }
`;

export const HistoryGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 80px 160px;

  @media screen and (max-width: 815px) {
    padding: 80px 40px;
  }
`;
