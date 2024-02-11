import * as React from "react";
import type { HeadFC } from "gatsby";
import Header from "../components/Header/Header";
import SkillsList from "../components/SkillsList/SkillsList";
import GlobalStyle from "../components/GlobalStyle/GlobalStyle";
import Timeline from "../components/Timeline/Timeline";
import Publications from "../components/Publications/Publications";
import { ThemeProvider } from "styled-components";
import useDarkTheme from "../hooks/useDarkTheme";
import Options from "../components/Options/Options";
import useFontSize from "../hooks/useFontSize";

const IndexPage = () => {
  const { fontSize, increaseFontSize, decreaseFontSize } = useFontSize();
  const { theme, setTheme } = useDarkTheme({ fontSize });

  return (
    <main>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <>
          <Options
            setTheme={setTheme}
            theme={theme}
            increaseFontSize={increaseFontSize}
            decreaseFontSize={decreaseFontSize}
          />
          <Header />
          <SkillsList />
          <Timeline />
          <Publications />
        </>
      </ThemeProvider>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
