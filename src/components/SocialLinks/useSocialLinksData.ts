import { graphql, useStaticQuery } from "gatsby";

export interface SocialLink {
  platform: string;
  link: string;
}

interface SocialLinkQueryResponse {
  allContentJson: {
    edges: {
      node: {
        social_links: SocialLink[];
      };
    }[];
  };
}

const query = graphql`
  {
    allContentJson {
      edges {
        node {
          social_links {
            platform
            link
          }
        }
      }
    }
  }
`;

const useSocialLinksData = () => {
  const {
    allContentJson: {
      edges: [
        {
          node: { social_links: socialLinks },
        },
      ],
    },
  } = useStaticQuery<SocialLinkQueryResponse>(query);

  return { socialLinks };
};

export default useSocialLinksData;
