import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import * as LucideIcons from "lucide-react";
import { ArrowUpRight, Check, ChevronRight } from "lucide-react";
import { INDUSTRIES, SITE_CONFIG } from "@/lib/config";
import { CustomCursorTarget } from "@/components/ui/custom-cursor";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRIES.find((i) => i.slug === slug);
  if (!industry) return {};
  return {
    title: `${industry.title} Services | ${SITE_CONFIG.brand}`,
    description: industry.description,
  };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = INDUSTRIES.find((i) => i.slug === slug);
  if (!industry) notFound();

  const Icon = (LucideIcons as any)[industry.icon] || LucideIcons.Briefcase;

  return (
    <div className="bg-white text-black min-h-screen">
      {/* HERO SECTION */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden relative bg-[#fafafa]">
        <div className="container mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black/40 mb-12">
            <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/industries" className="hover:text-red-600 transition-colors">Industries</Link>
            <ChevronRight size={12} />
            <span className="text-black">{industry.title}</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 lg:pr-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-red-600 shadow-md">
                  <Icon size={28} strokeWidth={2} />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-red-600 block">
                  Industry Focus
                </span>
              </div>
              <h1 className="text-[2.5rem] md:text-[4rem] font-heading font-black leading-[1.1] tracking-tighter uppercase mb-6 text-black">
                Solutions for <br/>
                {industry.title}.
              </h1>
              <p className="text-black/60 text-lg leading-relaxed mb-10 max-w-xl">
                {industry.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#contact-form"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white bg-black rounded-full hover:bg-red-600 transition-all duration-300 w-full sm:w-auto"
                >
                  Start Your Project <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-6 relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden group shadow-2xl">
              <Image 
                src={industry.image!} 
                alt={industry.title} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                priority
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-white border-y border-black/5">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl font-heading font-black tracking-tighter uppercase mb-4">
              Our Core Services for {industry.title}
            </h2>
            <p className="text-black/50">We provide highly specialized assistance designed for your exact market.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(industry.services || []).map((service, i) => (
              <div key={i} className="bg-[#fafafa] p-8 rounded-2xl border border-black/5 hover:border-red-600/30 transition-colors shadow-sm">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-6 border border-black/5 text-red-600 shadow-sm">
                  <Check size={18} strokeWidth={3} />
                </div>
                <h3 className="font-heading font-black text-lg uppercase tracking-tight mb-2">{service}</h3>
                <p className="text-sm text-black/60 font-medium">Expert execution tailored for {industry.title.toLowerCase()}.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRY INTAKE SURVEY */}
      <section id="contact-form" className="py-32 bg-[#04070f] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <Image src="/abstract-growth.png" alt="Texture" fill className="object-cover grayscale mix-blend-overlay" />
        </div>
        <div className="container mx-auto relative z-10 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter uppercase mb-4 text-white">
              {industry.title} Inquiry
            </h2>
            <p className="text-white/60 text-sm md:text-base">
              Secure priority placement for {industry.title} services. Complete the brief assessment below.
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
                <label className="text-[0.7rem] font-bold uppercase tracking-widest text-white/50 block mb-2">Work Email</label>
                <input 
                  type="email" 
                  className="w-full bg-black/50 border border-white/10 px-5 py-4 rounded-xl text-sm text-white focus:border-red-600 focus:outline-none transition-colors"
                  placeholder="jane@company.com"
                />
              </div>
            </div>

            <div>
              <label className="text-[0.7rem] font-bold uppercase tracking-widest text-white/50 block mb-4">What service are you most interested in?</label>
              <div className="grid grid-cols-2 gap-4">
                {(industry.services || []).map((opt) => (
                  <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                    <input type="radio" name="objective" value={opt} className="accent-red-600 w-4 h-4 cursor-pointer" />
                    <span className="text-sm text-white/70 group-hover:text-white transition-colors">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="text-[0.7rem] font-bold uppercase tracking-widest text-white/50 block mb-2">Tell us about your business goals</label>
              <textarea 
                rows={4}
                className="w-full bg-black/50 border border-white/10 px-5 py-4 rounded-xl text-sm text-white focus:border-red-600 focus:outline-none transition-colors resize-none"
                placeholder="Briefly describe your current situation or requirements..."
              />
            </div>

            <button type="button" className="w-full py-5 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-xl hover:bg-red-600 hover:text-white transition-colors duration-300 flex items-center justify-center gap-3">
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
