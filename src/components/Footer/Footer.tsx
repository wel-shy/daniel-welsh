import React from "react";
import SocialLinks from "../SocialLinks/SocialLinks";

const Footer = () => {
  return (
    <footer>
      <hr />
      <p>&copy; Daniel Welsh - {new Date().getFullYear()}</p>
      <SocialLinks />
    </footer>
  );
};

export default Footer;
