import React from "react";
import styled from "styled-components";
import { Role } from "./types";
import RoleDetails from "./RoleDetails";

const TitleAndIcon = styled.div`
  display: flex;
  align-items: center;
`;

const TimelineIcon = styled.div`
  background-color: ${({ theme }) => theme.accent};
  border-radius: 50%;
  box-shadow: 0 0 0 5px ${({ theme }) => theme.background};
  height: 1em;
  left: -1em;
  position: relative;
  width: 1em;
`;

const TimelineItem = styled.div<{ isActive?: boolean }>`
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.accent : "transparent"};
  border-radius: 20px;
  border: solid 1px ${({ theme }) => theme.accent};
  color: ${({ isActive, theme }) => (isActive ? theme.white : theme.text)};
  cursor: pointer;
  padding: 1em;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.accent};
  }

  .institution {
    font-size: 1.25em;
    margin: 0;
  }

  h3 {
    margin: 0 0 0.25em 0;
  }
`;

interface ItemProps {
  role: Role;
  isActive?: boolean;
}

const Item = ({ role, isActive }: ItemProps) => {
  const displayString = role.grade ? `${role.role}: ${role.grade}` : role.role;

  return (
    <TitleAndIcon>
      <TimelineIcon />
      <TimelineItem isActive={isActive}>
        <h3>{displayString}</h3>
        <div className="institution">{role.institution}</div>
        {isActive && (
          <div>
            <RoleDetails role={role} />
          </div>
        )}
      </TimelineItem>
    </TitleAndIcon>
  );
};

export default Item;
