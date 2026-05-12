import type { ReactNode } from "react";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col">
      <SiteNav />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="loom-grid border-b border-border">
      <div className="container-page py-20 md:py-28">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] mb-6 text-warp">{eyebrow}</p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-balance max-w-[18ch]">
          {title}
        </h1>
        {intro && (
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/70 text-pretty">{intro}</p>
        )}
      </div>
    </section>
  );
}
