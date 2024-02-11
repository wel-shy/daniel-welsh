import React from "react";
import useIsSectionOpen from "../../hooks/useIsSectionOpen";
import styled from "styled-components";
import useData from "./useData";

const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 1em;

  li {
    border: 1px solid ${({ theme }) => theme.text};
    padding: 0.5em;
    border-radius: 5px;
  }

  li.primary-skill {
    font-weight: bold;
    background-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.white};
  }
`;

const SkillsList = () => {
  const { isOpen, toggle } = useIsSectionOpen();
  const { secondarySkills, primarySkills } = useData();

  return (
    <div>
      <h2 onClick={toggle}>Skills</h2>
      {!isOpen ? null : (
        <SkillsWrapper>
          {primarySkills.map((skill) => (
            <li className="primary-skill" key={skill}>
              {skill}
            </li>
          ))}
          {secondarySkills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </SkillsWrapper>
      )}
    </div>
  );
};

export default SkillsList;
