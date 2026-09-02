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

export type SectionMeta = {
  number: string;
  tag: string;
  title: string;
  subtitle?: string;
};
