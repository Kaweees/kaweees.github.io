import RSS from "rss";
import { siteConfig } from "$lib/config";
import { getEntries } from "$utils/entries";

export const prerender = true;

// Reference: https://github.com/sveltejs/kit/blob/master/examples/hn.svelte.dev/src/routes/%5Blist%5D/rss.js
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET() {
  const feed = new RSS({
    title: siteConfig.title + " - RSS Feed",
    site_url: siteConfig.siteUrl,
    feed_url: siteConfig.siteUrl + "/rss.xml",
  });

  const posts = getEntries("posts");
  posts.forEach((posts) => {
    feed.item({
      title: posts.title,
      url: siteConfig.siteUrl + `/${posts.slug}`,
      date: posts.date,
      description: posts.summary,
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Cache-Control": `max-age=0, s-maxage=${600}`, // 10 minutes
      "Content-Type": "application/rss+xml",
    },
  });
}

// misc notes for future users

// notes - originally tried to fetch this via /api/listContent.json but...
// cannot use url.origin because it is null during SSR...
// const res = await fetch(url.origin + `/api/listContent.json`)

// cannot use url.protocol because URL scheme "sveltekit" is not supported.
// const res = await fetch(`${url.protocol}//${url.host}/api/listContent.json`);
// const allBlogs = await res.json();

// use this if you want your content in a local '/content' folder rather than github issues
// let allBlogs = import.meta.globEager('/content/**/*.md')

// 	Object.entries(allBlogs).forEach(([path, obj]) => {
// 		feed.item({
// 			title: obj.title,
// 			url: SITE_URL + `/${path.slice(9).slice(0, -3)}`,
// 			date: obj.date,
// 			description: obj.description
// 		});
// 	});
