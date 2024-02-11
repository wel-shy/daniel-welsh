import { Role, WorkExperience } from "./types";
import useTimelineData from "./useTimelineData";

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
    subRoles: exp.sub_roles ? parseDataToRoles(exp.sub_roles) : undefined,
    id: `${exp.institution}-${exp.from}-${exp.grade}`,
  }));

const getPercent = (nom: number, dom: number) => (nom / dom) * 100;

const useTimeline = () => {
  const { workExperience, education } = useTimelineData();

  const getFormattedTimeline = (): Role[] => {
    const data = [...workExperience, ...education];
    const roles = parseDataToRoles(data).map((role) => ({
      ...role,
      duration: getMonthsSpan(role.from, role.to),
    }));

    const [{ from: firstStartDate }] = roles.sort(
      (a, b) => a.from.getTime() - b.from.getTime()
    );

    const totalMonths = getMonthsSpan(firstStartDate, new Date());

    return roles
      .map((role) => ({
        ...role,
        percent: getPercent(role.duration, totalMonths),
      }))
      .sort((a, b) => b.from.getTime() - a.from.getTime());
  };

  return {
    getFormattedTimeline,
  };
};

export default useTimeline;
