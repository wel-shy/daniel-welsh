import React from "react";
import { Badge, Group, Title } from "@mantine/core";
import useData from "./useData";

const SkillsList = () => {
  const { secondarySkills, primarySkills } = useData();

  return (
    <div>
      <Title order={2} mb="md">
        Skills
      </Title>
      <Group gap="1em">
        {primarySkills.map((skill) => (
          <Badge
            key={skill}
            size="lg"
            radius="sm"
            tt="none"
            fw={700}
            style={{
              backgroundColor: "var(--app-accent)",
              color: "var(--app-white)",
              border: "none",
            }}
          >
            {skill}
          </Badge>
        ))}
        {secondarySkills.map((skill) => (
          <Badge
            key={skill}
            size="lg"
            radius="sm"
            tt="none"
            fw={400}
            style={{
              backgroundColor: "transparent",
              color: "var(--app-text)",
              border: "1px solid var(--app-text)",
            }}
          >
            {skill}
          </Badge>
        ))}
      </Group>
    </div>
  );
};

export default SkillsList;
