import * as React from "react";
import type { HeadFC } from "gatsby";
import { Stack, Text } from "@mantine/core";
import Header from "../components/Header/Header";
import SkillsList from "../components/SkillsList/SkillsList";
import Timeline from "../components/Timeline/Timeline";
import Publications from "../components/Publications/Publications";
import PageWrapper from "../components/PageWrapper/PageWrapper";
import Footer from "../components/Footer/Footer";

const IndexPage = () => (
  <PageWrapper>
    <div className="content">
      <Stack gap="xl">
        <Header />
        <Text ff="'DM Mono', monospace" c="dimmed" size="sm" ta="center">{"-".repeat(40)}</Text>
        <SkillsList />
        <Text ff="'DM Mono', monospace" c="dimmed" size="sm" ta="center">{"-".repeat(40)}</Text>
        <Timeline />
        <Text ff="'DM Mono', monospace" c="dimmed" size="sm" ta="center">{"-".repeat(40)}</Text>
        <Publications />
        <Footer />
      </Stack>
    </div>
  </PageWrapper>
);

export default IndexPage;

export const Head: HeadFC = () => <title>Daniel Welsh</title>;
