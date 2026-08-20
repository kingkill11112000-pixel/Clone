import type { ReactNode } from "react";
import { DashedGrid } from "@/components/dashed-grid";
import { Dock } from "@/components/dock";
import { cn } from "@/lib/utils";

export function PageShell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className="relative min-h-dvh overflow-x-hidden bg-bg text-fg">
      <DashedGrid />
      <div className="pointer-events-none absolute inset-y-0 left-1/2 z-[1] w-full max-w-4xl -translate-x-1/2 border-x border-dashed border-border" />
      <main
        className={cn(
          "relative z-10 mx-auto mt-6 mb-24 flex min-h-[100dvh] w-[calc(100%-1.5rem)] max-w-4xl flex-col space-y-10 rounded-xl border border-dashed border-border px-4 py-10 sm:w-[calc(100%-3rem)] sm:px-10",
          className,
        )}
      >
        {children}
      </main>
      <Dock />
    </div>
  );
}

export function SectionRule() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute bottom-[-1.25rem] left-1/2 z-0 h-px w-screen -translate-x-1/2 border-b border-dashed border-border"
    />
  );
}
