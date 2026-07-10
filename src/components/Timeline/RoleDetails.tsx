import React from "react";
import { Box, Text, Title } from "@mantine/core";
import { format } from "date-fns/format";
import { Role } from "./types";

const Details = ({
  role,
  isSubRole,
  showInstitution,
}: {
  role: Role;
  isSubRole?: boolean;
  showInstitution?: boolean;
}) => {
  const fromStr = format(role.from, "yyyy-MM");
  const toStr = role.to ? format(role.to, "yyyy-MM") : "Current";

  return (
    <Box className="tl-details">
      {isSubRole && <Title order={4}>{role.role}</Title>}
      {isSubRole && (
        <Text className="tl-institution" ff="'DM Mono', monospace">
          {showInstitution && `@ ${role.institution} - `}
          {fromStr} -&gt; {toStr}
        </Text>
      )}
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
        role.subRoles.map((subRole) => (
          <Details
            key={subRole.id}
            role={subRole as any}
            isSubRole
            showInstitution={subRole.institution !== role.institution}
          />
        ))}
    </>
  );
};

export default RoleDetails;
