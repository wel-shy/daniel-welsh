import React from "react";
import { Box, Divider, Text } from "@mantine/core";
import SocialLinks from "../SocialLinks/SocialLinks";

const Footer = () => {
  return (
    <Box component="footer">
      <Divider my="md" />
      <SocialLinks />
      <Text my="2em">&copy; Daniel Welsh - {new Date().getFullYear()}</Text>
    </Box>
  );
};

export default Footer;
