import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from '@shikijs/transformers';
// import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import rehypeKatex from 'rehype-katex';
import remarkCollapse from 'remark-collapse';
import remarkMath from 'remark-math';
import remarkToc from 'remark-toc';

import { SITE } from './src/config';
import { transformerFileName } from './src/utils/transformers/fileName';

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  server: {
    port: 8080,
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    sitemap(),
  ],
  markdown: {
    remarkPlugins: [remarkMath, remarkToc, [remarkCollapse, { test: 'Table of contents' }]],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      // For more themes, visit https://shiki.style/themes
      // themes: { light: "min-light", dark: "night-owl" },
      theme: 'one-dark-pro',
      defaultColor: false,
      wrap: false,
      transformers: [
        transformerFileName({ style: 'v2', hideDot: false }),
        transformerNotationHighlight(),
        transformerNotationWordHighlight(),
        transformerNotationDiff({ matchAlgorithm: 'v3' }),
      ],
    },
  },
  /** @type {import('vite').UserConfig} */
  vite: {
    // plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
  },
  image: {
    responsiveStyles: true,
    layout: 'constrained',
  },
  scopedStyleStrategy: 'where',
  experimental: {
    preserveScriptOrder: true,
  },
});
