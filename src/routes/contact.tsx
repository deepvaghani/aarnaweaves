import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHeader } from "@/components/PageShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Inquiry — Aarna Weaves" },
      {
        name: "description",
        content:
          "Get in touch with Aarna Weaves for fabric inquiries, swatch requests, custom developments and bulk orders.",
      },
      { property: "og:title", content: "Contact Aarna Weaves" },
      {
        property: "og:description",
        content: "Submit a fabric inquiry, request swatches or schedule a facility visit.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <PageShell>
      <PageHeader
        eyebrow="Inquiry"
        title="Tell us about your weave."
        intro="Share your fabric requirement — composition, GSM, monthly volume — and our sales team will respond within one business day."
      />

      <section className="py-16 md:py-24">
        <div className="container-page grid grid-cols-12 gap-10 lg:gap-16">
          <div className="col-span-12 lg:col-span-5 space-y-10">
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-warp mb-3">
                Headquarters
              </h3>
              <p className="text-ink leading-relaxed">
                Aarna Weaves<br />
                Plot No. 116-117-118, Anjali Textile Park-2<br />
                Kachhab, Gujarat 394540<br />
                India
              </p>
            </div>
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-warp mb-3">
                Sales
              </h3>
              <p className="text-ink leading-relaxed">
                <a href="mailto:aarnaweaves116@gmail.com" className="hover:text-warp">
                  aarnaweaves116@gmail.com
                </a>
                <br />
                <a href="tel:+919727789463" className="hover:text-warp">
                  +91 97277 89463
                </a>
              </p>
            </div>
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-warp mb-3">
                Hours
              </h3>
              <p className="text-ink leading-relaxed">
                Mon – Sat · 10:00 to 18:30 IST<br />
                Closed on national holidays
              </p>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7">
            {submitted ? (
              <div className="border border-warp/40 p-10 bg-card">
                <p className="font-mono text-[10px] uppercase tracking-widest text-warp mb-4">
                  Inquiry Received
                </p>
                <h3 className="text-2xl font-bold tracking-tight mb-3">Thank you.</h3>
                <p className="text-ink/70 leading-relaxed">
                  Our sales team will review your specification and respond at the email address
                  you provided within one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="border border-border divide-y divide-border"
              >
                {[
                  { id: "name", label: "Name", type: "text", required: true },
                  { id: "company", label: "Company", type: "text", required: true },
                  { id: "email", label: "Email", type: "email", required: true },
                  { id: "phone", label: "Phone", type: "tel", required: false },
                ].map((f) => (
                  <div key={f.id} className="grid grid-cols-1 sm:grid-cols-3 sm:items-center">
                    <label
                      htmlFor={f.id}
                      className="font-mono text-[10px] uppercase tracking-widest text-ink/50 px-5 pt-3 sm:pt-0"
                    >
                      {f.label}
                      {f.required && " *"}
                    </label>
                    <input
                      id={f.id}
                      name={f.id}
                      type={f.type}
                      required={f.required}
                      className="sm:col-span-2 bg-transparent py-3 sm:py-4 px-5 outline-none focus:bg-card text-base w-full"
                    />
                  </div>
                ))}
                <div className="grid grid-cols-1 sm:grid-cols-3">
                  <label
                    htmlFor="message"
                    className="font-mono text-[10px] uppercase tracking-widest text-ink/50 px-5 pt-3 sm:pt-4"
                  >
                    Specification *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Composition, GSM, width, monthly volume…"
                    className="sm:col-span-2 bg-transparent py-3 sm:py-4 px-5 outline-none focus:bg-card text-base resize-none placeholder:text-ink/30 w-full"
                  />
                </div>
                <div className="p-5 flex justify-end">
                  <button
                    type="submit"
                    className="bg-ink text-canvas font-mono text-[11px] uppercase tracking-widest px-8 py-3 hover:bg-warp transition-colors"
                  >
                    Submit Inquiry →
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
