import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

export const query = graphql`
  query {
    file(relativePath: { eq: "hero.jpeg" }) {
      id
      relativePath
      relativeDirectory
      childImageSharp {
        gatsbyImageData(width: 1000, height: 500, layout: FULL_WIDTH)
      }
    }
  }
`;

const Container = styled.div`
  display: grid;

  h1 {
    margin-bottom: 0.5em;
    font-size: 2.5em;
  }

  p {
    margin: 0;
  }

  .details {
    padding: 2em;
    grid-area: 1/1;
    position: relative;
    background-image: linear-gradient(
      90deg,
      ${({ theme }) => theme.background} 0%,
      rgba(123, 123, 444, 0) 100%
    );
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
      <GatsbyImage
        image={gatsbyImageData}
        alt="Profile picture"
        style={{ gridArea: "1/1", borderRadius: "20px" }}
      />
      <div className="details">
        <h1>Daniel Welsh</h1>
        <p>Fullstack Software Engineer</p>
        <p>Berlin, Germany</p>
      </div>
    </Container>
  );
};

export default Header;
