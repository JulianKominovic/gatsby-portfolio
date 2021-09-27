import React from "react";
import styled from "styled-components";
import { TooltipData } from "../testData/tooltip-data";
import { DropdownList, DropdownItem } from "./dropdown/Dropdown";
import DropdownComponent from "./dropdown/DropdownComponent";
import SectionOverlay from "./SectionOverlay";
const SkillsContainer = styled.section`
  padding: 100px 80px;
  position: relative;
`;

const dataCategoryIndex = 2;
const nonRepeatedCategories = [...new Set(TooltipData.map((item) => item[2]))];
const MobileSkills = () => {
  return (
    <SkillsContainer id="skills">
      <SectionOverlay text="04. Skills" top="0px" />
      {nonRepeatedCategories.map((item) => (
        <DropdownComponent key={item} name={item}>
          <DropdownList>
            {TooltipData.map((data) =>
              data[2] === item ? (
                <DropdownItem key={data[1]}>{data[1]}</DropdownItem>
              ) : null
            )}
          </DropdownList>
        </DropdownComponent>
      ))}
    </SkillsContainer>
  );
};

export default MobileSkills;
