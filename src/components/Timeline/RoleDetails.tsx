import React from "react";
import { Role } from "./types";

const RoleDetails = ({ role }: { role: Role }) => {
  return (
    <div>
      <h3>{role.role}</h3>
      <h4>{role.company}</h4>
      <p>
        {role.from.toDateString()} - {role.to.toDateString()}
      </p>
      <p>{role.location}</p>
      <p>{role.description}</p>
    </div>
  );
};

export default RoleDetails;
