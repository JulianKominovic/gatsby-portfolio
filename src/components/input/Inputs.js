import styled from "styled-components";

const Label = styled.label`
  color: #fff;
  font-weight: 300;
  font-size: 20px;
  display: block;
  text-transform: capitalize;
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

const FormStatus = styled.p`
  display: block;
  background-color: transparent;
  border: 2px solid
    ${(props) => {
      if (props.state === "success") return "#9EDE73";
      if (props.state === "fail") return "#FA1E0E";
      if (props.state === "idle") return "#F0E3CA";
    }};
  color: white;
  width: max-content;
  border-radius: 4px;
  padding: 2px 6px;
  margin: 0px 0 20px 0;
  text-transform: uppercase;
  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;

export { InputText, Label, TextArea, FormStatus };
