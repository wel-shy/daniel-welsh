import React from "react";
import { Anchor, Box, Stack, Text, Title } from "@mantine/core";
import useSocialLinksData from "../SocialLinks/useSocialLinksData";

const SUBJECT = "Let's connect!";

const Contact = () => {
  const { socialLinks } = useSocialLinksData();
  const email = socialLinks.find((link) => link.platform === "email")?.link;
  const mailtoLink = email
    ? `${email}?subject=${encodeURIComponent(SUBJECT)}`
    : undefined;

  return (
    <Box>
      <Title order={2} mb="md">
        Get in touch
      </Title>
      <Stack gap="0.5em">
        <Text c="var(--app-text)">
          Have a question, an opportunity, or just want to say hello? I&apos;d
          love to hear from you.
        </Text>
        {email && (
          <Text>
            <Anchor
              href={mailtoLink}
              c="var(--app-text)"
              underline="always"
              style={{ textDecorationColor: "var(--app-accent)" }}
            >
              {email.replace("mailto:", "")}
            </Anchor>
          </Text>
        )}
      </Stack>
    </Box>
  );
};

export default Contact;
