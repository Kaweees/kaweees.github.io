<script lang="ts">
	import Head from '$lib/components/layout/Head.svelte';
	import Blogs from '$lib/components/Blogs.svelte';
	import { siteConfig } from '$lib/config';

	export let data;
</script>

<Head title={data.tag} />

<Blogs title={data.tag} subtitle={siteConfig.blogQuote} posts={data.posts} search={false} />
