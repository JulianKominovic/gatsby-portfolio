import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";
const ExternalLink = styled.a`
  font-size: 24px;
  transition: opacity 0.3s ease;
  color: ${(props) => props.theme.text};
  &:hover {
    opacity: 0.6;
    transition: opacity 0.3s ease;
  }
`;

const InternalLink = styled(AnchorLink)`
  font-weight: 400;
  font-size: 18px;
  display: ${(props) => props.display};
  position: relative;
  overflow: hidden;
  color: ${(props) => props.theme.text};
  &:after {
    content: "";
    background-color: white;
    height: 2px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: -100%;
    transition: left 0.5s ease;
  }

  &:hover:after {
    opacity: 1;
    transition: left 0.5s ease;
    left: 0%;
  }

  @media screen and (max-width: 440px) {
    font-size: 14px;
  }
`;

export { ExternalLink, InternalLink };
