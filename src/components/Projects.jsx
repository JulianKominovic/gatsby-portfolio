import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import { cardsData } from "../testData/test-cards";
import SectionOverlay from "./SectionOverlay";

const ProjectsContainer = styled.div`
  width: 100%;
  padding: 200px 160px;
  min-height: 100vh;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <SectionOverlay text="03. Projects" />
      {cardsData.map((data) => (
        <ProjectCard key={data.title} {...data}></ProjectCard>
      ))}
    </ProjectsContainer>
  );
};

export default Projects;
