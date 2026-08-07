"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { CheckCircle2, TrendingUp, ShieldCheck, Globe } from "lucide-react";

export default function SearchMonetization() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.fromTo(
        ".hero-text",
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power3.out" }
      );

      // Feature Cards Stagger
      gsap.fromTo(
        ".feature-card",
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".features-grid",
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );
      
      // Background Parallax
      gsap.fromTo(
        ".bg-parallax",
        { yPercent: -15 },
        {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative bg-background min-h-screen text-white overflow-hidden pb-32">
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0 h-[150vh]">
        <img 
          src="/search_data_bg_1778274029193.png" 
          alt="Search Data Background" 
          className="bg-parallax w-full h-full object-cover opacity-30 mix-blend-screen scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <header className="pt-48 pb-32 md:w-3/4">
          <div className="inline-block px-4 py-2 bg-muted-sage/20 border border-muted-sage/50 text-muted-sage text-sm font-bold uppercase tracking-widest rounded-full mb-8 hero-text shadow-[0_0_20px_rgba(129,140,248,0.3)]">
            Core Service
          </div>
          <h1 className="hero-text text-6xl md:text-8xl font-heading font-black tracking-tighter mb-8 drop-shadow-[0_2px_15px_rgba(0,0,0,1)] uppercase">
            Intelligent Search <br/><span className="text-muted-sage">Monetization.</span>
          </h1>
          <p className="hero-text text-xl md:text-3xl text-white/80 leading-relaxed font-medium drop-shadow-md">
            We provide scalable, compliant, and highly optimized search arbitrage and feed monetization solutions. Trusted by premium feed providers and global advertisers.
          </p>
        </header>

        <div className="features-grid grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <FeatureCard 
            title="Traffic Quality Management"
            description="Our proprietary systems filter and optimize intent-driven traffic to ensure only the highest quality users reach your feeds."
            icon={<ShieldCheck className="w-8 h-8 text-black" />}
          />
          <FeatureCard 
            title="Revenue Optimization"
            description="We leverage real-time analytics to adjust bids, refine queries, and maximize RPMs across multi-vertical campaigns."
            icon={<TrendingUp className="w-8 h-8 text-black" />}
          />
          <FeatureCard 
            title="Campaign Compliance"
            description="Strict adherence to provider guidelines. We operate with full transparency to maintain long-term, trustworthy partnerships."
            icon={<CheckCircle2 className="w-8 h-8 text-black" />}
          />
          <FeatureCard 
            title="Global Scaling"
            description="Expertise in running high-volume campaigns across over 30 countries, adapting to local search behaviors and intent."
            icon={<Globe className="w-8 h-8 text-black" />}
          />
        </div>

        <section className="bg-black/60 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-12 md:p-24 relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-muted-sage/20 blur-[100px] pointer-events-none" />
          <div className="relative z-10 md:w-2/3">
            <h2 className="text-4xl md:text-6xl font-heading font-black mb-8 drop-shadow-md">
              Partner With A Trusted Operator
            </h2>
            <p className="text-xl text-white/80 mb-12 leading-relaxed font-medium">
              Whether you are a search feed provider looking for quality volume or an advertiser seeking high-intent users, TechWhales delivers enterprise-grade performance.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-5 bg-white text-black rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              Discuss a Partnership
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

function FeatureCard({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) {
  return (
    <div className="feature-card p-10 rounded-[2.5rem] bg-black/80 backdrop-blur-xl border border-white/10 hover:bg-white/5 transition-colors duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
      <div className="mb-8 p-4 bg-muted-sage rounded-2xl inline-block shadow-[0_0_20px_rgba(129,140,248,0.4)]">
        {icon}
      </div>
      <h3 className="text-3xl font-black font-heading text-white mb-6 drop-shadow-md">
        {title}
      </h3>
      <p className="text-white/80 leading-relaxed text-lg font-medium">
        {description}
      </p>
    </div>
  );
}
