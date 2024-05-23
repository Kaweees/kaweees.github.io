import type { Site, SocialObjects, JobsType } from "./types";

export const SITE: Site = {
  website: "https://astro-paper.pages.dev/", // replace this with your deployed domain
  author: "Sat Naing",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "Miguel Villa Floran",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const NAV_LINKS = [
  { href: "about", title: "About" },
  { href: "projects", title: "Projects" },
  { href: "posts", title: "Posts" },
  { href: "resume", title: "Resume" },
];

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const JOBS: JobsType = [
  { company: "Cal Poly", role: "Research, Artificial Intelligence", time: "Nov 2023 - Present", link: "https://csc.calpoly.edu", image: "/logos/calpoly-logo.png" },
  { company: "DeepWater Exploration", role: "Firmware & Applications", time: "May 2023 - Oct 2023", link: "https://www.dwe.ai", image: "/logos/dwe-logo.png" },
  { company: "Cisco Meraki", role: "Firmware", time: "Sept. 2024 - Dec. 2024", link: "https://meraki.cisco.com", image: "/logos/meraki.png" },
  { company: "NVIDIA", role: "GPU Software", time: "Jun 2024 - Sep 2024", link: "https://www.apple.com", image: "/logos/nvidia-logo.png" },
  { company: "omegaUp", role: "Software Engineering", time: "Jun 2020 - Aug 2020", link: "https://omegaup.com", image: "/logos/omegaup-logo.png" },
  { company: "Cal Poly Racing", role: "Firmware & Board Design", time: "Jan 2024 - Present", link: "https://www.calpolyracing.org", image: "/logos/calpoly-racing-logo.png" },
];

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/kaweees/",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/miguel-vf/",
    linkTitle: `${SITE.title} on Facebook`,
    active: true,
  },
  {
    name: "RSS",
    href: "https://miguelvf.dev/",
    linkTitle: `${SITE.title} on RSS`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
];
