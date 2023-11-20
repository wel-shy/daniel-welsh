import React from "react";
import { skills } from "../../content/en.json";

const SkillsList = () => (
  <ul>
    {skills.map((skill) => (
      <li>{skill}</li>
    ))}
  </ul>
);

export default SkillsList;
