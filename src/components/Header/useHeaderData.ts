import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  query {
    file(relativePath: { eq: "profile.jpeg" }) {
      id
      relativePath
      relativeDirectory
      childImageSharp {
        gatsbyImageData(width: 320, height: 320, layout: CONSTRAINED)
      }
    }
  }
`;

const useHeaderData = () => {
  const {
    file: {
      childImageSharp: { gatsbyImageData },
    },
  } = useStaticQuery(query);

  return { imageData: gatsbyImageData };
};

export default useHeaderData;
