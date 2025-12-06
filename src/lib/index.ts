
export const tools = [
    "JavaScript",
    "TypeScript",
    "GoLang",
    "React",
    "React Native",
    "Next.js",
    "Svelte",
    "SvelteKit",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "PostgreSQL",
    "SQLite",
    "Drizzle",
    "Viem",
    "EthersJS",
    "Redis",
    "AI",
    "Supabase",
    "Git",
    "GitHub",
    "Cloudflare",
]
type Project = {
    title: string;
    description: string;
    link: string;
    tools: string[];
    isWeb3: boolean;
    isBot: boolean;
    isSaaS?: boolean;
}

export const projects: Project[] = [
    {
        title: "AI Studybud",
        description: "AI Study companion for students. Serving over 7000+ students",
        link: "https://aistudybud.site",
        tools: ["Next.js", "Tailwind CSS", "Supabase", "AI"],
        isWeb3: false,
        isBot: false,
        isSaaS: true
    },
    {
        title: "SUI Defi Info",
        description: "All of SUI Defi's information in one place. Think of it as an aggregator for Liquidity pools and Lending protocols. Find and compare APYs easily.",
        link: 'https://suidefi.info',
        tools: ['SvelteKit', 'Tailwind CSS', 'Cloudflare'],
        isWeb3: true,
        isBot: false
    },
    {
        title: "Nova Trading Bot",
        description: "The fastest telegram trading bot on SUI - With Copytrading, Limit orders, DCA and bridging features",
        link: "https://t.me/novasuibot",
        tools: ["Bun", "Typescript", "Go", "GrammY", "SQLite", "Drizzle"],
        isWeb3: true,
        isBot: true
    },
    {
        title: "Nabu",
        description: 'A decentralized dataset marketplace built on Sui with pricing, provenance, and ownership verification powered by Walrus 🦭 and Seal 🔐',
        link: 'https://nabu.viclabs.dev',
        tools: ['Tanstack Start', 'Tailwind CSS', 'SQlite', 'Drizzle', 'Walrus', 'Seal'],
        isWeb3: true,
        isBot: false
    },
    {
        title: "Coinplify",
        description: "A responsive web3 agency website with dynamic pricing and blog feature",
        link: "https://coinplify.com",
        tools: ["SvelteKit", "Tailwind CSS", "Drizzle", "Cloudflare"],
        isWeb3: true,
        isBot: false
    },
    {
        title: "Cosmos Wiki",
        description: "One stop knowledge base for the Cosmos Ecosystem, with dynamic content feature (+Custom CMS)",
        link: "https://cosmos.wiki",
        tools: ["SvelteKit", "Tailwind CSS", "Cloudflare", "SQLite", "Drizzle"],
        isWeb3: true,
        isBot: false
    },
    {
        title: "AI Sub Recap",
        description: "Get daily AI summaries of your favorite subreddits delivered to your email, which you can in turn use for blogs, social media posts, etc.",
        link: "https://aisubrecap.xyz/",
        tools: ["SvelteKit", "Tailwind CSS", "Cloudflare", "AI", "SQLite", "Drizzle"],
        isWeb3: false,
        isBot: false,
        isSaaS: true
    },
    {
        title: "Countries of the World",
        description: "A directory of countries of the world, with filters, search and dark mode features",
        link: "https://rest-countries-api-vic.vercel.app",
        tools: ["React", "Tailwind CSS", "Vite"],
        isWeb3: false,
        isBot: false
    },
    {
        title: "Coin ATH checker",
        description: "A tool to check the All Time High (ATH) of any coin",
        link: "https://portfolio-ath-checker-v2.pages.dev",
        tools: ["SvelteKit", "Tailwind CSS", "Cloudflare"],
        isWeb3: true,
        isBot: false
    },
    {
        title: "Retail Record",
        description: "A tool for physical stores to record sales and inventory",
        link: "https://retail-record.vercel.app/",
        tools: ["HTML", "CSS", "JavaScript", "Supabase"],
        isWeb3: false,
        isBot: false,
        isSaaS: true
    },
    {
        title: "Game Hub",
        description: "A directory of games, with filters, search and dark mode features",
        link: "https://game-hub-vick.vercel.app",
        tools: ["React", "Tailwind CSS", "Vite"],
        isWeb3: false,
        isBot: false
    },
    {
        title: "Link Shortener Landing Page",
        description: "A landing page for a link shortener",
        link: "https://url-shortener-api-landing-page.vercel.app/",
        tools: ["React", "Tailwind CSS", "Vite"],
        isWeb3: false,
        isBot: false
    },
    {
        title: "IP Address Tracker",
        description: "A tool to track the location of any IP address",
        link: "https://ip-address-tracker-victory.vercel.app",
        tools: ["React", "Tailwind CSS", "Vite"],
        isWeb3: false,
        isBot: false
    }
]