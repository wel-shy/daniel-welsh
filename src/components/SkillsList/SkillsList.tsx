import React, { useState } from "react";
import useIsSectionOpen from "../../hooks/useIsSectionOpen";

const skills = ["JavaScript", "TypeScript", "React", "Ruby", "Ruby on Rails"];

const SkillsList = () => {
  const { isOpen, toggle } = useIsSectionOpen();

  return (
    <div>
      <h2 onClick={toggle}>Skills</h2>
      {!isOpen ? null : (
        <ul>
          {skills.map((skill) => (
            <li>{skill}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SkillsList;
