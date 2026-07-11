import React, { useEffect, useRef, useState } from "react";
import { Box, Title } from "@mantine/core";
import useTimeline from "./useTimeline";
import Item from "./Item";
import "./Timeline.css";

const Timeline = () => {
  const { getFormattedTimeline } = useTimeline();
  const timeline = getFormattedTimeline();
  const [selectedItem, setSelectedItem] = useState<string>(timeline[0].id);
  const roleRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const el = roleRefs.current[selectedItem];
    if (!el) return;

    const { top } = el.getBoundingClientRect();
    if (top < 0) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selectedItem]);

  return (
    <Box>
      <Title order={2} mb="md">
        History
      </Title>
      <Box>
        {timeline.map((role) => (
          <Box
            className="tl-role"
            key={role.id}
            ref={(el: HTMLDivElement | null) => {
              roleRefs.current[role.id] = el;
            }}
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
