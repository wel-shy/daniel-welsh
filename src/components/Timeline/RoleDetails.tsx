import React from "react";
import { Box, Text, Title } from "@mantine/core";
import { Role } from "./types";
import { format } from "date-fns/format";

const Details = ({ role, isSubRole }: { role: Role; isSubRole?: boolean }) => {
  const startDate = format(role.from, "MMMM yyyy");
  const endDate = format(role.to, "MMMM yyyy");

  return (
    <Box className="tl-details">
      {isSubRole && <Title order={4}>{role.institution}</Title>}
      {isSubRole && <Title order={4}>{role.role}</Title>}
      <Text className="tl-dates">
        {startDate} - {endDate}
      </Text>
      <Text className="tl-location">{role.location}</Text>
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
