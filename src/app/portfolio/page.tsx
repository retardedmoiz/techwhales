import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: `Portfolio | ${SITE_CONFIG.brand}`,
  description: `Explore ${SITE_CONFIG.brand} portfolio — web development, landing pages, digital marketing campaigns, performance marketing, and automation projects.`,
};

const portfolioItems = [
  {
    category: "Web Development",
    title: "SaaS Platform Redesign",
    description: "Complete Next.js rebuild with 312% conversion rate improvement and 98 Core Web Vitals score.",
    tags: ["Next.js", "TypeScript", "Framer Motion"],
    color: "#00D4FF",
  },
  {
    category: "Landing Pages",
    title: "Insurance Lead Capture",
    description: "High-converting landing page system that reduced CPA by 42% with dynamic personalization.",
    tags: ["Conversion Optimization", "A/B Testing", "Analytics"],
    color: "#7B2FFF",
  },
  {
    category: "Performance Marketing",
    title: "E-Commerce Meta Campaign",
    description: "Creative-led campaign achieving 8.2x ROAS across Facebook and Instagram.",
    tags: ["Meta Ads", "Creative Strategy", "Attribution"],
    color: "#00B4D8",
  },
  {
    category: "Digital Marketing",
    title: "B2B SaaS Content Strategy",
    description: "12-month SEO and content campaign that generated 1,200% organic traffic growth.",
    tags: ["SEO", "Content Marketing", "Link Building"],
    color: "#00D4FF",
  },
  {
    category: "Automation",
    title: "Lead Nurture Automation System",
    description: "Multi-step email and CRM automation that increased trial-to-paid conversion by 47%.",
    tags: ["HubSpot", "Email Marketing", "CRM"],
    color: "#7B2FFF",
  },
  {
    category: "Web Development",
    title: "Home Services Platform",
    description: "Multi-location franchise website with location-aware lead routing and booking integration.",
    tags: ["React", "API Integration", "CMS"],
    color: "#00B4D8",
  },
];

const categories = ["All", "Web Development", "Landing Pages", "Performance Marketing", "Digital Marketing", "Automation"];

export default function PortfolioPage() {
  return (
    <>
      <section className="min-h-[50vh] flex items-center relative"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0, 212, 255, 0.07) 0%, transparent 60%), #04070F" }}>
        <div className="container mx-auto py-20">
          <nav className="flex items-center gap-2 text-sm text-white/30 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-cyan-400">Portfolio</span>
          </nav>
          <p className="trust-badge mb-6">Selected Work</p>
          <h1 className="text-[clamp(3rem,7vw,6rem)] font-heading font-black tracking-tighter leading-[0.9] mb-6">
            Work that<br />
            <span style={{ background: "linear-gradient(135deg, #00D4FF 0%, #7B2FFF 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              speaks for itself.
            </span>
          </h1>
          <p className="text-lg text-white/40 max-w-xl leading-relaxed">
            A selection of projects across web development, performance marketing, and digital campaigns.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <div className="border-b border-white/5 sticky top-20 z-30 bg-[#04070F]/90 backdrop-blur-xl">
        <div className="container mx-auto">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((cat) => (
              <button key={cat}
                className="flex-shrink-0 px-4 py-1.5 text-sm font-bold rounded-full border border-white/10 text-white/50 hover:text-white hover:border-white/20 transition-all">
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="section-padding border-t border-white/5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, i) => (
              <div key={i} className="glass rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300 group">
                {/* Visual placeholder */}
                <div className="h-48 relative overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${item.color}15 0%, rgba(123, 47, 255, 0.1) 100%)` }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-xs font-bold tracking-widest uppercase text-white/20">{item.category}</div>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center border border-white/20 bg-white/5">
                      <ExternalLink size={13} className="text-white/60" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold tracking-widest uppercase mb-3 block" style={{ color: item.color }}>
                    {item.category}
                  </span>
                  <h3 className="text-lg font-heading font-black mb-2 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span key={tag} className="text-xs font-medium text-white/30 border border-white/8 px-2 py-0.5 rounded">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-white/5">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-heading font-black tracking-tighter mb-4">Interested in working together?</h2>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 font-bold text-white rounded-2xl hover:scale-105 transition-transform"
            style={{ background: "linear-gradient(135deg, #00D4FF 0%, #7B2FFF 100%)" }}>
            Start a Project <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
