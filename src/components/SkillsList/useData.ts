import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  query {
    allContentJson {
      edges {
        node {
          primary_skills
          secondary_skills
        }
      }
    }
  }
`;

interface SkillsQueryResult {
  allContentJson: {
    edges: {
      node: {
        primary_skills: string[];
        secondary_skills: string[];
      };
    }[];
  };
}

const useData = () => {
  const {
    allContentJson: {
      edges: [
        {
          node: {
            primary_skills: primarySkills,
            secondary_skills: secondarySkills,
          },
        },
      ],
    },
  } = useStaticQuery<SkillsQueryResult>(query);

  return { secondarySkills, primarySkills };
};

export default useData;
