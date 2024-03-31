<script>
	import Head from '$lib/components/layout/Head.svelte';
	import Blogs from '$lib/components/Blogs.svelte';

	export let data;
	let posts = data.posts;
</script>

<Head />

<!-- font-normal leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 -->
<div>
	<h1
		class="text-3xl py-4 text-gray-900 dark:text-gray-100 drop-shadow-lg dark:shadow-fg1-light shadow-fg1-dark"
	>
		Greetings, I’m Miguel 👋
	</h1>
	<p class="text-base prose-xl my-3">
		I’m an engineer & entrepreneur focusing on applied robotics & embedded systems. I’m also
		currently researching Large Language Models and building AI projects in stealth. I also <a
			href="https://miguelvf.dev/blog/"
			class="link text-aqua2-light dark:text-aqua2-dark hover:bg-aqua2-light dark:hover:bg-aqua2-dark hover:text-bg-light hover:dark:text-bg-dark"
			target="_blank">write</a
		> occasionally about philosophy and computers.
	</p>
	<p class="text-base prose-xl my-3">
		I’m a sophomore at <a
			href="https://csc.calpoly.edu/"
			class="link text-aqua2-light dark:text-aqua2-dark hover:bg-aqua2-light dark:hover:bg-aqua2-dark hover:text-bg-light hover:dark:text-bg-dark"
			target="_blank">Cal Poly</a
		>
		studying Computer Engineering. I am currently writing drivers and firmware for electric vehicles
		at
		<a
			href="https://www.calpolyracing.org/"
			class="link text-aqua2-light dark:text-aqua2-dark hover:bg-aqua2-light dark:hover:bg-aqua2-dark hover:text-bg-light hover:dark:text-bg-dark"
			target="_blank">Cal Poly Racing</a
		>. Here are some of the
		<a
			href="https://miguelvf.dev/calpoly/"
			class="link text-aqua2-light dark:text-aqua2-dark hover:bg-aqua2-light dark:hover:bg-aqua2-dark hover:text-bg-light hover:dark:text-bg-dark"
			target="_blank">projects</a
		> I’ve worked on at Cal Poly.
	</p>
	<p class="text-base prose-xl my-3">
		This past summer, I worked at <a
			href="https://dwe.ai/"
			class="link text-aqua2-light dark:text-aqua2-dark hover:bg-aqua2-light dark:hover:bg-aqua2-dark hover:text-bg-light hover:dark:text-bg-dark"
			target="_blank">DeepWater Exploration</a
		>
		to ship some
		<a
			href="https://dwe.ai/products/discovery"
			class="link text-aqua2-light dark:text-aqua2-dark hover:bg-aqua2-light dark:hover:bg-aqua2-dark hover:text-bg-light hover:dark:text-bg-dark"
			target="_blank">streaming software</a
		>, which outperformed OBS, and drivers and firmware for their products which are used in various
		applications spanning across academia, enterprise, and defense.
	</p>
	<p>
		This upcoming summer I will be working at <a
			href="https://www.nvidia.com/"
			class="link text-aqua2-light dark:text-aqua2-dark hover:bg-aqua2-light dark:hover:bg-aqua2-dark hover:text-bg-light hover:dark:text-bg-dark"
			target="_blank">NVIDIA</a
		>, working on their internal platform used for end-to-end testing of their products, from the
		modular down to the transistor level.
	</p>
	<p>
		See more on my <a
			href="https://miguelvf.dev/resume"
			class="link text-aqua2-light dark:text-aqua2-dark hover:bg-aqua2-light dark:hover:bg-aqua2-dark hover:text-bg-light hover:dark:text-bg-dark"
			target="_blank">resume</a
		>
		or contact me at
		<a
			href="mailto:mavillaf@calpoly.edu"
			class="link text-aqua2-light dark:text-aqua2-dark hover:bg-aqua2-light dark:hover:bg-aqua2-dark hover:text-bg-light hover:dark:text-bg-dark"
			target="_blank">mavillaf@calpoly.edu</a
		>.
	</p>
</div>

<Blogs title="Latest Posts" h2 {posts} search={false} count={3} />
