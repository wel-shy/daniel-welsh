import React from "react";
import { MantineProvider, createTheme, ColorSchemeScript } from "@mantine/core";
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

export const onRenderBody = ({
  setHeadComponents,
}: {
  setHeadComponents: (components: React.ReactNode[]) => void;
}) => {
  setHeadComponents([
    <ColorSchemeScript key="color-scheme-script" defaultColorScheme="dark" />,
  ]);
};
