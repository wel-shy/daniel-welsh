import React from "react";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "./src/global.css";
import { theme } from "./src/theme";

export const wrapRootElement = ({ element }: { element: React.ReactNode }) => (
  <MantineProvider theme={theme} defaultColorScheme="dark">
    {element}
  </MantineProvider>
);
