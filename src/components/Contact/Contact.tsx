import React from "react";
import { Box, Button, Stack, Text, Title } from "@mantine/core";
import useSocialLinksData from "../SocialLinks/useSocialLinksData";

const SUBJECT = "Let's connect!";

const Contact = () => {
  const { socialLinks } = useSocialLinksData();
  const email = socialLinks.find((link) => link.platform === "email")?.link;
  const mailtoLink = email
    ? `${email}?subject=${encodeURIComponent(SUBJECT)}`
    : undefined;

  if (!mailtoLink) return null;

  return (
    <Box ta="center">
      <Title order={2} mb="0.25em">
        Let&apos;s build something great
      </Title>
      <Text c="var(--app-text)" mb="1.5em">
        Open to new opportunities and interesting conversations. Drop me a
        line, I&apos;d love to hear from you.
      </Text>
      <Stack align="center">
        <Button
          component="a"
          href={mailtoLink}
          size="lg"
          radius="0"
          variant="outline"
          color="accent"
          styles={{
            root: {
              fontFamily: "'DM Mono', monospace",
            },
          }}
        >
          Say hello &rarr;
        </Button>
      </Stack>
    </Box>
  );
};

export default Contact;
