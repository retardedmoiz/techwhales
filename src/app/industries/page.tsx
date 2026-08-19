"use client";

import Link from "next/link";
import Image from "next/image";
import * as LucideIcons from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { INDUSTRIES, SITE_CONFIG } from "@/lib/config";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/fade-up";

export default function IndustriesPage() {
  return (
    <div className="bg-white min-h-screen text-black">
      {/* Hero */}
      <section className="relative bg-[#fafafa] border-b border-black/10 py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto relative z-10">
          <FadeUp>
            <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black/40 mb-8">
              <Link href="/" className="hover:text-black transition-colors">Home</Link>
              <span>/</span>
              <span className="text-red-600">Industries</span>
            </nav>
            <h1 className="text-4xl md:text-6xl lg:text-[7rem] font-heading font-black tracking-tighter uppercase mb-6 leading-[0.9] max-w-5xl">
              Industry <br />
              <span className="text-transparent" style={{ WebkitTextStroke: "2px #000" }}>Expertise.</span>
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
              const Icon = (LucideIcons as any)[industry.icon] || LucideIcons.Briefcase;
              return (
                <StaggerItem key={industry.slug}>
                  <Link href={`/industries/${industry.slug}`} className="group block bg-[#fafafa] border border-black/10 rounded-3xl p-6 md:p-8 hover:bg-white hover:border-red-600/30 hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 h-full flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white border border-black/5 flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20">
                      <ArrowUpRight size={16} className="text-red-600" />
                    </div>
                    
                    <div className="mb-6 relative h-48 w-full rounded-2xl overflow-hidden">
                      <Image 
                        src={industry.image!} 
                        alt={industry.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                      <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-red-600 shadow-lg">
                        <Icon size={20} strokeWidth={2} />
                      </div>
                    </div>

                    <div>
                      <h2 className="text-xl md:text-2xl font-heading font-black mb-3 text-black group-hover:text-red-600 transition-colors uppercase leading-tight">
                        {industry.title}
                      </h2>
                      <p className="text-sm text-black/60 font-medium leading-relaxed mb-6">
                        {industry.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-6 border-t border-black/5 mt-auto">
                      {(industry.services || []).slice(0, 3).map((s) => (
                        <span key={s} className="text-[0.65rem] font-bold uppercase tracking-wider text-black/50 bg-white border border-black/10 px-2 py-1 rounded-full group-hover:border-red-600/20 group-hover:text-black/80 transition-colors">
                          {s}
                        </span>
                      ))}
                    </div>
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
