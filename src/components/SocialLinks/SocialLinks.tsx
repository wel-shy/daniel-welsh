import React from "react";
import {
  IoLogoInstagram,
  IoLogoGithub,
  IoMail,
  IoLogoLinkedin,
} from "react-icons/io5";
import styled from "styled-components";
import useSocialLinksData, { SocialLink } from "./useSocialLinksData";

const Container = styled.div`
  font-size: 1.75em;
  align-items: center;
  display: flex;
  gap: 0.25em;
  transition: all ease 0.5s;

  svg {
    cursor: pointer;
    color: ${({ theme }) => theme.white};
  }
`;

enum SocialPlatforms {
  EMAIL = "email",
  LINKEDIN = "linkedin",
  INSTAGRAM = "instagram",
  GITHUB = "github",
}

const getIcon = (socialLink: SocialLink) => {
  switch (socialLink.platform) {
    case SocialPlatforms.EMAIL:
      return <IoMail />;
    case SocialPlatforms.GITHUB:
      return <IoLogoGithub />;
    case SocialPlatforms.INSTAGRAM:
      return <IoLogoInstagram />;
    case SocialPlatforms.LINKEDIN:
      return <IoLogoLinkedin />;
    default:
      return null;
  }
};

const SocialLinks = () => {
  const { socialLinks } = useSocialLinksData();

  return (
    <Container>
      {socialLinks.map((socialLink) => (
        <a href={socialLink.link} target="_blank">
          {getIcon(socialLink)}
        </a>
      ))}
    </Container>
  );
};

export default SocialLinks;
