import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import heroFabric from "@/assets/hero-fabric.jpg";
import loomBay from "@/assets/loom-bay.jpg";
import catSuiting from "@/assets/cat-suiting.jpg";
import catShirting from "@/assets/cat-shirting.jpg";
import catDress from "@/assets/cat-dress.jpg";
import catLining from "@/assets/cat-lining.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aarna Weaves — Premium Textile Manufacturing | Water Jet Looms" },
      {
        name: "description",
        content:
          "Aarna Weaves manufactures premium woven fabrics on high-speed water jet looms — shirting, suiting, dress materials and technical linings for global apparel brands.",
      },
      { property: "og:title", content: "Aarna Weaves — Precision Textile Manufacturing" },
      {
        property: "og:description",
        content: "High-speed water jet weaving for premium shirting, suiting and dress materials.",
      },
    ],
  }),
  component: HomePage,
});

const categories = [
  { n: "01", title: "Premium Suiting", gsm: "180–240", width: "147 cm", img: catSuiting },
  { n: "02", title: "Fine Shirting", gsm: "80–120", width: "142 cm", img: catShirting },
  { n: "03", title: "Dress Materials", gsm: "110–160", width: "112 cm", img: catDress },
  { n: "04", title: "Technical Linings", gsm: "60–90", width: "150 cm", img: catLining },
];

function HomePage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative loom-grid overflow-hidden border-b border-border">
        <div className="container-page pt-12 md:pt-24 pb-20 md:pb-32 grid grid-cols-12 gap-8 md:gap-6 items-end">
          <div className="col-span-12 lg:col-span-7 animate-reveal">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] mb-4 md:mb-6 text-warp">
              Warp & Weft Engineering
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-balance leading-[0.9] md:leading-[0.85] mb-6 md:mb-8">
              Industrial <br />Scale.{" "}
              <span className="text-ink/25 italic font-light">Hand Feel.</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-ink/70 text-pretty max-w-md">
              Premium textile manufacturing on high-speed water jet looms — engineered for the
              modern Indian garment landscape and global export markets.
            </p>
            <div className="mt-8 md:mt-10 flex flex-wrap gap-3 md:gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-ink text-canvas font-mono text-[11px] uppercase tracking-widest px-5 md:px-6 py-3 hover:bg-warp transition-colors"
              >
                View Collections →
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-ink/20 font-mono text-[11px] uppercase tracking-widest px-5 md:px-6 py-3 hover:border-warp hover:text-warp transition-colors"
              >
                Request Swatch
              </Link>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 relative animate-reveal-delay">
            <div className="w-full aspect-[4/5] overflow-hidden border border-border bg-muted">
              <img
                src={heroFabric}
                alt="Macro detail of cotton fabric being woven"
                width={1280}
                height={1600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute left-2 md:-left-12 bottom-4 md:bottom-8 bg-canvas p-4 md:p-6 border border-border shadow-sm">
              <div className="font-mono text-[10px] text-ink/40 mb-1 md:mb-2 uppercase">Monthly Output</div>
              <div className="text-2xl md:text-4xl font-bold tracking-tighter">
                450k <span className="text-sm font-normal text-ink/60">m</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-warp/40 overflow-hidden">
          <div className="w-1/4 h-full bg-canvas animate-shuttle" />
        </div>
      </section>

      {/* Catalog */}
      <section className="py-20 md:py-24 border-b border-border">
        <div className="container-page">
          <div className="flex flex-wrap gap-4 justify-between items-end mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase">The Catalog</h2>
            <span className="font-mono text-[10px] text-ink/40 uppercase tracking-widest">
              ISO 9001:2015 Certified
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {categories.map((c) => (
              <Link
                key={c.n}
                to="/products"
                className="bg-canvas p-8 hover:bg-card transition-colors group flex flex-col"
              >
                <span className="font-mono text-[10px] text-ink/30 mb-8 block">{c.n} / CAT</span>
                <div className="aspect-square mb-6 overflow-hidden border border-border bg-muted">
                  <img
                    src={c.img}
                    alt={c.title}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{c.title}</h3>
                <ul className="space-y-2 text-xs font-mono text-ink/60 uppercase tracking-tight mt-auto">
                  <li className="flex justify-between">
                    <span>GSM</span>
                    <span>{c.gsm}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Width</span>
                    <span>{c.width}</span>
                  </li>
                </ul>
                <div className="mt-6 h-px w-0 bg-warp group-hover:w-full transition-all duration-500" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Machinery */}
      <section className="py-20 md:py-24 border-b border-border">
        <div className="container-page grid grid-cols-12 gap-8 lg:gap-12">
          <div className="col-span-12 lg:col-span-5">
            <div className="aspect-[3/2] border border-border overflow-hidden bg-muted">
              <img
                src={loomBay}
                alt="Row of water jet looms in the Aarna Weaves manufacturing facility"
                width={1600}
                height={1088}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
            <span className="text-warp font-mono text-[10px] uppercase tracking-widest mb-4">
              The Machinery
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 text-balance">
              Water jet precision.
            </h2>
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <p className="font-mono text-xs text-ink/40 uppercase mb-3">Advantage 01</p>
                <p className="text-ink/70 leading-relaxed">
                  High-speed weft insertion delivers exceptional monthly capacity without
                  compromising structural integrity.
                </p>
              </div>
              <div>
                <p className="font-mono text-xs text-ink/40 uppercase mb-3">Advantage 02</p>
                <p className="text-ink/70 leading-relaxed">
                  Low-tension weaving preserves the natural elasticity of the yarn, resulting in a
                  superior hand-feel.
                </p>
              </div>
              <div>
                <p className="font-mono text-xs text-ink/40 uppercase mb-3">Advantage 03</p>
                <p className="text-ink/70 leading-relaxed">
                  Optimized for synthetic and blended filament yarns — polyester, nylon and
                  performance blends.
                </p>
              </div>
              <div>
                <p className="font-mono text-xs text-ink/40 uppercase mb-3">Advantage 04</p>
                <p className="text-ink/70 leading-relaxed">
                  Closed-loop water systems and energy efficient drives reduce per-meter
                  manufacturing footprint.
                </p>
              </div>
            </div>
            <div className="mt-10">
              <Link
                to="/manufacturing"
                className="font-mono text-[11px] uppercase tracking-widest border-b border-ink/30 pb-1 hover:text-warp hover:border-warp transition-colors"
              >
                Inside the facility →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Specs strip */}
      <section className="py-16 md:py-20 bg-card border-b border-border">
        <div className="container-page grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { v: "80+", l: "Water Jet Looms" },
            { v: "450k", l: "Meters / Month" },
            { v: "60–320", l: "GSM Range" },
            { v: "12+", l: "Export Markets" },
          ].map((s) => (
            <div key={s.l} className="border-l border-warp/40 pl-5">
              <div className="text-4xl md:text-5xl font-bold tracking-tighter mb-2">{s.v}</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-ink/50">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
