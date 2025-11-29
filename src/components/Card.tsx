import { slugifyStr } from '@utils/slugify';
import type { CollectionEntry } from 'astro:content';

import Datetime from './Datetime';

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<'blog'>['data'];
  secHeading?: boolean;
  tags?: string[];
}

export default function Card({ href = '', frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, modDatetime, description, tags } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: 'text-lg font-medium decoration-dashed hover:underline',
  };

  return (
    <li
      className="mt-2 border-b-2 border-dashed py-3"
      style={{ borderColor: 'rgb(var(--color-text-base))' }}
    >
      <a
        href={href}
        className="text-skin-accent inline-block text-lg font-medium decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
        style={{ color: 'rgb(var(--link-color-primary))' }}
      >
        {secHeading ? <h2 {...headerProps}>{title}</h2> : <h3 {...headerProps}>{title}</h3>}
      </a>
      <Datetime pubDatetime={pubDatetime} modDatetime={modDatetime} />
      <p style={{ color: 'rgb(var(--blog-color-secondary))' }}>{description}</p>
      <div className="flex flex-wrap">
        {tags?.map((tag) => (
          <a
            href={`/tags/${tag.toLowerCase()}/`}
            key={tag}
            style={{ color: 'rgb(var(--link-color-secondary))' }}
            className="text-primary_alt-light dark:text-primary_alt-dark hover:text-primary-light hover:dark:text-primary-dark mr-3 text-sm font-medium uppercase"
          >
            #{tag}
          </a>
        ))}
      </div>
    </li>
  );
}
