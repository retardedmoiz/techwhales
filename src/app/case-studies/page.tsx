import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: `Case Studies | ${SITE_CONFIG.brand}`,
  description: `Real results from real clients — explore ${SITE_CONFIG.brand} case studies showcasing measurable growth across BPO, performance marketing, and digital campaigns.`,
};

const caseStudies = [
  {
    id: "saas-lead-gen",
    company: "Enterprise SaaS Platform",
    industry: "Technology / SaaS",
    challenge: "Stagnant pipeline growth with high CAC and long sales cycles.",
    solution: "Built a dedicated outbound SDR program combined with intent-based lead generation.",
    results: [
      { metric: "340%", label: "Pipeline Growth" },
      { metric: "52%", label: "Reduction in CAC" },
      { metric: "8 weeks", label: "Time to Results" },
    ],
    services: ["Lead Generation", "Outbound Sales"],
    color: "#00D4FF",
  },
  {
    id: "insurance-meta",
    company: "Regional Insurance Broker",
    industry: "Insurance",
    challenge: "Declining organic lead flow and over-reliance on referrals.",
    solution: "Launched a Meta advertising system with appointment setting integration.",
    results: [
      { metric: "$2.1M", label: "New Premium Revenue" },
      { metric: "3.2x", label: "Return on Ad Spend" },
      { metric: "90 days", label: "Campaign Duration" },
    ],
    services: ["Meta Advertising", "Appointment Setting"],
    color: "#7B2FFF",
  },
  {
    id: "ecom-performance",
    company: "D2C E-Commerce Brand",
    industry: "E-Commerce",
    challenge: "Unprofitable Meta campaigns with poor creative performance.",
    solution: "Rebuilt campaign structure, creative strategy, and attribution model.",
    results: [
      { metric: "8.2x", label: "Return on Ad Spend" },
      { metric: "61%", label: "Lower CPM" },
      { metric: "4x", label: "Revenue Growth" },
    ],
    services: ["Performance Marketing", "Media Buying"],
    color: "#00B4D8",
  },
  {
    id: "home-improvement-bpo",
    company: "Home Improvement Franchise",
    industry: "Home Improvement",
    challenge: "High operational costs and inconsistent lead quality across locations.",
    solution: "Implemented a centralized BPO call center with lead gen and appointment setting.",
    results: [
      { metric: "55%", label: "Cost Reduction" },
      { metric: "200%", label: "More Appointments" },
      { metric: "92%", label: "Show Rate" },
    ],
    services: ["BPO", "Lead Generation", "Appointment Setting"],
    color: "#00D4FF",
  },
  {
    id: "finance-seo",
    company: "Financial Advisory Firm",
    industry: "Finance",
    challenge: "Near-zero organic visibility with high paid acquisition costs.",
    solution: "12-month comprehensive SEO and content authority campaign.",
    results: [
      { metric: "1,200%", label: "Organic Traffic Growth" },
      { metric: "#1", label: "Google Rankings (12 terms)" },
      { metric: "67%", label: "Reduction in Paid CAC" },
    ],
    services: ["SEO Services", "Digital Marketing"],
    color: "#7B2FFF",
  },
  {
    id: "startup-web",
    company: "B2B SaaS Startup",
    industry: "Technology / SaaS",
    challenge: "Legacy website with poor conversion rate and 6s+ page load time.",
    solution: "Complete redesign and rebuild in Next.js with CRO-focused architecture.",
    results: [
      { metric: "312%", label: "Conversion Rate Lift" },
      { metric: "98", label: "Core Web Vitals Score" },
      { metric: "0.8s", label: "LCP Performance" },
    ],
    services: ["Web Development", "UI/UX Design"],
    color: "#00B4D8",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="min-h-[50vh] flex items-center relative"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0, 212, 255, 0.07) 0%, transparent 60%), #04070F" }}>
        <div className="container mx-auto py-20">
          <nav className="flex items-center gap-2 text-sm text-white/30 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-cyan-400">Case Studies</span>
          </nav>
          <p className="trust-badge mb-6">Proven Results</p>
          <h1 className="text-[clamp(3rem,7vw,6rem)] font-heading font-black tracking-tighter leading-[0.9] mb-6">
            Numbers that<br />
            <span style={{ background: "linear-gradient(135deg, #00D4FF 0%, #7B2FFF 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              don&apos;t lie.
            </span>
          </h1>
          <p className="text-lg text-white/40 max-w-xl leading-relaxed">
            Real clients. Real budgets. Real outcomes. Every number you see below is accountable.
          </p>
        </div>
      </section>

      <section className="section-padding border-t border-white/5">
        <div className="container mx-auto">
          <div className="flex flex-col gap-10">
            {caseStudies.map((cs, i) => (
              <div key={cs.id}
                className="glass rounded-3xl p-8 md:p-12 border border-white/5 hover:border-white/10 transition-all duration-300 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left */}
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold tracking-widest uppercase text-white/30">{cs.industry}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <div className="flex flex-wrap gap-1">
                      {cs.services.map((s) => (
                        <span key={s} className="text-xs font-bold border border-white/8 text-white/30 px-2 py-0.5 rounded-full">{s}</span>
                      ))}
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-heading font-black mb-4">{cs.company}</h2>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="text-xs font-bold tracking-widest uppercase text-white/30 mb-2">Challenge</h3>
                      <p className="text-sm text-white/50 leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold tracking-widest uppercase text-white/30 mb-2">Solution</h3>
                      <p className="text-sm text-white/50 leading-relaxed">{cs.solution}</p>
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-xs font-bold tracking-widest uppercase text-white/30">Results</h3>
                  {cs.results.map((r) => (
                    <div key={r.label} className="flex items-end gap-3">
                      <span className="text-3xl font-heading font-black" style={{ color: cs.color }}>
                        {r.metric}
                      </span>
                      <span className="text-sm text-white/40 pb-1">{r.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-white/5">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-heading font-black tracking-tighter mb-4">Your results next.</h2>
          <p className="text-white/40 mb-8">Join 200+ businesses that have scaled with {SITE_CONFIG.brand}.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 font-bold text-white rounded-2xl hover:scale-105 transition-transform"
            style={{ background: "linear-gradient(135deg, #00D4FF 0%, #7B2FFF 100%)" }}>
            Get Free Consultation <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
