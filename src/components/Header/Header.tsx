import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import SocialLinks from "../SocialLinks/SocialLinks";
import { Container } from "./styles";
import useHeaderData from "./useHeaderData";

const Header = () => {
  const { imageData } = useHeaderData();

  return (
    <Container>
      <GatsbyImage
        image={imageData}
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
