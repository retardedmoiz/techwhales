"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Zap, Target, Users, Shield, Linkedin } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/fade-up";
import PaperImage from "@/components/ui/paper-image";
import { TeamSection, TeamMember } from "@/components/ui/team-section";

export default function AboutPage() {
  const values = [
    { icon: Zap, title: "Fast Execution", desc: "We eliminate delays. We move from planning to action in days, not months." },
    { icon: Target, title: "Clear Precision", desc: "No guesswork. Every legal filing, tax return, and project is handled with exact precision." },
    { icon: Users, title: "Dedicated Experts", desc: "We only work with the best attorneys, tax professionals, and business operators to ensure your success." },
    { icon: Shield, title: "Absolute Accountability", desc: "We act as your true partner. If something needs fixing, we fix it. We are always by your side." }
  ];

  const teamMembers: TeamMember[] = [
    {
      name: "Tariq Khan",
      designation: "CEO & Owner",
      imageSrc: "/ceo-tariq-khan.png.jpeg",
      socialLinks: [{ icon: Linkedin, href: "#" }],
      bio: (
        <>
          <p>
            Tariq Khan is the Chief Executive Officer and Owner of United Tech LLC and an Attorney at Law, bringing together legal insight, strategic leadership, and a strong understanding of modern business. He leads the company’s overall vision, growth, and business direction, with a focus on building a professional, service-driven organization that combines technology, talent, and operational excellence.
          </p>
          <p>
            With a legal background and an entrepreneurial mindset, Tariq is committed to developing solutions that are not only practical and innovative but also grounded in professionalism, integrity, and accountability. Under his leadership, United Tech LLC continues to build long-term partnerships and deliver reliable services designed around the evolving needs and objectives of its clients.
          </p>
        </>
      ),
    },
    {
      name: "Dr. Azhar Munir",
      designation: "Chief Technology Officer",
      imageSrc: "/CTO-dr-azhar-munir.png.jpeg",
      socialLinks: [{ icon: Linkedin, href: "#" }],
      bio: (
        <>
          <p>
            Dr. Azhar Munir serves as Chief Technology Officer at United Tech LLC, leading the company’s technology direction and digital capabilities. His role involves guiding technology strategy, evaluating emerging solutions, and ensuring that technology is effectively integrated into business operations.
          </p>
          <p>
            With a focus on innovation, reliability, and scalability, he contributes to building technology-driven solutions that support efficiency and sustainable business growth.
          </p>
        </>
      ),
    },
    {
      name: "Hamid Khan",
      designation: "Legal & Financial Advisor",
      imageSrc: "/legal-advisor-hamid-iqbal-khan.png.jpeg",
      socialLinks: [{ icon: Linkedin, href: "#" }],
      bio: (
        <>
          <p>
            Hamid Khan serves as Legal and Financial Advisor at United Tech LLC, supporting the organization across legal, financial, compliance, and risk-related matters.
          </p>
          <p>
            His responsibilities include providing strategic guidance on business documentation, financial considerations, regulatory requirements, and organizational risk. His role helps ensure that business decisions are approached with sound judgment, accountability, and appropriate legal and financial oversight.
          </p>
        </>
      ),
    }
  ];

  const directorMembers: TeamMember[] = [
    {
      name: "Omar Atiq",
      designation: "Managing Director",
      imageSrc: "/managing-director-omar-atiq.png.jpeg",
      socialLinks: [{ icon: Linkedin, href: "#" }],
      bio: (
        <>
          <p>
            Omar Atiq serves as Managing Director at United Tech LLC, contributing to the company’s strategic management, organizational development, and day-to-day leadership.
          </p>
          <p>
            He works across different areas of the organization to support effective execution of business objectives and maintain alignment between leadership, teams, and clients. His role emphasizes operational discipline, professional standards, and consistent organizational performance.
          </p>
        </>
      ),
    },

    {
      name: "Aizaz Qureshi",
      designation: "Director of Operations",
      imageSrc: "/director-operations-aizaz-qureshi.png.jpeg",
      socialLinks: [{ icon: Linkedin, href: "#" }],
      bio: (
        <>
          <p>
            Aizaz Qureshi serves as Director of Operations at United Tech LLC, overseeing operational processes, team coordination, service delivery, and performance management.
          </p>
          <p>
            His focus is on ensuring that business operations remain organized, efficient, and aligned with client expectations. By supporting strong internal processes and accountability, he contributes to maintaining consistent service quality as the company scales.
          </p>
        </>
      ),
    },

    {
      name: "Moiz Rehman",
      designation: "Director, Affiliates",
      imageSrc: "/affiliates-director-moiz-ur-rehman.png.jpeg",
      socialLinks: [{ icon: Linkedin, href: "#" }],
      bio: (
        <>
          <p>
            Moiz Rehman serves as Director of Affiliates at United Tech LLC, overseeing affiliate relationships, partnership development, and performance-driven business initiatives.
          </p>
          <p>
            He works toward establishing sustainable partnerships, identifying new opportunities, and strengthening the company’s affiliate ecosystem. His focus is on creating mutually beneficial relationships while maintaining strong standards of performance, communication, and business integrity.
          </p>
        </>
      ),
    },
    {
      name: "Abdul Moiz Khan",
      designation: "Outsourced Business Development Director",
      imageSrc: "/buisness-development-director-abdul-moiz-khan.png.jpeg",
      socialLinks: [{ icon: Linkedin, href: "#" }],
      bio: (
        <>
          <p>
            Abdul Moiz Khan serves as Outsourced Business Development Director at United Tech LLC, focusing on business development, client relationships, strategic partnerships, and outsourced growth opportunities.
          </p>
          <p>
            He works closely with businesses to understand operational requirements and identify areas where United Tech LLC can provide value through specialized teams and business support. His approach centers on building professional relationships and developing sustainable opportunities rather than short-term transactions.
          </p>
        </>
      ),
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative bg-[#fafafa] border-b border-black/10 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <Image src="/abstract-growth.png" alt="Texture" fill className="object-cover" />
        </div>
        <div className="container mx-auto relative z-10">
          <FadeUp>
            <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black/40 mb-8">
              <Link href="/" className="hover:text-black transition-colors">Home</Link>
              <span>/</span>
              <span className="text-red-600">About Us</span>
            </nav>
            <h1 className="text-4xl md:text-6xl lg:text-[7rem] font-heading font-black tracking-tighter text-black uppercase mb-6 leading-none max-w-5xl">
              Not just an agency. <br />
              <span className="text-transparent" style={{ WebkitTextStroke: "2px #000" }}>A True Partner.</span>
            </h1>
            <p className="text-black/60 text-base md:text-lg max-w-2xl leading-relaxed font-medium">
              Operated by {SITE_CONFIG.legalName}, {SITE_CONFIG.brand} was born out of frustration with traditional service providers. 
              We wanted a single trusted partner for legal, tax, design, and business operations, so we built exactly that.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div className="relative w-full aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/modern-office.png" alt="TechWhales Operations" fill className="object-cover hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-black/10" />
              </div>
            </FadeUp>
            <div className="flex flex-col justify-center">
              <FadeUp delay={0.2}>
                <span className="text-xs uppercase tracking-widest text-red-600 font-bold block mb-4">Our Origin</span>
                <h2 className="text-4xl md:text-5xl font-heading font-black text-black uppercase tracking-tighter mb-8 leading-none">
                  Built by Professionals,<br />
                  For Your Business.
                </h2>
                <div className="space-y-6 text-black/65 text-base md:text-lg font-medium leading-relaxed">
                  <p>
                    Most people are trapped trying to find a different professional for every problem. One for taxes, one for legal issues, and another for marketing. It becomes stressful and expensive.
                  </p>
                  <p>
                    {SITE_CONFIG.brand} bridges that gap. We bring together highly specialized teams under one roof. We give you professional capabilities and genuine support without the endless searching.
                  </p>
                  <p>
                    Whether you need help with a living trust, corporate tax preparation, interior design for your real estate, or a new website, we embed ourselves as your true partner to drive real results.
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Introduction */}
      <section className="py-24 md:py-32 bg-[#04070f] text-white overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none opacity-[0.1]">
          <Image src="/abstract-growth.png" alt="Texture" fill className="object-cover grayscale" />
        </div>
        <div className="container mx-auto relative z-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-24 items-center">
            
            {/* Intro Text */}
            <div className="lg:col-span-7 order-1 lg:order-1 flex flex-col justify-center">
              <FadeUp>
                <span className="text-xs uppercase tracking-widest text-red-600 font-bold block mb-4">Leadership</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black uppercase tracking-tighter mb-8 leading-none">
                  Tariq Khan <br />
                  <span className="text-white/40 text-xl md:text-2xl block mt-3 tracking-widest">CEO & Owner, {SITE_CONFIG.legalName}</span>
                </h2>
                <div className="space-y-6 text-white/60 text-base md:text-lg font-medium leading-relaxed lg:mb-10 pr-0 lg:pr-10">
                  <p>
                    Tariq Khan is the Chief Executive Officer and Owner of United Tech LLC and an Attorney at Law, bringing together legal insight, strategic leadership, and a strong understanding of modern business. He leads the company’s overall vision, growth, and business direction, with a focus on building a professional, service-driven organization that combines technology, talent, and operational excellence.
                  </p>
                  <p>
                    With a legal background and an entrepreneurial mindset, Tariq is committed to developing solutions that are not only practical and innovative but also grounded in professionalism, integrity, and accountability. Under his leadership, United Tech LLC continues to build long-term partnerships and deliver reliable services designed around the evolving needs and objectives of its clients.
                  </p>
                  <p>
                    His vision is to create an organization where expertise meets execution — empowering businesses to operate smarter, grow confidently, and navigate an increasingly competitive global marketplace.
                  </p>
                </div>
              </FadeUp>
            </div>
            
            {/* Picture (Between Intro and Quote on Mobile, Right side on Desktop) */}
            <div className="lg:col-span-5 lg:row-span-2 order-2 lg:order-2 flex justify-center w-full overflow-hidden lg:self-center">
              <FadeUp delay={0.2} className="w-full flex justify-center">
                <div className="relative overflow-visible mx-auto transform scale-[0.70] sm:scale-[0.85] md:scale-100 origin-top h-[450px] sm:h-[550px] md:h-[650px] lg:-mt-12">
                  <PaperImage 
                    image="/ceo-tariq-khan.png.jpeg" 
                    mode="Wave" 
                    cardWidth={450} 
                    cardHeight={600} 
                    depth={30} 
                    hoverLift={60}
                    restLift={40}
                  />
                </div>
              </FadeUp>
            </div>

            {/* Quote */}
            <div className="lg:col-span-7 order-3 lg:order-3">
              <FadeUp delay={0.4}>
                <div className="border-l-4 border-red-600 pl-6 py-2 bg-white/5 p-6 rounded-r-2xl lg:pr-10">
                  <p className="text-lg md:text-xl italic font-serif text-white/90 leading-relaxed">
                    “Success is not simply about building a business; it is about building trust, creating lasting value, and leaving a meaningful impact.”
                  </p>
                  <p className="mt-4 text-xs font-bold uppercase tracking-widest text-red-500">
                    — Tariq Khan, Attorney at Law
                  </p>
                </div>
              </FadeUp>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-32 bg-[#fafafa] border-y border-black/5">
        <div className="container mx-auto max-w-7xl px-6">
          <FadeUp>
            <div className="text-center mb-16">
              <span className="text-xs uppercase tracking-widest text-red-600 font-bold block mb-4">Core Values</span>
              <h2 className="text-4xl md:text-5xl font-heading font-black text-black uppercase tracking-tighter">
                Our Operating System
              </h2>
            </div>
          </FadeUp>
          
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <StaggerItem key={i}>
                <div className="bg-white border border-black/10 p-8 rounded-3xl h-full hover:border-red-600/50 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-[#fafafa] border border-black/5 flex items-center justify-center mb-6">
                    <v.icon size={20} className="text-red-600" />
                  </div>
                  <h3 className="text-xl font-heading font-black text-black uppercase mb-4">{v.title}</h3>
                  <p className="text-black/60 text-sm leading-relaxed font-medium">{v.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Leadership Team */}
      <TeamSection 
        title="Core Team"
        description="At United Tech LLC, leadership is built around accountability, collaboration, innovation, and long-term thinking. Our leadership team brings together expertise across technology, operations, business development, affiliate partnerships, finance, and legal advisory to create an organization capable of supporting businesses through changing market demands."
        members={teamMembers}
        directors={directorMembers}
        className="border-b border-black/5"
      />

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto">
          <FadeUp>
            <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter text-black uppercase mb-6 leading-none">
              Ready to <br />
              <span className="text-red-600">Scale Without Limits?</span>
            </h2>
            <p className="text-black/60 max-w-xl mx-auto mb-10 font-medium">
              Join the businesses and families that have trusted us to handle their most important matters with genuine care.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 text-sm font-bold uppercase tracking-widest text-white bg-black rounded-full hover:bg-red-600 transition-colors duration-300">
              Get Started Today <ArrowUpRight size={18} />
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
