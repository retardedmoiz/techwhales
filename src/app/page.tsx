"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Check, Shield, TrendingUp, Users, Target, Zap, Activity } from "lucide-react";
import { SITE_CONFIG, SERVICES, PORTFOLIO, INDUSTRIES } from "@/lib/config";
import { SplineScene } from "@/components/ui/spline";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/fade-up";

/* ============================================================================
   MICRO-ANIMATION: SCROLL TEXT REVEAL
   ============================================================================ */
function ScrollTextReveal({ text }: { text: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  });

  const words = text.split(" ");
  return (
    <div ref={containerRef} className="flex flex-wrap max-w-5xl leading-[1.1] text-black">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = (i + 1) / words.length;
        const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
        return (
          <motion.span
            key={i}
            style={{ opacity }}
            className="mr-3 md:mr-4 mb-2 text-[1.8rem] md:text-[3.2rem] font-heading font-black tracking-tight uppercase"
          >
            {word}
          </motion.span>
        );
      })}
    </div>
  );
}

/* ============================================================================
   HERO SECTION
   ============================================================================ */
function Hero() {
  return (
    <section className="relative bg-white pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Card className="w-full min-h-[600px] md:h-[700px] bg-[#08080a] border-none relative overflow-hidden flex flex-col md:flex-row items-center rounded-3xl p-6 md:p-12 shadow-2xl group">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
            
            {/* Left content */}
            <div className="flex-1 relative z-10 flex flex-col justify-center text-white h-full pr-0 md:pr-8 py-8 md:py-0">
              <FadeUp delay={0.2}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-[0.7rem] font-bold uppercase tracking-wider mb-6 w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                  Elite Operations & Revenue Engine
                </div>
              </FadeUp>
              
              <FadeUp delay={0.3}>
                <h1 className="text-[2.5rem] md:text-[5rem] font-heading font-black leading-[0.9] tracking-tighter uppercase mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                  Engineer Your <br />
                  <span className="text-transparent relative" style={{ WebkitTextStroke: "1.5px #fff" }}>
                    Unfair Advantage.
                    <motion.div 
                      className="absolute -bottom-2 left-0 h-1 bg-red-600"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1, delay: 1 }}
                    />
                  </span>
                </h1>
              </FadeUp>
              
              <FadeUp delay={0.4}>
                <p className="text-neutral-400 text-sm md:text-base max-w-lg leading-relaxed mb-8">
                  Forget generic agencies. {SITE_CONFIG.brand} integrates directly into your infrastructure—architecting high-converting funnels, deploying elite outbound SDRs, and executing ruthless media buying strategies to scale your revenue.
                </p>
              </FadeUp>
              
              <FadeUp delay={0.5}>
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <Link href="/contact" className="group/btn w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-widest text-black bg-white rounded-full hover:bg-red-600 hover:text-white transition-all duration-300">
                    Deploy Growth
                    <ArrowUpRight size={16} className="group-hover/btn:rotate-45 group-hover/btn:scale-110 transition-transform duration-300" />
                  </Link>
                  <Link href="/case-studies" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white border border-white/20 rounded-full hover:bg-white/5 transition-all duration-300">
                    See The Data
                  </Link>
                </div>
              </FadeUp>
            </div>

            {/* Right content - Spline Scene */}
            <FadeUp delay={0.6} className="flex-1 w-full h-[300px] md:h-full relative min-h-[300px] z-10 opacity-90 group-hover:opacity-100 transition-opacity duration-700">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full scale-110"
              />
            </FadeUp>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================================
   TRUSTED BY MARQUEE
   ============================================================================ */
function TrustedBySection() {
  const partners = ["META", "GOOGLE", "EVERFLOW", "SYSTEM1", "BODIS", "TIKTOK"];
  return (
    <div className="bg-[#04070f] py-8 overflow-hidden border-y border-white/10 relative flex shadow-inner">
      <div className="absolute inset-0 pointer-events-none opacity-[0.15]">
        <Image src="/abstract-growth.png" alt="Texture" fill className="object-cover grayscale" />
      </div>
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#04070f] to-transparent z-10" />
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#04070f] to-transparent z-10" />
      
      <div className="animate-marquee whitespace-nowrap flex gap-24 text-2xl md:text-3xl font-heading font-black uppercase tracking-[0.2em] text-white/40">
        {partners.map((p, i) => <span key={i} className="hover:text-white transition-colors duration-300">{p}</span>)}
      </div>
      <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-24 text-2xl md:text-3xl font-heading font-black uppercase tracking-[0.2em] text-white/40 py-8" style={{ left: "100%" }}>
        {partners.map((p, i) => <span key={`dup-${i}`} className="hover:text-white transition-colors duration-300">{p}</span>)}
      </div>
    </div>
  );
}

/* ============================================================================
   ABOUT / MISSION (TEXT REVEAL)
   ============================================================================ */
function AboutSection() {
  return (
    <section className="py-20 md:py-32 bg-[#fafafa] border-y border-black/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.04]">
        <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Background Texture" fill className="object-cover grayscale" unoptimized />
      </div>
      <div className="container mx-auto relative z-10">
        <FadeUp>
          <span className="text-xs uppercase tracking-widest text-black/40 font-bold block mb-8 flex items-center gap-2">
            <Target size={14} className="text-red-600" /> The Paradigm Shift
          </span>
        </FadeUp>
        <ScrollTextReveal 
          text="We observed a broken industry: bloated agencies delivering vanity metrics while businesses bled cash. We built TechWhales to be the antidote. A surgical strike team of operators, developers, and media buyers who align directly with your P&L. We don't sell hours. We engineer compounding business growth."
        />
        <FadeUp delay={0.2} className="mt-12">
          <Link href="/about" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-black hover:text-red-600 transition-colors border-b-2 border-black hover:border-red-600 pb-1">
            Read the Full Story <ArrowUpRight size={16} />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}

/* ============================================================================
   VISUAL BREAK 1: THE TEAM / OFFICE
   ============================================================================ */
function VisualBreakOne() {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto">
        <FadeUp>
          <div className="relative w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden group">
            <Image 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
              alt="TechWhales Modern Operations Center" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-1000"
              unoptimized
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 bg-white/90 backdrop-blur-md p-6 rounded-2xl max-w-sm">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-black/60">Los Angeles HQ</span>
              </div>
              <h3 className="text-xl font-heading font-black text-black uppercase">Where Strategy Meets Execution</h3>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ============================================================================
   SELECTED SERVICES (STICKY SPLIT-SCREEN LAYOUT)
   ============================================================================ */
function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column - Sticky */}
          <div className="lg:w-1/3 lg:sticky lg:top-28 h-fit">
            <FadeUp>
              <span className="text-xs uppercase tracking-widest text-black/50 font-bold block mb-4 flex items-center gap-2">
                <Activity size={14} className="text-red-600" /> Operational Architecture
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tighter text-black uppercase mb-6 leading-none">
                Precision <br />Capabilities.
              </h2>
              <p className="text-black/60 text-sm max-w-sm leading-relaxed mb-8">
                We deploy comprehensive operational, marketing, and technological frameworks tailored to aggressively scale your market share.
              </p>
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black border-b-2 border-black pb-1 hover:text-red-600 hover:border-red-600 transition-colors"
              >
                View All 14 Services
                <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform duration-300" />
              </Link>
            </FadeUp>
          </div>

          {/* Right Column - Scrolling Services */}
          <div className="lg:w-2/3 flex flex-col gap-16">
            {SERVICES.slice(0, 4).map((service, index) => (
              <FadeUp key={service.slug} delay={0.1 * index}>
                <Link href={`/services/${service.slug}`} className="block group border border-black/10 rounded-3xl p-8 md:p-12 bg-[#fafafa] hover:bg-white hover:shadow-xl hover:border-red-600/30 transition-all duration-500 relative overflow-hidden">
                  
                  {/* Hover Graphic */}
                  <div className="absolute -right-20 -top-20 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none">
                    <span className="text-[200px] font-black">{service.icon}</span>
                  </div>

                  <div className="flex items-start justify-between gap-4 mb-6 relative z-10">
                    <div className="flex items-center gap-4">
                      <span className="text-xl text-black/20 font-mono font-bold">0{index + 1}</span>
                      <h3 className="text-2xl md:text-3xl font-heading font-black text-black group-hover:text-red-600 transition-colors uppercase">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-black/65 text-sm md:text-base mb-8 max-w-xl leading-relaxed relative z-10">
                    {service.description}
                  </p>

                  <div className="space-y-4 relative z-10">
                    {"items" in service.details && service.details.items ? (
                      <div className="flex flex-wrap gap-2">
                        {service.details.items.slice(0, 4).map((item, idx) => (
                          <span key={idx} className="text-[0.7rem] font-bold uppercase tracking-wider text-black bg-white px-3 py-1.5 rounded-full border border-black/10 group-hover:border-red-600/20">
                            {item}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {Object.values(service.details).flat().slice(0, 4).map((item, idx) => (
                          <span key={idx} className="text-[0.7rem] font-bold uppercase tracking-wider text-black bg-white px-3 py-1.5 rounded-full border border-black/10 group-hover:border-red-600/20">
                            {item as string}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   PORTFOLIO & RESULTS SHOWCASE
   ============================================================================ */
function PortfolioSection() {
  const portfolioWithImages = [
    { ...PORTFOLIO[0], image: "/performance-charts.png", link: "/case-studies" },
    { ...PORTFOLIO[2], image: "/digital_marketing_abstract.png", link: "/case-studies" },
    { ...PORTFOLIO[6], image: "/web-dev.png", link: "/case-studies" },
  ];

  // Fix: Ensure we use existing abstract image name
  portfolioWithImages[1].image = "/abstract-growth.png";

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-[#04070f] text-white overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <Image src="/abstract-growth.png" alt="Dark Texture" fill className="object-cover grayscale mix-blend-overlay" />
      </div>

      <div className="container mx-auto relative z-10">
        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs uppercase tracking-widest text-red-500 font-bold block mb-4">Empirical Data</span>
              <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter uppercase leading-none">
                Undeniable <br />Outcomes.
              </h2>
            </div>
            <p className="text-white/60 text-sm max-w-md">
              We replace assumptions with data. Explore the architectures and campaigns that generated millions in attributed revenue for our partners.
            </p>
          </div>
        </FadeUp>

        {/* Featured Visual Grid */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {portfolioWithImages.map((project, i) => (
            <StaggerItem key={i}>
              <Link href={project.link} className="group flex flex-col bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                     <span className="text-[0.65rem] font-bold uppercase tracking-wider text-white bg-red-600 px-2 py-1 rounded-md shadow-lg">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl md:text-2xl font-heading font-black text-white uppercase mb-4 group-hover:text-red-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/90 text-lg font-bold mb-2">
                      {project.metrics}
                    </p>
                    <p className="text-white/50 text-sm">
                      {project.extra}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between group-hover:border-white/30 transition-colors">
                    <span className="text-xs text-white/60 uppercase tracking-widest font-bold group-hover:text-white">Read Case Study</span>
                    <ArrowUpRight size={18} className="text-white/40 group-hover:text-white group-hover:rotate-45 transition-all" />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeUp>
          <div className="text-center mt-12">
             <Link href="/portfolio" className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                View Full Portfolio
             </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ============================================================================
   WHY PARTNER (VALUE PROPOSITION)
   ============================================================================ */
function WhyPartnerSection() {
  const values = [
    { icon: TrendingUp, title: "Ruthless Efficiency", desc: "Lower operational expenses without sacrificing customer service or sales quality. We trim the fat." },
    { icon: Users, title: "Elite Task Forces", desc: "Our specialists act as direct extensions of your departments, fiercely trained on your specific workflows." },
    { icon: Shield, title: "Infinite Scalability", desc: "Easily spin up new SDR pipelines, support seats, or developer bandwidth as you expand globally." },
    { icon: Zap, title: "Data-Driven Speed", desc: "We implement advanced telemetry and analytics so you make decisions based on empirical data, not gut feelings." }
  ];

  return (
    <section id="why-partner" className="py-20 md:py-32 bg-white relative">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <FadeUp>
              <span className="text-xs uppercase tracking-widest text-black/50 font-bold block mb-4">Value Proposition</span>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black tracking-tighter text-black uppercase leading-[0.9] mb-6">
                Why They <br />
                <span className="text-red-600">Choose Us.</span>
              </h2>
              <p className="text-black/65 text-sm md:text-lg leading-relaxed mb-8 max-w-lg font-medium">
                We don't do "best effort." We solve real operational roadblocks. 
                Our infrastructure delivers measurable growth metrics — reduced costs, massive pipeline expansion, and flawless technological execution.
              </p>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <div className="relative w-full h-[300px] rounded-3xl overflow-hidden shadow-xl border border-black/5">
                <Image src="/business-meeting.png" alt="Strategic Planning" fill className="object-cover" />
              </div>
            </FadeUp>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, idx) => (
              <StaggerItem key={idx}>
                <div className="bg-[#fafafa] border border-black/5 p-8 rounded-3xl hover:border-red-600/50 hover:bg-white hover:shadow-xl transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-black/10 shadow-sm flex items-center justify-center mb-6">
                    <v.icon size={20} className="text-red-600" />
                  </div>
                  <h3 className="text-base font-heading font-black text-black uppercase mb-3">
                    {v.title}
                  </h3>
                  <p className="text-black/60 text-sm leading-relaxed font-medium">
                    {v.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   IDEAL CLIENTS & INDUSTRIES
   ============================================================================ */
function IndustriesSection() {
  return (
    <section className="py-24 bg-[#fafafa] border-t border-black/5 overflow-hidden">
      <div className="container mx-auto mb-16">
        <FadeUp>
          <span className="text-xs uppercase tracking-widest text-black/50 font-bold block text-center mb-4">Verticals & Industries</span>
          <h2 className="text-4xl md:text-6xl font-heading font-black text-black uppercase text-center tracking-tighter leading-none">
            Deep Domain <span className="text-red-600">Dominance.</span>
          </h2>
        </FadeUp>
      </div>

      <div className="relative flex overflow-x-hidden border-y border-black/5 py-8 bg-white shadow-sm">
        <div className="animate-marquee whitespace-nowrap flex gap-16 text-xl md:text-2xl font-heading font-black uppercase tracking-widest text-black/20 hover:text-black transition-colors duration-500">
          {INDUSTRIES.map((ind, idx) => (
            <span key={idx} className="flex items-center gap-4 cursor-pointer hover:text-red-600 transition-colors">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              {ind.title}
            </span>
          ))}
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-16 text-xl md:text-2xl font-heading font-black uppercase tracking-widest text-black/20 hover:text-black transition-colors duration-500 py-8" style={{ left: "100%" }}>
          {INDUSTRIES.map((ind, idx) => (
            <span key={`dup-${idx}`} className="flex items-center gap-4 cursor-pointer hover:text-red-600 transition-colors">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              {ind.title}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   CONTACT SECTION
   ============================================================================ */
function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-white border-t border-black/5">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <FadeUp>
              <span className="text-xs uppercase tracking-widest text-red-600 font-bold block mb-4">Take Action</span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black tracking-tighter text-black uppercase mb-6 leading-[0.9]">
                Initiate <br />The Build.
              </h2>
              <p className="text-black/60 text-sm md:text-lg leading-relaxed max-w-sm mb-12 font-medium">
                Stop settling for incremental gains. Schedule a high-level strategy session to map out your infrastructure overhaul.
              </p>

              <div className="space-y-8 bg-[#fafafa] p-8 rounded-3xl border border-black/5">
                <div>
                  <h4 className="text-[0.65rem] font-bold uppercase tracking-widest text-black/40 mb-2">Direct Channel</h4>
                  <a href={`mailto:${SITE_CONFIG.contact.general}`} className="text-2xl md:text-3xl font-heading font-black text-black hover:text-red-600 transition-colors block">
                    {SITE_CONFIG.contact.general}
                  </a>
                </div>
                <div className="h-px w-full bg-black/5" />
                <div>
                  <h4 className="text-[0.65rem] font-bold uppercase tracking-widest text-black/40 mb-2">Headquarters</h4>
                  <p className="text-lg text-black font-medium">
                    {SITE_CONFIG.address}
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.2}>
            <form 
              onSubmit={(e) => e.preventDefault()}
              className="space-y-6 bg-white border border-black/10 p-8 md:p-12 rounded-3xl shadow-2xl shadow-black/5 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-black via-red-600 to-black" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[0.7rem] font-bold uppercase tracking-widest text-black/60 block mb-2">Executive Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-[#fafafa] border border-black/10 px-5 py-4 rounded-xl text-sm text-black font-medium focus:outline-none focus:border-red-600 focus:bg-white transition-all shadow-inner"
                  />
                </div>
                <div>
                  <label className="text-[0.7rem] font-bold uppercase tracking-widest text-black/60 block mb-2">Corporate Email</label>
                  <input 
                    type="email" 
                    placeholder="john@company.com" 
                    className="w-full bg-[#fafafa] border border-black/10 px-5 py-4 rounded-xl text-sm text-black font-medium focus:outline-none focus:border-red-600 focus:bg-white transition-all shadow-inner"
                  />
                </div>
              </div>

              <div>
                <label className="text-[0.7rem] font-bold uppercase tracking-widest text-black/60 block mb-2">Strategic Objective</label>
                <select 
                  className="w-full bg-[#fafafa] border border-black/10 px-5 py-4 rounded-xl text-sm text-black font-medium focus:outline-none focus:border-red-600 focus:bg-white transition-all shadow-inner appearance-none cursor-pointer"
                >
                  <option>Business Process Outsourcing (BPO)</option>
                  <option>Outbound Sales & Pipeline Gen</option>
                  <option>Performance Marketing & Meta Ads</option>
                  <option>Web Infrastructure Development</option>
                  <option>Full Scale Consulting</option>
                </select>
              </div>

              <div>
                <label className="text-[0.7rem] font-bold uppercase tracking-widest text-black/60 block mb-2">Project Brief</label>
                <textarea 
                  rows={4}
                  placeholder="Detail your current bottlenecks and growth targets..." 
                  className="w-full bg-[#fafafa] border border-black/10 px-5 py-4 rounded-xl text-sm text-black font-medium focus:outline-none focus:border-red-600 focus:bg-white transition-all shadow-inner resize-none"
                />
              </div>

              <button 
                type="submit" 
                className="group w-full py-5 text-xs font-bold uppercase tracking-widest text-white bg-black rounded-xl hover:bg-red-600 transition-all duration-300 flex items-center justify-center gap-3 mt-4"
              >
                Submit Inquiry <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
              </button>
              <p className="text-center text-[0.65rem] text-black/40 font-bold uppercase tracking-wider mt-4">
                Secure SSL Encrypted Transmission
              </p>
            </form>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   PAGE CONTAINER
   ============================================================================ */
export default function HomePage() {
  return (
    <div className="bg-white min-h-screen text-black">
      <Hero />
      <TrustedBySection />
      <AboutSection />
      <VisualBreakOne />
      <ServicesSection />
      <PortfolioSection />
      <WhyPartnerSection />
      <IndustriesSection />
      <ContactSection />
    </div>
  );
}
