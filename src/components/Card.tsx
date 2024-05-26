import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
  tags?: string[];
}

export default function Card({ href = '', frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, modDatetime, description, tags } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-lg font-medium decoration-dashed hover:underline",
  };

  return (
    <li className="my-3 py-3 border-b-2 border-dashed" style={{ borderColor: "rgb(var(--color-text-base))" }}>
      <a
        href={href}
        className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
        style={{ color: "rgb(var(--link-color-primary))" }}
      >
        {secHeading ? (
          <h2 {...headerProps}>{title}</h2>
        ) : (
          <h3 {...headerProps}>{title}</h3>
        )}
      </a>
      <Datetime pubDatetime={pubDatetime} modDatetime={modDatetime} />
      <p style={{ color: "rgb(var(--blog-color-secondary))"}}>{description}</p>
      <div className="flex flex-wrap">
        {tags?.map((tag) => (
            <a href={`/tags/${tag.toLowerCase()}/`} key={tag}
            style={{ color: "rgb(var(--link-color-secondary))" }} className="mr-3 font-medium uppercase text-primary_alt-light dark:text-primary_alt-dark hover:text-primary-light hover:dark:text-primary-dark text-sm">#{tag}</a>
          ))}
      </div>
    </li>
  );
}
