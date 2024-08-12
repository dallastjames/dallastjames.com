import { A } from "@solidjs/router";
import { JSX } from "solid-js";
import { cn } from "~/utils/tailwind";

export function Container({
  children,
  className,
}: {
  children: JSX.Element;
  className?: string;
}) {
  return (
    <div class={cn("mx-auto w-full max-w-7xl lg:px-8", className)}>
      {children}
    </div>
  );
}

export function Content({ children }: { children: JSX.Element }) {
  return <div class="relative px-4 sm:px-8 lg:px-12">{children}</div>;
}

export function IconLink({ href, icon }: { href: string; icon: JSX.Element }) {
  return (
    <A
      href={href}
      class="group -m-1 p-1"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </A>
  );
}
