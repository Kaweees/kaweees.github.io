import { generateOgImageForSite } from '@utils/generateOgImages';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const png = await generateOgImageForSite();

  return new Response(png as any, {
    headers: { 'Content-Type': 'image/png' },
  });
};
