import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/aarna-logo.png";

const links = [
  { to: "/products", label: "Collections" },
  { to: "/manufacturing", label: "Manufacturing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Inquiry" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-canvas/80 backdrop-blur-md">
      <div className="container-page flex items-center justify-between py-3 md:py-4 gap-3">
        <Link to="/" className="flex items-center gap-2 md:gap-3 min-w-0" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="Aarna Weaves logo"
            width={96}
            height={96}
            className="h-12 w-12 sm:h-16 sm:w-16 md:h-24 md:w-24 object-contain shrink-0"
          />
          <span className="font-black text-sm sm:text-base md:text-2xl tracking-[0.2em] md:tracking-[0.25em] uppercase text-ink whitespace-nowrap truncate">
            Aarna Weaves
          </span>
        </Link>
        <div className="hidden md:flex gap-8 lg:gap-12 text-sm font-mono uppercase tracking-[0.2em]">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-ink/70 hover:text-warp transition-colors py-2"
              activeProps={{ className: "text-warp underline underline-offset-4 decoration-warp/40" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 -mr-2 text-ink"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-canvas">
          <div className="container-page flex flex-col py-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-mono text-xs uppercase tracking-[0.2em] text-ink/80 hover:text-warp py-3 border-b border-border last:border-b-0"
                activeProps={{ className: "text-warp" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
