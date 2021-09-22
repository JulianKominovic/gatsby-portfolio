import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { BackgroundImage, HorizontalLine } from "./decoration/Deco";
import { H1, Text, Bold } from "./text/Text";
import { FiMapPin, FiBook, FiUser } from "react-icons/fi";
import SectionOverlay from "./SectionOverlay";

const FlexContainer = styled.div`
  width: 100%;
  min-height: 70vh;
  padding: 160px 200px 100px 200px;
  z-index: 1;
  gap: 120px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
`;

const Image = styled.img`
  aspect-ratio: 1/1;
  object-fit: cover;
  width: 30vw;
  border-radius: 50%;
  background-color: #8f8f8f;
`;

const TextContainer = styled.div`
  width: 70%;
  height: 50vh;
  gap: 50px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
`;

const HistoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 80px 160px;
`;

const Point = styled.div`
  background-color: ${(props) => props.theme.text};
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

const About = () => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <FlexContainer id="about">
        <SectionOverlay text="02. About me" />
        <TextContainer>
          <H1 theme={theme}>Julian Ezequiel Kominovic</H1>
          <div>
            <Text theme={theme}>
              I’m a <Bold>very passionated frontend developer</Bold> who also
              wants to learn backend.
            </Text>
            <br />
            <Text theme={theme}>
              Since I was a child I wanted to be a software engineer, so I make
              my dreams come true and decided to start my IT degree at National
              University of Lanus.
            </Text>
            <br />
            <Text theme={theme}>
              I would like to work with a real team on real problems in order to
              get some experience and grow as a person.
            </Text>
          </div>

          <div>
            <Text>
              <FiMapPin /> Buenos Aires, Argentina.
            </Text>
            <Text>
              <FiBook /> Studying at National University of Lanus (UNLa).
            </Text>
            <Text>
              <FiUser /> 20 years old.
            </Text>
          </div>
        </TextContainer>
        <Image></Image>
      </FlexContainer>
      <HistoryGrid>
        <div>
          <Text align="center">
            <Bold>2018</Bold>
          </Text>
          <ContainerPoints>
            <HorizontalLine width="50%"></HorizontalLine>
            <Point />
            <HorizontalLine width="50%"></HorizontalLine>
          </ContainerPoints>
          <Text align="center" style={{ paddingLeft: 16, paddingRight: 16 }}>
            After 6 years studying english, I graduated at AACI (Asociacion
            Argentina de Cultura Inglesa).
          </Text>
        </div>
        <div>
          <Text align="center">
            <Bold>2019</Bold>
          </Text>
          <ContainerPoints>
            <HorizontalLine width="50%"></HorizontalLine>
            <Point />
            <HorizontalLine width="50%"></HorizontalLine>
          </ContainerPoints>
          <Text align="center" style={{ paddingLeft: 16, paddingRight: 16 }}>
            I started my IT degree at National University of Lanus (UNLa) in
            december.
          </Text>
          <br />
          <Text align="center" style={{ paddingLeft: 16, paddingRight: 16 }}>
            Also I started learning basics of HTML, CSS and Javascript.
          </Text>
        </div>
        <div>
          <Text align="center">
            <Bold>2020</Bold>
          </Text>
          <ContainerPoints>
            <HorizontalLine width="50%"></HorizontalLine>
            <Point />
            <HorizontalLine width="50%"></HorizontalLine>
          </ContainerPoints>
          <Text align="center" style={{ paddingLeft: 16, paddingRight: 16 }}>
            After the first year I was ready to seriously dive into frontend and
            some backend.
          </Text>
          <br />
          <Text align="center" style={{ paddingLeft: 16, paddingRight: 16 }}>
            I took courses from Udemy, Youtube and Sololearn about Javascript
            and React.
          </Text>
        </div>
        <div>
          <Text align="center">
            <Bold>NOW</Bold>
          </Text>
          <ContainerPoints>
            <HorizontalLine width="50%"></HorizontalLine>
            <Point />
            <HorizontalLine width="50%"></HorizontalLine>
          </ContainerPoints>
          <Text align="center" style={{ paddingLeft: 16, paddingRight: 16 }}>
            At the moment I’m practicing React, APIs, Frameworks and as soon as
            I feel prepared I’m starting backend development.
          </Text>
        </div>
      </HistoryGrid>
    </>
  );
};

export default About;
