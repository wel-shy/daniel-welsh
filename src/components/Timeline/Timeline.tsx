import React, { useState } from "react";
import useTimeline from "./useTimeline";
import styled from "styled-components";
import Item from "./Item";

const Role = styled.div<{ percent?: number }>`
  border-left: 1px solid white;
  align-items: center;
  padding: 0.5em;
  flex-wrap: nowrap;
`;

const Timeline = () => {
  const { getFormattedTimeline } = useTimeline();
  const timeline = getFormattedTimeline();
  const [selectedItem, setSelectedItem] = useState<string>(
    timeline[timeline.length - 1].id
  );

  return (
    <div>
      <h2>Work Experience</h2>
      <div>
        {timeline.map((role) => (
          <Role
            className="role"
            key={role.id}
            percent={role.percent}
            onClick={() => setSelectedItem(role.id)}
          >
            <Item role={role} isActive={role.id === selectedItem} />
          </Role>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
