import React from "react";
import { Box, Text, Title } from "@mantine/core";
import { Role } from "./types";

const Details = ({ role, isSubRole }: { role: Role; isSubRole?: boolean }) => {
  return (
    <Box className="tl-details">
      {isSubRole && <Title order={4}>{role.role}</Title>}
      {isSubRole && <Text c="dimmed">{role.institution}</Text>}
      {!isSubRole && (
        <Text className="tl-location" ff="'DM Mono', monospace">
          {role.location}
        </Text>
      )}
      <Text className="tl-description">{role.description}</Text>
    </Box>
  );
};

const RoleDetails = ({ role }: { role: Role }) => {
  return (
    <>
      <Details role={role} />
      {role.subRoles &&
        role.subRoles.map((role) => (
          <Details key={role.id} role={role as any} isSubRole />
        ))}
    </>
  );
};

export default RoleDetails;
