<script>
	import { projects } from '../index';
	export let isFirst4 = false;
</script>

<div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7">
	{#each isFirst4 ? projects.slice(0, 4) : projects as project}
		<a
			href={project.link + `${!project.isBot ? '?utm_source=my-website' : ''}`}
			target="_blank"
			class="project-card flex h-full flex-col"
			referrerpolicy="origin"
		>
			<div class="mb-2 flex items-center gap-2">
				<h2 class="project-title">{project.title}</h2>
				{#if project.isWeb3}
					<span class="pill special">Web3</span>
				{/if}
				{#if project.isBot}
					<span class="pill special">Bot</span>
				{/if}
				{#if project.isSaaS}
					<span class="pill special">SaaS</span>
				{/if}
			</div>
			<p class="project-description">{project.description}</p>

			<div class="mt-auto pt-4">
				<p class="text-sm font-bold">Tech Stack:</p>
				<div class="flex flex-wrap items-center gap-1">
					{#each project.tools as tool}
						<span class="pill">{tool}</span>
					{/each}
				</div>
			</div>
		</a>
	{/each}
</div>
