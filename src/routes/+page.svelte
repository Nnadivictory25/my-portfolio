<script>
	import { tools } from '$lib';
	import { Tweet } from 'sveltweet';
	import ProjectsDisplay from '$lib/components/projects-display.svelte';
	const { data } = $props();
</script>

<svelte:head>
	<title>Nnadi Victory - Software Engineer</title>
	<meta name="description" content="Nnadi Victory's Portfolio" />
</svelte:head>

<section>
	<p class="slide-in">
		<span class="text-xl font-bold">Heyy visitor ! 👋</span><br /><br />
		My name is Nnadi Victory, I'm a Full Stack Software Engineer, yes
		<span class="font-medium">"Engineer"</span>.<br />
		This is because I am a problem solver and would use any tools/technologies best suited to solve the
		problem and get the job done.<br />
		I am a <span class="font-medium">fast learner, perfectionist</span> and I pay very close
		<span class="font-medium">attention to detail</span>
		when building<br /><br />
		When working on websites I make sure it is
		<span class="font-medium">fast, responsive, SEO-friendly</span>
		and has a <span class="font-medium">super clean UI</span>.<br /><br />
		When working on any backend project I make sure it is
		<span class="font-medium">secure, fast, scalable, and maintainable</span>.<br /><br />
		My works over the past 3 years speaks for me, as I have built products (Web2 & Web3) serving
		<span class="font-medium">tens of thousands of users</span>
		while maintaining <span class="font-medium">speed ⚡ & quality</span>.
	</p>
</section>

{#if data.tweet}
	<section class="slide-in-delay-1 mt-7">
		<h2 class="text-xl font-bold">Dont take my word for it 😉👇</h2>
		<Tweet tweet={data.tweet} />
	</section>
{/if}

<section class="slide-in-delay-1 mt-10">
	<h2 class="pb-3 text-xl font-bold">Languages & Tools I have used</h2>
	<div class="flex flex-wrap gap-2">
		{#each tools as tool}
			<span class="pill">
				{tool}
			</span>
		{/each}
	</div>
</section>

<section class="slide-in-delay-2 mt-10">
	<div class="flex items-center justify-between pb-3">
		<h2 class="text-xl font-bold">My Projects</h2>
		<a href="/projects" class="text-gray-200 underline">View All</a>
	</div>
	<ProjectsDisplay isFirst4 />
</section>

<section class="slide-in-delay-3 my-10">
	<h2 class="pb-3 text-xl font-bold">Contact Me</h2>
	<p>You can reach out to me , let's talk about your project</p>
	<div class="mt-4 flex flex-wrap items-center gap-3 font-bold lg:gap-5">
		<a href="mailto:me@victorynnadi.site" target="_blank" class="underline">Email</a>
		<a href="https://t.me/victory_web3" target="_blank" class="underline">Telegram</a>
		<a href="https://x.com/nnvictory001" target="_blank" class="underline">X[Twitter]</a>
		<a href="https://www.linkedin.com/in/nnadi-victory-75482a227/" target="_blank" class="underline"
			>LinkedIn</a
		>
		<a href="https://github.com/Nnadivictory25" target="_blank" class="underline">GitHub</a>
	</div>
</section>
