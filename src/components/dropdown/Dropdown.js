import styled from "styled-components";

export const Dropdown = styled.button`
  border-bottom: 2px solid rgba(255, 255, 255, 0.6);
  width: 100%;
  border-radius: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  color: white;
  margin: 10px 0;
`;

export const DropdownList = styled.ul`
  background-color: rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 8px;
  list-style: none;
`;

export const DropdownItem = styled.li`
  color: white;

  &:not(&:first-of-type) {
    &:before {
      content: "";
      width: 100%;
      height: 1px;
      background-color: rgba(255, 255, 255, 0.4);
      display: block;
      margin: 10px 0;
    }
  }
`;
