const blogQuoteArray = [
  "🌠 Reaching for eternity",
  "💾 Life is short and ROM is full",
  "🐛 Learning one bug at a time",
  "👞 If it fits the shoe, it be what it do",
];

const emojiArray = [
  "\\(o_o)/",
  "(o^^)o",
  "(˚Δ˚)b",
  "(^-^*)",
  "(≥o≤)",
  "(^_^)b",
  "(·_·)",
  "(='X'=)",
  "(>_<)",
  "(;-;)",
  "\\(^Д^)/",
];

const quoteArray = [
  "“What I cannot create, I do not understand.” ― Richard Feynman",
  "“However much you deny the truth, the truth goes on existing” ― George Orwell",
  "“Man is still the most extraordinary computer of all.” ― JFK",
  "“Nothing great in the world was accomplished without passion.” ― Georg Wilhelm Friedrich Hegel",
  "“The struggle itself towards the heights is enough to fill a man's heart. One must imagine Sisyphus happy.” ― Albert Camus, The Myth of Sisyphus",
  "“In 20 years you're going to look back and realize that the most lucrative decision you ever made was investing in yourself.” ― ColorStack",
  "“We who cut mere stones must always be envisioning cathedrals.” - the Quarry Worker's Creed",
  "“Science is not only a disciple of reason but, also, one of romance and passion.” ― Stephen Hawking",
  "“Man cannot remake himself without suffering, for he is both the marble and the sculptor.” ― Alexis Carrel",
  "“It don't take much strength to pull a trigger but try getting up every morning day after day and work for a living.” ― Lorenzo, A Bronx Tale",
];

export const siteConfig = {
  title: "Miguel Villa Floran",
  author: "Ahmad Kiarostami",
  headerTitle: "Pied Piper",
  description:
    "Pied Piper (un)official blog, created with Sveltekit and Tailwind.css",
  language: "en-us",
  theme: "dark", // system, dark or light
  domain: "http://www.piedpiper.com/",
  siteUrl: "https://miguelvf.dev",
  siteRepo: "https://github.com/akiarostami/sveltekit-tailwind-blog-starter",
  siteLogo: "/icon-512.png",
  // image: '/img/avatar.png',
  email: "info@piedpiper.com",
  github: "https://github.com/piedpiper",
  twitter: "https://twitter.com/piedpiperplc",
  facebook: "https://www.facebook.com/piedpipersv",
  youtube: "https://www.youtube.com/watch?v=p3RwX06wcBs",
  linkedin: "https://www.linkedin.com/company/pied-piper-plc/",
  locale: "en-US",
  primaryColor: "#06a261",

  // supports buttondown, convertkit, emailoctopus, klaviyo, mailchimp, revue
  // use false or null to disable newsletter
  // check .env.example for settings needed values for each service
  newsletter: "mailchimp",

  multiuser: true,
  blogQuote: blogQuoteArray[Math.floor(Math.random() * blogQuoteArray.length)],
  emoji: emojiArray[Math.floor(Math.random() * emojiArray.length)],
  quote: quoteArray[Math.floor(Math.random() * quoteArray.length)],
};

export const user = {
  name: "admin",
  // avatar value can be removed for image
  avatar: "/logo.png",
  // twitter value can be removed for no link to twitter
  twitter: "https://twitter.com/piedpiperplc",
};

export const navLinks = [
  { href: "/about", title: "About" },
  { href: "/projects", title: "Projects" },
  { href: "/blog", title: "Blog" },
  { href: "/resume", title: "Resume" },
];

export const openGraph = {
  enabled: true,
  width: 1200,
  height: 630,
};

// supported systems: googleAnalytics, plausible, and simpleAnalytics
export const analytics = {
  googleAnalyticsId: "", // e.g. UA-000000-2 or G-XXXXXXX
  plausibleDomain: "", // e.g. pied-piper-blog.netlify.app
  simpleAnalytics: false, // true or false
};

// supported providers: giscus, utterances
export const comment = {
  provider: "giscus",
  giscus: {
    // Visit the link below, and follow the steps in the 'configuration' section
    // https://giscus.app/
    repo: "akiarostami/sveltekit-tailwind-blog-starter",
    reposId: "R_kgDOIen4kw",
    category: "Sample Site Comments",
    categoryId: "DIC_kwDOIen4k84CS9tX",
    mapping: "pathname", // supported options: pathname, url, title
    reactionsEnabled: "1", // Emoji reactions: 1 = enable / 0 = disable
    // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
    metadata: "0",
    // theme example: light, dark, dark_dimmed, dark_high_contrast
    // Place the comment box above the comments. options: bottom, top
    inputPosition: "bottom",
    // Choose the language giscus will be displayed in. options: en, es, zh-CN, zh-TW, ko, ja etc
    lang: "en",
    dataStrict: "0",
    loading: "lazy",
    // theme example: light, dark, preferred_color_scheme, light_high_contrast, dark_high_contrast
    // light_protanopia, dark_protanopiam, light_tritanopia, dark_tritanopia, dark_dimmed, transparent_dark
    theme: "light",
    // theme when dark mode
    darkTheme: "dark",
    themeURL: "",
  },
  utterances: {
    // Visit the link below, and follow the steps in the 'configuration' section
    // https://utteranc.es/
    repo: "akiarostami/sveltekit-tailwind-blog-starter",
    issueTerm: "pathname", // supported options: pathname, url, title
    label: "Comment 💬", // label (optional): Comment 💬
    // theme example: github-light, github-dark, preferred-color-scheme
    // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light, gruvbox-dark"
    theme: "github-light",
    // theme when dark mode
    darkTheme: "github-dark",
  },
};
