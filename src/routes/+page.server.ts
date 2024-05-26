import { getEntries } from "$utils/entries";
import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const posts = getEntries("posts");
  const jobs = getEntries("jobs");
  if (!posts) {
    throw error(404, "No post found");
  }

  if (!jobs) {
    throw error(404, "No jobs found");
  }

  return {
    // eslint-disable-next-line no-unused-vars
    posts: posts,
    jobs: jobs,
  };
}
