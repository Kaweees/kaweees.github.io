<script lang="ts">
	import Head from '$lib/components/layout/Head.svelte';
	import Blogs from '$lib/components/Blogs.svelte';
	import { siteConfig } from '$lib/config';

	export let data;
	const posts = data.posts;
	const tags = data.tags;
</script>

<Head title="Blog" />

<Blogs title="¡Hola mundo!" subtitle={siteConfig.blogQuote} {posts} {tags} />
