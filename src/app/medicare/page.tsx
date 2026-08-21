import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowUpRight, 
  CheckCircle2, 
  ShieldCheck, 
  Users, 
  PhoneCall, 
  Server, 
  FileCheck2, 
  Globe2, 
  Building2, 
  TrendingUp, 
  HelpCircle,
  Clock,
  Layers,
  BarChart3,
  Lock,
  Headphones,
  Check,
  ChevronRight,
  Activity,
  Award
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";
import { CustomCursorTarget } from "@/components/ui/custom-cursor";
import { HealthcareLeadForm } from "@/components/ui/medicare-lead-form";

export const metadata: Metadata = {
  title: "Healthcare BPO & Live Transfer Contact Center Solutions | TechWhales",
  description: "US-based Healthcare BPO and live-transfer contact-center operations with scalable dedicated teams, TCPA/DNC adherence, QA, reporting and controlled pilot programs.",
  keywords: [
    "Healthcare BPO",
    "Healthcare Live Transfers",
    "Healthcare BPO Services",
    "Healthcare Contact Center Outsourcing",
    "Insurance Warm Transfers",
    "US Healthcare Call Center",
    "TCPA Compliant Contact Center",
    "BPO Operations Los Angeles",
    "TechWhales BPO",
  ],
  other: {
    "geo.region": "US-CA",
    "geo.placename": "Los Angeles, California",
    "geo.position": "34.0482;-118.2612",
    "ICBM": "34.0482, -118.2612",
  },
  alternates: {
    canonical: "https://techwhales.net/medicare",
  },
  openGraph: {
    title: "Healthcare BPO & Live Transfer Contact Center Solutions | TechWhales",
    description: "US-based Healthcare BPO and live-transfer contact-center operations with scalable dedicated teams, TCPA/DNC adherence, QA, reporting and controlled pilot programs.",
    url: "https://techwhales.net/medicare",
    siteName: "TechWhales",
    type: "website",
    images: [{ url: "https://techwhales.net/logo-techwhales.png", width: 1200, height: 630 }],
  },
};

const healthcareFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you provide licensed healthcare insurance agents?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TechWhales operates strictly as a contact-center and BPO operational partner. Where a campaign involves regulated insurance sales or enrollment, the contracting US receiving organization is responsible for providing appropriately licensed agents and managing the sales process.",
      },
    },
    {
      "@type": "Question",
      name: "Can you provide live healthcare transfers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We configure live or warm-transfer workflows according to the contracting partner's campaign parameters, approved scripts, TCPA consent procedures, and receiving-agent capacity.",
      },
    },
    {
      "@type": "Question",
      name: "How do you maintain TCPA & US compliance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our contact center teams strictly adhere to partner-approved scripts, TCPA consent verification protocols, Do-Not-Call (DNC) list scrubs, call recording, and rigorous internal QA audits.",
      },
    },
    {
      "@type": "Question",
      name: "Can you start with a small team?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our recommended approach is a controlled pilot, typically beginning with a small 5-agent dedicated team before scaling.",
      },
    },
    {
      "@type": "Question",
      name: "Where are your operations located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We operate through a US-based business structure (United Tech LLC, Los Angeles, CA) with scalable offshore delivery operations.",
      },
    },
  ],
};

