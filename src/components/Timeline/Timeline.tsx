import React, { useState } from "react";
import Item from "./Item";
import styled from "styled-components";
import useTimeline from "./useTimeline";
import { Role } from "./types";
import RoleDetails from "./RoleDetails";

const TimelineWrapper = styled.div`
  display: flex;
  height: 20px;
  gap: 10px;
  flex-direction: row;
`;

const Timeline = () => {
  const { getFormattedTimeline } = useTimeline();
  const timeline = getFormattedTimeline();
  const [selectedRole, setSelectedRole] = useState<Role>(
    timeline[timeline.length - 1]
  );

  return (
    <div>
      <hr />
      <TimelineWrapper>
        {timeline.map((role) => (
          <Item
            role={role}
            isSelected={role.company === selectedRole.company}
            onSelect={() => setSelectedRole(role)}
          />
        ))}
      </TimelineWrapper>
      <RoleDetails role={selectedRole} />
    </div>
  );
};

export default Timeline;
