export interface WorkExperience {
  company: string;
  description: string;
  from: string;
  role: string;
  to?: string;
  location: string;
}

export type Role = Omit<WorkExperience, "from" | "to"> & {
  from: Date;
  to: Date;
  percent?: number;
};
