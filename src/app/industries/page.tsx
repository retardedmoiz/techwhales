import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { INDUSTRIES, SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: `Industries We Serve | ${SITE_CONFIG.brand}`,
  description: `${SITE_CONFIG.brand} serves businesses across home improvement, insurance, SaaS, healthcare, finance, e-commerce, and more.`,
};

export default function IndustriesPage() {
  const industryDetails: Record<string, { description: string; services: string[] }> = {
    "home-improvement": {
      description: "Generate high-intent homeowner leads and book qualified appointments for contractors, remodelers, and home service companies.",
      services: ["Lead Generation", "Appointment Setting", "Meta Advertising", "SEO"],
    },
    insurance: {
      description: "Scale your book of business with targeted lead generation, appointment setting, and performance marketing across all lines of coverage.",
      services: ["Lead Generation", "Outbound Sales", "Performance Marketing"],
    },
    "auto-insurance": {
      description: "Capture auto insurance shoppers at peak intent with data-driven campaigns optimized for cost-per-quote and cost-per-policy.",
      services: ["Meta Advertising", "Performance Marketing", "Lead Generation"],
    },
    technology: {
      description: "Accelerate growth for technology companies with outbound sales, digital marketing, and conversion-optimized web presence.",
      services: ["Outbound Sales", "SEO", "Web Development", "Digital Marketing"],
    },
    saas: {
      description: "Reduce CAC, increase trial conversions, and build sustainable pipeline for SaaS products at every stage of growth.",
      services: ["Performance Marketing", "Email Marketing", "Lead Generation"],
    },
    ecommerce: {
      description: "Drive traffic, increase ROAS, and build retention systems that turn one-time buyers into loyal brand advocates.",
      services: ["Meta Advertising", "Email Marketing", "SEO", "Performance Marketing"],
    },
    healthcare: {
      description: "HIPAA-aware marketing strategies that grow patient volume, build authority, and maximize practice revenue.",
      services: ["SEO", "Digital Marketing", "Web Development"],
    },
    finance: {
      description: "Compliant lead generation and digital marketing for financial advisors, lenders, and fintech companies.",
      services: ["Lead Generation", "SEO", "Performance Marketing"],
    },
    "local-businesses": {
      description: "Dominate your local market with targeted digital campaigns, local SEO, and lead generation built for Main Street.",
      services: ["SEO", "Meta Advertising", "Digital Marketing"],
    },
    startups: {
      description: "Go from zero to traction with lean, high-impact campaigns that build brand, generate leads, and stretch every dollar.",
      services: ["Performance Marketing", "Digital Marketing", "Web Development"],
    },
  };

  return (
    <>
      <section className="min-h-[50vh] flex items-center relative"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0, 212, 255, 0.07) 0%, transparent 60%), #04070F" }}>
        <div className="container mx-auto py-20">
          <nav className="flex items-center gap-2 text-sm text-white/30 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-cyan-400">Industries</span>
          </nav>
          <p className="trust-badge mb-6">Industries We Serve</p>
          <h1 className="text-[clamp(3rem,7vw,6rem)] font-heading font-black tracking-tighter leading-[0.9] mb-6">
            Deep expertise.<br />
            <span style={{ background: "linear-gradient(135deg, #00D4FF 0%, #7B2FFF 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Every vertical.
            </span>
          </h1>
          <p className="text-lg text-white/40 max-w-xl leading-relaxed">
            We bring vertical-specific knowledge to every engagement — ensuring your strategy fits your market.
          </p>
        </div>
      </section>

      <section className="section-padding border-t border-white/5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {INDUSTRIES.map((industry) => {
              const detail = industryDetails[industry.slug];
              return (
                <Link key={industry.slug} href={`/industries/${industry.slug}`}
                  className="service-card glass rounded-2xl p-8 border border-white/5 block group">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl">{industry.icon}</span>
                    <ArrowUpRight size={18} className="text-white/20 group-hover:text-cyan-400 group-hover:rotate-45 transition-all duration-300" />
                  </div>
                  <h2 className="text-xl font-heading font-black mb-3 group-hover:text-cyan-400 transition-colors">{industry.title}</h2>
                  <p className="text-sm text-white/40 leading-relaxed mb-5">{detail?.description || ""}</p>
                  {detail?.services && (
                    <div className="flex flex-wrap gap-2">
                      {detail.services.map((s) => (
                        <span key={s} className="text-xs font-bold text-white/30 border border-white/8 px-2 py-1 rounded-full">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-white/5">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-heading font-black tracking-tighter mb-4">Don&apos;t see your industry?</h2>
          <p className="text-white/40 mb-8">We work with businesses across many sectors. Talk to us.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 font-bold text-white rounded-2xl hover:scale-105 transition-transform"
            style={{ background: "linear-gradient(135deg, #00D4FF 0%, #7B2FFF 100%)" }}>
            Contact Us <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
