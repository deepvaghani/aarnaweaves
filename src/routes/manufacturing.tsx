import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import loomBay from "@/assets/loom-bay.jpg";
import heroFabric from "@/assets/hero-fabric.jpg";

export const Route = createFileRoute("/manufacturing")({
  head: () => ({
    meta: [
      { title: "Manufacturing — Water Jet Weaving | Aarna Weaves" },
      {
        name: "description",
        content:
          "Inside the Aarna Weaves manufacturing facility — high-speed water jet looms, integrated quality control and 450,000+ meters of monthly capacity.",
      },
      { property: "og:title", content: "Manufacturing — Aarna Weaves" },
      {
        property: "og:description",
        content: "High-speed water jet looms with integrated quality control.",
      },
    ],
  }),
  component: ManufacturingPage,
});

const steps = [
  {
    n: "01",
    title: "Yarn Preparation",
    body: "Filament and blended yarns are wound, sized and warped to exact tension specifications before reaching the loom shed.",
  },
  {
    n: "02",
    title: "Water Jet Weaving",
    body: "High-speed water jet looms insert weft yarns at industrial speed, balancing throughput with precise structural control.",
  },
  {
    n: "03",
    title: "In-line Inspection",
    body: "Every loom is monitored for pick density, defects and shade variance — issues are flagged in real time, not at the end of the roll.",
  },
  {
    n: "04",
    title: "Finishing & Packing",
    body: "Greige fabric is inspected, folded and packed to client specification — ready for dyeing partners or direct dispatch.",
  },
];

function ManufacturingPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="The Mechanism"
        title="Inside the loom shed."
        intro="A purpose-built water jet weaving facility engineered for consistent, high-volume production of synthetic and blended fabrics."
      />

      {/* Why water jet */}
      <section className="py-20 md:py-24 border-b border-border">
        <div className="container-page grid grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="col-span-12 lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden border border-border bg-muted">
              <img
                src={heroFabric}
                alt="Macro detail of cotton fabric being woven"
                width={1280}
                height={1600}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <span className="text-warp font-mono text-[10px] uppercase tracking-widest mb-4 block">
              Why Water Jet
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 text-balance">
              The right loom for the cloth we make.
            </h2>
            <p className="text-ink/70 text-lg leading-relaxed mb-6">
              Water jet weaving uses a precisely controlled jet of water to insert the weft yarn
              across the warp. Compared to air jet or rapier looms, it delivers higher speeds,
              better tension control and reduced yarn breakage on synthetic and filament yarns.
            </p>
            <p className="text-ink/70 text-lg leading-relaxed">
              That makes it the ideal technology for the polyester and blended fabrics that drive
              modern apparel — exactly the families Aarna Weaves specializes in.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-24 border-b border-border">
        <div className="container-page">
          <div className="flex flex-wrap gap-4 justify-between items-end mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase">
              The Process
            </h2>
            <span className="font-mono text-[10px] text-ink/40 uppercase tracking-widest">
              Yarn → Roll
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {steps.map((s) => (
              <div key={s.n} className="bg-canvas p-8">
                <span className="font-mono text-[10px] text-warp mb-8 block uppercase tracking-widest">
                  Step {s.n}
                </span>
                <h3 className="text-xl font-bold uppercase tracking-tight mb-4">{s.title}</h3>
                <p className="text-ink/70 leading-relaxed text-sm">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Power looms */}
      <section className="py-20 md:py-24 border-b border-border">
        <div className="container-page">
          <div className="grid grid-cols-12 gap-8 lg:gap-12 mb-12">
            <div className="col-span-12 lg:col-span-5">
              <span className="text-warp font-mono text-[10px] uppercase tracking-widest mb-4 block">
                Parallel Capability
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-balance">
                Power looms — for the rest of the spectrum.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:pt-4">
              <p className="text-ink/70 text-lg leading-relaxed">
                Alongside our water jet shed, we operate a fleet of conventional power looms for
                fabric families where they remain the most cost-effective and structurally
                appropriate technology — particularly cotton, grey and heavier blended cloth.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {[
              {
                n: "01",
                t: "Grey Cotton Fabric",
                d: "Unbleached cotton base cloth supplied to processing houses for dyeing, printing and finishing.",
              },
              {
                n: "02",
                t: "Cotton Shirting",
                d: "Plain and twill weaves in 100% cotton — soft hand-feel for casual and formal shirting.",
              },
              {
                n: "03",
                t: "Bottom Weight",
                d: "Heavier constructions for trousers, uniform bottoms and workwear in cotton and PC blends.",
              },
              {
                n: "04",
                t: "Furnishing Base",
                d: "Stable base cloth for home textiles, curtain linings and utility fabrics.",
              },
            ].map((c) => (
              <div key={c.n} className="bg-canvas p-8">
                <span className="font-mono text-[10px] text-warp mb-8 block uppercase tracking-widest">
                  Cat {c.n}
                </span>
                <h3 className="text-xl font-bold uppercase tracking-tight mb-4">{c.t}</h3>
                <p className="text-ink/70 leading-relaxed text-sm">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility image */}
      <section className="border-b border-border">
        <div className="aspect-[16/7] w-full overflow-hidden bg-muted">
          <img
            src={loomBay}
            alt="Aarna Weaves water jet loom shed"
            width={1600}
            height={700}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Capabilities table */}
      <section className="py-20 md:py-24">
        <div className="container-page grid grid-cols-12 gap-8 lg:gap-16">
          <div className="col-span-12 lg:col-span-5">
            <span className="text-warp font-mono text-[10px] uppercase tracking-widest mb-4 block">
              Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">
              Technical envelope.
            </h2>
            <p className="text-ink/70 leading-relaxed">
              These are our standard production parameters. Custom developments outside this
              envelope are evaluated on a per-program basis.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <div className="border border-border divide-y divide-border">
              {[
                ["Loom Type", "Water Jet + Power Loom"],
                ["Installed Looms", "80+"],
                ["Monthly Capacity", "450,000 meters"],
                ["GSM Range", "60 – 320"],
                ["Reed Width", "Up to 190 cm"],
                ["Attachments", "Dobby"],
                ["Compatible Yarns", "Polyester · Nylon · Blends"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between py-4 px-5">
                  <span className="font-mono uppercase text-[10px] tracking-widest text-ink/50">
                    {k}
                  </span>
                  <span className="font-medium text-right">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
