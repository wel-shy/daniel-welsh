import { createTheme, type MantineColorsTuple } from "@mantine/core";

// The site's accent colour (#B96D40) sits at shade 6 and is used as-is in both
// colour schemes; the surrounding shades are a ramp for hover/border states.
const accent: MantineColorsTuple = [
  "#f9f3f0",
  "#f0e0d7",
  "#e5caba",
  "#dab59e",
  "#d2a387",
  "#cb9675",
  "#b96d40", // 6 – primary accent
  "#a36139",
  "#8b5331",
  "#704227",
];

// Dark scheme: shade 7 is the page background (#2C2F31) and shade 0 is the
// body text (#FBFEF9), which is how Mantine derives `--mantine-color-body`
// and `--mantine-color-text` in dark mode. Light scheme uses `white`/`black`
// below, which are the inverse of the dark scheme's text/background.
const dark: MantineColorsTuple = [
  "#fbfef9", // 0 – text
  "#dde0dc",
  "#c0c3c0",
  "#a2a5a3",
  "#858887",
  "#676a6a",
  "#4a4d4e", // 6 – shadow
  "#2c2f31", // 7 – background
  "#232627",
  "#1a1d1d",
];

export const theme = createTheme({
  fontFamily: "Domine, serif",
  headings: {
    fontFamily: "'DM Mono', monospace",
  },
  primaryColor: "accent",
  // Keep the accent identical in light and dark, matching the original design.
  primaryShade: 6,
  // Cream text on the dark accent (and charcoal text on light surfaces).
  autoContrast: true,
  white: "#FBFEF9",
  black: "#2C2F31",
  colors: {
    accent,
    dark,
  },
});
