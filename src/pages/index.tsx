import * as React from "react";
import type { HeadFC } from "gatsby";
import Header from "../components/Header/Header";
import SkillsList from "../components/SkillsList/SkillsList";
import GlobalStyle from "../components/GlobalStyle/GlobalStyle";
import Timeline from "../components/Timeline/Timeline";
import Publications from "../components/Publications/Publications";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../components/GlobalStyle/theme";

const IndexPage = () => {
  return (
    <main>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <>
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
