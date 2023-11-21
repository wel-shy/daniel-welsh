import React from "react";
import { Role } from "./types";
import styled from "styled-components";

const Wrapper = styled.div`
  & .role-header {
    align-items: center;
    display: flex;
    margin-bottom: 0em;

    h3 {
      flex: 1;
      font-size: 2em;
      margin-bottom: 0em;
    }

    p {
      margin-bottom: 0em;
    }
  }

  h4 {
    font-size: 1.5em;
    margin-bottom: 0.25em;
  }

  & .location {
    margin: 0;
  }

  // TODO: Make response to screen width.
  .description {
    max-width: 50vw;
  }
`;

const RoleDetails = ({ role }: { role: Role }) => {
  return (
    <Wrapper>
      <div className="role-header">
        <h3>{role.company}</h3>
        <p>
          {role.from.toDateString()} - {role.to.toDateString()}
        </p>
      </div>
      <h4>{role.role}</h4>

      <p className="location">{role.location}</p>
      <p className="description">{role.description}</p>
    </Wrapper>
  );
};

export default RoleDetails;
