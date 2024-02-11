import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  query {
    file(relativePath: { eq: "hero.jpeg" }) {
      id
      relativePath
      relativeDirectory
      childImageSharp {
        gatsbyImageData(width: 1000, height: 500, layout: FULL_WIDTH)
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
