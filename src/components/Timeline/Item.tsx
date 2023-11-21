import React from "react";
import { Role } from "./types";
import styled from "styled-components";

const Wrapper = styled.div<{ isSelected: boolean; percent?: number }>`
  background-color: ${({ isSelected }) => (isSelected ? "red" : "gray")};
  flex-basis: ${({ percent }) => percent}%;
  transition: 0.5s ease all;
  width: 100%;

  &:hover {
    background-color: blue;
    cursor: pointer;
    font-weight: bold;
  }
`;

interface Props {
  role: Role;
  isSelected: boolean;
  onSelect: () => void;
}

const Item = ({ role, isSelected, onSelect }: Props) => (
  <Wrapper
    key={role.company}
    onClick={onSelect}
    isSelected={isSelected}
    percent={role.percent}
  >
    <div>{role.company}</div>
  </Wrapper>
);

export default Item;
