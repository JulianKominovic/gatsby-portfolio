import { Form, Formik } from "formik";
import React, { useState } from "react";
import styled from "styled-components";
import { SubmitButton } from "../components/buttons/Buttons";
import SectionOverlay from "./SectionOverlay";
import { H1, Text } from "./text/Text";
import { sendMail } from "services/apiMail";
import StyledFieldFormik from "./input/StyledFieldFormik";
import { FormStatus } from "./input/Inputs";
import { validateFields } from "../services/validations";

const ContactContainer = styled.footer`
  height: 100vh;
  padding: 120px 200px;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: column;

  @media screen and (max-width: 815px) {
    padding: 120px 80px;
  }
  @media screen and (max-width: 450px) {
    padding: 160px 20px 300px 20px;
    align-items: center;
    width: 100%;
    margin: 100px 0;
  }
`;

const TextContainer = styled.div`
  width: 40%;
  @media screen and (max-width: 1100px) {
    width: 60%;
  }

  @media screen and (max-width: 450px) {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }
`;

const Contact = () => {
  const [sent, setSent] = useState("no");

  const printStatus = () => {
    if (sent === "sent") return <FormStatus state="success">{sent}</FormStatus>;
    if (sent === "sending") return <FormStatus state="idle">{sent}</FormStatus>;
    if (sent === "fail") return <FormStatus state="fail">{sent}</FormStatus>;
  };

  return (
    <ContactContainer id="contact">
      <SectionOverlay text="05. Contact" />
      <TextContainer>
        <H1>Contact.</H1>
        <Text>
          Hi! Here you can get in touch with me, just leave your name, mail and
          choose the reason. Thank you.
        </Text>
      </TextContainer>
      <Formik
        initialValues={{
          name: "",
          mail: "",
          reason: "",
        }}
        validate={(values) => {
          let errors = {};
          validateFields(values, errors);
          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          setSent("sending");

          sendMail({
            name: values.name,
            mail: values.mail,
            reason: values.reason,
          }).then((res) => {
            if (res.status === 200) {
              setSent("sent");
              resetForm();
            } else {
              setSent("fail");
            }
          });
        }}
      >
        {({ errors, values }) => (
          <Form>
            <StyledFieldFormik
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              errors={errors}
            />
            <StyledFieldFormik
              id="mail"
              name="mail"
              type="text"
              placeholder="mail@xyz.com"
              errors={errors}
            />

            <StyledFieldFormik
              id="reason"
              name="reason"
              type="text"
              placeholder="Message"
              errors={errors}
            />
            <SubmitButton type="submit">Submit</SubmitButton>
            {printStatus()}
          </Form>
        )}
      </Formik>
    </ContactContainer>
  );
};

export default Contact;
