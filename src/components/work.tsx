export function WorkItem({
  company,
  role,
  years,
}: {
  company: string;
  role: string;
  years: string;
}) {
  return (
    <li class="flex gap-4">
      <div class="relative mt-1 h-10 w-10 flex items-center justify-center rounded-full shadow-md shadow-neutral-800/5 border border-neutral-700/50 bg-neutral-800">
        ?
      </div>
      <div class="flex flex-auto flex-wrap gap-x-2">
        <label class="w-full flex-none text-sm font-medium text-neutral-100">
          {company}
        </label>
        <span class="text-xs text-neutral-400">{role}</span>
        <span class="ml-auto text-xs text-neutral-500">{years}</span>
      </div>
    </li>
  );
}
