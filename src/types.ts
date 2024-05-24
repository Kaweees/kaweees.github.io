import type socialIcons from "@assets/socialIcons";

export type Site = {
  website: string;
  author: string;
  desc: string;
  title: string;
  ogImage?: string;
  lightAndDarkMode: boolean;
  postPerPage: number;
  scheduledPostMargin: number;
  blogQuote: string;
  emoji: string;
  quote: string;
};

export type JobsType = {
  company: string;
  role: string;
  time: string;
  link: string;
  image: string;
}[];


export type SocialObjects = {
  name: keyof typeof socialIcons;
  href: string;
  active: boolean;
  linkTitle: string;
}[];
