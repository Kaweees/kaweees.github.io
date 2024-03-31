<script>
	import { config, navLinks } from '$lib/config';
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
	import MobileMenu from '$lib/components/MobileMenu.svelte';
</script>

<header class="flex items-center justify-between py-4 px-7 bg-bg1-light dark:bg-bg1-dark">
	<div>
		<a href="/" aria-label={config.headerTitle}>
			<div class="flex items-center justify-between">
				<a
					class="typewriter neon font-bold font-title"
					href="https://miguelvf.dev"
					style="font-size: 1.75rem !important; font-family: 'Fira Code', 'Lucida Console', Monaco, monospace !important;"
					><span class="text-title_primary-light dark:text-title_primary-dark"
						>&gt; Miguel
					</span><span class="text-title_secondary-light dark:text-title_secondary-dark">VF</span
					></a
				>
				<!-- <div class="mr-3">
					<img src="/logo.svg" alt="Logo" class="h-10 w-auto" />
				</div>
				<div class="hidden text-4xl font-semibold sm:block font-title">
					{config.headerTitle}
				</div> -->
			</div>
		</a>
	</div>
	<div class="flex items-center text-base leading-5">
		<div class="hidden sm:block">
			{#each navLinks as link}
				<a
					href={link.href}
					class=" p-1 sm:p-3 text-fg-light dark:text-fg-dark my-3 text-xl"
					style="!important; font-family: 'Fira Code', 'Lucida Console', Monaco, monospace !important;"
					>{link.title}</a
				>
			{/each}
		</div>
		<ThemeSwitch />
		<MobileMenu />
	</div>
</header>
