import React, { useState } from "react";
import Item from "./Item";
import styled from "styled-components";
import useTimeline from "./useTimeline";
import { Role } from "./types";
import RoleDetails from "./RoleDetails";
import useIsSectionOpen from "../../hooks/useIsSectionOpen";

const TimelineWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  height: 20px;
`;

const Timeline = () => {
  const { getFormattedTimeline } = useTimeline();
  const { isOpen, toggle } = useIsSectionOpen();
  const timeline = getFormattedTimeline();
  const [selectedRole, setSelectedRole] = useState<Role>(
    timeline[timeline.length - 1]
  );

  return (
    <div>
      <h2 onClick={toggle}>Work History</h2>
      {!isOpen ? null : (
        <div>
          <hr />
          <TimelineWrapper>
            {timeline.map((role) => (
              <Item
                role={role}
                isSelected={role.institution === selectedRole.institution}
                onSelect={() => setSelectedRole(role)}
                key={role.institution}
              />
            ))}
          </TimelineWrapper>
          <RoleDetails role={selectedRole} />
        </div>
      )}
    </div>
  );
};

export default Timeline;
