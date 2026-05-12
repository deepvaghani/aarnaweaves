import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import loomBay from "@/assets/loom-bay.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Aarna Weaves" },
      {
        name: "description",
        content:
          "Aarna Weaves is a Surat-based textile manufacturer specializing in high-speed water jet woven fabrics for shirting, suiting and dress materials.",
      },
      { property: "og:title", content: "About Aarna Weaves" },
      {
        property: "og:description",
        content: "A Surat-based textile manufacturer producing premium woven fabrics at scale.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="About the Mill"
        title="Built on rhythm, tension and trust."
        intro="Aarna Weaves is a textile manufacturing company based in Surat, Gujarat — producing premium woven fabrics at industrial scale on high-speed water jet looms."
      />

      <section className="py-20 md:py-24">
        <div className="container-page grid grid-cols-12 gap-8 lg:gap-16">
          <div className="col-span-12 lg:col-span-7 space-y-6 text-ink/75 text-lg leading-relaxed">
            <p>
              We supply garment manufacturers, wholesalers and converters across India and overseas
              with consistent, technically reliable woven fabric. Every meter we ship is engineered
              to perform — in the cutting room, on the sewing line and in the wardrobe.
            </p>
            <p>
              Our floor is built around water jet weaving, the technology of choice for
              high-density synthetic and blended fabrics. It allows us to combine high speed with
              precise tension control, so we can scale production without sacrificing the
              hand-feel that defines premium cloth.
            </p>
            <p>
              We work as a partner, not a vendor — taking briefs from designers and sourcing teams
              and translating them into woven specifications, sample lots and bulk deliveries.
            </p>
          </div>
          <aside className="col-span-12 lg:col-span-5">
            <div className="border border-border divide-y divide-border">
              {[
                ["Founded", "Surat, Gujarat"],
                ["Specialization", "Water Jet Woven Fabric"],
                ["Capacity", "450,000 m / month"],
                ["Markets", "India · GCC · EU · SE Asia"],
                ["Compliance", "ISO 9001:2015"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between py-4 px-5 text-sm">
                  <span className="font-mono uppercase text-[10px] tracking-widest text-ink/50">
                    {k}
                  </span>
                  <span className="font-medium text-right">{v}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="aspect-[16/7] w-full overflow-hidden bg-muted">
          <img
            src={loomBay}
            alt="Aarna Weaves manufacturing floor"
            width={1600}
            height={700}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="py-20 md:py-24 border-t border-border">
        <div className="container-page grid md:grid-cols-3 gap-10">
          {[
            {
              t: "Consistency",
              d: "Tight loom calibration and lot-level QC ensure shade and construction stay uniform across long runs.",
            },
            {
              t: "Capacity",
              d: "Bulk-ready throughput for large export orders, with the flexibility to handle smaller specialty lots.",
            },
            {
              t: "Collaboration",
              d: "Open dialogue with sourcing teams — sample developments, custom widths and weave variations welcome.",
            },
          ].map((v) => (
            <div key={v.t}>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-3">{v.t}</h3>
              <p className="text-ink/70 leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
