import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import SocialLinks from "../SocialLinks/SocialLinks";

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
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.6);
  border-radius: 15px;

  h1 {
    margin-bottom: 0.5em;
    font-size: 2.5em;
  }

  p {
    margin: 0;
  }

  .location {
    font-style: italic;
  }

  .details {
    padding: 2em;
    grid-area: 1/1;
    position: relative;
    background-image: linear-gradient(
      135deg,
      ${({ theme }) => theme.background} 3%,
      rgba(255, 255, 255, 0) 78%,
      ${({ theme }) => theme.background} 100%
    );
    border-radius: 15px;
    display: flex;
    flex-direction: column;
  }

  .summary {
    flex: 1;
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
        style={{ gridArea: "1/1", borderRadius: "15px" }}
      />
      <div className="details">
        <div className="summary">
          <h1>Daniel Welsh</h1>
          <p>Fullstack Software Engineer</p>
          <p className="location">Berlin, Germany</p>
        </div>

        <SocialLinks />
      </div>
    </Container>
  );
};

export default Header;
