import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Box, Flex, Text, Title } from "@mantine/core";
import SocialLinks from "../SocialLinks/SocialLinks";
import useHeaderData from "./useHeaderData";

const Header = () => {
  const { imageData } = useHeaderData();

  return (
    <Flex
      direction={{ base: "column-reverse", sm: "row" }}
      justify="space-between"
      align="center"
      gap="xl"
    >
      {/* Left: basic information */}
      <Box style={{ flex: 1 }}>
        <Title order={1} mb="0.5em" style={{ fontSize: "2.5em" }}>
          Daniel Welsh
        </Title>
        <Text m={0}>Fullstack Software Engineer</Text>
        <Text m={0} mb="1.5em" fs="italic">
          Berlin, Germany
        </Text>
        <SocialLinks />
      </Box>

      {/* Right: profile image styled as a polaroid pasted onto the page */}
      <Box
        style={{
          backgroundColor: "#fff",
          padding: "12px 12px 48px",
          boxShadow: "0 12px 24px rgba(0, 0, 0, 0.45)",
          transform: "rotate(3deg)",
          borderRadius: "2px",
          flexShrink: 0,
        }}
      >
        <GatsbyImage
          image={imageData}
          alt="Daniel Welsh"
          style={{ display: "block" }}
        />
      </Box>
    </Flex>
  );
};

export default Header;
