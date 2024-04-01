<script>
	import Head from '$lib/components/layout/Head.svelte';
	import Blogs from '$lib/components/Blogs.svelte';

	export let data;
	const posts = data.posts;
	const tags = data.tags;

	const blogQuoteArray = [
		{
			emoji: '🌠',
			quote: 'Reaching for eternity'
		},
		{
			emoji: '💾',
			quote: 'Life is short and ROM is full'
		},
		{
			emoji: '🐛',
			quote: 'Learning one bug at a time'
		},
		{
			emoji: '👞',
			quote: 'If it fits the shoe, it be what it do'
		}
	];
	const blogQuote = blogQuoteArray[Math.floor(Math.random() * blogQuoteArray.length)];
</script>

<Head title="Blog" />

<Blogs title="¡Hola mundo!" subtitle="{blogQuote.emoji} {blogQuote.quote}" {posts} {tags} />
