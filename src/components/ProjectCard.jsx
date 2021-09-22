import { ExternalLink } from "./links/Links";
import styled, { ThemeContext } from "styled-components";
import React, { useContext } from "react";
import { H2, Text } from "./text/Text";
import { Badge } from "./badges/Badges";

const CardContainer = styled.article`
  width: 320px;
  height: 700px;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  align-items: flex-start;
`;

const Image = styled.img`
  height: 30%;
  width: 100%;
  object-fit: cover;
  object-position: center 0;
`;

const TextContainer = styled.div`
  padding: 10px 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
`;

const BadgesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledLink = styled(ExternalLink)`
  width: 90%;
  display: block;
  background-color: transparent;
  margin: 0 5%;
  border: solid 2px #fff;
  border-radius: 8px;

  color: ${(props) => props.theme.text || "#fff"};
`;

const ProjectCard = ({
  title,
  imgSrc,
  desc,
  status,
  techTags,
  url,
  urlGithub,
  offsetY,
}) => {
  const theme = useContext(ThemeContext);

  return (
    <CardContainer>
      <Image src={imgSrc} />
      <TextContainer>
        <H2 theme={theme}>{title}</H2>
        <BadgesContainer>
          {status.map((status) => (
            <Badge key={status[0]} status={status[1]}>
              {status[0]}
            </Badge>
          ))}
        </BadgesContainer>
        <Text size="16px">{desc}</Text>
        <BadgesContainer>
          {techTags.map((item) => (
            <Badge borderColor={item[1]} key={item[0]} color={item[1]}>
              {item[0]}
            </Badge>
          ))}
        </BadgesContainer>
      </TextContainer>

      <div style={{ margin: "0 5% 15% 5%", width: "90%" }}>
        <StyledLink
          rel="noopener noreferrer"
          target="_blank"
          href={url}
          display="block"
        >
          <Text align="center">Live demo</Text>
        </StyledLink>
        <br />
        <StyledLink rel="noopener noreferrer" target="_blank" href={urlGithub}>
          <Text align="center">Repo</Text>
        </StyledLink>
      </div>
    </CardContainer>
  );
};

export default ProjectCard;
