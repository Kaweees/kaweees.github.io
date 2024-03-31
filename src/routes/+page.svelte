<script>
	import Head from '$lib/components/layout/Head.svelte';
	import Blogs from '$lib/components/Blogs.svelte';

	export let data;
	let posts = data.posts;
	let jobs = data.jobs;
</script>

<Head />

<div class="border-solid border-2 rounded-lg border-fg-light dark:border-fg-dark p-6 mx-7 my-4">
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

<div class="border-solid border-2 rounded-lg border-fg-light dark:border-fg-dark p-6 mx-7 my-4">
	<h2
		class="text-2xl py-4 text-gray-900 dark:text-gray-100 drop-shadow-lg dark:shadow-fg1-light shadow-fg1-dark"
	>
		Places I've Worked
	</h2>
	<div class="border-b border-dashed border-fg-light dark:border-fg-dark">
		{#if !jobs.length}
			<p>No jobs found.</p>
		{:else}
			{#each jobs as job}
				<div
					class="flex flex-col sm:flex-row items-center justify-between py-3 border-t border-dashed border-fg-light dark:border-fg-dark flex-wrap"
				>
					<a id="no-style" href={job.link} target="_blank"
						><div class="flex flex-col sm:flex-row items-center space-x-2">
							<div class="flex flex-row items-center justify-center space-x-3 flex-wrap">
								<img src={job.image} alt="{job.company} logo" class="w-10 h-10" />
								<div class="flex flex-row items-center space-x-1.5 text-md font-bold">
									<span>{job.company}</span>
								</div>
							</div>
							<div class="text-sm">Engineering, AI</div>
						</div></a
					>
					<div class="flex flex-row items-center space-x-2">
						<div class="text-sm">{job.time}</div>
					</div>
				</div>
				<!-- <a
          target="_blank"
          class="flex flex-row py-3 border-dashed"
        >
          <img
            style="border: 2px solid; height: 45px !important; width: 45px !important max-width: 100%;"
          />
          <span class="my-auto" style="font-size: 1.125rem; font-weight: 800;">{job.company}</span>
          <span style="align-items: center; display: flex; font-size: .9rem;">{job.role}</span>
          <span
            style="margin-left: auto !important; align-items: center; display: flex; font-size: .9rem;"
            ></span
          >
        </a> -->
			{/each}
		{/if}
	</div>
</div>

<Blogs title="Latest Posts" h2 {posts} search={false} count={3} />
