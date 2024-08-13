import { A } from "@solidjs/router";
import { ArrowSVG } from "./svgs";
import { ProjectItem } from "~/utils/projects";

export function ArticlePreview({
  title,
  description,
  href,
  type,
}: ProjectItem) {
  return (
    <article class="group relative flex flex-col items-start">
      <h2 class="text-neutral-100 font-semibold tracking-tight">
        <div class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-neutral-800/50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl" />
        <A href={href} target="_blank" rel="noopener noreferrer">
          <span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
          <span class="relative z-10">{title}</span>
        </A>
      </h2>
      <TypeDisplay type={type} />
      <p class="relative z-10 mt-2 text-sm text-neutral-400">{description}</p>
      <ReadArticleButton />
    </article>
  );
}

function TypeDisplay({ type }: { type: string }) {
  return (
    <span class="relative z-10 order-first mb-3 flex items-center text-sm text-neutral-500 pl-3.5">
      <span
        class="absolute inset-y-0 left-0 flex items-center"
        aria-hidden="true"
      >
        <span class="h-4 w-0.5 rounded-full bg-indigo-500" />
      </span>
      {type}
    </span>
  );
}

function ReadArticleButton() {
  return (
    <div class="relative z-10 mt-4 flex items-center text-sm font-medium text-indigo-500">
      Explore
      <ArrowSVG />
    </div>
  );
}
