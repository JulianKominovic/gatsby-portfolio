import React from "react";
import { FaHtml5, FaCss3, FaSmile } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiStyledComponents,
  SiGatsby,
  SiGit,
  SiGithub,
  SiFigma,
} from "react-icons/si";
import { RiBook2Fill, RiTeamFill } from "react-icons/ri";
import styled from "styled-components";
import { HorizontalLine, VerticalLine } from "./decoration/Deco";
import { Hexagon } from "./hexagons/Hexagons";
import Node from "./hexagons/Node";
import { H2 } from "./text/Text";
import SectionOverlay from "./SectionOverlay";
import ReactTooltip from "react-tooltip";

const HexagonsGrid = styled.div`
  display: grid;
  padding: 100px 160px;
  min-height: 100vh;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, max-content);
  place-items: center;
  position: relative;
`;

const TooltipData = [
  [
    "html",
    "HTML5. Hypertext mark up language. Used to build the visual infrastructure.",
  ],
  ["css", "CSS3. Styling language."],
  ["js", "Javascript. The main languag for web programming."],
  ["react", "React. Used to build the app's visual side and interactivity."],
  ["gatsby", "Gatsby. Used to build fast server side rendered pages."],
  [
    "styled-components",
    "Styled Components. Allows you to write CSS inside Javascript files.",
  ],
  [
    "tailwind",
    "TailwindCSS. Gives you some pre-made customizable UI components.",
  ],
  ["git", "Git. Version manager tool."],
  ["github", "Github. Massive online repostory."],
  ["figma", "Figma. Frontend design tool."],
  [
    "group",
    "I like working in groups. It's useful to exchange ideas and grow as a professional.",
  ],
  [
    "selftaught",
    "I'm a self-taught person. I've learning web development by my own for almost 2 years.",
  ],
  ["respect", "I'm very quiet, kind and generous person."],
];

const Skills = () => {
  return (
    <>
      {TooltipData.map((data) => (
        <ReactTooltip id={data[0]}>
          <span>{data[1]}</span>
        </ReactTooltip>
      ))}
      <HexagonsGrid id="skills">
        <SectionOverlay text="04. Skills" />
        {/* LANGUAGES */}
        <H2 style={{ gridRow: "1/2", marginBlockEnd: "20px" }}>Languages</H2>
        <Node icon={<FaHtml5 />} row="2/3" col="1/2" id="html" />

        <Node
          icon={<FaCss3 />}
          before={<VerticalLine />}
          direction="column"
          col="1/2"
          row="3/4"
          id="css"
        />

        <Node
          icon={<SiJavascript />}
          before={<VerticalLine />}
          col="1/2"
          row="4/5"
          direction="column"
          id="js"
        />

        {/* FRAMEWORKS */}
        <H2
          style={{ gridRow: "1/2", marginBlockEnd: "20px", gridColumn: "2/3" }}
        >
          Frameworks
        </H2>
        <Node
          icon={<SiReact />}
          row="2/3"
          col="2/3"
          direction="column"
          id="react"
        />
        <Node
          icon={<SiGatsby />}
          direction="column"
          before={<VerticalLine />}
          row="3/4"
          col="2/3"
          id="gatsby"
        />
        {/* LIBRARIES */}
        <H2
          style={{ gridRow: "1/2", marginBlockEnd: "20px", gridColumn: "3/4" }}
        >
          Libraries
        </H2>
        <Node
          icon={<SiStyledComponents />}
          direction="column"
          col="3/4"
          row="2/3"
          id="styled-components"
        />

        <Node
          data-tip="hola"
          icon={<SiTailwindcss />}
          before={<VerticalLine />}
          col="3/4"
          row="3/4"
          direction="column"
          id="tailwind"
        />
        {/* TOOLS */}
        <H2
          style={{ gridRow: "1/2", marginBlockEnd: "20px", gridColumn: "4/5" }}
        >
          Tools
        </H2>

        <Node
          icon={<SiGit />}
          direction="column"
          col="4/5"
          row="2/3"
          id="git"
        />
        <Node
          icon={<SiGithub />}
          before={<VerticalLine />}
          direction="column"
          col="4/5"
          row="3/4"
          id="github"
        />
        <Node
          icon={<SiFigma />}
          before={<VerticalLine />}
          direction="column"
          col="4/5"
          row="4/5"
          id="figma"
        />

        {/* Soft skills */}

        <H2
          style={{ gridRow: "1/2", marginBlockEnd: "20px", gridColumn: "5/6" }}
        >
          Soft Skills
        </H2>
        <Node icon={<RiTeamFill />} col="5/6" row="2/3" id="group" />
        <Node
          icon={<RiBook2Fill />}
          before={<VerticalLine />}
          direction="column"
          col="5/6"
          row="3/4"
          id="selftaught"
        />
        <Node
          icon={<FaSmile />}
          before={<VerticalLine />}
          direction="column"
          col="5/6"
          row="4/5"
          id="respect"
        />
      </HexagonsGrid>
    </>
  );
};

export default Skills;
