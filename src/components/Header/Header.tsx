import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Box, Text, Title } from "@mantine/core";
import SocialLinks from "../SocialLinks/SocialLinks";
import useHeaderData from "./useHeaderData";

const Header = () => {
  const { imageData } = useHeaderData();

  return (
    <Box
      style={{
        display: "grid",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.6)",
        borderRadius: "15px",
      }}
    >
      <GatsbyImage
        image={imageData}
        alt="Profile picture"
        style={{ gridArea: "1/1", borderRadius: "15px" }}
      />
      <Box
        p="2em"
        style={{
          gridArea: "1/1",
          position: "relative",
          backgroundImage:
            "linear-gradient(135deg, var(--app-bg) 3%, rgba(255, 255, 255, 0) 78%, var(--app-bg) 100%)",
          borderRadius: "15px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box style={{ flex: 1 }}>
          <Title order={1} mb="0.5em" style={{ fontSize: "2.5em" }}>
            Daniel Welsh
          </Title>
          <Text m={0}>Fullstack Software Engineer</Text>
          <Text m={0} fs="italic">
            Berlin, Germany
          </Text>
        </Box>

        <SocialLinks />
      </Box>
    </Box>
  );
};

export default Header;
