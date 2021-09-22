import { Form, Formik, Field, ErrorMessage } from "formik";
import React, { useState } from "react";
import styled from "styled-components";
import { SubmitButton } from "../components/buttons/Buttons";
import { Label, Error } from "./input/Inputs";
import SectionOverlay from "./SectionOverlay";
import { H1, Text } from "./text/Text";

const ContactContainer = styled.div`
  height: 100vh;
  padding: 160px 200px;
  position: relative;
`;

const StyledField = styled(Field)`
  border-bottom: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 4px 10px;
  color: #fff;
  font-weight: 300;
  font-size: 20px;
`;

const Contact = () => {
  const [sent, setSent] = useState("no");
  return (
    <ContactContainer id="contact">
      <SectionOverlay text="05. Contact" />
      <H1>Contact.</H1>
      <Text>
        Hi! Here you can get in touch with me, just leave your name, mail and
        choose the reason. Thank you.
      </Text>
      <Formik
        initialValues={{
          name: "",
          mail: "",
          reason: "",
        }}
        validate={(values) => {
          let errors = {};
          //name validation
          if (!values.name) {
            errors.name = "No name detected";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
            errors.name = "Must only contain letters a-z and spaces";
          }
          //email validation
          if (!values.mail) {
            errors.mail = "No mail detected";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              values.mail
            )
          ) {
            errors.mail = "Syntaxis must be name@domain.com";
          }
          //reason validation
          if (!values.reason) {
            errors.reason = "No reason detected";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.reason)) {
            errors.reason = "Must only contain letters a-z and spaces";
          }
          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          resetForm();

          fetch("https://formsubmit.co/ajax/juliankominovic@gmail.com", {
            method: "POST",
            body: JSON.stringify({
              name: values.name,
              mail: values.mail,
              message: values.reason,
              _template: "table",
              _subject: "Mail desde el portfolio!",
            }),
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }).then((res) => (res.status === 200 ? setSent("sending") : null));
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Label htmlFor="name">Name (required)</Label>
            <StyledField
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
            ></StyledField>
            <ErrorMessage
              name="name"
              component={() => <Error>{errors.name}</Error>}
            ></ErrorMessage>
            <Label htmlFor="mail">Email (required)</Label>
            <StyledField
              id="mail"
              name="mail"
              type="email"
              placeholder="johndoe@xyz.com"
            ></StyledField>
            <ErrorMessage
              name="mail"
              component={() => <Error>{errors.mail}</Error>}
            ></ErrorMessage>

            <Label htmlFor="reason">Reason (required)</Label>
            <StyledField
              id="reason"
              name="reason"
              as="textarea"
              placeholder="I'm writing this message because..."
            ></StyledField>
            <ErrorMessage
              name="reason"
              component={() => <Error>{errors.reason}</Error>}
            ></ErrorMessage>
            <SubmitButton type="submit">Submit</SubmitButton>
          </Form>
        )}
      </Formik>
    </ContactContainer>
  );
};

export default Contact;
