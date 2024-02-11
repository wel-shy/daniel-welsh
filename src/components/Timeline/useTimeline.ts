import { Role, WorkExperience } from "./types";
import workExperienceData from "./workExperienceData";
import educationData from "./educationData";

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
    subRoles: exp.subRoles ? parseDataToRoles(exp.subRoles) : undefined,
    id: `${exp.institution}-${exp.from}`,
  }));

const getPercent = (nom: number, dom: number) => (nom / dom) * 100;

const useTimeline = () => {
  const getFormattedTimeline = (): Role[] => {
    const data = [...workExperienceData, ...educationData];
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
