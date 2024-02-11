import { graphql, useStaticQuery } from "gatsby";
import { WorkExperience } from "./types";

interface HistoryQueryResult {
  allContentJson: {
    edges: {
      node: {
        work_experience: WorkExperience[];
        education: WorkExperience[];
      };
    }[];
  };
}

const query = graphql`
  {
    allContentJson {
      edges {
        node {
          work_experience {
            role
            institution
            from
            to
            location
            description
            sub_roles {
              role
              from
              to
              location
              description
            }
          }
          education {
            role
            institution
            grade
            from
            to
            location
            description
          }
        }
      }
    }
  }
`;

const useTimelineData = () => {
  const {
    allContentJson: {
      edges: [
        {
          node: { work_experience: workExperience, education: education },
        },
      ],
    },
  } = useStaticQuery<HistoryQueryResult>(query);

  return { workExperience, education };
};

export default useTimelineData;
