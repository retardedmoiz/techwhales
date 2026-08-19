import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Check, ChevronRight } from "lucide-react";
import { SERVICES, SITE_CONFIG } from "@/lib/config";
import { CustomCursorTarget } from "@/components/ui/custom-cursor";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | ${SITE_CONFIG.brand}`,
    description: `${SITE_CONFIG.brand} delivers expert ${service.title} services — ${service.description}`,
  };
}

const serviceDetails: Record<string, {
  headline: string;
  subheadline: string;
  benefits: string[];
  process: { step: string; description: string }[];
  faqs: { q: string; a: string }[];
  image: string;
}> = {
  "legal-services": {
    headline: "Protecting What Matters Most.",
    subheadline: "From living trusts to family law, our network of expert attorneys handles your most critical legal needs with precision and care.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2070&auto=format&fit=crop",
    benefits: [
      "Expert representation across multiple disciplines",
      "Confidential and secure document handling",
      "Dedicated legal counsel",
      "Comprehensive case management",
    ],
    process: [
      { step: "Consult", description: "Initial confidential consultation to understand your legal needs." },
      { step: "Strategize", description: "Develop a customized legal roadmap and strategy." },
      { step: "Execute", description: "Filing, representation, and execution of legal documents." },
      { step: "Resolve", description: "Achieving the best possible legal outcome." },
    ],
    faqs: [
      { q: "What areas of law do you cover?", a: "We cover Living Trusts, Probate, Divorce, Family Law, Eviction, Small Claims, and Real Estate Law." },
    ],
  },
  "tax-services": {
    headline: "Maximum Returns. Minimum Liability.",
    subheadline: "Expert tax preparation, resolution, and estate planning for businesses and individuals across all 50 states.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2036&auto=format&fit=crop",
    benefits: [
      "Tax preparation for all 50 states",
      "Corporate, LLC, and Partnership tax expertise",
      "IRS Tax Representation & Debt Relief",
      "Penalty abatement and offer in compromise",
    ],
    process: [
      { step: "Analyze", description: "Complete review of your financial standing and past filings." },
      { step: "Plan", description: "Tax strategy development to minimize liability." },
      { step: "File", description: "Accurate and timely preparation and filing of returns." },
      { step: "Resolve", description: "Handling any IRS issues, audits, or debt resolutions." },
    ],
    faqs: [
      { q: "Do you handle back taxes?", a: "Yes, we specialize in back tax filing, delinquent tax problems, and IRS resolutions." },
    ],
  },
  "architecture-design": {
    headline: "Visualizing The Future.",
    subheadline: "Professional residential drafting, 3D staging, and photorealistic property visualizations that sell before the foundation is poured.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop",
    benefits: [
      "High-fidelity 3D interior staging",
      "Accurate residential design and drafting",
      "Realtor & property visualization packages",
      "Rapid turnaround for market readiness",
    ],
    process: [
      { step: "Concept", description: "Understanding the spatial requirements and aesthetic goals." },
      { step: "Draft", description: "Creating precise 2D blueprints and floor plans." },
      { step: "Render", description: "Developing photorealistic 3D models and staging." },
      { step: "Deliver", description: "Final high-resolution assets delivered for marketing." },
    ],
    faqs: [],
  },
  "business-process-outsourcing": {
    headline: "Enterprise BPO. Startup Agility.",
    subheadline: "Outsource your operations to a team that treats them like their own — with zero compromise on quality.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
    benefits: [
      "40–60% cost reduction vs. in-house teams",
      "Onboarding in under 2 weeks",
      "Dedicated account management",
      "SLA-backed performance guarantees",
    ],
    process: [
      { step: "Audit", description: "We map your current operations and identify inefficiencies." },
      { step: "Design", description: "We architect a scalable process tailored to your business." },
      { step: "Build", description: "We assemble your dedicated team and configure all systems." },
      { step: "Launch", description: "Go live with full monitoring and optimization from day one." },
    ],
    faqs: [
      { q: "How quickly can you onboard?", a: "Most clients are fully operational within 10–14 business days." },
      { q: "Do you offer custom SLAs?", a: "Yes — all engagements include custom SLAs tailored to your KPIs." },
    ],
  },
  "digital-marketing": {
    headline: "Full-Funnel. Full-Scale.",
    subheadline: "Integrated digital marketing strategy connecting brand awareness to bottom-line revenue — across every channel.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    benefits: [
      "Multi-channel strategy and execution",
      "Content marketing and distribution",
      "Paid, organic, and social media",
      "Analytics and attribution setup",
    ],
    process: [
      { step: "Audit", description: "Full audit of your current digital presence and channels." },
      { step: "Strategy", description: "Integrated channel strategy built around your goals." },
      { step: "Execute", description: "Campaigns launched and managed across all channels." },
      { step: "Report", description: "Transparent reporting with full attribution." },
    ],
    faqs: [],
  },
  "affiliate-marketing": {
    headline: "Partnerships That Scale.",
    subheadline: "End-to-end management of affiliate networks and publishers, tracking campaigns for maximum profitability.",
    image: "https://images.unsplash.com/photo-1552581234-26160860f376?q=80&w=2070&auto=format&fit=crop",
    benefits: [
      "Affiliate network integrations (Everflow, etc.)",
      "Publisher recruitment and vetting",
      "Commission structure optimization",
      "Fraud prevention and quality control",
    ],
    process: [
      { step: "Setup", description: "We configure your affiliate platform and tracking." },
      { step: "Recruit", description: "We recruit top-tier publishers for your offers." },
      { step: "Manage", description: "Daily management of payouts, relationships, and fraud." },
      { step: "Scale", description: "We scale performing partners and kill underperforming ones." },
    ],
    faqs: [],
  },
  "media-buying": {
    headline: "Every Dollar. Placed With Purpose.",
    subheadline: "Strategic media acquisition engineered to maximize reach, minimize waste, and deliver measurable cost-per-acquisition.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    benefits: [
      "Cross-channel media planning and placement",
      "Real-time bid optimization",
      "Audience segmentation and targeting",
      "Transparent reporting with attribution",
    ],
    process: [
      { step: "Plan", description: "We build a media plan aligned to your audience and budget." },
      { step: "Place", description: "Campaigns go live across premium inventory." },
      { step: "Optimize", description: "Daily bid management and creative rotation." },
      { step: "Report", description: "Weekly attribution reports showing true ROI." },
    ],
    faqs: [
      { q: "What platforms do you buy on?", a: "Meta, Google, YouTube, TikTok, programmatic, and premium direct placements." },
    ],
  },
  "search-monetization": {
    headline: "Unlocking Search Revenue.",
    subheadline: "Optimize domains and run high-yield search arbitrage campaigns (RSOC) using platforms like System1 and Bodis.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
    benefits: [
      "RSOC (Search Arbitrage) campaign management",
      "AFD (Ads for Domains) monetization",
      "Domain portfolio optimization",
      "Real-time reporting and bidding",
    ],
    process: [
      { step: "Analyze", description: "We analyze your domain portfolio and traffic sources." },
      { step: "Deploy", description: "We deploy optimized feeds and landing pages." },
      { step: "Acquire", description: "We drive high-intent arbitrage traffic." },
      { step: "Yield", description: "Daily optimization to maximize RPC and RPM." },
    ],
    faqs: [],
  },
  "web-development": {
    headline: "Sites That Sell.",
    subheadline: "Conversion-obsessed web development — from landing pages to full platforms — built for performance, speed, and measurable ROI.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    benefits: [
      "Next.js, React, and modern stack development",
      "Core Web Vitals optimization (90+ scores)",
      "Mobile-first responsive design",
      "SEO-ready architecture from day one",
    ],
    process: [
      { step: "Discovery", description: "We map goals, audience, and technical requirements." },
      { step: "Design", description: "Custom UI/UX designed for conversion and engagement." },
      { step: "Build", description: "Production-quality development with full QA." },
      { step: "Launch", description: "Go live with performance monitoring and ongoing support." },
    ],
    faqs: [
      { q: "What is your typical project timeline?", a: "Most projects deliver in 4–10 weeks depending on scope." },
    ],
  },
  "branding": {
    headline: "Brand Systems That Lead.",
    subheadline: "Define your company's market positioning and create beautiful identity systems that command authority.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    benefits: [
      "Brand strategy and market positioning",
      "Visual identity and logo design",
      "Brand messaging and tone of voice",
      "Comprehensive brand guidelines",
    ],
    process: [
      { step: "Discover", description: "Deep dive into your company values and market gaps." },
      { step: "Position", description: "We define your unique angle and message." },
      { step: "Design", description: "We build the visual system to match the positioning." },
      { step: "Apply", description: "Rollout across all digital and physical touchpoints." },
    ],
    faqs: [],
  },
  "human-resources": {
    headline: "Elite Talent Acquisition.",
    subheadline: "Source, onboard, and manage remote talent and dedicated teams. We handle vetting so you can focus on building.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    benefits: [
      "Global talent sourcing and vetting",
      "Remote team onboarding",
      "Payroll and compliance coordination",
      "Performance management support",
    ],
    process: [
      { step: "Profile", description: "We define the exact skills and culture fit you need." },
      { step: "Source", description: "We headhunt top candidates globally." },
      { step: "Screen", description: "Rigorous technical and cultural interviews." },
      { step: "Onboard", description: "Seamless transition into your company's workflow." },
    ],
    faqs: [],
  },
  "bookkeeping": {
    headline: "Financial Clarity.",
    subheadline: "Keep your company's financials clean, balanced, and compliant with our dedicated bookkeeping services.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    benefits: [
      "Daily transaction categorization",
      "Monthly bank reconciliations",
      "Accounts payable and receivable",
      "Clean financial reporting",
    ],
    process: [
      { step: "Audit", description: "We review and clean up your historical books." },
      { step: "Systemize", description: "We connect software like QuickBooks or Xero." },
      { step: "Manage", description: "Ongoing daily categorization and reconciliation." },
      { step: "Report", description: "Monthly delivery of P&L and Balance Sheets." },
    ],
    faqs: [],
  }
};

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  // Fallback to generic details if specific ones aren't mapped
  const details = serviceDetails[slug] || {
    headline: service.title,
    subheadline: service.description,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    benefits: ["Expert implementation", "Dedicated support", "Scalable solutions", "Data-driven results"],
    process: [
      { step: "Discovery", description: "Understanding your unique needs." },
      { step: "Strategy", description: "Developing a tailored approach." },
      { step: "Execution", description: "Implementing the solution flawlessly." },
      { step: "Optimization", description: "Refining for maximum performance." }
    ],
    faqs: []
  };

  return (
    <div className="bg-white text-black min-h-screen">
      {/* HERO SECTION */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden relative">
        <div className="container mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black/40 mb-12">
            <CustomCursorTarget>
              <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>
            </CustomCursorTarget>
            <ChevronRight size={12} />
            <CustomCursorTarget>
              <Link href="/services" className="hover:text-red-600 transition-colors">Services</Link>
            </CustomCursorTarget>
            <ChevronRight size={12} />
            <span className="text-black">{service.shortTitle}</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 lg:pr-10">
              <span className="text-xs font-bold uppercase tracking-widest text-red-600 mb-4 block">
                {service.category}
              </span>
              <h1 className="text-[2.5rem] md:text-[4rem] font-heading font-black leading-[1.1] tracking-tighter uppercase mb-6 text-black">
                {details.headline}
              </h1>
              <p className="text-black/60 text-lg leading-relaxed mb-10 max-w-xl">
                {details.subheadline}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <CustomCursorTarget>
                  <Link 
                    href="/contact"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white bg-black rounded-full hover:bg-red-600 transition-all duration-300 w-full sm:w-auto"
                  >
                    Deploy {service.shortTitle} <ArrowUpRight size={16} />
                  </Link>
                </CustomCursorTarget>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-6 relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden group shadow-2xl">
              <Image 
                src={details.image} 
                alt={service.title} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                priority
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* CORE BENEFITS */}
      <section className="py-24 bg-[#fafafa] border-y border-black/5">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-4 mb-8">
              <h2 className="text-3xl font-heading font-black tracking-tighter uppercase">The Advantage</h2>
            </div>
            {details.benefits.map((b, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-black/5 hover:border-red-600/30 transition-colors shadow-sm">
                <div className="w-10 h-10 bg-[#fafafa] rounded-full flex items-center justify-center mb-6 border border-black/5 text-red-600">
                  <Check size={18} strokeWidth={3} />
                </div>
                <p className="font-bold text-sm leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS FRAMEWORK */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter uppercase mb-4">
              Execution Framework
            </h2>
            <p className="text-black/50">Our systematic approach to delivering measurable results.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-8 left-12 right-12 h-[1px] bg-black/10 z-0" />
            
            {details.process.map((step, i) => (
              <div key={i} className="relative z-10">
                <div className="w-16 h-16 bg-white border-2 border-black rounded-full flex items-center justify-center text-xl font-heading font-black mb-6 shadow-xl">
                  {i + 1}
                </div>
                <h3 className="text-xl font-heading font-black uppercase mb-3">{step.step}</h3>
                <p className="text-sm text-black/60 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE INTAKE SURVEY */}
      <section className="py-32 bg-[#04070f] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <Image src="/abstract-growth.png" alt="Texture" fill className="object-cover grayscale mix-blend-overlay" />
        </div>
        <div className="container mx-auto relative z-10 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter uppercase mb-4 text-white">
              Client Intake Survey
            </h2>
            <p className="text-white/60 text-sm md:text-base">
              Secure priority placement for {service.title}. Complete the brief assessment below.
            </p>
          </div>

          <form className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-md shadow-2xl space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="text-[0.7rem] font-bold uppercase tracking-widest text-white/50 block mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-black/50 border border-white/10 px-5 py-4 rounded-xl text-sm text-white focus:border-red-600 focus:outline-none transition-colors"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className="text-[0.7rem] font-bold uppercase tracking-widest text-white/50 block mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-black/50 border border-white/10 px-5 py-4 rounded-xl text-sm text-white focus:border-red-600 focus:outline-none transition-colors"
                  placeholder="jane@example.com"
                />
              </div>
            </div>

            <div>
              <label className="text-[0.7rem] font-bold uppercase tracking-widest text-white/50 block mb-4">What is your primary objective?</label>
              <div className="grid grid-cols-2 gap-4">
                {["Immediate Assistance", "Consultation", "Pricing & Scoping", "Long-term Partnership"].map((opt) => (
                  <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                    <input type="radio" name="objective" className="accent-red-600 w-4 h-4 cursor-pointer" />
                    <span className="text-sm text-white/70 group-hover:text-white transition-colors">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="text-[0.7rem] font-bold uppercase tracking-widest text-white/50 block mb-2">Additional Details</label>
              <textarea 
                rows={4}
                className="w-full bg-black/50 border border-white/10 px-5 py-4 rounded-xl text-sm text-white focus:border-red-600 focus:outline-none transition-colors resize-none"
                placeholder="Briefly describe your current situation or requirements..."
              />
            </div>

            <button className="w-full py-5 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-xl hover:bg-red-600 hover:text-white transition-colors duration-300 flex items-center justify-center gap-3">
              Submit Assessment <ArrowUpRight size={18} />
            </button>
            <p className="text-center text-[0.65rem] text-white/30 font-bold uppercase tracking-wider mt-4">
              All information is securely encrypted and strictly confidential.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
