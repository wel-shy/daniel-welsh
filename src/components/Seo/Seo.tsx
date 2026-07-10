import React from "react";
import { graphql, useStaticQuery } from "gatsby";

interface SeoProps {
  /** Page-specific title. Falls back to the site title when omitted. */
  title?: string;
  /** Page-specific meta description. Falls back to the site description. */
  description?: string;
  /** Path of the current page, e.g. "/" or "/404". Used for the canonical URL. */
  pathname?: string;
  /** Set true on pages that should not be indexed (e.g. 404). */
  noindex?: boolean;
  /** Additional head elements (e.g. page-specific structured data). */
  children?: React.ReactNode;
}

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        titleTemplate
        description
        siteUrl
        author
        jobTitle
        location
        image
        social
      }
    }
  }
`;

const Seo = ({ title, description, pathname, noindex, children }: SeoProps) => {
  const { site } = useStaticQuery(query);
  const meta = site.siteMetadata;

  const seo = {
    title: title || meta.title,
    // Only apply the "%s · Daniel Welsh" template to page-specific titles.
    fullTitle: title
      ? meta.titleTemplate.replace("%s", title)
      : meta.title,
    description: description || meta.description,
    url: `${meta.siteUrl}${pathname || "/"}`,
    image: `${meta.siteUrl}${meta.image}`,
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: meta.author,
    url: meta.siteUrl,
    image: seo.image,
    jobTitle: meta.jobTitle,
    description: meta.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Berlin",
      addressCountry: "DE",
    },
    sameAs: meta.social,
  };

  return (
    <>
      <title>{seo.fullTitle}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={seo.url} />
      {noindex ? (
        <meta name="robots" content="noindex, follow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      {/* Open Graph */}
      <meta property="og:type" content="profile" />
      <meta property="og:title" content={seo.fullTitle} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:site_name" content={meta.title} />
      <meta property="og:locale" content="en_GB" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.fullTitle} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {children}
    </>
  );
};

export default Seo;
