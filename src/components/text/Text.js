import styled from "styled-components";

const HeroText = styled.h1`
  font-size: 200px;
  font-weight: 600;
  color: ${(props) => props.theme.text};
  z-index: 1;
  @media screen and (max-width: 815px) {
    padding: 250px 0;
    font-size: 120px;
  }
  @media screen and (max-width: 415px) {
    padding: 250px 0;
    font-size: 80px;
  }
`;

const Highlight = styled.span`
  background: linear-gradient(
    20deg,
    ${(props) => props.color[0]},
    ${(props) => props.color[1]}
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 400;
`;

const H1 = styled.h1`
  font-size: 64px;
  font-weight: 600;
  line-height: 0.9em;
  color: ${(props) => props.theme.text};

  @media screen and (max-width: 700px) {
    text-align: center;
  }

  @media screen and (max-width: 450px) {
    font-size: 36px;
    text-align: center;
  }
`;

const H2 = styled.h2`
  font-size: 20px;
  font-weight: 500;
  color: ${(props) => props.theme.text};
  text-align: ${(props) => props.align};
`;

const Text = styled.p`
  font-size: ${(props) => props.size || "20px"};
  font-weight: 200;
  color: ${(props) => props.theme.text};
  text-align: ${(props) => props.align};
`;

const Bold = styled.b`
  font-size: 20px;
  color: ${(props) => props.theme.text};
  font-weight: 500;
`;

export { H1, H2, HeroText, Highlight, Text, Bold };
