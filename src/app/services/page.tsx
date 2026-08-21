import type { Metadata } from "next";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { ArrowUpRight, CheckCircle2, ChevronRight, ShieldCheck } from "lucide-react";
import { SERVICES, SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: `Services & Capabilities | ${SITE_CONFIG.brand}`,
  description: `Explore all ${SITE_CONFIG.brand} corporate solutions: Legal, Tax, Design, Marketing, Web Development, Healthcare Medicare BPO, and Business Operations.`,
};

export default function ServicesPage() {
  const categories = ["Legal", "Tax", "Design", "Operations", "Marketing", "Monetization", "Technology"];
  const categoryLabels: Record<string, string> = {
    Legal: "Legal & Estate Practice",
    Tax: "Tax Strategy & Resolution",
    Design: "Architectural & Interior Design",
    Operations: "Business Operations & BPO Solutions",
    Marketing: "Performance Marketing & Growth",
    Monetization: "Search & Media Monetization",
    Technology: "Web Development & Custom Apps",
  };

  return (
    <div className="bg-[#08080a] text-white min-h-screen">
      {/* Hero */}
      <section className="relative bg-[#0c0c0e] border-b border-white/10 py-28 md:py-36">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/50 mb-8">
            <Link href="/" className="hover:text-red-500 transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-red-500 font-black">Services</span>
          </nav>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-heading font-black tracking-tighter text-white uppercase mb-6 leading-[0.95] max-w-5xl">
            Corporate <br />
            <span className="text-transparent relative" style={{ WebkitTextStroke: "1.5px #fff" }}>
              BPO & Operations.
            </span>
          </h1>

          <p className="text-white/70 text-base md:text-xl max-w-3xl leading-relaxed font-normal">
            Stop juggling multiple disjointed vendors and unreliable freelancers. TechWhales delivers an integrated suite of legal, tax, design, Medicare contact center BPO, operational, and performance marketing capabilities engineered for continuous business growth.
          </p>
        </div>
      </section>

      {/* Service Grid by Category */}
      <section className="py-20 md:py-32 bg-[#08080a]">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          {categories.map((cat) => {
            const catServices = SERVICES.filter((s) => s.category === cat);
            if (!catServices.length) return null;
            return (
              <div key={cat} className="mb-24 last:mb-0">
                <div className="flex items-center gap-6 mb-10">
                  <h2 className="text-xl md:text-2xl font-heading font-black uppercase tracking-widest text-white">
                    {categoryLabels[cat]}
                  </h2>
                  <div className="flex-1 h-px bg-white/10" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* For Operations category: Insert Medicare BPO Feature Card First */}
                  {cat === "Operations" && (
                    <Link
                      href="/medicare"
                      className="group block bg-[#0c0c10] border-2 border-red-600/50 rounded-3xl p-8 md:p-10 hover:border-red-500 hover:shadow-2xl hover:shadow-red-600/20 transition-all duration-500 relative overflow-hidden flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <div className="text-red-500">
                            <ShieldCheck size={38} strokeWidth={1.8} />
                          </div>
                          <div className="px-3 py-1 rounded-full bg-red-600/20 border border-red-500/40 text-[0.68rem] font-bold text-red-500 uppercase tracking-wider flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                            Specialized BPO Practice
                          </div>
                        </div>

                        <h3 className="text-xl md:text-2xl font-heading font-black mb-3 text-white group-hover:text-red-500 transition-colors uppercase leading-tight">
                          Healthcare & Medicare BPO Solutions
                        </h3>

                        <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-8">
                          Dedicated contact-center teams supporting healthcare, insurance agencies, and FMOs with qualification, appointment setting, and warm live-transfer operations.
                        </p>
                      </div>

                      <div className="space-y-2.5 pt-6 border-t border-white/10">
                        {["Live & Warm Transfer Models", "US Management + Offshore Delivery", "Controlled 5-Agent Pilot Program"].map((detail, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-wider text-white">
                            <CheckCircle2 size={12} className="text-red-500 flex-shrink-0" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </Link>
                  )}

                  {catServices.map((service) => {
                    const Icon = (LucideIcons as any)[service.icon] || LucideIcons.Circle;
                    return (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="group block bg-[#121216] border border-white/10 rounded-3xl p-8 md:p-10 hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-600/10 transition-all duration-500 relative overflow-hidden flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-6">
                            <div className="text-white/50 group-hover:text-red-500 transition-colors">
                              <Icon size={36} strokeWidth={1.5} />
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-all">
                              <ArrowUpRight size={16} />
                            </div>
                          </div>

                          <h3 className="text-xl md:text-2xl font-heading font-black mb-4 text-white group-hover:text-red-500 transition-colors uppercase leading-tight">
                            {service.title}
                          </h3>

                          <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-8">
                            {service.description}
                          </p>
                        </div>
                        
                        <div className="space-y-2.5 pt-6 border-t border-white/10">
                          {((service.details as any).items || []).slice(0, 3).map((detail: string, idx: number) => (
                            <div key={idx} className="flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-wider text-white/60 group-hover:text-white">
                              <CheckCircle2 size={12} className="text-red-500 flex-shrink-0" />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="py-20 bg-[#04070f] border-t border-white/10 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-red-500 font-bold block mb-3">Custom Requirements?</span>
          <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tighter uppercase mb-6 text-white">
            Need a Tailored Corporate Solution?
          </h2>
          <p className="text-white/70 text-sm md:text-base mb-8 max-w-xl mx-auto">
            Our senior partners consult directly with your executive team to design custom operational, legal, and growth workflows.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white bg-red-600 rounded-full hover:bg-white hover:text-black transition-all shadow-lg shadow-red-600/30"
          >
            Request Custom Proposal <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
