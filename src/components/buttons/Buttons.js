import styled from "styled-components";

const NormalButton = styled.button`
  display: flex;
  padding: 6px;
  gap: 10px;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.buttonBg};
  color: ${(props) => props.theme.text};
`;

const SubmitButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  font-weight: 600;
  background-color: #2c2752;
  color: #fff;
`;

export { NormalButton, SubmitButton };
