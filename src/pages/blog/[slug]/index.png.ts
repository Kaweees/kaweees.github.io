import { generateOgImageForPost } from '@utils/generateOgImages';
import { slugifyStr } from '@utils/slugify';
import type { APIRoute } from 'astro';
import { type CollectionEntry, getCollection } from 'astro:content';

export async function getStaticPaths() {
  const posts = await getCollection('blog').then((p) =>
    p.filter(({ data }) => !data.draft && !data.ogImage),
  );

  return posts.map((post) => ({
    params: { slug: slugifyStr(post.data.title) },
    props: post,
  }));
}

export const GET: APIRoute = async ({ props }) => {
  const png = await generateOgImageForPost(props as CollectionEntry<'blog'>);

  return new Response(png as any, {
    headers: { 'Content-Type': 'image/png' },
  });
};
