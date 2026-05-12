import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import catSuiting from "@/assets/cat-suiting.jpg";
import catShirting from "@/assets/cat-shirting.jpg";
import catDress from "@/assets/cat-dress.jpg";
import catLining from "@/assets/cat-lining.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Collections — Aarna Weaves" },
      {
        name: "description",
        content:
          "Premium woven fabric collections from Aarna Weaves: shirting, suiting, dress materials and technical linings, woven on water jet looms.",
      },
      { property: "og:title", content: "Collections — Aarna Weaves" },
      {
        property: "og:description",
        content: "Shirting, suiting, dress materials and linings woven on water jet looms.",
      },
    ],
  }),
  component: ProductsPage,
});

const products = [
  {
    n: "01",
    title: "Premium Suiting",
    img: catSuiting,
    gsm: "180–240",
    width: "147 cm",
    composition: "Polyester Blends",
    description:
      "Medium-weight worsted-look suiting with strong crease recovery and refined drape. Ideal for formal tailoring and uniform programs.",
  },
  {
    n: "02",
    title: "Fine Shirting",
    img: catShirting,
    gsm: "80–120",
    width: "142 cm",
    composition: "Polyester / Cotton Blends",
    description:
      "High-density poplins, twills and dobby constructions designed for crisp executive shirting and corporate wear.",
  },
  {
    n: "03",
    title: "Dress Materials",
    img: catDress,
    gsm: "110–160",
    width: "112 cm",
    composition: "Polyester · Blends",
    description:
      "Versatile woven materials with fluid drape — suitable for ethnic wear, dupattas, contemporary apparel and resort collections.",
  },
  {
    n: "04",
    title: "Technical Linings",
    img: catLining,
    gsm: "60–90",
    width: "150 cm",
    composition: "Filament Polyester",
    description:
      "Lightweight, low-friction linings engineered for durability inside structured garments and bags.",
  },
];

function ProductsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="The Collections"
        title="Four cloth families. One mill."
        intro="Each fabric family is woven to specification on our water jet floor. Custom widths, GSM and weave variations are available against bulk inquiries."
      />

      <section className="py-16 md:py-24">
        <div className="container-page space-y-20 md:space-y-28">
          {products.map((p, i) => (
            <article
              key={p.n}
              className="grid grid-cols-12 gap-6 lg:gap-12 items-center"
            >
              <div
                className={`col-span-12 lg:col-span-6 ${i % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <div className="aspect-[4/5] overflow-hidden border border-border bg-muted">
                  <img
                    src={p.img}
                    alt={p.title}
                    width={1000}
                    height={1250}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="col-span-12 lg:col-span-6">
                <span className="font-mono text-[10px] text-ink/30 mb-4 block uppercase tracking-widest">
                  {p.n} / Collection
                </span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 uppercase">
                  {p.title}
                </h2>
                <p className="text-lg text-ink/70 leading-relaxed mb-8 text-pretty">
                  {p.description}
                </p>
                <div className="border-t border-border divide-y divide-border">
                  {[
                    ["GSM Range", p.gsm],
                    ["Width", p.width],
                    ["Composition", p.composition],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between py-3 text-sm">
                      <span className="font-mono uppercase text-[10px] tracking-widest text-ink/50">
                        {k}
                      </span>
                      <span className="font-medium">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
