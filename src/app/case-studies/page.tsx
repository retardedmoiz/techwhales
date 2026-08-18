"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, BarChart3, TrendingUp, DollarSign } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/fade-up";

const caseStudies = [
  {
    id: "saas-lead-gen",
    company: "Enterprise SaaS Platform",
    industry: "Technology / SaaS",
    challenge: "Stagnant pipeline growth with high CAC and long sales cycles.",
    solution: "Built a dedicated outbound SDR program combined with intent-based lead generation.",
    results: [
      { metric: "340%", label: "Pipeline Growth", icon: TrendingUp },
      { metric: "52%", label: "Reduction in CAC", icon: DollarSign },
      { metric: "8 weeks", label: "Time to Results", icon: BarChart3 },
    ],
    services: ["Lead Generation", "Outbound Sales"],
    image: "/performance-charts.png",
  },
  {
    id: "insurance-meta",
    company: "Regional Insurance Broker",
    industry: "Insurance",
    challenge: "Declining organic lead flow and over-reliance on referrals.",
    solution: "Launched a Meta advertising system with appointment setting integration.",
    results: [
      { metric: "$2.1M", label: "New Premium Revenue", icon: DollarSign },
      { metric: "3.2x", label: "Return on Ad Spend", icon: TrendingUp },
      { metric: "90 days", label: "Campaign Duration", icon: BarChart3 },
    ],
    services: ["Meta Advertising", "Appointment Setting"],
    image: "/business-meeting.png",
  },
  {
    id: "ecom-performance",
    company: "D2C E-Commerce Brand",
    industry: "E-Commerce",
    challenge: "Unprofitable Meta campaigns with poor creative performance.",
    solution: "Rebuilt campaign structure, creative strategy, and attribution model.",
    results: [
      { metric: "8.2x", label: "Return on Ad Spend", icon: TrendingUp },
      { metric: "61%", label: "Lower CPM", icon: DollarSign },
      { metric: "4x", label: "Revenue Growth", icon: BarChart3 },
    ],
    services: ["Performance Marketing", "Media Buying"],
    image: "/abstract-growth.png",
  },
  {
    id: "startup-web",
    company: "B2B SaaS Startup",
    industry: "Technology / SaaS",
    challenge: "Legacy website with poor conversion rate and 6s+ page load time.",
    solution: "Complete redesign and rebuild in Next.js with CRO-focused architecture.",
    results: [
      { metric: "312%", label: "Conversion Rate Lift", icon: TrendingUp },
      { metric: "98", label: "Core Web Vitals", icon: BarChart3 },
      { metric: "0.8s", label: "LCP Performance", icon: Zap },
    ],
    services: ["Web Development", "UI/UX Design"],
    image: "/web-dev.png",
  }
];

// Placeholder for the missing icon in the array above
function Zap({ size, className }: { size?: number; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
  );
}

export default function CaseStudiesPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative bg-[#fafafa] border-b border-black/10 py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto relative z-10">
          <FadeUp>
            <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black/40 mb-8">
              <Link href="/" className="hover:text-black transition-colors">Home</Link>
              <span>/</span>
              <span className="text-red-600">Case Studies</span>
            </nav>
            <h1 className="text-4xl md:text-6xl lg:text-[7rem] font-heading font-black tracking-tighter text-black uppercase mb-6 leading-none max-w-5xl">
              Numbers that <br />
              <span className="text-transparent" style={{ WebkitTextStroke: "2px #000" }}>Don't Lie.</span>
            </h1>
            <p className="text-black/60 text-base md:text-lg max-w-2xl leading-relaxed font-medium">
              Real clients. Real budgets. Real outcomes. Every metric displayed below is fully attributed and mathematically accountable.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col gap-24">
            {caseStudies.map((cs, i) => (
              <FadeUp key={cs.id} delay={0.1}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                  
                  {/* Image side - alternates based on index */}
                  <div className={`relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <Image src={cs.image} alt={cs.company} fill className="object-cover hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0" />
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="absolute top-6 left-6 flex gap-2">
                      {cs.services.map((s) => (
                        <span key={s} className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-black/10 text-[0.65rem] font-bold uppercase tracking-widest text-black">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={`flex flex-col justify-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <span className="text-xs font-bold tracking-widest uppercase text-red-600 mb-4 block">
                      {cs.industry}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-heading font-black text-black uppercase mb-8 leading-tight">
                      {cs.company}
                    </h2>
                    
                    <div className="space-y-6 mb-10">
                      <div>
                        <h3 className="text-[0.65rem] font-bold tracking-widest uppercase text-black/40 mb-2">The Constraint</h3>
                        <p className="text-black/70 font-medium leading-relaxed">{cs.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-[0.65rem] font-bold tracking-widest uppercase text-black/40 mb-2">The Architecture</h3>
                        <p className="text-black/70 font-medium leading-relaxed">{cs.solution}</p>
                      </div>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-black/10">
                      {cs.results.map((r, idx) => (
                        <div key={idx}>
                          <div className="flex items-center gap-2 mb-2">
                            <r.icon size={14} className="text-red-600" />
                            <h4 className="text-[0.6rem] font-bold tracking-widest uppercase text-black/50">{r.label}</h4>
                          </div>
                          <span className="text-3xl font-heading font-black text-black">
                            {r.metric}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#fafafa] border-t border-black/5 text-center">
        <div className="container mx-auto">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter text-black uppercase mb-6">
              Your Results <br />
              <span className="text-red-600">Are Next.</span>
            </h2>
            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 text-sm font-bold uppercase tracking-widest text-white bg-black rounded-full hover:bg-red-600 transition-colors duration-300">
              Get Free Consultation <ArrowUpRight size={18} />
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
