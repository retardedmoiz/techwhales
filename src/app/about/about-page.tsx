"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Target, Eye, Heart, Shield, Zap, Users } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  const values = [
    { icon: Target, title: "Precision", description: "We operate with surgical focus — strategy, execution, and measurement aligned toward a single goal: your growth." },
    { icon: Shield, title: "Integrity", description: "Transparent communication, honest metrics, and accountable outcomes. We never hide behind vanity numbers." },
    { icon: Zap, title: "Velocity", description: "Speed without sacrifice. We move fast by building systems, not cutting corners." },
    { icon: Users, title: "Partnership", description: "We embed in your team, not beside it. Your success is literally our business model." },
    { icon: Heart, title: "Excellence", description: "Good enough isn't in our vocabulary. Every deliverable is crafted to reflect a premium standard." },
    { icon: Eye, title: "Clarity", description: "Complex problems deserve simple, clear strategies. We cut through noise to reveal the path forward." },
  ];

  const leadership = [
    { name: "Chief Executive", title: "CEO & Founder", bio: "Visionary leader with 10+ years scaling digital operations globally." },
    { name: "Head of Marketing", title: "CMO", bio: "Performance marketing veteran who has managed $50M+ in ad spend." },
    { name: "Head of Technology", title: "CTO", bio: "Engineering leader building scalable web and automation systems." },
    { name: "Head of Operations", title: "COO", bio: "Operations architect streamlining BPO delivery across every vertical." },
  ];

  return (
    <>
      {/* Hero */}
      <section className="min-h-[60vh] flex items-center relative overflow-hidden"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0, 212, 255, 0.07) 0%, transparent 60%), #04070F" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "linear-gradient(rgba(0, 212, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.02) 1px, transparent 1px)", backgroundSize: "70px 70px" }} />
        <div className="container mx-auto py-20">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
            <nav className="flex items-center gap-2 text-sm text-white/30 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-cyan-400">About</span>
            </nav>
            <p className="trust-badge mb-6">About {SITE_CONFIG.brand}</p>
            <h1 className="text-[clamp(3rem,7vw,6.5rem)] font-heading font-black tracking-tighter leading-[0.9] mb-6 max-w-4xl">
              Not an agency.<br />
              <span style={{ background: "linear-gradient(135deg, #00D4FF 0%, #7B2FFF 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                A growth engine.
              </span>
            </h1>
            <p className="text-lg text-white/40 max-w-2xl leading-relaxed">
              {SITE_CONFIG.brand} was built to solve one problem: the gap between what businesses want to achieve and what their current systems can actually deliver.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="section-padding border-t border-white/5">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <p className="trust-badge mb-6">Our Story</p>
                <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter mb-6">
                  Born from the frustration of mediocre execution.
                </h2>
                <div className="space-y-4 text-white/50 leading-relaxed">
                  <p>
                    {SITE_CONFIG.legalName} was founded with a singular conviction: businesses deserve partners who are accountable for outcomes, not just activities. Too many agencies produce reports. We produce revenue.
                  </p>
                  <p>
                    Operating under the {SITE_CONFIG.brand} brand, we built a team of specialists — not generalists — who live inside the channels they manage. From media buyers with $50M in managed spend to BPO operators who understand your vertical better than most internal teams do.
                  </p>
                  <p>
                    Today, {SITE_CONFIG.brand} serves 200+ clients across 10+ industries, delivering measurable growth through a combination of elite operations, data intelligence, and technology.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { metric: "2018", label: "Founded" },
                  { metric: "200+", label: "Clients Scaled" },
                  { metric: "10+", label: "Industries" },
                  { metric: "$100M+", label: "Revenue Generated" },
                ].map((stat) => (
                  <div key={stat.label} className="glass rounded-2xl p-6">
                    <div className="text-3xl font-heading font-black text-cyan-400 mb-1">{stat.metric}</div>
                    <div className="text-sm text-white/40 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="section-padding border-t border-white/5">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-px bg-white/5 rounded-3xl overflow-hidden border border-white/5">
            <Reveal>
              <div className="bg-[#04070F] p-10 md:p-16 h-full">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ background: "rgba(0, 212, 255, 0.1)", border: "1px solid rgba(0, 212, 255, 0.15)" }}>
                  <Target size={22} className="text-cyan-400" />
                </div>
                <h2 className="text-3xl font-heading font-black mb-4">Our Mission</h2>
                <p className="text-white/50 leading-relaxed text-lg">
                  To give every business — regardless of size or industry — access to enterprise-grade marketing, technology, and operational excellence that generates measurable, compounding growth.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="bg-[#04070F] p-10 md:p-16 h-full">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ background: "rgba(123, 47, 255, 0.1)", border: "1px solid rgba(123, 47, 255, 0.15)" }}>
                  <Eye size={22} className="text-violet-400" />
                </div>
                <h2 className="text-3xl font-heading font-black mb-4">Our Vision</h2>
                <p className="text-white/50 leading-relaxed text-lg">
                  To become the world&apos;s most trusted growth partner — the firm that businesses call first when they&apos;re ready to move from good to exceptional, from local to global.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding border-t border-white/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Reveal>
              <p className="trust-badge mb-4 mx-auto w-fit">Core Values</p>
              <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter">How we operate.</h2>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, i) => (
              <Reveal key={val.title} delay={i * 0.07}>
                <div className="glass glass-hover rounded-2xl p-8">
                  <val.icon size={22} className="text-cyan-400 mb-4" />
                  <h3 className="text-lg font-heading font-black mb-2">{val.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{val.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="section-padding border-t border-white/5">
        <div className="container mx-auto">
          <div className="mb-16">
            <Reveal>
              <p className="trust-badge mb-4">Our Leadership</p>
              <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter">The team behind the results.</h2>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((person, i) => (
              <Reveal key={person.name} delay={i * 0.1}>
                <div className="glass rounded-2xl p-6 hover:border-white/10 border border-transparent transition-all">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 mb-4 flex items-center justify-center">
                    <Users size={24} className="text-cyan-400" />
                  </div>
                  <div className="text-xs font-bold tracking-widest uppercase text-cyan-400/60 mb-1">{person.title}</div>
                  <h3 className="text-base font-heading font-black mb-2">{person.name}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{person.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="section-padding border-t border-white/5">
        <div className="container mx-auto">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl p-12 md:p-20 text-center"
              style={{ background: "linear-gradient(135deg, rgba(0, 212, 255, 0.06) 0%, rgba(123, 47, 255, 0.06) 100%)", border: "1px solid rgba(0, 212, 255, 0.08)" }}>
              <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter mb-6">
                Why {SITE_CONFIG.brand}?
              </h2>
              <p className="text-white/40 max-w-2xl mx-auto mb-10 leading-relaxed text-lg">
                Because we treat your business like our own. Your KPIs become our KPIs. Your pipeline becomes our challenge. Your growth becomes our reputation.
              </p>
              <Link href="/contact" className="group inline-flex items-center gap-3 px-8 py-4 font-bold text-white rounded-2xl transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg, #00D4FF 0%, #7B2FFF 100%)" }}>
                Start the Conversation
                <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
