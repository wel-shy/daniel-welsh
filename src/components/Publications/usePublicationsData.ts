import { graphql, useStaticQuery } from "gatsby";

interface Publication {
  title: string;
  link: string;
  reference: string;
}

interface PublicationsQueryResult {
  allContentJson: {
    edges: {
      node: {
        publications: Publication[];
      };
    }[];
  };
}

const query = graphql`
  {
    allContentJson {
      edges {
        node {
          publications {
            title
            link
            reference
          }
        }
      }
    }
  }
`;

const usePublicationsData = () => {
  const {
    allContentJson: {
      edges: [
        {
          node: { publications },
        },
      ],
    },
  } = useStaticQuery<PublicationsQueryResult>(query);

  return { publications };
};

export default usePublicationsData;
