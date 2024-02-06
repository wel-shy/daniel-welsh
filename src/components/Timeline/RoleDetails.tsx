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

    .dates {
      margin-top: 0.5em;
    }
  }

  h4 {
    font-size: 1.5em;
    margin-bottom: 0.25em;
  }

  & .location {
    margin: 0;
  }
`;

const Details = ({ role }: { role: Role }) => {
  const startDate = format(role.from, "MMMM yyyy");
  const endDate = format(role.to, "MMMM yyyy");

  return (
    <Wrapper>
      <h4>{role.role}</h4>
      <p>
        {startDate} - {endDate}
      </p>
      <p className="location">{role.location}</p>
      <p className="description">{role.description}</p>
    </Wrapper>
  );
};

const RoleDetails = ({ role }: { role: Role }) => {
  return (
    <>
      <Details role={role} />
      {role.subRoles &&
        role.subRoles.map((role) => <Details role={role as any} />)}
    </>
  );
};

export default RoleDetails;
