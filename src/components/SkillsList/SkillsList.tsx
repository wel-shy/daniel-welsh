import React, { useState } from "react";
import useIsSectionOpen from "../../hooks/useIsSectionOpen";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Ruby",
  "Ruby on Rails",
  "C#",
  "Express.js",
  ".Net",
  "SQL",
  "MongoDB",
  "Python",
  "Java",
  "Git",
  "CI/CD",
  "Vue.js",
  "Linux",
  "AWS",
  "Unit Testing",
  "Kubernetes",
];

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
