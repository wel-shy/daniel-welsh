import React from "react";
import { work_experience as data } from "../../content/en.json";

const WorkExperience = () => {
  return (
    <div>
      <h2>Work Experience</h2>
      {data.map(({ role, company, from, to, location, description }) => (
        <div>
          <h3>{role}</h3>
          <h4>{company}</h4>
          <p>
            {from} - {to}
          </p>
          <p>{location}</p>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
