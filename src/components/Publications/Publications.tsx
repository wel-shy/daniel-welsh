import React from "react";
import publicationsData from "./publicationsData";
import styled from "styled-components";

const Wrapper = styled.div`
  .reference {
    font-style: italic;
    margin-top: 0;
  }

  h4 {
    margin-bottom: 0.5em;
  }
`;

const Publications = () => {
  return (
    <Wrapper>
      <h2>Publications</h2>
      <div>
        {publicationsData.map((publication) => (
          <div key={publication.title}>
            <a href={publication.link} target="_blank">
              <h4>{publication.title}</h4>
            </a>

            <p className="reference">{publication.reference}</p>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Publications;
