import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock, CheckCircle, Briefcase, Heart, TrendingUp, Users, Sparkles, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";
import { MultiStepForm, FormStep } from "@/components/ui/multistep-form";

export const metadata: Metadata = {
  title: `Careers & Opportunities | ${SITE_CONFIG.brand}`,
  description: `Join ${SITE_CONFIG.brand} — a premier corporate agency hiring top talent in performance marketing, BPO, software engineering, and operations. View open roles.`,
};

const openPositions = [
  { title: "Senior Paid Media Specialist", department: "Performance Marketing", type: "Full-time", location: "Remote / Global", level: "Senior" },
  { title: "BPO Operations Manager", department: "Operations", type: "Full-time", location: "Remote / Global", level: "Manager" },
  { title: "SDR Team Lead – Outbound Sales", department: "Sales", type: "Full-time", location: "Remote / Global", level: "Lead" },
  { title: "Full-Stack Developer (Next.js & Node)", department: "Technology", type: "Full-time", location: "Remote / Global", level: "Senior" },
  { title: "Meta & TikTok Ads Strategist", department: "Performance Marketing", type: "Full-time", location: "Remote / Global", level: "Mid" },
  { title: "SEO & Content Lead", department: "Marketing", type: "Full-time", location: "Remote / Global", level: "Lead" },
  { title: "UI/UX & Product Designer", department: "Technology", type: "Full-time", location: "Remote / Global", level: "Senior" },
  { title: "Tax & Financial Analyst", department: "Finance", type: "Full-time", location: "Remote / Global", level: "Mid" },
];

const benefits = [
  { icon: TrendingUp, title: "Top-Tier Compensation", description: "Above-market base salary with lucrative performance bonuses." },
  { icon: Users, title: "100% Remote Culture", description: "Work asynchronously from anywhere in the world." },
  { icon: Heart, title: "Health & Wellness Coverage", description: "Comprehensive health benefits, dental, and wellness stipends." },
  { icon: Briefcase, title: "Accelerated Career Growth", description: "Clear promotion benchmarks, continuous learning, and direct mentorship." },
  { icon: Clock, title: "Autonomous Schedule", description: "Outcome-driven environment with flexible working hours." },
  { icon: CheckCircle, title: "High Impact Work", description: "Directly influence scaling enterprises and global BPO operations." },
];

const hiringSteps = [
  { step: "01", title: "Apply Online", description: "Submit your details or complete our 4-step candidate profile form." },
  { step: "02", title: "Initial Screen", description: "A focused 20-minute discussion with HR regarding experience and expectations." },
  { step: "03", title: "Skills Assessment", description: "Practical scenario or technical interview with team leadership." },
  { step: "04", title: "Final Offer", description: "Fast, transparent decision-making with competitive offer packages." },
];

const careerFormSteps: FormStep[] = [
  { id: 1, label: "Full Name", field: "name", placeholder: "e.g. Jordan Smith", type: "text" },
  { id: 2, label: "Email Address", field: "email", placeholder: "jordan@example.com", type: "email" },
  { id: 3, label: "Target Specialty", field: "role", placeholder: "Select primary department", type: "select", options: ["Performance Marketing / Ads", "BPO & Sales Operations", "Web Development & Tech", "Design & Brand Creative", "Legal & Tax Operations"] },
  { id: 4, label: "LinkedIn or Resume Link", field: "portfolio", placeholder: "Paste link to LinkedIn or portfolio", type: "text" }
];

