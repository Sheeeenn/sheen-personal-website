export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export type ProjectType = "personal" | "company" | "hackathon";

export interface Project {
  slug: string;
  title: string;
  description: string;
  type: ProjectType;
  tags: string[];
  href?: string;
  repo?: string;
  featured?: boolean;
  badges?: string[];
  iconUrl?: string;
  appStoreUrl?: string;
  googlePlayUrl?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  companyHref?: string;
  employmentType?: string;
  period: string;
  location?: string;
  bullets: string[];
  skills?: string[];
}

export interface StackGroup {
  category: string;
  items: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
  inProgress?: boolean;
}

export type CompetitionResult = "winner" | "finalist" | "participant";

export interface Competition {
  name: string;
  event?: string;
  result: CompetitionResult;
  placement?: string;
  date?: string;
  description?: string;
  href?: string;
}
