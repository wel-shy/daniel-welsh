import React from "react";
import styled from "styled-components";
import { Role } from "./types";
import RoleDetails from "./RoleDetails";

const TitleAndIcon = styled.div`
  display: flex;
  align-items: center;
`;

const TimelineIcon = styled.div`
  height: 1em;
  width: 1em;
  background-color: white;
  border-radius: 50%;
  position: relative;
  left: -1em;
  box-shadow: 0 0 0 5px #1f1f1f;
`;

const TimelineItem = styled.div<{ isActive?: boolean }>`
  background-color: ${({ isActive }) =>
    isActive ? "#3f3b3b" : "transparent"}; // #3f3b3b;
  border: solid 1px #3f3b3b;
  padding: 1em;
  border-radius: 20px;
  width: 100%;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    background-color: #3f3b3b;
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
