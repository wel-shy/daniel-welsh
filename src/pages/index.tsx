import * as React from "react";
import type { HeadFC } from "gatsby";
import Header from "../components/Header/Header";
import SkillsList from "../components/SkillsList/SkillsList";
import Timeline from "../components/Timeline/Timeline";
import Publications from "../components/Publications/Publications";
import PageWrapper from "../components/PageWrapper/PageWrapper";
import Footer from "../components/Footer/Footer";

const IndexPage = () => (
  <PageWrapper>
    <div className="content">
      <Header />
      <SkillsList />
      <Timeline />
      <Publications />
      <Footer />
    </div>
  </PageWrapper>
);

export default IndexPage;

export const Head: HeadFC = () => <title>Daniel Welsh</title>;
