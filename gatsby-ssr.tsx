import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import "@mantine/core/styles.css";
import "./src/global.css";
import { theme } from "./src/theme";

export const wrapRootElement = ({ element }: { element: React.ReactNode }) => (
  <MantineProvider theme={theme} defaultColorScheme="dark">
    {element}
  </MantineProvider>
);

export const onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes,
}: {
  setHeadComponents: (components: React.ReactNode[]) => void;
  setHtmlAttributes: (attrs: Record<string, string>) => void;
}) => {
  setHtmlAttributes({ lang: "en" });
  setHeadComponents([
    <ColorSchemeScript key="color-scheme-script" defaultColorScheme="dark" />,
    <link key="favicon" rel="icon" type="image/svg+xml" href="/favicon.svg" />,
  ]);
};
