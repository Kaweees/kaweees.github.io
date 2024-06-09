import type { JobsType, Site, SocialObjects } from './types';

const blogQuoteArray = [
	'🌠 Reaching for eternity',
	'💾 Life is short and ROM is full',
	'🐛 Learning one bug at a time',
	'👞 If it fits the shoe, it be what it do',
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

const quoteArray = [
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
];

export const SITE: Site = {
	title: 'Miguel Villa Floran',
	website: 'https://miguelvf.dev/',
	blogURL: 'https://miguelvf.dev/blog',
	author: 'Miguel Villa Floran',
	desc: 'Curious, Creative, and Clever. Incoming SWE Intern @NVIDIA & Firmware Co-op @meraki. Currently studying Computer Engineering @calpoly, with a focus on embedded systems and robotics.',
	// ogImage: "astropaper-og.jpg",
	lightAndDarkMode: true,
	postPerPage: 3,
	scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
	blogQuote: blogQuoteArray[Math.floor(Math.random() * blogQuoteArray.length)],
	emoji: emojiArray[Math.floor(Math.random() * emojiArray.length)],
	quote: quoteArray[Math.floor(Math.random() * quoteArray.length)],
	primaryColor: '#FBF1C7',
	secondaryColor: '#EBDBB2',
	tertiaryColor: '#D8C787',
};

export const NAV_LINKS = [
	{ href: 'projects', title: 'Projects' },
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
	// {
	// 	company: 'Cisco Meraki',
	// 	role: 'Network Infrastructure Firmware',
	// 	time: 'Sept. 2024 - Dec. 2024',
	// 	link: 'https://meraki.cisco.com',
	// 	image: '/logos/meraki.png',
	// },
	// {
	// 	company: 'NVIDIA',
	// 	role: 'GPU Software Optimization',
	// 	time: 'Jun 2024 - Sep 2024',
	// 	link: 'https://www.nvidia.com/',
	// 	image: '/logos/nvidia-logo.png',
	// },
	// {
	// 	company: 'Cal Poly Racing',
	// 	role: 'Firmware & Board Design',
	// 	time: 'Jan 2024 - Present',
	// 	link: 'https://www.calpolyracing.org',
	// 	image: '/logos/calpoly-racing-logo.png',
	// },
	{
		company: 'Cal Poly',
		role: 'Research, Artificial Intelligence',
		time: 'Nov 2023 - Present',
		link: 'https://csc.calpoly.edu',
		image: '/logos/calpoly-logo.png',
	},
	{
		company: 'DeepWater Exploration',
		role: 'Firmware & Applications',
		time: 'May 2023 - Oct 2023',
		link: 'https://www.dwe.ai',
		image: '/logos/dwe-logo.png',
	},
	{
		company: 'omegaUp',
		role: 'Software Engineering',
		time: 'Jun 2020 - Aug 2020',
		link: 'https://omegaup.com',
		image: '/logos/omegaup-logo.png',
	},
];

export const SOCIALS: SocialObjects = [
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
		href: 'https://miguelvf.dev/rss.xml',
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
