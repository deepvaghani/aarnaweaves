import { Link } from "@tanstack/react-router";
import logo from "@/assets/aarna-logo.jpg";

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
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Aarna Weaves logo"
            width={40}
            height={40}
            className="h-10 w-10 object-contain mix-blend-multiply"
          />
          <span className="flex items-baseline gap-1.5">
            <span className="font-black text-2xl tracking-tighter uppercase text-ink">Aarna</span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-ink/40">Weaves</span>
          </span>
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
