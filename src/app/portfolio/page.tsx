"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO, SITE_CONFIG } from "@/lib/config";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/fade-up";

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...Array.from(new Set(PORTFOLIO.map((p) => p.category)))];

  const filteredPortfolio = filter === "All" 
    ? PORTFOLIO 
    : PORTFOLIO.filter((p) => p.category === filter);

  // Assign images randomly or systematically for visual flair
  const images = [
    "/performance-charts.png",
    "/abstract-growth.png",
    "/web-dev.png",
    "/business-meeting.png",
    "/modern-office.png",
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="relative bg-[#fafafa] border-b border-black/10 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <Image src="/abstract-growth.png" alt="Texture" fill className="object-cover" />
        </div>
        <div className="container mx-auto relative z-10">
          <FadeUp>
            <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black/40 mb-8">
              <Link href="/" className="hover:text-black transition-colors">Home</Link>
              <span>/</span>
              <span className="text-red-600">Portfolio</span>
            </nav>
            <h1 className="text-4xl md:text-6xl lg:text-[7rem] font-heading font-black tracking-tighter text-black uppercase mb-6 leading-none max-w-5xl">
              Work that <br />
              <span className="text-transparent" style={{ WebkitTextStroke: "2px #000" }}>Speaks for Itself.</span>
            </h1>
            <p className="text-black/60 text-base md:text-lg max-w-2xl leading-relaxed font-medium">
              We don't deal in hypothetical projections. We deal in deployed architecture, executed campaigns, and booked revenue. Review our operational footprint.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-black/5 py-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`whitespace-nowrap px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  filter === cat
                    ? "bg-black text-white"
                    : "bg-[#fafafa] border border-black/10 text-black/50 hover:text-black hover:border-black/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((item, i) => (
              <StaggerItem key={i}>
                <Link href="/case-studies" className="group flex flex-col h-full bg-[#fafafa] border border-black/10 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-500">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/5">
                    <Image
                      src={images[i % images.length]}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-black/10 text-[0.65rem] font-bold uppercase tracking-widest text-black">
                      {item.category}
                    </div>
                  </div>
                  <div className="p-8 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl md:text-2xl font-heading font-black text-black uppercase mb-4 group-hover:text-red-600 transition-colors leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-black/80 font-bold mb-2">
                        {item.metrics}
                      </p>
                      <p className="text-black/50 text-sm font-medium">
                        {item.extra}
                      </p>
                    </div>
                    <div className="pt-6 mt-6 border-t border-black/10 flex items-center justify-between group-hover:border-red-600/30 transition-colors">
                      <span className="text-xs text-black/40 uppercase tracking-widest font-bold group-hover:text-red-600">View Data</span>
                      <ArrowUpRight size={18} className="text-black/20 group-hover:text-red-600 group-hover:rotate-45 transition-all" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#fafafa] border-t border-black/5 text-center">
        <div className="container mx-auto">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter text-black uppercase mb-6">
              Become Our Next <br />
              <span className="text-red-600">Case Study.</span>
            </h2>
            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 text-sm font-bold uppercase tracking-widest text-white bg-black rounded-full hover:bg-red-600 transition-colors duration-300">
              Start Building <ArrowUpRight size={18} />
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
