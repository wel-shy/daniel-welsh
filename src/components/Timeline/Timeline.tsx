import React, { useState } from "react";
import useTimeline from "./useTimeline";
import styled from "styled-components";
import RoleDetails from "./RoleDetails";
import Item from "./Item";

const Role = styled.div<{ percent: number }>`
  border-left: 1px solid white;
  align-items: center;
  padding: 0.5em;
  flex-wrap: nowrap;
`;

const RoleDetailsWrapper = styled.div`
  padding-left: 1em;
`;

const Timeline = () => {
  const { getFormattedTimeline } = useTimeline();
  const timeline = getFormattedTimeline();
  const [selectedItem, setSelectedItem] = useState<string>(
    timeline[timeline.length - 1].institution
  );

  return (
    <div>
      <h2>Work Experience</h2>
      <div>
        {timeline.map((role) => (
          <Role
            className="role"
            key={role.institution}
            percent={role.percent}
            onClick={() => setSelectedItem(role.institution)}
          >
            <Item role={role} />
            {role.institution === selectedItem && (
              <RoleDetailsWrapper>
                <RoleDetails role={role} />
              </RoleDetailsWrapper>
            )}
          </Role>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
