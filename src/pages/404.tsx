import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import PageWrapper from "../components/PageWrapper/PageWrapper";
import Seo from "../components/Seo/Seo";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <PageWrapper>
      <>
        <h1>Page not found</h1>
        <p>
          Sorry, we couldn’t find what you were looking for.
          <br />
          <Link to="/">Go home</Link>.
        </p>
      </>
    </PageWrapper>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => (
  <Seo title="Page not found" pathname="/404" noindex />
);
