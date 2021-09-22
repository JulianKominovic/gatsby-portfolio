import React from "react";
import styled from "styled-components";
import { InputText, Label, TextArea } from "./input/Inputs";
import SectionOverlay from "./SectionOverlay";
import { H1, Text } from "./text/Text";

const ContactContainer = styled.div`
  height: 100vh;
  padding: 160px 200px;
  position: relative;
`;

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <SectionOverlay text="05. Contact" />
      <H1>Contact.</H1>
      <Text>
        Hi! Here you can get in touch with me, just leave your name, mail and
        choose the reason. Thank you.
      </Text>
      <form>
        <Label htmlFor="mail">Email (required)</Label>
        <InputText id="mail" type="email"></InputText>
        <Label htmlFor="name">Name (required)</Label>
        <InputText id="name" type="text"></InputText>
        <Label htmlFor="reason">Reason (required)</Label>
        <TextArea id="reason" type="text"></TextArea>
      </form>
    </ContactContainer>
  );
};

export default Contact;
