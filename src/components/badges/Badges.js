import styled from "styled-components";

const Badge = styled.div`
  display: ${(props) => props.display || "inline"};
  padding: 0 4px;
  border-radius: 6px;
  font-size: 14px;
  margin: 4px 10px;
  margin-inline-start: 0;
  border: ${(props) =>
    typeof props.borderColor !== typeof undefined
      ? "1px solid" + props.borderColor
      : null};
  background-color: ${(props) => {
    if (props.status === "done") return "#2F4042";
    if (props.status === "ended") return "#3A404C";
    if (props.status === "into") return "#38394D";
    if (props.status === "fail") return "#3F3842";
    return "transparent";
  }};
  color: ${(props) => {
    if (props.status === "done") return "#96DDA4";
    if (props.status === "ended") return "#DDE7F0";
    if (props.status === "into") return "#D6BCFA";
    if (props.status === "fail") return "#F9B0AB";
    return props.color;
  }};
  text-transform: uppercase;
  white-space: nowrap;
`;
export { Badge };
