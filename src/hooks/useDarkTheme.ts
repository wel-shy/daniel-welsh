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

interface Params {
  fontSize: number;
}

const useDarkTheme = ({ fontSize }: Params) => {
  const [theme, setTheme] = useState<DefaultTheme>(darkTheme);
  useThemeDetector(setTheme);

  useEffect(() => {
    setTheme((prev) => ({ ...prev, fontSize }));
  }, [fontSize]);

  return {
    theme,
    setTheme: (theme: ThemeLabel) => {
      setTheme(theme === ThemeLabel.DARK ? darkTheme : lightTheme);
    },
  };
};

export default useDarkTheme;
