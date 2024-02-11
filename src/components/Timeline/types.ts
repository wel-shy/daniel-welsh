export interface WorkExperience {
  description: string;
  from: string;
  grade?: string;
  institution: string;
  location: string;
  role: string;
  sub_roles?: Omit<WorkExperience, "subRoles">[];
  to?: string;
}

export type Role = Omit<WorkExperience, "from" | "to" | "subRoles"> & {
  from: Date;
  id: string;
  percent?: number;
  subRoles?: Role[];
  to: Date;
};
