import styled from "styled-components";

const Label = styled.label`
  color: #fff;
  font-weight: 300;
  font-size: 20px;
  display: block;
`;

const InputText = styled.input`
  border-bottom: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 4px 10px;
  color: #fff;
  font-weight: 300;
  font-size: 20px;
`;

const TextArea = styled.textarea`
  border-bottom: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 4px 10px;
  color: #fff;
  font-weight: 300;
  font-size: 20px;
`;

const Error = styled.p`
  display: block;
  background-color: rgb(130, 0, 0);
  color: red;
  width: max-content;
`;

const Success = styled.p`
  display: block;
  background-color: rgb(0, 130, 0);
  color: green;
  width: max-content;
`;

export { InputText, Label, TextArea, Error, Success };
