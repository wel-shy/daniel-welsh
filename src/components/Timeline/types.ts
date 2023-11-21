export interface WorkExperience {
  company: string;
  description: string;
  from: string;
  location: string;
  role: string;
  subRoles?: Omit<WorkExperience, "subRoles">[];
  to?: string;
}

export type Role = Omit<WorkExperience, "from" | "to" | "subRoles"> & {
  from: Date;
  percent?: number;
  to: Date;
  subRoles?: Role[];
};
