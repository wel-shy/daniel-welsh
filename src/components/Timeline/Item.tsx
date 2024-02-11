import React from "react";
import styled from "styled-components";
import { Role } from "./types";

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

const TimelineItem = styled.div`
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
}

const Item = ({ role }: ItemProps) => {
  const displayString = role.grade ? `${role.role}: ${role.grade}` : role.role;

  return (
    <TitleAndIcon>
      <TimelineIcon />
      <TimelineItem>
        <h3>{displayString}</h3>
        <div className="institution">{role.institution}</div>
      </TimelineItem>
    </TitleAndIcon>
  );
};

export default Item;
