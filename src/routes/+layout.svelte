<script lang="ts">
	import '../app.css';
	import '@fontsource-variable/roboto-mono';
	let { children } = $props();
</script>

<svelte:head>
	<script type="text/javascript">
		(function (c, l, a, r, i, t, y) {
			c[a] =
				c[a] ||
				function () {
					(c[a].q = c[a].q || []).push(arguments);
				};
			t = l.createElement(r);
			t.async = 1;
			t.src = 'https://www.clarity.ms/tag/' + i;
			y = l.getElementsByTagName(r)[0];
			y.parentNode.insertBefore(t, y);
		})(window, document, 'clarity', 'script', 's1of7pawt9');
	</script>
</svelte:head>

<main class="relative min-h-screen overflow-hidden bg-[#161616] text-white">
	<div class="bg-grid">
		{#each Array(24) as _}
			<span class="grid-text">Nnadi Victory</span>
		{/each}
	</div>
	<div class="ctn">
		<header class="relative bg-[#161616] py-4">
			<nav class="">
				<a href="/" class="text-lg font-bold !no-underline">🛠️ Nnadi Victory</a>

				<div>
					<a href="/projects">Projects</a>
					<!-- <a href="/reviews">Reviews</a> -->
				</div>
			</nav>
		</header>

		<div class="mt-5">
			{@render children()}
		</div>
	</div>
	<footer class="bg-[#161616] py-4">
		<p class="text-center text-sm text-gray-400">
			&copy; {new Date().getFullYear()} Nnadi Victory. All rights reserved.
		</p>
	</footer>
</main>
