import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock, CheckCircle, Briefcase, Heart, TrendingUp, Users } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: `Careers | ${SITE_CONFIG.brand}`,
  description: `Join ${SITE_CONFIG.brand} — a premium digital agency hiring top talent in marketing, BPO, sales, web development, and more. See open positions.`,
};

const openPositions = [
  { title: "Senior Paid Media Specialist", department: "Performance Marketing", type: "Full-time", location: "Remote", level: "Senior" },
  { title: "BPO Operations Manager", department: "Operations", type: "Full-time", location: "Remote", level: "Manager" },
  { title: "SDR Team Lead – Outbound Sales", department: "Sales", type: "Full-time", location: "Remote", level: "Lead" },
  { title: "SEO Content Strategist", department: "Marketing", type: "Full-time", location: "Remote", level: "Mid" },
  { title: "Full-Stack Developer (Next.js)", department: "Technology", type: "Full-time", location: "Remote", level: "Senior" },
  { title: "Meta Ads Specialist", department: "Performance Marketing", type: "Full-time", location: "Remote", level: "Mid" },
  { title: "Email Marketing Strategist", department: "Marketing", type: "Full-time", location: "Remote", level: "Mid" },
  { title: "UI/UX Designer", department: "Technology", type: "Full-time", location: "Remote", level: "Senior" },
];

const benefits = [
  { icon: TrendingUp, title: "Competitive Pay", description: "Top-of-market compensation plus performance bonuses." },
  { icon: Users, title: "Remote-First", description: "Work from anywhere. We hire the best talent globally." },
  { icon: Heart, title: "Health & Wellness", description: "Comprehensive benefits including health, dental, and vision." },
  { icon: Briefcase, title: "Career Growth", description: "Clear promotion tracks, learning budgets, and mentorship." },
  { icon: Clock, title: "Flexible Hours", description: "Async-friendly culture. Own your schedule and output." },
  { icon: CheckCircle, title: "Meaningful Work", description: "Help real businesses grow. See the impact of what you build." },
];

const hiringSteps = [
  { step: "01", title: "Apply", description: "Submit your resume and a brief note about why you want to join." },
  { step: "02", title: "Screen", description: "A 20-minute call with our HR team to align on role and expectations." },
  { step: "03", title: "Interview", description: "Technical or skills interview with the hiring team." },
  { step: "04", title: "Offer", description: "Fast decisions. We move quickly and respect your time." },
];

export default function CareersPage() {
  return (
    <>
      <section className="min-h-[55vh] flex items-center relative"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0, 212, 255, 0.07) 0%, transparent 60%), #04070F" }}>
        <div className="container mx-auto py-20">
          <nav className="flex items-center gap-2 text-sm text-white/30 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-cyan-400">Careers</span>
          </nav>
          <p className="trust-badge mb-6">Join the Team</p>
          <h1 className="text-[clamp(3rem,7vw,6rem)] font-heading font-black tracking-tighter leading-[0.9] mb-6">
            Build the future<br />
            <span style={{ background: "linear-gradient(135deg, #00D4FF 0%, #7B2FFF 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              of business growth.
            </span>
          </h1>
          <p className="text-lg text-white/40 max-w-xl leading-relaxed mb-8">
            We&apos;re building a team of exceptional humans who want to do the best work of their careers while making a real impact on the businesses we serve.
          </p>
          <a href="#open-positions" className="inline-flex items-center gap-2 px-6 py-3 font-bold text-white rounded-xl hover:scale-105 transition-transform"
            style={{ background: "linear-gradient(135deg, #00D4FF 0%, #7B2FFF 100%)" }}>
            View Open Positions <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding border-t border-white/5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="trust-badge mb-4 mx-auto w-fit">Why Work Here</p>
            <h2 className="text-4xl font-heading font-black tracking-tighter">We invest in our people.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="glass glass-hover rounded-2xl p-6">
                <b.icon size={22} className="text-cyan-400 mb-3" />
                <h3 className="font-heading font-black text-base mb-1">{b.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="section-padding border-t border-white/5">
        <div className="container mx-auto">
          <div className="mb-10">
            <p className="trust-badge mb-4">Open Roles</p>
            <h2 className="text-4xl font-heading font-black tracking-tighter">Open positions.</h2>
          </div>
          <div className="flex flex-col gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
            {openPositions.map((pos, i) => (
              <div key={i}
                className="bg-[#04070F] p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-white/2 transition-colors group">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-bold tracking-widest uppercase text-white/30">{pos.department}</span>
                    <span className="text-xs border border-white/8 text-white/30 px-2 py-0.5 rounded-full">{pos.level}</span>
                  </div>
                  <h3 className="text-base font-heading font-black group-hover:text-cyan-400 transition-colors">{pos.title}</h3>
                </div>
                <div className="flex items-center gap-4 flex-shrink-0">
                  <div className="flex items-center gap-2 text-xs text-white/30">
                    <span>{pos.type}</span>
                    <span>·</span>
                    <span>{pos.location}</span>
                  </div>
                  <a href={`mailto:${SITE_CONFIG.contact.hr}?subject=Application: ${pos.title}`}
                    className="flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-cyan-400 border border-cyan-400/20 rounded-lg hover:bg-cyan-400/5 transition-all">
                    Apply <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="section-padding border-t border-white/5">
        <div className="container mx-auto">
          <div className="mb-12">
            <p className="trust-badge mb-4">How We Hire</p>
            <h2 className="text-4xl font-heading font-black tracking-tighter">Simple. Fast. Respectful.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {hiringSteps.map((step) => (
              <div key={step.step} className="glass rounded-2xl p-6 relative border border-white/5">
                <span className="text-5xl font-heading font-black text-white/5 absolute top-4 right-4">{step.step}</span>
                <div className="text-xl font-heading font-black text-cyan-400 mb-3">{step.step}</div>
                <h3 className="font-heading font-black mb-2">{step.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Upload CTA */}
      <section className="section-padding border-t border-white/5">
        <div className="container mx-auto">
          <div className="glass rounded-3xl p-10 md:p-16 text-center border border-white/5"
            style={{ background: "linear-gradient(135deg, rgba(0, 212, 255, 0.05) 0%, rgba(123, 47, 255, 0.05) 100%)" }}>
            <h2 className="text-4xl font-heading font-black tracking-tighter mb-4">
              Don&apos;t see your role?
            </h2>
            <p className="text-white/40 max-w-lg mx-auto mb-8">
              We&apos;re always looking for exceptional talent. Send your resume and we&apos;ll reach out when the right opportunity opens.
            </p>
            <a href={`mailto:${SITE_CONFIG.contact.hr}?subject=General Application`}
              className="inline-flex items-center gap-2 px-8 py-4 font-bold text-white rounded-2xl hover:scale-105 transition-transform"
              style={{ background: "linear-gradient(135deg, #00D4FF 0%, #7B2FFF 100%)" }}>
              Send Your Resume <ArrowUpRight size={16} />
            </a>
            <p className="text-sm text-white/30 mt-4">HR Contact: {SITE_CONFIG.contact.hr}</p>
          </div>
        </div>
      </section>
    </>
  );
}
