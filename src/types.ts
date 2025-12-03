import type socialIcons from '@assets/socialIcons';

export enum WorkStatus {
  Open = 'Open to Work',
  Exploring = 'Exploring Opportunities',
  NotLooking = 'Not Looking for Work',
}

export type Site = {
  title: string;
  blogURL: string;
  website: string;
  author: string;
  desc: string;
  ogImage?: string;
  lightAndDarkMode: boolean;
  postPerPage: number;
  scheduledPostMargin: number;
  emoji: string;
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
  workStatus: WorkStatus;
};

export type JobsType = {
  company: string;
  role: string;
  time: string;
  link: string;
  image: string;
}[];

export type ProjectsType = {
  title: string;
  desc: string;
  github?: string;
  link?: string;
  image: string;
}[];

export type SocialObjects = {
  name: keyof typeof socialIcons;
  href: string;
  active: boolean;
  linkTitle: string;
}[];
