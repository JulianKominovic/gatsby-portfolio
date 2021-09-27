import React from "react";
import styled from "styled-components";
import { Label, FormStatus } from "components/input/Inputs";
import { Field, ErrorMessage } from "formik";

const StyledField = styled(Field)`
  border-bottom: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 4px 10px;
  color: #fff;
  font-weight: 300;
  font-size: 20px;
  margin: 4px 0 10px 0;
`;

const StyledFieldFormik = ({ name, type, placeholder, errors }) => {
  return (
    <>
      <Label htmlFor={name}>{name} (required)</Label>
      <StyledField
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
      />
      <ErrorMessage
        name={name}
        component={() => <FormStatus state="fail">{errors[name]}</FormStatus>}
      ></ErrorMessage>
    </>
  );
};

export default StyledFieldFormik;
