import { A } from "@solidjs/router";
import { WorkItem as Work } from "~/utils/work";

export function WorkItem({
  company,
  companyImgSrc,
  companyHref,
  role,
  years,
}: Work) {
  return (
    <li class="flex gap-4 relative group">
      <div class="absolute -inset-x-4 -inset-y-1 z-0 scale-95 bg-neutral-800/50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-4 sm:rounded-2xl" />
      <div class="relative mt-1 h-10 w-10 flex items-center justify-center rounded-full shadow-md shadow-neutral-800/5 border border-neutral-700/50 bg-neutral-800">
        <img alt={company} src={companyImgSrc} class="h-7 w-7 rounded-full" />
      </div>
      <div class="flex flex-auto flex-wrap gap-x-2">
        <A
          href={companyHref}
          target="_blank"
          rel="noopener noreferrer"
          class="w-full flex-none text-sm font-medium text-neutral-100"
        >
          <span class="absolute -inset-x-4 -inset-y-1 z-20 sm:-inset-x-4 sm:rounded-2xl" />
          <span class="relative z-10">{company}</span>
        </A>
        <span class="text-xs text-neutral-400 z-10">{role}</span>
        <span class="ml-auto text-xs text-neutral-500 z-10">{years}</span>
      </div>
    </li>
  );
}
