export type Role = 'web-dev' | 'data-analyst';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link1: { text: string; url: string };
  link2?: { text: string; url: string };
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  points: string[];
}

export interface Skill {
  name: string;
  icon: string; // SVG path data
}
