import React from "react";
import { Anchor, Box, Stack, Text, Title } from "@mantine/core";
import usePublicationsData from "./usePublicationsData";

// Matches the author's own name in either citation form so it can be
// highlighted within a reference.
const AUTHOR_NAME = /(Daniel Welsh|Welsh, D\.?)/;

const highlightAuthor = (reference: string) =>
  reference.split(AUTHOR_NAME).map((part, index) =>
    AUTHOR_NAME.test(part) ? (
      <Text key={index} span fw={700} c="var(--app-accent)" inherit>
        {part}
      </Text>
    ) : (
      part
    ),
  );

const Publications = () => {
  const { publications } = usePublicationsData();

  return (
    <Box>
      <Title order={2} mb="md">
        Publications
      </Title>
      <Stack gap="2em">
        {publications.map((publication) => {
          const heading = (
            <Title order={4} mb="0.5em" c="var(--app-text)">
              {publication.title}
            </Title>
          );

          return (
            <Box key={publication.title}>
              {publication.link ? (
                <Anchor
                  href={publication.link}
                  target="_blank"
                  c="var(--app-text)"
                  underline="always"
                  style={{ textDecorationColor: "var(--app-accent)" }}
                >
                  {heading}
                </Anchor>
              ) : (
                heading
              )}
              <Text fs="italic" c="var(--app-text)">
                {highlightAuthor(publication.reference)}
              </Text>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};

export default Publications;
