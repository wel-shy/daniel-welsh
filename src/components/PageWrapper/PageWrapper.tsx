import React from "react";
import { ThemeProvider } from "styled-components";
import useFontSize from "../../hooks/useFontSize";
import useDarkTheme from "../../hooks/useDarkTheme";
import GlobalStyle from "../GlobalStyle/GlobalStyle";
import Options from "../Options/Options";

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  const { fontSize, increaseFontSize, decreaseFontSize } = useFontSize();
  const { theme, setTheme } = useDarkTheme({ fontSize });
  return (
    <main>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Options
            theme={theme}
            setTheme={setTheme}
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
