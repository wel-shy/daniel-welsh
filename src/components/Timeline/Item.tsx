import React from "react";
import { Box, Text, Title } from "@mantine/core";
import { Role } from "./types";
import RoleDetails from "./RoleDetails";

interface ItemProps {
  role: Role;
  isActive?: boolean;
}

const Item = ({ role, isActive }: ItemProps) => {
  const displayString = role.grade ? `${role.role}: ${role.grade}` : role.role;

  return (
    <Box className="tl-title-and-icon">
      <Text className="tl-icon">~</Text>
      <Box className="tl-item" data-active={isActive || undefined}>
        <Title order={3} mt={0} mb="0.25em">
          {displayString}
        </Title>
        <Text className="tl-institution">{role.institution}</Text>
        {isActive && (
          <Box>
            <RoleDetails role={role} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Item;
