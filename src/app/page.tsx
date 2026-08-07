"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Check, Sparkles, Shield, TrendingUp, Users } from "lucide-react";
import { SITE_CONFIG, SERVICES, PORTFOLIO, INDUSTRIES } from "@/lib/config";
import { SplineScene } from "@/components/ui/spline";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

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
        <Card className="w-full min-h-[600px] md:h-[650px] bg-[#08080a] border-none relative overflow-hidden flex flex-col md:flex-row items-center rounded-3xl p-6 md:p-12 shadow-2xl">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          
          {/* Left content */}
          <div className="flex-1 relative z-10 flex flex-col justify-center text-white h-full pr-0 md:pr-8 py-8 md:py-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-[0.7rem] font-bold uppercase tracking-wider mb-6 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
              Strategic Growth & Operations Partner
            </div>
            
            <h1 className="text-[2.5rem] md:text-[5rem] font-heading font-black leading-[0.9] tracking-tighter uppercase mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Scale Your <br />
              <span className="text-transparent" style={{ WebkitTextStroke: "1px #fff" }}>Operations</span> <br />
              & Revenue.
            </h1>
            
            <p className="text-neutral-400 text-sm md:text-base max-w-lg leading-relaxed mb-8">
              {SITE_CONFIG.legalName} is a California-based BPO, marketing & custom development partner. 
              We operate as an extension of your team — driving outbound SDR campaigns, inbound support, media buying, and domain monetization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Link
                href="/#contact"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-widest text-black bg-white rounded-full hover:bg-neutral-200 transition-all duration-300"
              >
                Get Free Consultation
                <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Right content - Spline Scene */}
          <div className="flex-1 w-full h-[300px] md:h-full relative min-h-[300px]">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </Card>
      </div>
    </section>
  );
}

/* ============================================================================
   ABOUT / MISSION (TEXT REVEAL)
   ============================================================================ */
