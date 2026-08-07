"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import MagneticButton from "@/components/magnetic-button";

const teamMembers = [
  {
    name: "Aizaz Ahmed Qureshi",
    role: "Founder & CEO",
    experience: "10+ years in digital performance marketing, traffic monetization, and scalable advertising systems.",
    intro: "Aizaz drives the strategic vision of TechWhales, bridging the gap between high-volume search arbitrage and enterprise-level growth. His leadership ensures we remain at the cutting edge of digital performance."
  },
  {
    name: "Moiz Khan",
    role: "Chief Technology Officer (CTO)",
    experience: "8+ years in full-stack engineering and scalable digital systems.",
    intro: "Moiz architects the robust infrastructure that powers our multi-country campaigns. His expertise in backend systems and cloud deployment guarantees zero-downtime, high-speed delivery."
  },
  {
    name: "Moiz Rehman",
    role: "Head of Performance Marketing",
    experience: "7+ years managing large-scale paid advertising campaigns.",
    intro: "Moiz Rehman oversees all global traffic operations. With a sharp analytical mind, he optimizes the conversion funnel to maximize RPMs and ensure strict compliance with search feed providers."
  }
];

export default function Team() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.fromTo(
        ".hero-element",
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power3.out" }
      );

      // Background Parallax
      gsap.fromTo(
        ".team-bg",
        { yPercent: -10 },
        {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        }
      );

      // Team Cards Stagger
      gsap.fromTo(
        ".team-card",
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: ".team-grid",
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative bg-background min-h-screen text-white overflow-hidden pb-32">
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0 h-[150vh]">
        <img 
          src="/team_abstract_bg_1778274813564.png" 
          alt="Abstract Corporate Architecture" 
          className="team-bg w-full h-full object-cover opacity-40 mix-blend-luminosity scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <header className="pt-48 pb-32 text-center">
          <h1 className="hero-element text-6xl md:text-8xl font-heading font-black tracking-tighter mb-8 drop-shadow-[0_2px_15px_rgba(0,0,0,1)] uppercase">
            The <span className="text-muted-sage">Visionaries</span>
          </h1>
          <p className="hero-element text-xl md:text-3xl text-white/80 leading-relaxed max-w-3xl mx-auto font-medium drop-shadow-md">
            Meet the leadership team driving innovation, compliance, and multi-vertical scaling at TechWhales.
          </p>
        </header>

        {/* The 3 Team Cards */}
        <div className="team-grid grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
          {teamMembers.map((member) => (
            <div 
              key={member.name}
              className="team-card flex flex-col h-full rounded-[3rem] bg-black/80 backdrop-blur-2xl border border-white/10 p-10 md:p-12 hover:bg-white/5 transition-colors duration-500 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            >
              <div className="mb-8 border-b border-white/10 pb-8">
                <h3 className="text-3xl font-black font-heading text-white mb-4 drop-shadow-md">{member.name}</h3>
                <div className="inline-block px-4 py-2 bg-muted-sage text-black text-xs font-black uppercase tracking-widest rounded-full mb-6">
                  {member.role}
                </div>
                <p className="text-sm font-bold text-white/60 uppercase tracking-wider">{member.experience}</p>
              </div>
              
              <div className="flex-grow">
                <p className="text-lg text-white/90 leading-relaxed font-medium">
                  "{member.intro}"
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="hero-element text-center bg-black/60 backdrop-blur-xl border border-white/10 rounded-[3rem] p-16 md:p-24 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          <h2 className="text-4xl md:text-6xl font-heading font-black mb-8 tracking-tighter uppercase drop-shadow-md">Join The <span className="text-muted-sage">Pod</span></h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            We are always looking for top-tier talent in media buying, engineering, and digital growth. Discover our remote opportunities and performance-driven culture.
          </p>
          <MagneticButton intensity={0.3}>
            <Link href="/careers" className="inline-block px-10 py-5 bg-white text-black rounded-full font-black text-lg uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              View Open Roles
            </Link>
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}
