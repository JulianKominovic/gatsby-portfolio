import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { AiOutlineMinus } from "react-icons/ai";
import { Dropdown } from "./Dropdown";
import { Text } from "../text/Text";
import Animated from "react-mount-animation";
const DropdownComponent = ({ name, children }) => {
  const [isDroped, setIsDroped] = useState(false);

  const handleDropdown = () => setIsDroped((prev) => !prev);

  return (
    <>
      <Dropdown onClick={handleDropdown}>
        <Text>{name}</Text>
        {isDroped ? <FaArrowUp /> : <AiOutlineMinus />}
      </Dropdown>

      {isDroped ? <div>{children}</div> : null}
    </>
  );
};

export default DropdownComponent;
