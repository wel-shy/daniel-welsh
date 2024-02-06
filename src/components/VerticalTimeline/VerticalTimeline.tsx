import React, { useState } from "react";
import useTimeline from "../Timeline/useTimeline";
import styled from "styled-components";
import RoleDetails from "../Timeline/RoleDetails";

const Role = styled.div<{ percent: number }>`
  border-left: 1px solid white;
  align-items: center;
  padding: 0.5em;
  flex-wrap: nowrap;
`;

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

const RoleDetailsWrapper = styled.div`
  padding-left: 1em;
`;

const VerticalTimeline = () => {
  const { getFormattedTimeline } = useTimeline();
  const timeline = getFormattedTimeline();
  const [selectedItem, setSelectedItem] = useState<string>(
    timeline[timeline.length - 1].company
  );

  return (
    <div>
      <h2>Work Experience</h2>
      <div>
        {timeline.map((role) => (
          <Role
            className="role"
            key={role.company}
            percent={role.percent}
            onClick={() => setSelectedItem(role.company)}
          >
            <TitleAndIcon>
              <TimelineIcon />
              <h3>{role.company}</h3>
            </TitleAndIcon>

            {role.company === selectedItem && (
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

export default VerticalTimeline;
