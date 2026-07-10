import React from "react";
import {
  IoLogoInstagram,
  IoLogoGithub,
  IoMail,
  IoLogoLinkedin,
} from "react-icons/io5";
import { Anchor, Group } from "@mantine/core";
import useSocialLinksData, { SocialLink } from "./useSocialLinksData";

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
    <Group
      align="center"
      gap="0.25em"
      style={{ fontSize: "1.75em", transition: "all ease 0.5s" }}
    >
      {socialLinks.map((socialLink) => (
        <Anchor
          key={socialLink.link}
          href={socialLink.link}
          target="_blank"
          c="var(--app-white)"
          style={{ cursor: "pointer", display: "flex" }}
        >
          {getIcon(socialLink)}
        </Anchor>
      ))}
    </Group>
  );
};

export default SocialLinks;
