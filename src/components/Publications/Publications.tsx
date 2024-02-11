import React from "react";
import styled from "styled-components";
import usePublicationsData from "./usePublicationsData";

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
  const { publications } = usePublicationsData();

  return (
    <Wrapper>
      <h2>Publications</h2>
      <div>
        {publications.map((publication) => (
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
