import styled from "styled-components";

const VerticalLine = styled.div`
  width: 2px;
  height: ${(props) => props.height || "90px"};
  transform: rotateX(${(props) => props.rotation});
  background-color: ${(props) => props.theme.elements || "#fff"};
`;

const HorizontalLine = styled.div`
  height: 2px;
  width: ${(props) => props.width || "90px"};
  transform: rotateX(${(props) => props.rotation});
  background-color: ${(props) => props.theme.elements || "#fff"};
`;

const BackgroundImage = styled.img.attrs((props) => ({
  leftDinamic: props.left,
  topDinamic: props.top,
  bottomDinamic: props.bottom,
}))`
  width: ${(props) => props.width || "50%"};
  height: auto;
  position: ${(props) => props.position || "fixed"};
  z-index: ${(props) => props.zIndex || 0};
  left: ${(props) => props.leftDinamic || 0};
  ${(props) =>
    typeof props.bottomDinamic != typeof undefined
      ? "bottom:" + props.bottomDinamic + ";"
      : "top: " + props.topDinamic + ";" || "0;"}
  opacity: ${(props) => props.opacity || "0.6;"};
  transform: rotate(${(props) => props.rotate});
`;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${(props) => props.zIndex || 0};
  background-color: ${(props) => props.theme.globalBg};
`;

export { VerticalLine, HorizontalLine, BackgroundImage, Background };
