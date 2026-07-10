import { createTheme, type MantineColorsTuple } from "@mantine/core";

// The site's accent colour (#415A77) sits at shade 6 and is used as-is in both
// colour schemes; the surrounding shades are a ramp for hover/border states.
const accent: MantineColorsTuple = [
  "#eef1f6",
  "#d3dbe6",
  "#b5c2d4",
  "#96a8c3",
  "#7d93b4",
  "#6a83ab",
  "#415a77", // 6 – primary accent
  "#3a5069",
  "#31455a",
  "#26384a",
];

// Dark scheme: shade 7 is the page background (#0D1B2A) and shade 0 is the
// body text (#E0E1DD), which is how Mantine derives `--mantine-color-body`
// and `--mantine-color-text` in dark mode.
const dark: MantineColorsTuple = [
  "#e0e1dd", // 0 – text
  "#c9cac6",
  "#a9aaa6",
  "#828983",
  "#5c6a70",
  "#40525f",
  "#1b263b", // 6 – shadow
  "#0d1b2a", // 7 – background
  "#0a1521",
  "#060d15",
];

export const theme = createTheme({
  fontFamily: "Inter, sans-serif",
  headings: {
    fontFamily: "Bitter, serif",
  },
  primaryColor: "accent",
  // Keep the accent identical in light and dark, matching the original design.
  primaryShade: 6,
  // Cream text on the dark accent (and navy text on light surfaces).
  autoContrast: true,
  white: "#E0E1DD",
  black: "#0D1B2A",
  colors: {
    accent,
    dark,
  },
});
