import React from "react";
import { ThemeProvider } from "styled-components";
import { useMantineColorScheme } from "@mantine/core";
import useFontSize from "../../hooks/useFontSize";
import useDarkTheme from "../../hooks/useDarkTheme";
import GlobalStyle from "../GlobalStyle/GlobalStyle";
import Options from "../Options/Options";
import { ThemeLabel } from "../GlobalStyle/theme";

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  const { fontSize, increaseFontSize, decreaseFontSize } = useFontSize();
  const { theme, setTheme } = useDarkTheme({ fontSize });
  const { setColorScheme } = useMantineColorScheme();

  const handleSetTheme = (label: ThemeLabel) => {
    setTheme(label);
    setColorScheme(label === ThemeLabel.DARK ? "dark" : "light");
  };

  return (
    <main>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Options
            theme={theme}
            setTheme={handleSetTheme}
            increaseFontSize={increaseFontSize}
            decreaseFontSize={decreaseFontSize}
          />
          {children}
        </>
      </ThemeProvider>
    </main>
  );
};

export default PageWrapper;
