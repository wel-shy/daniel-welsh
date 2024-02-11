import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/Header/Header";
import styled from "styled-components";
import SkillsList from "../components/SkillsList/SkillsList";
import GlobalStyle from "../components/GlobalStyle/GlobalStyle";
import Timeline from "../components/Timeline/Timeline";
import Publications from "../components/Publications/Publications";

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
        <Publications />
      </ContentWrapper>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
