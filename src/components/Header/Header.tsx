import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

export const query = graphql`
  query {
    file(relativePath: { eq: "profile.jpeg" }) {
      id
      relativePath
      relativeDirectory
      childImageSharp {
        gatsbyImageData(width: 175)
      }
    }
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;

  img {
    border-radius: 50%;
  }

  h1 {
    margin: 0;
  }

  p {
    margin: 0;
  }
`;

const Header = () => {
  const {
    file: {
      childImageSharp: { gatsbyImageData },
    },
  } = useStaticQuery(query);

  return (
    <Container>
      <GatsbyImage image={gatsbyImageData} alt="Profile picture" />
      <div className="details">
        <h1>Daniel Welsh</h1>
        <p>Fullstack Software Engineer</p>
        <p>Berlin, Germany</p>
      </div>
    </Container>
  );
};

export default Header;
