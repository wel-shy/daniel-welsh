import React from "react";
import { Anchor, Box, Stack, Text, Title } from "@mantine/core";
import usePublicationsData from "./usePublicationsData";

const Publications = () => {
  const { publications } = usePublicationsData();

  return (
    <Box>
      <Title order={2} mb="md">
        Publications
      </Title>
      <Stack gap="2em">
        {publications.map((publication) => (
          <Box key={publication.title}>
            <Anchor
              href={publication.link}
              target="_blank"
              c="var(--app-accent)"
              underline="never"
            >
              <Title order={4} mb="0.5em">
                {publication.title}
              </Title>
            </Anchor>
            <Text fs="italic" c="var(--app-text)">
              {publication.reference}
            </Text>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Publications;
