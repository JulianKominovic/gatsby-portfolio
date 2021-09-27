import React from "react";
import styled from "styled-components";
import { HorizontalLine } from "../decoration/Deco";
import { Bold, Text } from "../text/Text";

const Point = styled.div`
  background-color: #fff;
  border-radius: 50%;
  height: 16px;
  width: 16px;
`;

const ContainerPoints = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 10px;
  margin-bottom: 16px;
`;

const TimelineComponent = ({ time, text }) => {
  return (
    <div>
      <Text align="center">
        <Bold>{time}</Bold>
      </Text>
      <ContainerPoints>
        <HorizontalLine width="50%"></HorizontalLine>
        <Point />
        <HorizontalLine width="50%"></HorizontalLine>
      </ContainerPoints>
      {text.map((item, index) => (
        <Text
          key={time + index}
          align="center"
          style={{ paddingLeft: 16, paddingRight: 16, marginBlockEnd: 12 }}
        >
          {item}
        </Text>
      ))}
    </div>
  );
};

export default TimelineComponent;
