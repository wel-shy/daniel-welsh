import React from "react";

const skills = ["JavaScript", "TypeScript", "React", "Ruby", "Ruby on Rails"];

const SkillsList = () => (
  <ul>
    {skills.map((skill) => (
      <li>{skill}</li>
    ))}
  </ul>
);

export default SkillsList;
