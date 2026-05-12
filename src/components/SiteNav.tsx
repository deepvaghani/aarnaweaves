import { Link } from "@tanstack/react-router";

const links = [
  { to: "/products", label: "Collections" },
  { to: "/manufacturing", label: "Manufacturing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Inquiry" },
] as const;

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-canvas/80 backdrop-blur-md">
      <div className="container-page flex items-center justify-between py-4">
        <Link to="/" className="flex items-baseline gap-1.5">
          <span className="font-black text-2xl tracking-tighter uppercase text-ink">Aarna</span>
          <span className="text-[10px] font-mono uppercase tracking-widest text-ink/40">Weaves</span>
        </Link>
        <div className="hidden md:flex gap-8 text-[11px] font-mono uppercase tracking-widest">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-ink/70 hover:text-warp transition-colors"
              activeProps={{ className: "text-warp underline underline-offset-4 decoration-warp/40" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <Link
          to="/contact"
          className="md:hidden font-mono text-[10px] uppercase tracking-widest border border-ink/20 px-3 py-1.5"
        >
          Inquiry
        </Link>
      </div>
    </nav>
  );
}
