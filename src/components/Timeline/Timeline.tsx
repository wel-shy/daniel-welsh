import React, { useState } from "react";
import { Box, Title } from "@mantine/core";
import useTimeline from "./useTimeline";
import Item from "./Item";
import "./Timeline.css";

const Timeline = () => {
  const { getFormattedTimeline } = useTimeline();
  const timeline = getFormattedTimeline();
  const [selectedItem, setSelectedItem] = useState<string>(timeline[0].id);

  return (
    <Box>
      <Title order={2}>History</Title>
      <Box>
        {timeline.map((role) => (
          <Box
            className="tl-role"
            key={role.id}
            onClick={() => setSelectedItem(role.id)}
          >
            <Item role={role} isActive={role.id === selectedItem} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Timeline;
