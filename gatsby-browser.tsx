import React from "react";
import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";

const theme = createTheme({
  fontFamily: "Inter, sans-serif",
  headings: {
    fontFamily: "Bitter, serif",
  },
});

export const wrapRootElement = ({ element }: { element: React.ReactNode }) => (
  <MantineProvider theme={theme} defaultColorScheme="dark">
    {element}
  </MantineProvider>
);
