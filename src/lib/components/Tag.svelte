<script>
	import { slug } from 'github-slugger';

	export let text = '';
	export let size = 'text-sm';
	export let url = slug(text);
</script>

<a
	href={`/tags/${url}`}
	class="mr-3 font-medium uppercase text-primary_alt-light dark:text-primary_alt-dark hover:text-primary-light hover:dark:text-primary-dark {size}"
>
	#{text}
</a>
