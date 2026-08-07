import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES, SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: `Services | ${SITE_CONFIG.brand}`,
  description: `Explore all ${SITE_CONFIG.brand} services: BPO, outbound sales, lead generation, performance marketing, Meta advertising, web development, SEO, and more.`,
};

export default function ServicesPage() {
  const categories = ["operations", "sales", "marketing", "technology", "consulting"];
  const categoryLabels: Record<string, string> = {
    operations: "Operations",
    sales: "Sales",
    marketing: "Marketing",
    technology: "Technology",
    consulting: "Consulting",
  };

  return (
    <>
      {/* Hero */}
      <section
        className="min-h-[50vh] flex items-center relative overflow-hidden"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0, 212, 255, 0.07) 0%, transparent 60%), #04070F" }}
      >
        <div className="container mx-auto py-20">
          <nav className="flex items-center gap-2 text-sm text-white/30 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-cyan-400">Services</span>
          </nav>
          <p className="trust-badge mb-6">Our Services</p>
          <h1 className="text-[clamp(3rem,7vw,6rem)] font-heading font-black tracking-tighter leading-[0.9] mb-6">
            14 services.
            <br />
            <span style={{ background: "linear-gradient(135deg, #00D4FF 0%, #7B2FFF 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              One partner.
            </span>
          </h1>
          <p className="text-lg text-white/40 max-w-xl leading-relaxed">
            From BPO and outbound sales to performance marketing and web development — every service engineered for measurable growth.
          </p>
        </div>
      </section>

      {/* Service Grid by Category */}
      <section className="section-padding border-t border-white/5">
        <div className="container mx-auto">
          {categories.map((cat) => {
            const catServices = SERVICES.filter((s) => s.category === cat);
            if (!catServices.length) return null;
            return (
              <div key={cat} className="mb-20">
                <div className="flex items-center gap-4 mb-10">
                  <h2 className="text-xs font-black tracking-widest uppercase text-white/30">
                    {categoryLabels[cat]}
                  </h2>
                  <div className="flex-1 h-px bg-white/5" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {catServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="service-card glass rounded-2xl p-8 border border-white/5 block"
                    >
                      <span className="text-3xl mb-5 block">{service.icon}</span>
                      <h3 className="text-lg font-heading font-black mb-3 group-hover:text-cyan-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-white/40 leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-bold text-cyan-400">
                        Learn more <ArrowUpRight size={14} />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding border-t border-white/5">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter mb-6">
            Not sure which service fits?
          </h2>
          <p className="text-white/40 max-w-lg mx-auto mb-8">
            Book a free strategy session and we&apos;ll map out exactly which services will move the needle for your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 font-bold text-white rounded-2xl hover:scale-105 transition-transform"
            style={{ background: "linear-gradient(135deg, #00D4FF 0%, #7B2FFF 100%)" }}
          >
            Get Free Consultation
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