export default function CareersPage() {
  return (
    <div className="bg-white text-black min-h-screen">
      {/* Hero Banner */}
      <section className="bg-[#08080a] text-white pt-28 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-xs text-white/50 uppercase tracking-widest mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-red-600 font-bold">Careers</span>
            </nav>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-[0.7rem] font-bold uppercase tracking-widest text-red-600 mb-6">
              <Sparkles size={12} /> We Are Hiring Global Talent
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tighter uppercase leading-[0.95] mb-6">
              Build Your Career <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-white">
                With TechWhales.
              </span>
            </h1>
            <p className="text-white/60 text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
              Join a team of high-performing strategists, engineers, media buyers, and operational leaders. We build scalable systems that power global growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#open-positions" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-widest text-black bg-white rounded-full hover:bg-red-600 hover:text-white transition-all duration-300"
              >
                View Open Positions <ArrowUpRight size={16} />
              </a>
              <a 
                href="#apply-fast" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white border border-white/20 rounded-full hover:bg-white/5 transition-all duration-300"
              >
                Quick Application Form
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work Here - Benefits */}
      <section className="py-20 bg-[#fafafa] border-b border-black/5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-red-600 font-bold block mb-2">Culture & Perks</span>
            <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tighter uppercase">Why Build Here.</h2>
            <p className="text-black/60 text-sm mt-3">We foster an environment of high autonomy, rapid execution, and exceptional compensation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white border border-black/10 rounded-3xl p-8 hover:shadow-xl hover:border-red-600/30 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-2xl bg-red-600/10 border border-red-600/20 text-red-600 flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                  <b.icon size={22} />
                </div>
                <h3 className="font-heading font-black text-xl uppercase mb-2 text-black">{b.title}</h3>
                <p className="text-sm text-black/60 leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Grid */}
      <section id="open-positions" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-red-600 font-bold block mb-2">Active Roles</span>
              <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tighter uppercase">Open Positions.</h2>
            </div>
            <p className="text-black/50 text-sm max-w-md">
              Find your next role below or submit a general application for upcoming positions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {openPositions.map((pos, i) => (
              <div 
                key={i}
                className="bg-[#fafafa] border border-black/10 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:border-black transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className="text-[0.65rem] font-bold tracking-widest uppercase bg-red-600/10 text-red-600 px-3 py-1 rounded-full border border-red-600/20">
                      {pos.department}
                    </span>
                    <span className="text-[0.65rem] font-bold tracking-widest uppercase bg-black/5 text-black/60 px-3 py-1 rounded-full border border-black/10">
                      {pos.level}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-heading font-black uppercase text-black group-hover:text-red-600 transition-colors">
                    {pos.title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs font-semibold text-black/50 mt-2">
                    <span>{pos.type}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><MapPin size={12} /> {pos.location}</span>
                  </div>
                </div>

                <a 
                  href={`mailto:${SITE_CONFIG.contact.hr}?subject=Application: ${pos.title}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white bg-black rounded-full hover:bg-red-600 transition-colors self-start sm:self-center flex-shrink-0"
                >
                  Apply Role <ArrowUpRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-20 bg-[#08080a] text-white border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-red-600 font-bold block mb-2">Our Process</span>
            <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tighter uppercase text-white">How We Hire.</h2>
            <p className="text-white/60 text-sm mt-3">Simple, fast, and transparent process designed to respect your time.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hiringSteps.map((s) => (
              <div key={s.step} className="bg-white/5 border border-white/10 rounded-3xl p-8 relative overflow-hidden backdrop-blur-sm">
                <span className="text-6xl font-heading font-black text-white/5 absolute top-2 right-4 pointer-events-none">{s.step}</span>
                <div className="text-xl font-heading font-black text-red-600 mb-4">{s.step}</div>
                <h3 className="text-xl font-heading font-black uppercase text-white mb-2">{s.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fast Application Form Section */}
      <section id="apply-fast" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs uppercase tracking-widest text-red-600 font-bold block mb-2">Direct Application</span>
              <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tighter uppercase mb-4 text-black">
                Join Our Talent Network.
              </h2>
              <p className="text-black/60 text-sm sm:text-base leading-relaxed mb-6">
                Don&apos;t see an exact title matching your profile? We are constantly expanding our engineering, media, and BPO operations teams.
              </p>
              <div className="bg-[#fafafa] border border-black/10 rounded-2xl p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-red-600" />
                  <span className="text-xs font-bold uppercase tracking-wider text-black">Fast response within 24 business hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-red-600" />
                  <span className="text-xs font-bold uppercase tracking-wider text-black">Direct communication with HR lead</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-red-600" />
                  <span className="text-xs font-bold uppercase tracking-wider text-black">Confidential application process</span>
                </div>
              </div>
              <p className="text-xs font-semibold text-black/40 mt-6">
                Direct HR Contact: <a href={`mailto:${SITE_CONFIG.contact.hr}`} className="text-black underline">{SITE_CONFIG.contact.hr}</a>
              </p>
            </div>

            {/* Candidate Application MultiStepForm */}
            <div className="w-full flex justify-center">
              <MultiStepForm
                theme="light"
                customSteps={careerFormSteps}
                title="Candidate Application"
                subtitle="Submit your application in 4 simple steps."
                className="w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
