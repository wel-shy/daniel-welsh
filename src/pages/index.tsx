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
        <img
          alt="Gatsby G Logo"
          src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
        />
      </ContentWrapper>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
