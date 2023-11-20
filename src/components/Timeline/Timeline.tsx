import React from "react";
import Item from "./Item";
import styled from "styled-components";
import useTimeline from "./useTimeline";

const TimelineWrapper = styled.div`
  display: flex;
  height: 20px;
  gap: 10px;
  flex-direction: row;
`;

const Timeline = () => {
  const { getFormattedTimeline } = useTimeline();
  const timeline = getFormattedTimeline();

  return (
    <div>
      <hr />
      <TimelineWrapper>
        {timeline.map((role) => (
          <Item role={role} />
        ))}
      </TimelineWrapper>
    </div>
  );
};

export default Timeline;
