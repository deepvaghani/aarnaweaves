import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-canvas">
      <div className="container-page py-20">
        <div className="grid grid-cols-12 gap-12 border-b border-canvas/10 pb-16">
          <div className="col-span-12 lg:col-span-6">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 text-balance">
              Let&rsquo;s discuss <br />your weave.
            </h2>
            <Link
              to="/contact"
              className="inline-block border border-canvas/20 px-8 py-4 font-mono text-xs uppercase tracking-widest hover:bg-canvas hover:text-ink transition-all"
            >
              Submit Inquiry Specification
            </Link>
          </div>
          <div className="col-span-12 lg:col-span-6 flex flex-col justify-end">
            <div className="grid grid-cols-2 gap-8 md:gap-12 text-[11px] font-mono uppercase tracking-[0.2em] text-canvas/50">
              <div>
                <p className="mb-4 text-canvas">Headquarters</p>
                <p className="leading-relaxed normal-case tracking-normal text-sm font-sans text-canvas/60">
                  Plot No. 116-117-118<br />Anjali Textile Park-2<br />Kachhab, Gujarat 394540, India
                </p>
              </div>
              <div>
                <p className="mb-4 text-canvas">Contact</p>
                <p className="leading-relaxed normal-case tracking-normal text-sm font-sans text-canvas/60">
                  inquiry@aarnaweaves.com<br />+91 98000 00000
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center text-[10px] font-mono uppercase tracking-widest text-canvas/30">
          <span>© {new Date().getFullYear()} Aarna Weaves Pvt Ltd</span>
          <span>Precision Weaving · Made in India</span>
        </div>
      </div>
    </footer>
  );
}
