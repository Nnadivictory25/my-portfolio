<script>
	import ProjectsDisplay from '$lib/components/projects-display.svelte';
</script>

<svelte:head>
	<title>Nnadi Victory - Projects</title>
	<meta name="description" content="My Projects" />
</svelte:head>

<section class="mb-5">
	<h1 class="slide-in text-4xl font-bold">Projects</h1>
	<p class="slide-in-delay-1 mb-5 text-gray-400">
		Here are some of the best projects I've worked on. Some are my products and some are gigs.
	</p>
	<div class="slide-in-delay-2">
		<ProjectsDisplay />
	</div>
</section>
