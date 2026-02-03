<script>
	import { projects } from '../index';
	export let isFirst4 = false;
</script>

<div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7">
	{#each isFirst4 ? projects.slice(0, 4) : projects as project}
		<div class="project-card flex h-full flex-col">
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

			<div class="mt-4 flex gap-2">
				{#if project.github}
					<a
						href={project.github}
						target="_blank"
						class="project-btn flex items-center gap-2"
						referrerpolicy="origin"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							><path
								d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
							/></svg
						>
						GitHub
					</a>
				{/if}
				{#if project.live}
					<a
						href={project.live + `${!project.isBot ? '?utm_source=my-website' : ''}`}
						target="_blank"
						class="project-btn flex items-center gap-2"
						referrerpolicy="origin"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline
								points="15 3 21 3 21 9"
							/><line x1="10" y1="14" x2="21" y2="3" /></svg
						>
						{#if project.isBot}
							Try Bot
						{:else}
							Live Site
						{/if}
					</a>
				{/if}
			</div>
		</div>
	{/each}
</div>
