import { DefaultTheme } from "styled-components";

export enum ThemeLabel {
  DARK,
  LIGHT,
}

export const defaultFontSize = 16;

export const darkTheme: DefaultTheme = {
  background: "#0D1B2A",
  text: "#E0E1DD",
  shadow: "#1B263B",
  accent: "#415A77",
  white: "#E0E1DD",
  label: ThemeLabel.DARK,
  fontSize: defaultFontSize,
};

export const lightTheme: DefaultTheme = {
  background: "#E0E1DD",
  text: "#0D1B2A",
  accent: "#415A77",
  shadow: "#1B263B",
  white: "#E0E1DD",
  label: ThemeLabel.LIGHT,
  fontSize: defaultFontSize,
};
