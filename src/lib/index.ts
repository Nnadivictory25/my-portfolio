export const tools = [
	'JavaScript',
	'TypeScript',
	'GoLang',
	'React',
	'React Native',
	'Next.js',
	'Svelte',
	'SvelteKit',
	'HTML',
	'CSS',
	'Tailwind CSS',
	'Node.js',
	'Express',
	'PostgreSQL',
	'SQL',
	'SQLite',
	'PostgreSQL',
	'Drizzle',
	'Viem',
	'EthersJS',
	'Redis',
	'AI',
	'Supabase',
	'SUI Move',
	'Bull MQ',
	'Git',
	'GitHub',
	'Cloudflare'
];
type Project = {
	title: string;
	description: string;
	github?: string;
	live?: string;
	tools: string[];
	isWeb3: boolean;
	isBot: boolean;
	isSaaS?: boolean;
};

export const projects: Project[] = [
	{
		title: 'AI Studybud',
		description: 'AI Study companion for students. Serving over 7000+ students',
		github: 'https://github.com/Nnadivictory25/ai-studybud-landing-page',
		live: 'https://aistudybud.site',
		tools: ['Next.js', 'Tailwind CSS', 'Supabase', 'AI', 'SvelteKit'],
		isWeb3: false,
		isBot: false,
		isSaaS: true
	},
	{
		title: 'SUI Defi Info',
		description:
			"All of SUI Defi's information in one place. Think of it as an aggregator for Liquidity pools and Lending protocols. Find and compare APYs easily.",
		live: 'https://suidefi.info',
		tools: ['SvelteKit', 'Tailwind CSS', 'Cloudflare'],
		isWeb3: true,
		isBot: false
	},
	{
		title: 'Collectivo',
		description: 'An NFT co-ownership protocol on the SUI blockchain with governance features',
		github: 'https://github.com/vic-labs/Collectivo-frontend',
		live: 'https://collectivo.viclabs.dev',
		tools: ['Tanstack Start', 'Tailwind CSS', 'SQLite', 'Drizzle', 'SUI Move', 'Bull MQ', 'Redis'],
		isWeb3: true,
		isBot: false
	},
	{
		title: 'Bun SQL Studio',
		description: 'An easy to use SQL Studio for Bun with intuitive & professional UI',
		github: 'https://github.com/Nnadivictory25/bun-sql-studio',
		tools: ['React', 'Bun', 'Tailwind CSS', 'SQL', 'Drizzle'],
		isWeb3: false,
		isBot: false
	},
	{
		title: 'Nova Trading Bot',
		description:
			'The fastest telegram trading bot on SUI - With Copytrading, Limit orders, DCA and bridging features',
		live: 'https://t.me/novasuibot',
		tools: ['Bun', 'Typescript', 'Go', 'GrammY', 'SQLite', 'Drizzle'],
		isWeb3: true,
		isBot: true
	},
	{
		title: 'Nabu',
		description:
			'A decentralized dataset marketplace built on Sui with pricing, provenance, and ownership verification powered by Walrus 🦭 and Seal 🔐',
		github: 'https://github.com/Nnadivictory25/Nabu',
		live: 'https://nabu.viclabs.dev',
		tools: ['Tanstack Start', 'Tailwind CSS', 'SQlite', 'Drizzle', 'Walrus', 'Seal'],
		isWeb3: true,
		isBot: false
	},
	{
		title: 'Coinplify',
		description: 'A responsive web3 agency website with dynamic pricing and blog feature',
		live: 'https://coinplify.com',
		tools: ['SvelteKit', 'Tailwind CSS', 'Drizzle', 'Cloudflare'],
		isWeb3: true,
		isBot: false
	},
	{
		title: 'Cosmos Wiki',
		description:
			'One stop knowledge base for the Cosmos Ecosystem, with dynamic content feature (+Custom CMS)',
		live: 'https://cosmos.wiki',
		tools: ['SvelteKit', 'Tailwind CSS', 'Cloudflare', 'SQLite', 'Drizzle'],
		isWeb3: true,
		isBot: false
	},
	{
		title: 'AI Sub Recap',
		description:
			'Get daily AI summaries of your favorite subreddits delivered to your email, which you can in turn use for blogs, social media posts, etc.',
		live: 'https://aisubrecap.xyz/',
		tools: ['SvelteKit', 'Tailwind CSS', 'Cloudflare', 'AI', 'SQLite', 'Drizzle'],
		isWeb3: false,
		isBot: false,
		isSaaS: true
	},
	{
		title: 'Coin ATH checker',
		description: 'A tool to check the All Time High (ATH) of any coin',
		github: 'https://github.com/Nnadivictory25/coin-ath-checker',
		live: 'https://portfolio-ath-checker-v2.pages.dev',
		tools: ['SvelteKit', 'Tailwind CSS', 'Cloudflare'],
		isWeb3: true,
		isBot: false
	},
	{
		title: 'Retail Record',
		description: 'A tool for physical stores to record sales and inventory',
		github: 'https://github.com/Nnadivictory25/Retail-Record',
		live: 'https://retail-record.vercel.app/',
		tools: ['HTML', 'CSS', 'JavaScript', 'Supabase'],
		isWeb3: false,
		isBot: false,
		isSaaS: true
	},
	{
		title: 'Game Hub',
		description: 'A directory of games, with filters, search and dark mode features',
		github: 'https://github.com/Nnadivictory25/game-hub',
		live: 'https://game-hub-vick.vercel.app',
		tools: ['React', 'Tailwind CSS', 'Vite'],
		isWeb3: false,
		isBot: false
	},
	{
		title: 'Link Shortener Landing Page',
		description: 'A landing page for a link shortener',
		github: 'https://github.com/Nnadivictory25/url-shortener-api-landing-page',
		live: 'https://url-shortener-api-landing-page.vercel.app/',
		tools: ['React', 'Tailwind CSS', 'Vite'],
		isWeb3: false,
		isBot: false
	},
	{
		title: 'IP Address Tracker',
		description: 'A tool to track the location of any IP address',
		github: 'https://github.com/Nnadivictory25/ip-address-tracker',
		live: 'https://ip-address-tracker-victory.vercel.app',
		tools: ['React', 'Tailwind CSS', 'Vite'],
		isWeb3: false,
		isBot: false
	}
];
