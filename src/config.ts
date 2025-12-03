import type { JobsType, ProjectsType, Site, SocialObjects } from './types';
import { WorkStatus } from './types';

export const blogQuoteArray = [
  '🌠 Accelerating to eternity',
  '💾 Life is short and ROM is full',
  '🐛 Learning one bug at a time',
  '👞 If it fits the shoe, it be what it do',
  "🚢 If it isn't shipped, then it doesn't exist",
];

const emojiArray = [
  '\\(o_o)/',
  '(o^^)o',
  '(˚Δ˚)b',
  '(^-^*)',
  '(≥o≤)',
  '(^_^)b',
  '(·_·)',
  "(='X'=)",
  '(>_<)',
  '(;-;)',
  '\\(^Д^)/',
];

export const quoteArray = [
  '“What I cannot create, I do not understand.” ― Richard Feynman',
  '“However much you deny the truth, the truth goes on existing” ― George Orwell',
  '“Man is still the most extraordinary computer of all.” ― JFK',
  '“Nothing great in the world was accomplished without passion.” ― Georg Wilhelm Friedrich Hegel',
  "“The struggle itself towards the heights is enough to fill a man's heart. One must imagine Sisyphus happy.” ― Albert Camus, The Myth of Sisyphus",
  "“In 20 years you're going to look back and realize that the most lucrative decision you ever made was investing in yourself.” ― ColorStack",
  "“We who cut mere stones must always be envisioning cathedrals.” - the Quarry Worker's Creed",
  '“Science is not only a disciple of reason but, also, one of romance and passion.” ― Stephen Hawking',
  '“Man cannot remake himself without suffering, for he is both the marble and the sculptor.” ― Alexis Carrel',
  "“It don't take much strength to pull a trigger but try getting up every morning day after day and work for a living.” ― Lorenzo, A Bronx Tale",
  '“They flaunt in the face of rigor, and they say things that are simply not true.” ― Kalev Martinson',
  '“What you find impossible, I find boring.” ― Miguel Villa Floran',
  '“The only way to do great work is to love what you do.” ― Steve Jobs',
  '"Potuit, decuit, ergo fecit (God could do it, it was appropriate, therefore He did it)" - Anselm of Canterbury',
];

export const SITE: Site = {
  title: 'Miguel Villa Floran',
  website: 'https://miguelvf.com/',
  blogURL: 'https://miguelvf.com/blog',
  author: 'Miguel Villa Floran',
  desc: 'Curious, Creative, and Clever. Incoming SWE Intern @NVIDIA. Currently studying Computer Engineering @calpoly, with a focus on embedded systems and robotics.',
  ogImage: 'og.png',
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  emoji: emojiArray[Math.floor(Math.random() * emojiArray.length)],
  primaryColor: '#FBF1C7',
  secondaryColor: '#EBDBB2',
  tertiaryColor: '#D8C787',
  workStatus: WorkStatus.Open,
};

export const NAV_LINKS = [
  { href: 'projects', title: 'Projects' },
  { href: 'guestbook', title: 'Guestbook' },
  { href: 'blog', title: 'Blog' },
  { href: 'resume', title: 'Resume' },
];

export const LOCALE = {
  lang: 'en', // html lang code. Set this empty and default will be "en"
  langTag: ['en-EN'], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const JOBS: JobsType = [
  {
    company: 'NVIDIA GEAR',
    role: 'Humanoids Research',
    time: 'Jun 2025 - Sep 2025',
    link: 'https://research.nvidia.com/labs/gear/',
    image: '/assets/logos/nvidia-logo.png',
  },
  {
    company: 'NVIDIA',
    role: 'Hardware Agents',
    time: 'Jun 2025 - Sep 2025',
    link: 'https://www.nvidia.com/',
    image: '/assets/logos/nvidia-logo.png',
  },
  {
    company: 'Cal Poly CARP',
    role: 'Hardware Bring-Up',
    time: 'Feb. 2025 - Present',
    link: 'https://cal-poly-ramp.github.io',
    image: '/assets/logos/ramp-logo.png',
  },
  {
    company: 'Cisco Meraki',
    role: 'Hardware Bring-Up & Testbeds',
    time: 'Sept. 2024 - Dec. 2024',
    link: 'https://meraki.cisco.com',
    image: '/assets/logos/meraki.png',
  },
  {
    company: 'NVIDIA',
    role: 'Hardware Infrastructure',
    time: 'Jun 2024 - Sep 2024',
    link: 'https://www.nvidia.com/',
    image: '/assets/logos/nvidia-logo.png',
  },
  // {
  // 	company: 'Cal Poly Racing',
  // 	role: 'Firmware & Board Design',
  // 	time: 'Jan 2024 - Present',
  // 	link: 'https://www.calpolyracing.org',
  // 	image: '/assets/logos/calpoly-racing-logo.png',
  // },
  {
    company: 'DeepWater Exploration',
    role: 'Firmware & Applications',
    time: 'May 2023 - Oct 2023',
    link: 'https://www.dwe.ai',
    image: '/assets/logos/dwe-logo.png',
  },
  {
    company: 'omegaUp',
    role: 'Software Engineering (MOOCs)',
    time: 'Jun. 2020 - Aug 2020',
    link: 'https://omegaup.com',
    image: '/assets/logos/omegaup-logo.png',
  },
];

export const PROJECTS: ProjectsType = [
  {
    title: 'life',
    desc: "A GPU-Accelerated simulation of Conway's Game of Life written in C++, and CUDA, OpenGL.",
    github: 'https://github.com/Kaweees/life',
    image: '/projects/life.png',
  },
  {
    title: 'kiwitar',
    desc: 'A UNIX utility to create, list, and extract POSIX-specified USTAR tape archives written in C99.',
    github: 'https://github.com/Kaweees/kiwitar',
    image: '/projects/kiwitar.png',
  },
  {
    title: 'ansible',
    desc: 'My ansible playbook collection that has been written for setting up a Debian 12 (bookworm) Linux machine.',
    github: 'https://github.com/Kaweees/ansible',
    image: '/projects/ansible.png',
  },
  // {
  // 	title: 'kiwi-mcu',
  // 	desc: 'A 50 megahertz 32-bit RISC-V CPU Core (RV32IM) with 5-Stage pipelining and caching designed in SystemVerilog and deployed to an Artix-7 Baysis 3 FPGA.',
  // 	github: 'https://github.com/Kaweees/kiwi-mcu',
  // 	image: '/projects/kiwi-mcu.png',
  // },
  // {
  // 	title: 'xxd-rust',
  // 	desc: 'A binary/hexadecimal analyzer and dump creator written in Rust.',
  // 	github: 'https://github.com/Kaweees/xxd-rust',
  // 	image: '/projects/kiwi-mcu.png',
  // },
];

export const SOCIALS: SocialObjects = [
  {
    name: 'Twitter',
    href: 'https://x.com/kaweees1/',
    linkTitle: ` ${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: 'Github',
    href: 'https://github.com/kaweees/',
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/miguel-vf/',
    linkTitle: `${SITE.title} on Facebook`,
    active: true,
  },
  {
    name: 'RSS',
    href: 'https://miguelvf.com/rss.xml',
    linkTitle: `${SITE.title} on RSS`,
    active: true,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/kaweees/',
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
];
