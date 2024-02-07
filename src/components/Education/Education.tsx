import React from "react";
import useEducationData from "./useEducationData";

const Education = () => {
  const { data } = useEducationData();

  return (
    <>
      <h2>Education</h2>
      <div>
        {data.map((education) => (
          <div key={education.title}>
            <h3>{education.title}</h3>
            <h4>{education.school}</h4>
            <div>
              {education.from} - {education.to}
            </div>
            <div>{education.location}</div>
            <div>{education.description}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Education;
