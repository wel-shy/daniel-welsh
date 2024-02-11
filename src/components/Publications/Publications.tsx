import React from "react";
import publicationsData from "./publicationsData";

const Publications = () => {
  return (
    <>
      <h2>Publications</h2>
      <div>
        {publicationsData.map((publication) => (
          <div key={publication.title}>
            <a href={publication.link} target="_blank">
              <h4>{publication.title}</h4>
            </a>

            <p>{publication.reference}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Publications;
