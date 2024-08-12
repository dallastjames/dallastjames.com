import { A } from "@solidjs/router";
import { ArrowSVG } from "./svgs";

export function ArticlePreview({
  title,
  description,
  href,
  date,
}: {
  title: string;
  description: string;
  href: string;
  date: string;
}) {
  return (
    <article class="group relative flex flex-col items-start">
      <h2 class="text-neutral-100 font-semibold tracking-tight">
        <div class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-neutral-800/50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl" />
        <A href={href}>
          <span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
          <span class="relative z-10">{title}</span>
        </A>
      </h2>
      <DateDisplay date={date} />
      <p class="relative z-10 mt-2 text-sm text-neutral-400">{description}</p>
      <ReadArticleButton />
    </article>
  );
}

function DateDisplay({ date }: { date: string }) {
  return (
    <time
      class="relative z-10 order-first mb-3 flex items-center text-sm text-neutral-500 pl-3.5"
      datetime={date}
    >
      <span
        class="absolute inset-y-0 left-0 flex items-center"
        aria-hidden="true"
      >
        <span class="h-4 w-0.5 rounded-full bg-neutral-500" />
      </span>
      {date}
    </time>
  );
}

function ReadArticleButton() {
  return (
    <div class="relative z-10 mt-4 flex items-center text-sm font-medium text-indigo-500">
      Read article
      <ArrowSVG />
    </div>
  );
}