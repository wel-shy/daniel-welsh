import { DefaultTheme } from "styled-components";
import {
  ThemeLabel,
  darkTheme,
  lightTheme,
} from "../components/GlobalStyle/theme";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const useThemeDetector = (setTheme: Dispatch<SetStateAction<DefaultTheme>>) => {
  const eventHandler = (event: MediaQueryListEvent) => {
    setTheme(event.matches ? darkTheme : lightTheme);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", eventHandler);

    return () => mediaQuery.removeEventListener("change", eventHandler);
  }, []);
};

const useDarkTheme = () => {
  const [theme, setTheme] = useState<DefaultTheme>(darkTheme);
  useThemeDetector(setTheme);

  return {
    theme,
    setTheme: (theme: ThemeLabel) => {
      setTheme(theme === ThemeLabel.DARK ? darkTheme : lightTheme);
    },
  };
};

export default useDarkTheme;
