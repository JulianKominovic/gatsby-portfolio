import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { BackgroundImage } from "./decoration/Deco";
import { H1, Text, Bold } from "./text/Text";
import { FiMapPin, FiBook, FiUser } from "react-icons/fi";
import SectionOverlay from "./SectionOverlay";
import TimelineComponent from "./timeline/TimelineComponent";
import {
  FlexContainer,
  TextContainer,
  PinsContainer,
  PinsText,
  Image,
  HistoryGrid,
} from "./specific-components/AboutComponents";
import AboutMobile from "../components/AboutMobile";
import { useMediaQuery } from "@react-hook/media-query";
import { history } from "../testData/test-about";
const About = () => {
  const mobile = useMediaQuery("screen and (max-width:600px)");
  const theme = useContext(ThemeContext);
  return (
    <>
      <FlexContainer id="about">
        <BackgroundImage
          width="100%"
          top="-20px"
          position="absolute"
          src="/img/frontwave.svg"
          zIndex="-1"
          opacity="1"
          rotate="180deg"
        ></BackgroundImage>
        <SectionOverlay text="02. About me" />
        <TextContainer>
          <H1>Julian Ezequiel Kominovic</H1>
          <div>
            <Text>
              I’m a <Bold>very passionated frontend developer</Bold> who also
              wants to learn backend.
            </Text>
            <br />
            <Text>
              Since I was a child I wanted to be a software engineer, so I make
              my dreams come true and decided to start my IT degree at National
              University of Lanus.
            </Text>
            <br />
            <Text>
              I would like to work with a real team on real problems in order to
              get some experience and grow as a person.
            </Text>
          </div>

          <PinsContainer>
            <PinsText>
              <FiMapPin />
              Buenos Aires, Argentina.
            </PinsText>
            <PinsText>
              <FiBook />
              Studying at National University of Lanus (UNLa).
            </PinsText>
            <PinsText>
              <FiUser />
              20 years old.
            </PinsText>
          </PinsContainer>
        </TextContainer>
        <Image></Image>
      </FlexContainer>
      {mobile ? (
        <AboutMobile />
      ) : (
        <HistoryGrid id="timeline">
          {history.map((item) => (
            <TimelineComponent
              key={item.time}
              time={item.time}
              text={item.text}
            />
          ))}
        </HistoryGrid>
      )}
    </>
  );
};

export default About;
