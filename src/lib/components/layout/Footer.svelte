<script lang="ts">
	import { config } from '$lib/config';
	import SocialIcon from '$lib/components/SocialIcon.svelte';
	import Newsletter from '$lib/components/Newsletter.svelte';

	let year = new Date().getFullYear();
</script>

<footer class="text-center m-5 flex flex-row justify-center align-center">
	<div class="copyright">
		<span>
			Made with
			<span class="emojify" style="font-size: 0.8rem !important;">❤️</span> by
			<strong><a target="_blank" href="https://github.com/kaweees/">Miguel Villa Floran</a></strong>
			&copy;
			{year}
		</span>
	</div>
</footer>

<!-- <footer>
	<div class="mt-16 flex flex-col items-center border-t pt-6 gap-2">
		<div class="mb-3 flex space-x-2">
			<SocialIcon icon="mail" url={config.email ? `mailto:${config.email}` : ''} />
			<SocialIcon icon="github" url={config.github} />
			<SocialIcon icon="facebook" url={config.facebook} />
			<SocialIcon icon="youtube" url={config.youtube} />
			<SocialIcon icon="linkedin" url={config.linkedin} />
			<SocialIcon icon="twitter" url={config.twitter} />
		</div>
		{#if config.newsletter.provider}
			<Newsletter />
		{/if}
		<div class="mb-4 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
			<a href="/">{config.title}</a> &nbsp; • &nbsp; © {year}
			{config.author} &nbsp; • &nbsp; <a href="/rss.xml">RSS Feed</a>
		</div>
	</div>
</footer> -->
