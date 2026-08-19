"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Zap, Target, Users, Shield } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/fade-up";

export default function AboutPage() {
  const values = [
    { icon: Zap, title: "Fast Execution", desc: "We eliminate delays. We move from planning to action in days, not months." },
    { icon: Target, title: "Clear Precision", desc: "No guesswork. Every legal filing, tax return, and project is handled with exact precision." },
    { icon: Users, title: "Dedicated Experts", desc: "We only work with the best attorneys, tax professionals, and business operators to ensure your success." },
    { icon: Shield, title: "Absolute Accountability", desc: "We act as your true partner. If something needs fixing, we fix it. We are always by your side." }
  ];

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
              <span className="text-red-600">About Us</span>
            </nav>
            <h1 className="text-4xl md:text-6xl lg:text-[7rem] font-heading font-black tracking-tighter text-black uppercase mb-6 leading-none max-w-5xl">
              Not just an agency. <br />
              <span className="text-transparent" style={{ WebkitTextStroke: "2px #000" }}>A True Partner.</span>
            </h1>
            <p className="text-black/60 text-base md:text-lg max-w-2xl leading-relaxed font-medium">
              Operated by {SITE_CONFIG.legalName}, {SITE_CONFIG.brand} was born out of frustration with traditional service providers. 
              We wanted a single trusted partner for legal, tax, design, and business operations, so we built exactly that.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div className="relative w-full aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/modern-office.png" alt="TechWhales Operations" fill className="object-cover hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-black/10" />
              </div>
            </FadeUp>
            <div className="flex flex-col justify-center">
              <FadeUp delay={0.2}>
                <span className="text-xs uppercase tracking-widest text-red-600 font-bold block mb-4">Our Origin</span>
                <h2 className="text-4xl md:text-5xl font-heading font-black text-black uppercase tracking-tighter mb-8 leading-none">
                  Built by Professionals,<br />
                  For Your Business.
                </h2>
                <div className="space-y-6 text-black/65 text-base md:text-lg font-medium leading-relaxed">
                  <p>
                    Most people are trapped trying to find a different professional for every problem. One for taxes, one for legal issues, and another for marketing. It becomes stressful and expensive.
                  </p>
                  <p>
                    {SITE_CONFIG.brand} bridges that gap. We bring together highly specialized teams under one roof. We give you professional capabilities and genuine support without the endless searching.
                  </p>
                  <p>
                    Whether you need help with a living trust, corporate tax preparation, interior design for your real estate, or a new website, we embed ourselves as your true partner to drive real results.
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-32 bg-[#fafafa] border-y border-black/5">
        <div className="container mx-auto">
          <FadeUp>
            <div className="text-center mb-16">
              <span className="text-xs uppercase tracking-widest text-red-600 font-bold block mb-4">Core Values</span>
              <h2 className="text-4xl md:text-5xl font-heading font-black text-black uppercase tracking-tighter">
                Our Operating System
              </h2>
            </div>
          </FadeUp>
          
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <StaggerItem key={i}>
                <div className="bg-white border border-black/10 p-8 rounded-3xl h-full hover:border-red-600/50 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-[#fafafa] border border-black/5 flex items-center justify-center mb-6">
                    <v.icon size={20} className="text-red-600" />
                  </div>
                  <h3 className="text-xl font-heading font-black text-black uppercase mb-4">{v.title}</h3>
                  <p className="text-black/60 text-sm leading-relaxed font-medium">{v.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto">
          <FadeUp>
            <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter text-black uppercase mb-6 leading-none">
              Ready to <br />
              <span className="text-red-600">Scale Without Limits?</span>
            </h2>
            <p className="text-black/60 max-w-xl mx-auto mb-10 font-medium">
              Join the businesses and families that have trusted us to handle their most important matters with genuine care.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 text-sm font-bold uppercase tracking-widest text-white bg-black rounded-full hover:bg-red-600 transition-colors duration-300">
              Get Started Today <ArrowUpRight size={18} />
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