function AboutSection() {
  return (
    <section className="py-20 md:py-32 bg-[#fafafa] border-y border-black/5">
      <div className="container mx-auto">
        <span className="text-xs uppercase tracking-widest text-black/40 font-bold block mb-8">Who We Are</span>
        <ScrollTextReveal 
          text="United Tech LLC is an elite California outsourcing company helping businesses reduce operational costs, optimize department output, and scale without friction. From customer acquisition and follow-ups to complex domain parked monetization, we architect high-converting funnels and robust digital infrastructure."
        />
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
            <span className="text-xs uppercase tracking-widest text-black/50 font-bold block mb-4">Our Services</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tighter text-black uppercase mb-6 leading-none">
              Services & <br />Capabilities.
            </h2>
            <p className="text-black/60 text-sm max-w-sm leading-relaxed mb-8">
              We offer a comprehensive suite of outsourcing, marketing, and technology solutions 
              designed to support every department of your operations.
            </p>
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black border-b border-black pb-1 hover:text-black/60 hover:border-black/60 transition-colors"
            >
              Discuss Your Project
              <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform duration-300" />
            </Link>
          </div>

          {/* Right Column - Scrolling Services */}
          <div className="lg:w-2/3 flex flex-col gap-16">
            {SERVICES.map((service, index) => (
              <div 
                key={service.slug} 
                className="group border-b border-black/10 pb-16 last:border-b-0 last:pb-0"
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <span className="text-xl text-black/35 font-mono">0{index + 1}</span>
                    <h3 className="text-2xl md:text-3xl font-heading font-black text-black group-hover:text-red-600 transition-colors uppercase">
                      {service.title}
                    </h3>
                  </div>
                  <span className="text-3xl">{service.icon}</span>
                </div>
                <p className="text-black/65 text-sm md:text-base mb-8 max-w-xl leading-relaxed">
                  {service.description}
                </p>

                {/* Sub-services layout */}
                {service.details && (
                  <div className="space-y-4">
                    {"items" in service.details && service.details.items ? (
                      <div className="flex flex-wrap gap-2">
                        {service.details.items.map((item, idx) => (
                          <span 
                            key={idx} 
                            className="text-[0.7rem] font-bold uppercase tracking-wider text-black bg-black/5 px-3 py-1.5 rounded-full border border-black/5"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    ) : (
                      // Custom split for BPO which has Outbound, Inbound, Sales
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-black/5">
                        {Object.entries(service.details).map(([key, list]) => (
                          <div key={key}>
                            <h4 className="text-[0.75rem] font-bold uppercase tracking-widest text-black/40 mb-3">{key}</h4>
                            <ul className="space-y-1.5">
                              {(list as string[]).map((item, idx) => (
                                <li key={idx} className="text-xs text-black/75 flex items-center gap-1.5">
                                  <span className="w-1 h-1 rounded-full bg-red-600" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
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
  // Map specific high-quality copied images to visual cards
  const portfolioWithImages = [
    {
      ...PORTFOLIO[0], // Email Marketing
      image: "/bpo-office.png",
      link: "/#contact",
    },
    {
      ...PORTFOLIO[2], // Meta Ads spend
      image: "/performance-marketing.png",
      link: "/#contact",
    },
    {
      ...PORTFOLIO[6], // Claim Source Web Dev
      image: "/development-laptop.png",
      link: "/#contact",
    },
  ];

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-[#fafafa] border-t border-black/5">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs uppercase tracking-widest text-black/50 font-bold block mb-4">Case Studies & Results</span>
            <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter text-black uppercase leading-none">
              Measurable Outcomes.
            </h2>
          </div>
          <p className="text-black/60 text-sm max-w-md">
            A snapshot of campaigns, ad accounts, domain parked portfolios, and custom web builds managed by our team.
          </p>
        </div>

        {/* Featured Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {portfolioWithImages.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group flex flex-col bg-white border border-black/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-[0.65rem] font-bold uppercase tracking-wider text-red-600 block mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-lg md:text-xl font-heading font-black text-black uppercase mb-3">
                    {project.title}
                  </h3>
                  <p className="text-black/75 text-sm mb-2 font-semibold">
                    {project.metrics}
                  </p>
                  <p className="text-black/50 text-xs">
                    {project.extra}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-black/5 flex items-center justify-between">
                  <span className="text-xs text-black/60 uppercase tracking-widest font-semibold">Case Study</span>
                  <ArrowUpRight size={16} className="text-black/30 group-hover:text-black group-hover:rotate-45 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Smaller Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12 border-t border-black/10">
          {PORTFOLIO.slice(3).map((cs, i) => (
            <div 
              key={i}
              className="border border-black/10 bg-white p-6 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <span className="text-[0.65rem] font-bold uppercase tracking-wider text-black/45 block mb-2">
                  {cs.category}
                </span>
                <h4 className="text-base font-heading font-black text-black uppercase mb-2">
                  {cs.title}
                </h4>
                <p className="text-black/70 text-sm font-semibold mb-1">
                  {cs.metrics}
                </p>
                <p className="text-black/50 text-xs">
                  {cs.extra}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   WHY PARTNER (VALUE PROPOSITION)
   ============================================================================ */
function WhyPartnerSection() {
  const values = [
    { icon: TrendingUp, title: "Cost-Effective Outsourcing", desc: "Lower operational expenses without sacrificing customer service or sales quality." },
    { icon: Users, title: "Highly Trained Teams", desc: "Our specialists act as direct extensions of your departments, trained on your workflows." },
    { icon: Shield, title: "Scalable Infrastructure", desc: "Easily spin up new SDR pipelines, support seats, or developer bandwidth as you expand." },
    { icon: Sparkles, title: "Domain & Arbitrage Experts", desc: "In-house domain parking (AFD) and high-yield search arbitrage (RSOC) expertise." }
  ];

  return (
    <section id="why-partner" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs uppercase tracking-widest text-black/50 font-bold block mb-4">Value Proposition</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tighter text-black uppercase leading-none mb-6">
              Why Partner With Us.
            </h2>
            <p className="text-black/65 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
              We focus on solving real operational roadblocks rather than just listing static features. 
              Our team delivers measurable growth metrics — reduced costs, improved answer rates, larger ad pipeline revenues, and custom dev maintenance.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              <div className="flex items-center gap-2">
                <Check size={16} className="text-red-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-black">Dedicated Management</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={16} className="text-red-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-black">Reliable Reporting</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={16} className="text-red-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-black">Flexible Models</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, idx) => (
              <div key={idx} className="border border-black/10 p-6 rounded-2xl hover:border-black transition-colors">
                <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center mb-4">
                  <v.icon size={20} className="text-black" />
                </div>
                <h3 className="text-sm font-heading font-black text-black uppercase mb-2">
                  {v.title}
                </h3>
                <p className="text-black/60 text-xs leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
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
    <section className="py-20 bg-[#fafafa] border-t border-black/10 overflow-hidden">
      <div className="container mx-auto mb-12">
        <span className="text-xs uppercase tracking-widest text-black/50 font-bold block text-center mb-4">Industries Served</span>
        <h2 className="text-3xl md:text-4xl font-heading font-black text-black uppercase text-center tracking-tighter leading-none">
          Deep Domain Expertise.
        </h2>
      </div>

      {/* Repeating Slider for Infinite effect */}
      <div className="relative flex overflow-x-hidden border-y border-black/5 py-6 bg-white">
        <div className="animate-marquee whitespace-nowrap flex gap-12 text-sm font-bold uppercase tracking-widest text-black">
          {INDUSTRIES.map((ind, idx) => (
            <span key={idx} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
              {ind.title}
            </span>
          ))}
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-12 text-sm font-bold uppercase tracking-widest text-black" style={{ left: "100%" }}>
          {INDUSTRIES.map((ind, idx) => (
            <span key={`dup-${idx}`} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
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
    <section id="contact" className="py-20 md:py-32 bg-white border-t border-black/10">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-xs uppercase tracking-widest text-black/50 font-bold block mb-4">Start Today</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tighter text-black uppercase mb-6 leading-none">
              Let&apos;s Build <br />Your Pipeline.
            </h2>
            <p className="text-black/60 text-sm md:text-base leading-relaxed max-w-sm mb-8">
              Reach out directly to schedule a strategy call. Let&apos;s review your current operations bottlenecks.
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="text-[0.65rem] font-bold uppercase tracking-widest text-black/40 mb-1">Email Inquiry</h4>
                <a href={`mailto:${SITE_CONFIG.contact.general}`} className="text-lg md:text-xl font-heading font-black text-black hover:text-red-600 transition-colors">
                  {SITE_CONFIG.contact.general}
                </a>
              </div>
              <div>
                <h4 className="text-[0.65rem] font-bold uppercase tracking-widest text-black/40 mb-1">Los Angeles Address</h4>
                <p className="text-sm text-black/75">
                  {SITE_CONFIG.address}
                </p>
              </div>
            </div>
          </div>

          {/* Clean minimal Form */}
          <form 
            onSubmit={(e) => e.preventDefault()}
            className="space-y-6 bg-[#fafafa] border border-black/10 p-8 rounded-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-[0.65rem] font-bold uppercase tracking-widest text-black/50 block mb-2">First Name</label>
                <input 
                  type="text" 
                  placeholder="John" 
                  className="w-full bg-white border border-black/10 px-4 py-3 rounded-lg text-sm text-black focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <div>
                <label className="text-[0.65rem] font-bold uppercase tracking-widest text-black/50 block mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-white border border-black/10 px-4 py-3 rounded-lg text-sm text-black focus:outline-none focus:border-black transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="text-[0.65rem] font-bold uppercase tracking-widest text-black/50 block mb-2">Subject Service</label>
              <select 
                className="w-full bg-white border border-black/10 px-4 py-3 rounded-lg text-sm text-black focus:outline-none focus:border-black transition-colors"
              >
                <option>Business Process Outsourcing (BPO)</option>
                <option>Performance Marketing</option>
                <option>Affiliate Marketing</option>
                <option>Web Development</option>
                <option>Other growth channels</option>
              </select>
            </div>

            <div>
              <label className="text-[0.65rem] font-bold uppercase tracking-widest text-black/50 block mb-2">Message</label>
              <textarea 
                rows={4}
                placeholder="How can we help your business scale?" 
                className="w-full bg-white border border-black/10 px-4 py-3 rounded-lg text-sm text-black focus:outline-none focus:border-black transition-colors resize-none"
              />
            </div>

            <button 
              type="submit" 
              className="w-full py-4 text-xs font-bold uppercase tracking-widest text-white bg-black rounded-lg hover:bg-black/90 transition-colors"
            >
              Send Message
            </button>
          </form>
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
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <WhyPartnerSection />
      <IndustriesSection />
      <ContactSection />
    </div>
  );
}
