import { Role, WorkExperience } from "./types";

const getMonthsSpan = (startDate: Date, endDate: Date) => {
  const years = endDate.getFullYear() - startDate.getFullYear();
  const monthDelta = endDate.getMonth() - startDate.getMonth();

  return years * 12 + monthDelta + 1;
};

const parseDataToRoles = (experiences: WorkExperience[]): Role[] =>
  experiences.map((exp) => ({
    ...exp,
    from: new Date(exp.from),
    to: exp.to ? new Date(exp.to) : new Date(),
  }));

const getPercent = (nom: number, dom: number) => (nom / dom) * 100;

const data = [
  {
    role: "Fullstack Software Engineer",
    company: "Doctolib",
    from: "2022-04-01",
    location: "Berlin, Germany",
    description:
      "As a software engineer at Doctolib, I specialize in Ruby on Rails, and React. My role involves spearheading projects focused on refactoring, maintaining, and modernizing critical components of the codebase. I actively collaborate with cross-functional teams, provide mentorship to fellow engineers, and take the lead on significant projects driving major product updates.",
  },
  {
    role: "Fullstack Consultant Software Engineer",
    company: "13|37",
    from: "2019-08-01",
    to: "2022-03-01",
    location: "Stockholm, Sweden",
    description:
      "I worked at 13|37 as a Consultant Fullstack Software Engineer. I consulted on varied and challenging software projects across Stockholm. I predominately worked with JavaScript, Node, Express, and React to help clients achieve their technical needs, and using other technologies as necessary. I have worked with micro-service architectures both small and large teams - using CI/CD and terraform to manage projects. I mostly worked as a technical partner with clients, helping to identify, plan, and then achieve their software development needs.",
  },
];

const useTimeline = () => {
  const getFormattedTimeline = () => {
    const roles = parseDataToRoles(data).map((role) => ({
      ...role,
      duration: getMonthsSpan(role.from, role.to),
    }));

    const [{ from: firstStartDate }] = roles.sort(
      (a, b) => a.from.getTime() - b.from.getTime()
    );

    const totalMonths = getMonthsSpan(firstStartDate, new Date());

    return roles.map((role) => ({
      ...role,
      percent: getPercent(role.duration, totalMonths),
    }));
  };

  return {
    getFormattedTimeline,
  };
};

export default useTimeline;
