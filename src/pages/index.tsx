import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/Header/Header";
import styled, { createGlobalStyle } from "styled-components";
import SkillsList from "../components/SkillsList/SkillsList";
import Timeline from "../components/Timeline/Timeline";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #1f1f1f;
    color: #cfcfcf;
    font-family: -apple-system, Roboto, sans-serif, serif;
    font-size: 14px;
    padding: 2em;
    min-height: 100vh;
  }

  p {
    margin-bottom: 2em;
  }

  code {
    background-color: "#FFF4DB";
    border-radius: 4px;
    color: "#8A6534";
    font-size: "1.25rem";
    padding: 4px;
  }

  ul {
    margin-bottom: 96;
    padding-left: 0;
  }
`;

const ContentWrapper = styled.div`
  border: solid white 1px;
  padding: 2em;
  height: 100%;
`;

const pageStyles = {
  height: "100%",
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <GlobalStyle />
      <ContentWrapper>
        <Header />
        <SkillsList />
        <Timeline />
      </ContentWrapper>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
