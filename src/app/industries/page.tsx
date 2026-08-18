"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { INDUSTRIES, SITE_CONFIG } from "@/lib/config";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/fade-up";

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
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative bg-[#fafafa] border-b border-black/10 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <Image src="/abstract-growth.png" alt="Texture" fill className="object-cover" />
        </div>
        <div className="container mx-auto relative z-10">
          <FadeUp>
            <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black/40 mb-8">
              <Link href="/" className="hover:text-black transition-colors">Home</Link>
              <span>/</span>
              <span className="text-red-600">Industries</span>
            </nav>
            <h1 className="text-4xl md:text-6xl lg:text-[7rem] font-heading font-black tracking-tighter text-black uppercase mb-6 leading-none max-w-5xl">
              Deep Domain <br />
              <span className="text-transparent" style={{ WebkitTextStroke: "2px #000" }}>Dominance.</span>
            </h1>
            <p className="text-black/60 text-base md:text-lg max-w-2xl leading-relaxed font-medium">
              We bring vertical-specific knowledge to every engagement. We don't guess what works in your market; we deploy proven, tailored architectures that dominate your industry.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((industry) => {
              const detail = industryDetails[industry.slug];
              return (
                <StaggerItem key={industry.slug}>
                  <Link href={`/industries/${industry.slug}`} className="group block bg-[#fafafa] border border-black/10 rounded-3xl p-8 md:p-10 hover:bg-white hover:border-red-600/30 hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 h-full flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-white border border-black/5 flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowUpRight size={16} className="text-red-600" />
                    </div>
                    
                    <div>
                      <span className="text-4xl mb-6 block group-hover:scale-110 transition-transform origin-left">{industry.icon}</span>
                      <h2 className="text-xl md:text-2xl font-heading font-black mb-4 text-black group-hover:text-red-600 transition-colors uppercase leading-tight">
                        {industry.title}
                      </h2>
                      <p className="text-sm text-black/60 font-medium leading-relaxed mb-8">
                        {detail?.description || ""}
                      </p>
                    </div>

                    {detail?.services && (
                      <div className="flex flex-wrap gap-2 pt-6 border-t border-black/5">
                        {detail.services.slice(0, 3).map((s) => (
                          <span key={s} className="text-[0.65rem] font-bold uppercase tracking-wider text-black/50 bg-white border border-black/10 px-2 py-1 rounded-full group-hover:border-red-600/20 group-hover:text-black/80 transition-colors">
                            {s}
                          </span>
                        ))}
                      </div>
                    )}
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#fafafa] border-t border-black/5 text-center">
        <div className="container mx-auto">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter text-black uppercase mb-4">
              Don't See Your <br />
              <span className="text-red-600">Industry?</span>
            </h2>
            <p className="text-black/60 max-w-xl mx-auto mb-10 font-medium">
              We engineer custom infrastructure for niche and specialized markets. Reach out and let's discuss your specific operational challenges.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 text-sm font-bold uppercase tracking-widest text-white bg-black rounded-full hover:bg-red-600 transition-colors duration-300">
              Start The Conversation <ArrowUpRight size={18} />
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
