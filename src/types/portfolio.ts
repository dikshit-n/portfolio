export type Stat = {
  value: string;
  label: string;
};

export type TechCategory = {
  index: string;
  name: string;
  items: string[];
};

export type Role = {
  index: string;
  period: string;
  company: string;
  title: string;
  location: string;
  chip?: string;
  bullets: string[];
};

export type Project = {
  index: string;
  name: string;
  categories: string[];
  description: string;
  tech: string[];
  url?: string;
  isLead?: boolean;
  private?: boolean;
};

export type ContributionType = 'merged' | 'review';

export type Contribution = {
  index: string;
  owner: string;
  repo: string;
  /** Short description of the upstream repository, not of the user's change. */
  description: string;
  /** Pre-formatted star count (e.g. "23.4k"). */
  stars: string;
  type: ContributionType;
  /** Link to the specific PR or filtered commit view — reveals the change. */
  url: string;
};

export type SectionMeta = {
  number: string;
  tag: string;
  title: string;
  subtitle?: string;
};