export default function HealthcareBPOPage() {
  return (
    <div className="bg-[#08080a] text-white min-h-screen selection:bg-red-600 selection:text-white relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(healthcareFaqJsonLd) }}
      />
      
      {/* ============================================================================
         1. HERO SECTION WITH ENTERPRISE IMAGE
         ============================================================================ */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden border-b border-white/10">
        {/* Ambient Glowing Orbs */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-600/15 blur-[150px] pointer-events-none rounded-full" />
        
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/50 mb-8">
            <Link href="/" className="hover:text-red-500 transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/services" className="hover:text-red-500 transition-colors">Services</Link>
            <ChevronRight size={12} />
            <span className="text-white font-black">Healthcare BPO</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-xs font-bold uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                B2B Healthcare Operations & TCPA Adherence
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-heading font-black leading-[1.03] tracking-tighter uppercase mb-6 text-white">
                Healthcare Contact Center & <br />
                <span className="text-transparent relative" style={{ WebkitTextStroke: "1.5px #fff" }}>
                  Live Transfer Operations
                </span>
              </h1>

              <p className="text-red-500 text-sm sm:text-base font-bold uppercase tracking-wider mb-4">
                US-based contracting. Dedicated offshore delivery. Scalable contact-center capacity for healthcare & insurance organizations.
              </p>

              <p className="text-white/70 text-base leading-relaxed mb-8">
                TechWhales provides dedicated contact-center and live-transfer operations for US businesses through a US-based management structure and scalable offshore delivery teams. Launch with a controlled pilot and scale based on validated performance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center mb-10">
                <CustomCursorTarget>
                  <a 
                    href="#pilot-form"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white bg-red-600 rounded-full hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto shadow-lg shadow-red-600/30"
                  >
                    Request a 5-Agent Pilot <ArrowUpRight size={16} />
                  </a>
                </CustomCursorTarget>

                <a 
                  href="#pilot-form"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white border border-white/20 rounded-full hover:bg-white/10 transition-all w-full sm:w-auto"
                >
                  Talk to Our Operations Team
                </a>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative h-[380px] sm:h-[450px] lg:h-[520px] rounded-3xl overflow-hidden group shadow-2xl border border-white/15">
              <Image 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop" 
                alt="Healthcare Contact Center Operations Room" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-black/30 to-transparent" />
              
              <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-[#08080a]/80 backdrop-blur-md border border-white/15 text-[0.7rem] font-bold uppercase tracking-wider text-white flex items-center gap-2">
                <Activity size={14} className="text-red-500" />
                Live Campaign Monitoring
              </div>

              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#08080a]/90 backdrop-blur-md border border-white/15">
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck size={16} className="text-red-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-white">US Management Structure</span>
                </div>
                <p className="text-xs text-white/60">Dedicated supervisor oversight & rigorous QA protocol enforcement.</p>
              </div>
            </div>
          </div>

          {/* TRUST STRIP */}
          <div className="pt-10 mt-12 border-t border-white/10">
            <div className="flex flex-wrap items-center justify-between gap-y-3 gap-x-6 text-[0.7rem] sm:text-xs font-bold uppercase tracking-wider text-white/60">
              <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-red-500" /> US-Based Management</span>
              <span className="text-white/20 hidden md:inline">•</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-red-500" /> Dedicated Teams</span>
              <span className="text-white/20 hidden md:inline">•</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-red-500" /> Live Transfer Operations</span>
              <span className="text-white/20 hidden md:inline">•</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-red-500" /> Quality Assurance</span>
              <span className="text-white/20 hidden md:inline">•</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-red-500" /> Real-Time Reporting</span>
              <span className="text-white/20 hidden md:inline">•</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-red-500" /> Scalable Capacity</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================================
         2. WHY TECHWHALES SECTION
         ============================================================================ */}
      <section className="py-20 md:py-28 bg-[#0c0c0e] border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-widest text-red-500 font-bold block mb-3">Enterprise BPO Operational Strength</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tighter uppercase text-white">
              Built for Performance-Critical Contact Operations
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#121216] p-8 rounded-3xl border border-white/10 hover:border-red-500/40 transition-all group">
              <div className="w-12 h-12 bg-red-600/10 rounded-2xl flex items-center justify-center mb-6 border border-red-500/20 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all">
                <Building2 size={22} />
              </div>
              <h3 className="font-heading font-black text-xl text-white uppercase mb-3">US-Based Business Structure</h3>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                Contract and communicate through our US business structure with dedicated operational management.
              </p>
            </div>

            <div className="bg-[#121216] p-8 rounded-3xl border border-white/10 hover:border-red-500/40 transition-all group">
              <div className="w-12 h-12 bg-red-600/10 rounded-2xl flex items-center justify-center mb-6 border border-red-500/20 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all">
                <Users size={22} />
              </div>
              <h3 className="font-heading font-black text-xl text-white uppercase mb-3">Dedicated Contact-Center Teams</h3>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                Deploy dedicated agents, supervisors, QA personnel and campaign-specific workflows.
              </p>
            </div>

            <div className="bg-[#121216] p-8 rounded-3xl border border-white/10 hover:border-red-500/40 transition-all group">
              <div className="w-12 h-12 bg-red-600/10 rounded-2xl flex items-center justify-center mb-6 border border-red-500/20 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all">
                <PhoneCall size={22} />
              </div>
              <h3 className="font-heading font-black text-xl text-white uppercase mb-3">Live Transfer Capability</h3>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                Designed to support controlled inbound, outbound and warm-transfer workflows based on partner requirements.
              </p>
            </div>

            <div className="bg-[#121216] p-8 rounded-3xl border border-white/10 hover:border-red-500/40 transition-all group">
              <div className="w-12 h-12 bg-red-600/10 rounded-2xl flex items-center justify-center mb-6 border border-red-500/20 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all">
                <ShieldCheck size={22} />
              </div>
              <h3 className="font-heading font-black text-xl text-white uppercase mb-3">Quality Assurance</h3>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                Structured QA processes, call monitoring and performance reporting help maintain consistent campaign standards.
              </p>
            </div>

            <div className="bg-[#121216] p-8 rounded-3xl border border-white/10 hover:border-red-500/40 transition-all group">
              <div className="w-12 h-12 bg-red-600/10 rounded-2xl flex items-center justify-center mb-6 border border-red-500/20 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all">
                <TrendingUp size={22} />
              </div>
              <h3 className="font-heading font-black text-xl text-white uppercase mb-3">Scalable Capacity</h3>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                Start with a small pilot and expand toward larger dedicated teams as campaign performance is validated.
              </p>
            </div>

            <div className="bg-[#121216] p-8 rounded-3xl border border-white/10 hover:border-red-500/40 transition-all group">
              <div className="w-12 h-12 bg-red-600/10 rounded-2xl flex items-center justify-center mb-6 border border-red-500/20 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all">
                <BarChart3 size={22} />
              </div>
              <h3 className="font-heading font-black text-xl text-white uppercase mb-3">Real-Time Reporting</h3>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                Track activity, transfers, connection metrics, quality results and operational performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================================
         3. HOW THE LIVE TRANSFER MODEL WORKS SECTION
         ============================================================================ */}
      <section className="py-20 md:py-28 bg-[#08080a] border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-widest text-red-500 font-bold block mb-3">End-to-End Campaign Workflow</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tighter uppercase text-white">
              How Our Live Transfer Model Works
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <div className="bg-[#121216] p-8 rounded-3xl border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-500 block mb-3">STEP 01</span>
                <h3 className="font-heading font-black text-lg uppercase text-white mb-2">Consumer Interaction</h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                  Consumer engages through the approved campaign source and compliant workflow.
                </p>
              </div>
            </div>

            <div className="bg-[#121216] p-8 rounded-3xl border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-500 block mb-3">STEP 02</span>
                <h3 className="font-heading font-black text-lg uppercase text-white mb-2">Initial Qualification</h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                  Contact-center agents follow the contracting partner&apos;s approved qualification process and script rules.
                </p>
              </div>
            </div>

            <div className="bg-[#121216] p-8 rounded-3xl border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-500 block mb-3">STEP 03</span>
                <h3 className="font-heading font-black text-lg uppercase text-white mb-2">Consent & Verification</h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                  Required TCPA consent, disclosures and campaign-specific verification are handled according to the approved workflow.
                </p>
              </div>
            </div>

            <div className="bg-[#121216] p-8 rounded-3xl border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-500 block mb-3">STEP 04</span>
                <h3 className="font-heading font-black text-lg uppercase text-white mb-2">Warm Transfer</h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                  The qualified consumer is connected to the receiving organization&apos;s designated agent or queue.
                </p>
              </div>
            </div>

            <div className="bg-[#121216] p-8 rounded-3xl border border-white/10 flex flex-col justify-between border-l-4 border-l-red-600">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-500 block mb-3">STEP 05</span>
                <h3 className="font-heading font-black text-lg uppercase text-white mb-2">Licensed Agent</h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                  The receiving organization&apos;s appropriately licensed agent handles the regulated insurance or healthcare discussion.
                </p>
              </div>
            </div>

            <div className="bg-[#121216] p-8 rounded-3xl border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-500 block mb-3">STEP 06</span>
                <h3 className="font-heading font-black text-lg uppercase text-white mb-2">Reporting</h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                  Campaign activity and transfer outcomes are tracked and reported to the contracting partner in real time.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 max-w-4xl text-xs text-white/60 leading-relaxed">
            <span className="font-bold text-white uppercase block mb-1">Operational Notice & US Compliance Disclaimer:</span>
            Final campaign workflows, scripts, TCPA consent requirements, transfer criteria, data handling procedures and agent responsibilities are established by agreement with the contracting partner and applicable federal/state regulatory requirements.
          </div>
        </div>
      </section>

      {/* ============================================================================
         4. WHAT WE PROVIDE SECTION
         ============================================================================ */}
      <section className="py-20 md:py-28 bg-[#0c0c0e] border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-widest text-red-500 font-bold block mb-3">Modular Operations</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tighter uppercase text-white">
              Contact-Center Capacity Built Around Your Campaign
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
            {[
              "Live Transfers",
              "Warm Transfers",
              "Inbound Qualification",
              "Appointment Setting",
              "Customer Support",
              "Lead Qualification",
              "Dedicated Agents",
              "QA & Monitoring",
              "Campaign Reporting",
              "CRM Integration",
              "Call Routing",
              "Workforce Scaling"
            ].map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#121216] border border-white/10 flex items-center gap-3">
                <CheckCircle2 size={16} className="text-red-500 flex-shrink-0" />
                <span className="font-bold text-xs sm:text-sm uppercase tracking-wide text-white">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-white/60 italic max-w-2xl">
            Campaign capabilities are configured according to the contracting organization&apos;s approved workflow, technology requirements and compliance procedures.
          </p>
        </div>
      </section>

      {/* ============================================================================
         5. 5-AGENT PILOT SECTION WITH VISUAL BREAK
         ============================================================================ */}
      <section className="py-20 md:py-28 bg-[#08080a] border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs uppercase tracking-widest text-red-500 font-bold block mb-3">Risk-Mitigated Onboarding</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tighter uppercase text-white mb-6">
                Start With a Controlled 5-Agent Pilot
              </h2>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-8">
                Instead of committing to a large operation immediately, partners can begin with a controlled pilot designed to validate call quality, transfer performance, operational fit and reporting.
              </p>

              {/* 4-Step Visual */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-[#121216] border border-white/10">
                  <span className="text-xs font-mono text-red-500 font-bold block mb-1">01</span>
                  <span className="font-heading font-black text-xs uppercase text-white">Define Campaign</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#121216] border border-white/10">
                  <span className="text-xs font-mono text-red-500 font-bold block mb-1">02</span>
                  <span className="font-heading font-black text-xs uppercase text-white">Configure Team</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#121216] border border-white/10">
                  <span className="text-xs font-mono text-red-500 font-bold block mb-1">03</span>
                  <span className="font-heading font-black text-xs uppercase text-white">Launch Pilot</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#121216] border border-white/10 border-red-500/40">
                  <span className="text-xs font-mono text-red-500 font-bold block mb-1">04</span>
                  <span className="font-heading font-black text-xs uppercase text-white">Scale What Works</span>
                </div>
              </div>

              <a 
                href="#pilot-form"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white bg-red-600 rounded-full hover:bg-white hover:text-black transition-all shadow-lg shadow-red-600/30"
              >
                Request a Pilot <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="lg:col-span-6 bg-[#121216] p-8 rounded-3xl border border-white/10">
              <h3 className="font-heading font-black text-xl uppercase text-white mb-6 flex items-center gap-2">
                <Check size={20} className="text-red-500" />
                Pilot Program Deliverables
              </h3>
              <div className="space-y-4 text-xs sm:text-sm text-white/80">
                {[
                  "Dedicated pilot team",
                  "Campaign-specific training",
                  "Approved scripts/workflows",
                  "QA monitoring",
                  "Call recording where required",
                  "Daily/weekly reporting",
                  "Performance review",
                  "Scalable staffing"
                ].map((bullet, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 size={16} className="text-red-500 flex-shrink-0" />
                    <span className="font-bold text-xs uppercase tracking-wide">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================================
         6. OPERATIONAL INFRASTRUCTURE SECTION
         ============================================================================ */}
      <section className="py-20 md:py-28 bg-[#0c0c0e] border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-widest text-red-500 font-bold block mb-3">Enterprise Capacity</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tighter uppercase text-white">
              Operational Infrastructure
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#121216] p-8 rounded-3xl border border-white/10">
              <span className="text-xs uppercase font-bold text-red-500 tracking-wider block mb-2">CONTACT CENTER</span>
              <h3 className="text-2xl font-heading font-black text-white uppercase mb-2">20+ Seat Scalability</h3>
              <p className="text-white/60 text-xs leading-relaxed">Dedicated seat capacity ready to scale based on campaign requirements.</p>
            </div>

            <div className="bg-[#121216] p-8 rounded-3xl border border-white/10">
              <span className="text-xs uppercase font-bold text-red-500 tracking-wider block mb-2">TEAM STRUCTURE</span>
              <h3 className="text-2xl font-heading font-black text-white uppercase mb-2">Agents + Supervisors + QA</h3>
              <p className="text-white/60 text-xs leading-relaxed">Complete management layer overseeing quality, attendance, and SLA metrics.</p>
            </div>

            <div className="bg-[#121216] p-8 rounded-3xl border border-white/10">
              <span className="text-xs uppercase font-bold text-red-500 tracking-wider block mb-2">TECHNOLOGY</span>
              <h3 className="text-2xl font-heading font-black text-white uppercase mb-2">Dialer / CRM / Call Routing</h3>
              <p className="text-white/60 text-xs leading-relaxed">Flexible integration with your preferred telephony and CRM stack.</p>
            </div>

            <div className="bg-[#121216] p-8 rounded-3xl border border-white/10">
              <span className="text-xs uppercase font-bold text-red-500 tracking-wider block mb-2">QUALITY</span>
              <h3 className="text-2xl font-heading font-black text-white uppercase mb-2">Call Monitoring + QA Scoring</h3>
              <p className="text-white/60 text-xs leading-relaxed">Regular call scorecards and compliance evaluation routines.</p>
            </div>

            <div className="bg-[#121216] p-8 rounded-3xl border border-white/10">
              <span className="text-xs uppercase font-bold text-red-500 tracking-wider block mb-2">REPORTING</span>
              <h3 className="text-2xl font-heading font-black text-white uppercase mb-2">Real-Time Campaign Metrics</h3>
              <p className="text-white/60 text-xs leading-relaxed">Transparent dashboards tracking transfer volume, talk time, and conversion stats.</p>
            </div>

            <div className="bg-[#121216] p-8 rounded-3xl border border-white/10">
              <span className="text-xs uppercase font-bold text-red-500 tracking-wider block mb-2">SECURITY</span>
              <h3 className="text-2xl font-heading font-black text-white uppercase mb-2">Controlled Access & Data Handling</h3>
              <p className="text-white/60 text-xs leading-relaxed">Strict data-handling procedures and access controls tailored to campaign requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================================
         7. COMPLIANCE-FIRST OPERATIONS SECTION
         ============================================================================ */}
      <section className="py-20 md:py-28 bg-[#08080a] border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-widest text-red-500 font-bold block mb-3">Disciplined Execution</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tighter uppercase text-white mb-4">
              Compliance-First Operations
            </h2>
            <p className="text-white/70 text-base leading-relaxed mb-4">
              Healthcare campaigns require disciplined workflows, documented procedures and clear responsibilities.
            </p>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
              Our contact-center operations are configured around the contracting partner&apos;s approved scripts, consent procedures, data-handling requirements, call-recording requirements, quality standards and escalation procedures.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              { title: "Approved Campaign Scripts", desc: "Agents adhere strictly to partner-provided and approved scripts." },
              { title: "TCPA Consent Verification", desc: "Workflows record consumer consent according to US TCPA rules." },
              { title: "Call Recording Audit", desc: "Comprehensive audio recording for quality auditing where required." },
              { title: "Quality Assurance", desc: "Internal QA evaluation scorecards monitoring call interactions." },
              { title: "Controlled Data Access", desc: "Role-based system access protecting campaign data integrity." },
              { title: "Audit-Friendly Reporting", desc: "Clear activity logs and metrics available for partner review." }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#121216] p-7 rounded-3xl border border-white/10">
                <h3 className="font-heading font-black text-base uppercase text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-xs text-white/60 leading-relaxed max-w-4xl">
            <span className="font-bold text-white uppercase block mb-1">Notice on Compliance Frameworks:</span>
            Compliance requirements vary by campaign, state, organization and business model. Final campaign procedures are established with the contracting partner and reviewed according to applicable US requirements.
          </div>
        </div>
      </section>

      {/* ============================================================================
         8. US MANAGEMENT + GLOBAL DELIVERY SECTION WITH IMAGE CARDS
         ============================================================================ */}
      <section className="py-20 md:py-28 bg-[#0c0c0e] border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-widest text-red-500 font-bold block mb-3">Operating Model</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tighter uppercase text-white mb-4">
              US-Based Management. Global Delivery.
            </h2>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              Our operating model combines US-facing business management with scalable offshore delivery, allowing partners to access dedicated contact-center capacity while maintaining a clear US commercial relationship.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* LEFT - UNITED STATES */}
            <div className="bg-[#121216] p-8 rounded-3xl border border-white/10 relative overflow-hidden flex flex-col justify-between group">
              <div>
                <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-6">
                  <Image 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                    alt="US Headquarters Management" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-[#08080a]/80 border border-white/15 text-[0.7rem] font-bold text-white">
                    <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                    UNITED STATES HQ
                  </div>
                </div>

                <h3 className="text-2xl font-heading font-black text-white uppercase mb-6">US Business & Client Management</h3>
                <div className="space-y-3 text-xs sm:text-sm text-white/80">
                  {[
                    "Contracting & Legal Agreements",
                    "Client Communication & Support",
                    "Account Management",
                    "Business Development",
                    "Operational Oversight"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="text-red-500 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT - PAKISTAN */}
            <div className="bg-[#121216] p-8 rounded-3xl border border-white/10 relative overflow-hidden flex flex-col justify-between group">
              <div>
                <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-6">
                  <Image 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                    alt="Offshore Contact Center Floor" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-[#08080a]/80 border border-white/15 text-[0.7rem] font-bold text-white">
                    <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                    OFFSHORE DELIVERY CENTER
                  </div>
                </div>

                <h3 className="text-2xl font-heading font-black text-white uppercase mb-6">Dedicated Delivery Operations</h3>
                <div className="space-y-3 text-xs sm:text-sm text-white/80">
                  {[
                    "Contact-center agents",
                    "Supervisors & Team Leads",
                    "Quality Assurance (QA) Auditors",
                    "Workforce Management",
                    "Campaign Operations"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="text-red-500 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================================
         9. WHO WE WORK WITH SECTION
         ============================================================================ */}
      <section className="py-20 md:py-28 bg-[#08080a] border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-widest text-red-500 font-bold block mb-3">Partner Audience</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tighter uppercase text-white">
              Built for Healthcare & Insurance Organizations
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Healthcare Agencies",
              "Insurance Marketers",
              "Licensed Agencies",
              "Insurance Organizations",
              "Lead Buyers",
              "Healthcare Contact Centers",
              "Independent Agent Groups",
              "High-Volume Sales Operations"
            ].map((target, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#121216] border border-white/10 text-center hover:border-red-500/40 transition-colors">
                <span className="font-heading font-black text-xs sm:text-sm uppercase tracking-wider text-white">{target}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================================
         10. PARTNER FIT SECTION
         ============================================================================ */}
      <section className="py-20 md:py-28 bg-[#0c0c0e] border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-widest text-red-500 font-bold block mb-3">Clear Responsibilities</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tighter uppercase text-white mb-4">
              Looking for a Flexible Contact-Center Partner?
            </h2>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              We are best suited for organizations that already have an established sales operation, licensed agents and a defined campaign workflow, but require additional contact-center capacity, qualification support or live-transfer volume.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#121216] p-8 rounded-3xl border border-white/10">
              <span className="text-xs font-bold uppercase tracking-widest text-red-500 block mb-4">YOU PROVIDE:</span>
              <div className="space-y-3 text-xs sm:text-sm text-white/80">
                {[
                  "Approved campaign & traffic sources",
                  "Specific qualification & transfer criteria",
                  "Approved scripts & disclosure workflows",
                  "Licensed receiving insurance agents",
                  "Campaign compliance requirements"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-red-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#121216] p-8 rounded-3xl border border-white/10 border-red-500/30">
              <span className="text-xs font-bold uppercase tracking-widest text-red-500 block mb-4">TECHWHALES PROVIDES:</span>
              <div className="space-y-3 text-xs sm:text-sm text-white/80">
                {[
                  "Dedicated contact-center team",
                  "Turnkey contact-center operations",
                  "Agent training on your workflow",
                  "Structured QA monitoring",
                  "Call handling & initial qualification",
                  "Transfer infrastructure setup",
                  "Real-time campaign reporting",
                  "Scalable staffing capacity"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-red-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================================
         11. WHY START SMALL SECTION
         ============================================================================ */}
      <section className="py-20 md:py-28 bg-[#08080a] border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-widest text-red-500 font-bold block mb-3">Controlled Scaling</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tighter uppercase text-white mb-4">
              Prove the Model Before You Scale
            </h2>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              Every campaign has different economics, transfer criteria and operational requirements. Our pilot-first model lets partners validate performance before expanding capacity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#121216] p-8 rounded-3xl border border-white/10 text-center">
              <span className="text-3xl font-heading font-black text-red-500 block mb-2">5 AGENTS</span>
              <span className="text-sm font-bold uppercase tracking-widest text-white block mb-2">Stage 1: Pilot</span>
              <p className="text-xs text-white/60">Controlled initial launch validating script adherence, connection rates, and transfer quality.</p>
            </div>

            <div className="bg-[#121216] p-8 rounded-3xl border border-white/10 text-center">
              <span className="text-3xl font-heading font-black text-red-500 block mb-2">10 AGENTS</span>
              <span className="text-sm font-bold uppercase tracking-widest text-white block mb-2">Stage 2: Scale</span>
              <p className="text-xs text-white/60">Expanding team headcount after establishing consistent daily transfer performance.</p>
            </div>

            <div className="bg-[#121216] p-8 rounded-3xl border border-white/10 text-center border-red-500/40">
              <span className="text-3xl font-heading font-black text-red-500 block mb-2">20+ AGENTS</span>
              <span className="text-sm font-bold uppercase tracking-widest text-white block mb-2">Stage 3: Dedicated Operation</span>
              <p className="text-xs text-white/60">Full-scale contact center floor with multi-shift coverage and dedicated supervisors.</p>
            </div>
          </div>

          <p className="text-xs text-white/60 italic text-center">
            Final staffing and volume are determined by campaign requirements and agreed service levels.
          </p>
        </div>
      </section>

      {/* ============================================================================
         12. DEDICATED B2B LEAD FORM SECTION
         ============================================================================ */}
      <section id="pilot-form" className="py-20 md:py-32 bg-[#04070f] relative overflow-hidden border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-red-500 font-bold block mb-2">Start a Partnership</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tighter uppercase mb-4 text-white">
              Request a Healthcare BPO Pilot
            </h2>
            <p className="text-white/60 text-xs sm:text-base max-w-xl mx-auto">
              Discuss your campaign requirements, transfer model, and receiving agent capacity with our operations team.
            </p>
          </div>

          <HealthcareLeadForm />
        </div>
      </section>

      {/* ============================================================================
         13. HEALTHCARE BPO FAQ SECTION
         ============================================================================ */}
      <section className="py-20 md:py-28 bg-[#08080a] border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-red-500 font-bold block mb-3">Partner FAQ</span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black tracking-tighter uppercase text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Do you provide licensed healthcare insurance agents?",
                a: "TechWhales operates strictly as a contact-center and BPO operational partner. Where a campaign involves regulated insurance sales or enrollment, the contracting US receiving organization is responsible for providing appropriately licensed agents and managing the sales process."
              },
              {
                q: "Can you provide live healthcare transfers?",
                a: "We configure live or warm-transfer workflows according to the contracting partner's campaign parameters, approved scripts, TCPA consent procedures, and receiving-agent capacity."
              },
              {
                q: "How do you ensure TCPA & US regulatory compliance?",
                a: "Our contact center operations strictly enforce partner-approved scripts, TCPA consent documentation, Do-Not-Call (DNC) list scrubs, call recording, and rigorous internal QA audits."
              },
              {
                q: "Can you start with a small team?",
                a: "Yes. Our recommended approach is a controlled pilot, typically beginning with a small dedicated 5-agent team before scaling."
              },
              {
                q: "Can you scale to 20+ agents?",
                a: "Yes. Staffing can be expanded based on campaign requirements, training, performance and receiving-agent capacity."
              },
              {
                q: "Where are your operations located?",
                a: "We operate through a US-based business structure (United Tech LLC, Los Angeles, CA) with scalable offshore delivery operations."
              },
              {
                q: "Do you provide call recordings?",
                a: "Call recording capabilities can be configured according to campaign requirements, applicable rules and the contracting organization's policies."
              },
              {
                q: "Can you work with our CRM?",
                a: "We evaluate CRM, dialer, routing and reporting requirements during campaign onboarding."
              }
            ].map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#121216] border border-white/10">
                <h3 className="font-heading font-black text-base sm:text-lg uppercase text-white mb-3 flex items-start gap-3">
                  <HelpCircle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed pl-8">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================================
         14. FOOTER DISCLAIMER
         ============================================================================ */}
      <section className="py-12 bg-[#04070f] border-t border-white/10 text-center text-white/50 text-[0.7rem] leading-relaxed">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="uppercase tracking-wider font-bold mb-2 text-white/70">Legal & Operational Disclosure</p>
          <p>
            TechWhales provides business process outsourcing and contact-center services. Healthcare and insurance workflows are performed strictly according to the requirements and approved procedures of the contracting organization. TechWhales does not represent itself as an insurance carrier, plan sponsor, or government entity. Where regulated insurance activities are involved, appropriately licensed third parties are responsible for those activities in compliance with US state and federal laws.
          </p>
        </div>
      </section>

    </div>
  );
}
