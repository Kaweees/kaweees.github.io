<script lang="ts">
	import { onMount } from 'svelte';
	import Tag from '$lib/components/Tag.svelte';
	import Title from '$lib/components/Title.svelte';
	import Author from '$lib/components/Author.svelte';
	import SearchBox from '$lib/components/SearchBox.svelte';
	import { page } from '$app/stores';
	import fuzzySearch from '$utils/search';

	export let title = '';
	export let subtitle = '';
	export let posts = [];
	export let tags = [];
	export let more = true;
	export let search = true;
	export let h2 = false;
	export let count = 0;

	if (count) {
		posts = posts.slice(0, count);
	}

	$: filter = $page.url.searchParams.get('query');
	$: currentPosts = filter ? fuzzySearch(posts, filter) : posts;
	let currentURL = '';

	onMount(() => {
		// Get the route of the current page
		currentURL = window.location.pathname;

		// Log the route to the console (you can also use it in other parts of your code)
		console.log('Route:', currentURL);
	});
</script>

<div>
	<div class="py-6 border-b-2 border-dashed border-bg1-dark dark:border-bg1-light">
		<div class="">
			<div>
				<Title {title} {subtitle} {h2} />
				{#if currentURL == '/blog'}
					<p class="my-2 text-md">
						This is an archive of my journey to explore and conquer the inner workings of computers,
						from the subatomic particles in transistors to the cool stuff we do with processors,
						operating systems, and web browsers. Occasionaly, I’ll also give my two cents on
						philosophy. All opinions are my own.
					</p>
				{/if}
			</div>

			<div class="pl-4" class:border-l-2={search}>
				{#if search}
					<SearchBox />
				{/if}

				{#if tags.length}
					<div class="flex flex-wrap">
						{#each tags as tag}
							<div class="mr-5">
								<Tag text={tag.text} size="text-xs" />
								<a
									href={`/tags/${tag.slug}`}
									class="-ml-2 text-xs font-semibold uppercase text-gray-600 dark:text-gray-300"
								>
									{` (${tag.count})`}
								</a>
							</div>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	</div>
	{#if !currentPosts.length}
		No post found.
	{:else}
		<ul>
			{#each currentPosts as post}
				<li class="py-5 border-b-2 border-dashed border-bg1-dark dark:border-bg1-light">
					<article>
						<div class=" space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
							<div class="space-y-5 xl:col-span-3">
								<div class="space-y-6">
									<div>
										<h2 class="text-2xl font-bold leading-8 tracking-tight">
											<a
												href={`/blog/${post.slug}`}
												class="text-primary_alt-light dark:text-primary_alt-dark hover:text-primary-light hover:dark:text-primary-dark"
											>
												{post.title}
											</a>
										</h2>
										<Author author={post.author} postDate={post.date} />
										<div class="flex flex-wrap">
											{#each post.tags as tag}
												<Tag text={tag} />
											{/each}
										</div>
									</div>
									<div class="prose max-w-none text-gray-500 dark:text-gray-400">
										{post.summary}
									</div>
								</div>
								{#if more}
									<div class="text-base font-medium leading-6">
										<a
											href={`/blog/${post.slug}`}
											class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
											aria-label={`Read "${post.title}"`}
										>
											Read more &rarr;
										</a>
									</div>
								{/if}
							</div>
						</div>
					</article>
				</li>
			{/each}
		</ul>
	{/if}
</div>
