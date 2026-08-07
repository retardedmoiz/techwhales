import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, CheckCircle, ChevronRight } from "lucide-react";
import { SERVICES, SITE_CONFIG } from "@/lib/config";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | ${SITE_CONFIG.brand}`,
    description: `${SITE_CONFIG.brand} delivers expert ${service.title} services — ${service.description}`,
    openGraph: {
      title: `${service.title} — ${SITE_CONFIG.brand}`,
      description: service.description,
      url: `${SITE_CONFIG.siteUrl}/services/${slug}`,
    },
  };
}

const serviceDetails: Record<string, {
  headline: string;
  subheadline: string;
  benefits: string[];
  process: { step: string; description: string }[];
  faqs: { q: string; a: string }[];
}> = {
  "business-process-outsourcing": {
    headline: "Enterprise BPO. Startup Agility.",
    subheadline: "Outsource your operations to a team that treats them like their own — with zero compromise on quality.",
    benefits: [
      "40–60% cost reduction vs. in-house teams",
      "Onboarding in under 2 weeks",
      "Dedicated account management",
      "SLA-backed performance guarantees",
      "GDPR & compliance-ready workflows",
    ],
    process: [
      { step: "Audit", description: "We map your current operations and identify inefficiencies." },
      { step: "Design", description: "We architect a scalable process tailored to your business." },
      { step: "Build", description: "We assemble your dedicated team and configure all systems." },
      { step: "Launch", description: "Go live with full monitoring and optimization from day one." },
    ],
    faqs: [
      { q: "How quickly can you onboard?", a: "Most clients are fully operational within 10–14 business days." },
      { q: "What industries do you support?", a: "We serve insurance, SaaS, e-commerce, healthcare, finance, and more." },
      { q: "Do you offer custom SLAs?", a: "Yes — all engagements include custom SLAs tailored to your KPIs." },
    ],
  },
  "outbound-sales": {
    headline: "Your Pipeline. Our Problem.",
    subheadline: "A dedicated outbound sales team that fills your calendar with qualified opportunities — so your closers can close.",
    benefits: [
      "Trained, dedicated SDRs per campaign",
      "Multi-channel outreach (call, email, LinkedIn)",
      "CRM integration and full pipeline visibility",
      "Weekly performance reporting",
      "Proven scripts and objection-handling playbooks",
    ],
    process: [
      { step: "ICP Definition", description: "We define your ideal customer profile and targeting criteria." },
      { step: "Sequence Build", description: "We craft high-converting multi-touch outreach sequences." },
      { step: "Launch & Dial", description: "Outreach begins across all channels with full tracking." },
      { step: "Optimize", description: "Weekly analysis and A/B testing to improve conversion rates." },
    ],
    faqs: [
      { q: "How many calls does your team make per day?", a: "Our SDRs average 80–120 quality touchpoints per day." },
      { q: "Can you integrate with our CRM?", a: "Yes — we integrate with Salesforce, HubSpot, Pipedrive, and most major CRMs." },
    ],
  },
  "lead-generation": {
    headline: "High-Intent Leads. Delivered.",
    subheadline: "Stop buying spray-and-pray data. We generate qualified leads with verified intent across every channel you need.",
    benefits: [
      "Multi-channel lead acquisition (paid, organic, outbound)",
      "Intent-based targeting and segmentation",
      "Real-time lead delivery to your team",
      "Lead qualification and scoring included",
      "Cost-per-lead pricing available",
    ],
    process: [
      { step: "Define", description: "We profile your ideal lead by demographics, behavior, and intent signals." },
      { step: "Source", description: "We activate paid, content, and outbound channels simultaneously." },
      { step: "Qualify", description: "Every lead is verified and scored before delivery." },
      { step: "Deliver", description: "Leads flow directly into your CRM in real-time." },
    ],
    faqs: [
      { q: "What is your average lead quality?", a: "Our leads average 3–4x higher conversion rates vs. typical list providers." },
    ],
  },
  "appointment-setting": {
    headline: "Qualified Meetings. Every Week.",
    subheadline: "We handle the prospecting, follow-up, and scheduling so your sales team shows up to interested buyers.",
    benefits: [
      "Trained appointment setters per vertical",
      "Multi-touch follow-up sequences",
      "Calendar integration (Calendly, Google, Outlook)",
      "Guaranteed show-up rates",
      "Full call recordings for training",
    ],
    process: [
      { step: "Prospecting", description: "We identify and contact your ideal buyer profile." },
      { step: "Outreach", description: "Personalized multi-channel sequences drive response." },
      { step: "Set", description: "Qualified prospects are booked directly into your calendar." },
      { step: "Confirm", description: "Automated reminders ensure maximum show-up rates." },
    ],
    faqs: [
      { q: "What industries do you specialize in?", a: "Insurance, SaaS, home improvement, finance, and B2B services." },
    ],
  },
  "media-buying": {
    headline: "Every Dollar. Placed With Purpose.",
    subheadline: "Strategic media acquisition engineered to maximize reach, minimize waste, and deliver measurable cost-per-acquisition.",
    benefits: [
      "Cross-channel media planning and placement",
      "Real-time bid optimization",
      "Audience segmentation and targeting",
      "Brand safety and viewability monitoring",
      "Transparent reporting with attribution",
    ],
    process: [
      { step: "Plan", description: "We build a media plan aligned to your audience and budget." },
      { step: "Place", description: "Campaigns go live across premium inventory." },
      { step: "Optimize", description: "Daily bid management and creative rotation." },
      { step: "Report", description: "Weekly attribution reports showing true ROI." },
    ],
    faqs: [
      { q: "What platforms do you buy on?", a: "Meta, Google, YouTube, TikTok, programmatic, and premium direct placements." },
    ],
  },
  "performance-marketing": {
    headline: "Results or Nothing.",
    subheadline: "Data-driven campaigns where every dollar is tracked, every result is accountable, and performance is the only metric that matters.",
    benefits: [
      "Full-funnel campaign strategy and execution",
      "Creative development and testing",
      "Real-time performance dashboards",
      "Multi-channel attribution modeling",
      "CRO (Conversion Rate Optimization)",
    ],
    process: [
      { step: "Audit", description: "We assess your current performance and identify gaps." },
      { step: "Strategy", description: "We build a data-backed performance roadmap." },
      { step: "Launch", description: "Campaigns go live with full tracking and creative testing." },
      { step: "Scale", description: "We scale winners and kill losers systematically." },
    ],
    faqs: [
      { q: "What is your average ROAS?", a: "Our clients average 4–8x ROAS depending on vertical and funnel stage." },
    ],
  },
  "meta-advertising": {
    headline: "Meta That Actually Performs.",
    subheadline: "Creative-led, algorithm-optimized Facebook and Instagram campaigns that scale profitably at every stage of growth.",
    benefits: [
      "Full campaign setup and optimization",
      "Creative strategy and production",
      "Audience research and custom audiences",
      "Pixel and conversion API setup",
      "Weekly performance and creative reporting",
    ],
    process: [
      { step: "Research", description: "Audience analysis and competitor creative audit." },
      { step: "Creative", description: "High-performing ad creatives designed and produced." },
      { step: "Launch", description: "Campaigns launched with proper tracking and structure." },
      { step: "Optimize", description: "Daily optimization based on early performance signals." },
    ],
    faqs: [
      { q: "Do you create the ad creatives?", a: "Yes — our team handles copy, design, and video production." },
    ],
  },
  "email-marketing": {
    headline: "Email That Earns.",
    subheadline: "High-converting email systems that nurture, retain, and reactivate your audience at every lifecycle stage — automatically.",
    benefits: [
      "Full email system design and setup",
      "Welcome, nurture, and retention flows",
      "List segmentation and personalization",
      "A/B testing and performance optimization",
      "Deliverability management",
    ],
    process: [
      { step: "Audit", description: "We audit your current list, flows, and deliverability." },
      { step: "Strategy", description: "We map a complete email funnel from acquisition to retention." },
      { step: "Build", description: "Flows and templates designed and deployed in your ESP." },
      { step: "Optimize", description: "Ongoing testing to improve open rates, clicks, and revenue." },
    ],
    faqs: [
      { q: "Which email platforms do you work with?", a: "Klaviyo, Mailchimp, ActiveCampaign, HubSpot, ConvertKit, and more." },
    ],
  },
  "web-development": {
    headline: "Sites That Sell.",
    subheadline: "Conversion-obsessed web development — from landing pages to full platforms — built for performance, speed, and measurable ROI.",
    benefits: [
      "Next.js, React, and modern stack development",
      "Core Web Vitals optimization (90+ scores)",
      "Mobile-first responsive design",
      "SEO-ready architecture from day one",
      "CMS integration and easy content management",
    ],
    process: [
      { step: "Discovery", description: "We map goals, audience, and technical requirements." },
      { step: "Design", description: "Custom UI/UX designed for conversion and engagement." },
      { step: "Build", description: "Production-quality development with full QA." },
      { step: "Launch", description: "Go live with performance monitoring and ongoing support." },
    ],
    faqs: [
      { q: "What is your typical project timeline?", a: "Most projects deliver in 4–10 weeks depending on scope." },
      { q: "Do you provide ongoing support?", a: "Yes — we offer monthly retainer packages for maintenance and growth." },
    ],
  },
  "ui-ux-design": {
    headline: "Design That Converts.",
    subheadline: "User experiences crafted with precision — intuitive, beautiful, and optimized for the action you need your visitor to take.",
    benefits: [
      "User research and persona development",
      "Wireframes and interactive prototypes",
      "Brand-aligned visual design systems",
      "Usability testing and iteration",
      "Handoff-ready Figma deliverables",
    ],
    process: [
      { step: "Research", description: "We study your users, competitors, and conversion data." },
      { step: "Wireframe", description: "Information architecture and flow mapped out." },
      { step: "Design", description: "High-fidelity design built to your brand and goals." },
      { step: "Test", description: "Usability tested and refined before development handoff." },
    ],
    faqs: [],
  },
  "seo-services": {
    headline: "Own the Search.",
    subheadline: "Organic growth strategies that build authority, drive qualified traffic, and compound in value — month after month.",
    benefits: [
      "Technical SEO audit and optimization",
      "Keyword research and content strategy",
      "On-page and off-page optimization",
      "Link building and authority development",
      "Monthly rank tracking and reporting",
    ],
    process: [
      { step: "Audit", description: "Full technical, on-page, and off-page SEO audit." },
      { step: "Strategy", description: "Keyword map and content roadmap aligned to revenue." },
      { step: "Execute", description: "Implementation across technical, content, and authority." },
      { step: "Report", description: "Monthly ranking reports with revenue attribution." },
    ],
    faqs: [
      { q: "How long before I see results?", a: "Most clients see meaningful movement in 90–120 days, with compounding gains over 6–12 months." },
    ],
  },
  "digital-marketing": {
    headline: "Full-Funnel. Full-Scale.",
    subheadline: "Integrated digital marketing strategy connecting brand awareness to bottom-line revenue — across every channel.",
    benefits: [
      "Multi-channel strategy and execution",
      "Content marketing and distribution",
      "Paid, organic, and social media",
      "Analytics and attribution setup",
      "Monthly performance reviews",
    ],
    process: [
      { step: "Audit", description: "Full audit of your current digital presence and channels." },
      { step: "Strategy", description: "Integrated channel strategy built around your goals." },
      { step: "Execute", description: "Campaigns launched and managed across all channels." },
      { step: "Report", description: "Transparent reporting with full attribution." },
    ],
    faqs: [],
  },
  "it-consulting": {
    headline: "Technology That Works For You.",
    subheadline: "Strategic technology advisory that aligns your infrastructure with your growth trajectory — and eliminates what slows you down.",
    benefits: [
      "Technology stack audit and recommendations",
      "Cloud infrastructure strategy",
      "Automation and systems integration",
      "Security and compliance advisory",
      "Vendor selection and management",
    ],
    process: [
      { step: "Assess", description: "We audit your current technology stack and workflows." },
      { step: "Plan", description: "Technology roadmap aligned to business objectives." },
      { step: "Implement", description: "Managed implementation with minimal operational disruption." },
      { step: "Support", description: "Ongoing advisory and optimization." },
    ],
    faqs: [],
  },
  "business-consulting": {
    headline: "Strategy. Execution. Growth.",
    subheadline: "Executive-level business consulting that identifies the constraints holding your business back and builds the roadmap to break through them.",
    benefits: [
      "Business model and revenue analysis",
      "Growth strategy and market positioning",
      "Operations and process optimization",
      "Organizational design and team structure",
      "KPI framework and accountability systems",
    ],
    process: [
      { step: "Diagnose", description: "Deep dive into your business model, metrics, and constraints." },
      { step: "Design", description: "Strategic growth roadmap built for your market." },
      { step: "Implement", description: "Hands-on support during execution." },
      { step: "Review", description: "Quarterly reviews to track, adjust, and accelerate." },
    ],
    faqs: [],
  },
};

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const details = serviceDetails[slug];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    provider: {
      "@type": "Organization",
      name: SITE_CONFIG.legalName,
    },
    description: service.description,
    url: `${SITE_CONFIG.siteUrl}/services/${slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="min-h-[55vh] flex items-center relative overflow-hidden"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0, 212, 255, 0.07) 0%, transparent 60%), #04070F" }}>
        <div className="container mx-auto py-20">
          <nav className="flex items-center gap-2 text-sm text-white/30 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-cyan-400">{service.shortTitle}</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-5xl mb-6 block">{service.icon}</span>
              <p className="trust-badge mb-4">{service.shortTitle}</p>
              <h1 className="text-[clamp(2.5rem,5vw,5rem)] font-heading font-black tracking-tighter leading-[0.9] mb-6">
                {details?.headline || service.title}
              </h1>
              <p className="text-lg text-white/40 leading-relaxed mb-8">
                {details?.subheadline || service.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 font-bold text-white rounded-xl hover:scale-105 transition-transform"
                  style={{ background: "linear-gradient(135deg, #00D4FF 0%, #7B2FFF 100%)" }}>
                  Get Started <ArrowUpRight size={16} />
                </Link>
                <a href={`mailto:${SITE_CONFIG.contact.general}`}
                  className="inline-flex items-center gap-2 px-6 py-3 font-bold text-white/60 border border-white/10 hover:border-white/20 rounded-xl transition-all">
                  Email Us
                </a>
              </div>
            </div>

            {/* Benefits */}
            {details?.benefits && (
              <div className="glass rounded-2xl p-8 border border-white/5">
                <h3 className="text-sm font-bold tracking-widest uppercase text-white/30 mb-6">What You Get</h3>
                <ul className="space-y-4">
                  {details.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                      <CheckCircle size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Process */}
      {details?.process && (
        <section className="section-padding border-t border-white/5">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-black tracking-tighter mb-12">
              How it works.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {details.process.map((step, i) => (
                <div key={i} className="glass rounded-2xl p-6 border border-white/5 relative">
                  <span className="text-5xl font-heading font-black text-white/5 absolute top-4 right-4">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black text-white mb-4"
                    style={{ background: "linear-gradient(135deg, #00D4FF, #7B2FFF)" }}>
                    {i + 1}
                  </div>
                  <h3 className="font-heading font-black text-base mb-2">{step.step}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {details?.faqs && details.faqs.length > 0 && (
        <section className="section-padding border-t border-white/5">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-heading font-black tracking-tighter mb-12">
              Frequently asked questions.
            </h2>
            <div className="space-y-6">
              {details.faqs.map((faq, i) => (
                <div key={i} className="glass rounded-2xl p-6 border border-white/5">
                  <h3 className="font-heading font-black mb-3">{faq.q}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      <section className="section-padding border-t border-white/5">
        <div className="container mx-auto">
          <h2 className="text-2xl font-heading font-black tracking-tighter mb-8">Related Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SERVICES.filter((s) => s.slug !== slug).slice(0, 4).map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`}
                className="glass glass-hover rounded-xl p-5 border border-white/5 block">
                <span className="text-2xl mb-2 block">{s.icon}</span>
                <span className="text-sm font-heading font-black">{s.shortTitle}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding border-t border-white/5">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter mb-6">
            Ready to get started?
          </h2>
          <Link href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 font-bold text-white rounded-2xl hover:scale-105 transition-transform"
            style={{ background: "linear-gradient(135deg, #00D4FF 0%, #7B2FFF 100%)" }}>
            Book a Free Consultation <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
