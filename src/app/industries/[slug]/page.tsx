import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { INDUSTRIES, SITE_CONFIG } from "@/lib/config";

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
    title: `${industry.title} Marketing & Growth | ${SITE_CONFIG.brand}`,
    description: `${SITE_CONFIG.brand} delivers specialized digital marketing, BPO, and growth services for the ${industry.title} industry.`,
  };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = INDUSTRIES.find((i) => i.slug === slug);
  if (!industry) notFound();

  return (
    <>
      <section className="min-h-[55vh] flex items-center relative"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0, 212, 255, 0.07) 0%, transparent 60%), #04070F" }}>
        <div className="container mx-auto py-20">
          <nav className="flex items-center gap-2 text-sm text-white/30 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/industries" className="hover:text-white transition-colors">Industries</Link>
            <span>/</span>
            <span className="text-cyan-400">{industry.title}</span>
          </nav>
          <span className="text-6xl mb-6 block">{industry.icon}</span>
          <p className="trust-badge mb-4">{industry.title}</p>
          <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-heading font-black tracking-tighter leading-[0.9] mb-6">
            {SITE_CONFIG.brand} for<br />
            <span style={{ background: "linear-gradient(135deg, #00D4FF 0%, #7B2FFF 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {industry.title}
            </span>
          </h1>
          <p className="text-lg text-white/40 max-w-2xl leading-relaxed mb-8">
            Industry-specific growth strategies designed for {industry.title} businesses. We understand your market, your buyer, and what it takes to convert.
          </p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 font-bold text-white rounded-xl hover:scale-105 transition-transform"
            style={{ background: "linear-gradient(135deg, #00D4FF 0%, #7B2FFF 100%)" }}>
            Get a Strategy Session <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      <section className="section-padding border-t border-white/5">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-heading font-black tracking-tighter mb-4">
            Ready to grow your {industry.title} business?
          </h2>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 font-bold text-white rounded-2xl hover:scale-105 transition-transform"
            style={{ background: "linear-gradient(135deg, #00D4FF 0%, #7B2FFF 100%)" }}>
            Book Free Consultation <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
