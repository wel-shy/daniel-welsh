import React from "react";
import { Role } from "./types";
import styled from "styled-components";
import { format } from "date-fns/format";

const Wrapper = styled.div`
  & .role-header {
    align-items: center;
    display: flex;
    margin-bottom: 0em;

    @media (max-width: 768px) {
      display: block;
    }
  }

  .dates {
    margin-top: 0.5em;
    margin-bottom: 0.25em;
  }

  h4 {
    font-size: 1.5em;
    margin-bottom: 0.25em;
  }

  .location {
    margin-bottom: 1em;
  }

  .description {
    margin-bottom: 2em;
  }
`;

const Details = ({ role, isSubRole }: { role: Role; isSubRole?: boolean }) => {
  const startDate = format(role.from, "MMMM yyyy");
  const endDate = format(role.to, "MMMM yyyy");

  return (
    <Wrapper>
      {isSubRole && <h4>{role.institution}</h4>}
      <h4>{role.role}</h4>
      <div className="dates">
        {startDate} - {endDate}
      </div>
      <div className="location">{role.location}</div>
      <div className="description">{role.description}</div>
    </Wrapper>
  );
};

const RoleDetails = ({ role }: { role: Role }) => {
  return (
    <>
      <Details role={role} />
      {role.subRoles &&
        role.subRoles.map((role) => <Details role={role as any} isSubRole />)}
    </>
  );
};

export default RoleDetails;
