import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Check, ChevronRight, HelpCircle, ShieldCheck, Zap, Layers, BarChart, CheckCircle2 } from "lucide-react";
import { SERVICES, SITE_CONFIG } from "@/lib/config";
import { CustomCursorTarget } from "@/components/ui/custom-cursor";
import { MultiStepForm } from "@/components/ui/multistep-form";

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
    description: `${SITE_CONFIG.brand} delivers premier ${service.title} solutions — ${service.description}`,
  };
}

interface ServiceDetailData {
  headline: string;
  subheadline: string;
  overview: string;
  image: string;
  benefits: { title: string; desc: string }[];
  capabilities: { title: string; desc: string }[];
  process: { step: string; title: string; description: string }[];
  faqs: { q: string; a: string }[];
}

const serviceDetails: Record<string, ServiceDetailData> = {
  "web-development": {
    headline: "High-Performance Web & Custom Software Solutions.",
    subheadline: "Transform your online presence with blazing-fast, mobile-optimized websites and custom web applications engineered to convert traffic into loyal clients.",
    overview: "At TechWhales, we don't just build websites — we create high-conversion digital experiences. Our engineering team combines modern front-end frameworks (Next.js, React, Tailwind CSS) with robust back-end architecture to deliver scalable, ultra-fast platforms tailored to your business goals.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    benefits: [
      { title: "Maximum Conversion Rate", desc: "Designed with user experience and conversion rate optimization (CRO) at the core." },
      { title: "Mobile & Speed Optimized", desc: "Sub-second load times and 100% responsive layouts across all mobile devices." },
      { title: "Custom Scalable Code", desc: "Built with clean Next.js/React architecture — no bloated templates or slow plugins." },
      { title: "SEO & Search Foundation", desc: "Search engine friendly structure, meta tags, and structured schema pre-built." },
      { title: "Bank-Grade Security", desc: "SSL encryption, secure API integrations, and robust data protection standards." },
      { title: "Continuous Maintenance", desc: "Ongoing updates, hosting management, and technical support whenever you need it." }
    ],
    capabilities: [
      { title: "Custom Web Applications", desc: "Tailored SaaS platforms, client portals, and interactive web tools." },
      { title: "High-Converting Landing Pages", desc: "Framer Motion animated landing pages tuned for paid media campaigns." },
      { title: "E-Commerce Stores", desc: "Custom online storefronts with seamless payment gateways and inventory sync." },
      { title: "CMS & Content Management", desc: "Headless CMS setups allowing your team to update content effortlessly." },
      { title: "API & Backend Integrations", desc: "Connect CRMs, payment providers, and automated lead workflows." },
      { title: "Speed & Performance Audits", desc: "Refactoring legacy sites to achieve 90+ Lighthouse performance scores." }
    ],
    process: [
      { step: "01", title: "Discovery & Blueprint", description: "We analyze your business requirements, target audience, and feature roadmap to draft technical wireframes." },
      { step: "02", title: "UI/UX & Prototyping", description: "Our design team crafts modern, interactive glassmorphism prototypes tailored to your brand identity." },
      { step: "03", title: "Agile Development", description: "We code your platform using clean TypeScript, React, and serverless backends with weekly progress builds." },
      { step: "04", title: "QA Testing & Launch", description: "Comprehensive mobile testing, security audits, and domain deployment with zero downtime." }
    ],
    faqs: [
      { q: "How long does a custom web development project take?", a: "Standard landing pages take 1-2 weeks, while complex web applications take 3-6 weeks depending on custom feature requirements." },
      { q: "Do you provide hosting and maintenance after launch?", a: "Yes, TechWhales offers managed cloud hosting, automated backups, and 24/7 technical maintenance packages." },
      { q: "Will my website be mobile-responsive and fast?", a: "Absolutely. Every website we launch is fully responsive across all device screen sizes and optimized for top Core Web Vitals performance." },
      { q: "Can you integrate our existing CRM or software?", a: "Yes, we build custom REST & GraphQL API integrations for HubSpot, Salesforce, Stripe, Zapier, and custom databases." }
    ]
  },
  "digital-marketing": {
    headline: "Data-Driven Marketing & Revenue Growth.",
    subheadline: "Scale your sales pipeline with omnichannel marketing strategies designed to generate qualified leads, boost brand equity, and maximize lifetime customer value.",
    overview: "In a crowded digital landscape, generic advertising fails. TechWhales implements full-funnel marketing strategies combining search engine positioning, targeted ad campaigns, and automated lead nurture flows to consistently deliver measurable ROI.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    benefits: [
      { title: "Scalable Customer Acquisition", desc: "Predictable lead pipelines built to scale with your sales targets." },
      { title: "Full-Funnel Optimization", desc: "Capturing customer intent from top-of-funnel awareness to closed sales." },
      { title: "Multi-Channel Reach", desc: "Unified messaging across Google Search, Meta, LinkedIn, and Email." },
      { title: "Transparent ROI Analytics", desc: "Live dashboard tracking cost per acquisition (CPA) and customer lifetime value." },
      { title: "Targeted Audience Segmenting", desc: "Advanced demographic and intent targeting ensuring zero wasted ad spend." },
      { title: "Continuous Campaign Testing", desc: "A/B creative testing to continuously lower customer acquisition costs." }
    ],
    capabilities: [
      { title: "Search Engine Optimization (SEO)", desc: "Organic rankings for high-intent keywords driving sustainable search traffic." },
      { title: "Social Media Advertising", desc: "Precision advertising on Meta, TikTok, Instagram, and LinkedIn." },
      { title: "Email & SMS Nurturing", desc: "Automated sequence flows converting cold prospects into repeat buyers." },
      { title: "Conversion Copywriting", desc: "Compelling sales copy engineered to trigger action across all channels." },
      { title: "Competitor Market Analysis", desc: "Deep market intelligence identifying untapped ad opportunities." },
      { title: "Brand Reputation Management", desc: "Building authority, positive reviews, and strong market sentiment." }
    ],
    process: [
      { step: "01", title: "Market & Funnel Audit", description: "We analyze your current metrics, competitor campaigns, and ideal client profile." },
      { step: "02", title: "Omnichannel Strategy", description: "Designing tailored ad creatives, sales funnels, and landing page touchpoints." },
      { step: "03", title: "Campaign Execution", description: "Launching targeted ad sets with strict bid strategies and conversion tracking." },
      { step: "04", title: "Scale & Optimize", description: "Doubling down on top-performing audience segments to maximize ROI." }
    ],
    faqs: [
      { q: "Which marketing channel is best for my business?", a: "We analyze your target buyer demographic to recommend the optimal mix of Google Search (high intent) and Social Paid Media (brand discovery)." },
      { q: "How do you track campaign performance?", a: "We set up custom multi-touch attribution tracking providing clear reports on leads, sales conversions, and ROAS." },
      { q: "What monthly budget do I need to start?", a: "We tailor campaign structures for both growing businesses and enterprise brands, recommending starting budgets based on industry benchmarks." },
      { q: "Do you create the ad graphics and videos?", a: "Yes, our in-house creative team designs all banner graphics, ad copy, and video assets for your campaigns." }
    ]
  },
  "media-buying": {
    headline: "High-Yield Paid Traffic & Media Acquisition.",
    subheadline: "Dominate paid advertising networks with high-volume, data-backed media buying campaigns engineered for maximum return on ad spend (ROAS).",
    overview: "TechWhales manages large-scale paid traffic portfolios across Google Ads, Meta Ads Manager, TikTok, and Native ad networks. Our media buyers use real-time bidding algorithms and aggressive creative testing to capture high-intent buyers at scale.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    benefits: [
      { title: "Aggressive ROAS Optimization", desc: "Focused relentlessly on profitability and driving net revenue return." },
      { title: "Cross-Platform Scaling", desc: "Seamlessly expanding winning campaigns across Meta, Google, and TikTok." },
      { title: "High-Volume Ad Creative", desc: "Constant supply of fresh image and video ad variations to prevent ad fatigue." },
      { title: "Fraud & Bot Protection", desc: "Advanced click fraud filtering ensuring every dollar goes to real human buyers." },
      { title: "Whitelisted Ad Accounts", desc: "High-limit agency ad accounts ensuring uninterrupted campaign delivery." },
      { title: "Real-Time Bid Management", desc: "Automated bid rules preventing overspending during off-peak hours." }
    ],
    capabilities: [
      { title: "Google Search & Shopping Ads", desc: "Capturing high-intent keyword searches directly at the decision point." },
      { title: "Meta (Facebook & Instagram) Ads", desc: "Visual storytelling and retargeting ads built for high engagement." },
      { title: "TikTok & Video Ads", desc: "Short-form native video ad creative tuned for viral conversion." },
      { title: "Native & Display Media", desc: "Content-integrated native advertising across tier-1 publisher networks." },
      { title: "Retargeting & LTV Funnels", desc: "Recapturing site visitors with dynamic product ads and custom offers." },
      { title: "Pixel & Server API Tracking", desc: "CAPI integration ensuring 100% accurate conversion data post-iOS14." }
    ],
    process: [
      { step: "01", title: "Media Audit & Setup", description: "Reviewing account structure, conversion pixels, and historical data points." },
      { step: "02", title: "Creative Production", description: "Building high-converting ad variations, headlines, and video hooks." },
      { step: "03", title: "Controlled Testing", description: "Testing audience angles with controlled budgets to identify clear winners." },
      { step: "04", title: "Aggressive Scaling", description: "Increasing budgets on profitable ad sets while maintaining strict ROAS targets." }
    ],
    faqs: [
      { q: "What ad platforms do you specialize in?", a: "We manage media buying across Google Search/Display, Meta (Facebook/Instagram), TikTok, YouTube, and Native ad networks." },
      { q: "How do you handle ad fatigue?", a: "We launch new creative variations weekly (images, copy hooks, video clips) to ensure audience engagement remains high." },
      { q: "Can you help fix disabled ad accounts or tracking issues?", a: "Yes, we assist with agency whitelisted accounts and implement Conversion API (CAPI) server tracking to resolve attribution loss." },
      { q: "What is your pricing model for media buying?", a: "We offer flexible structures including management fees or performance-based revenue shares aligned with your growth." }
    ]
  },
  "search-monetization": {
    headline: "High-Yield Domain & Search Traffic Monetization.",
    subheadline: "Maximize domain portfolio yields and search arbitrage returns with enterprise feed optimization and real-time yield management.",
    overview: "TechWhales provides end-to-end search traffic monetization solutions for domain investors, publishers, and arbitrage teams. Leveraging top-tier search partner feeds and algorithmic traffic routing, we unlock maximum yield from digital assets.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
    benefits: [
      { title: "Top Tier Feed Partnerships", desc: "Direct access to high-RPM search feeds and premium advertiser inventory." },
      { title: "Automated Traffic Routing", desc: "Algorithmic routing ensuring traffic lands on highest paying monetization feeds." },
      { title: "Domain Parking Yield", desc: "Optimizing parked domain portfolios to generate passive monthly cash flow." },
      { title: "Real-Time Revenue Analytics", desc: "Sub-second reporting on RPMs, click-through rates, and daily earnings." },
      { title: "Compliance Protection", desc: "Strict traffic quality monitoring keeping your feeds compliant and active." },
      { title: "Low Latency Landing Pages", desc: "Ultra-fast search templates designed to maximize user click interaction." }
    ],
    capabilities: [
      { title: "Search Arbitrage Campaigns", desc: "Driving targeted paid search traffic to monetized search result feeds." },
      { title: "Domain Portfolio Optimization", desc: "Custom keyword mapping and landers for high-value domain names." },
      { title: "Traffic Quality Verification", desc: "Bot detection and IVT filtering protecting feed compliance." },
      { title: "Feed Customization", desc: "Tailoring search vertical layouts for healthcare, finance, legal, and auto." },
      { title: "Dynamic Keyword Injection", desc: "Matching user intent dynamically to increase click-through rates." },
      { title: "Payout & Revenue Tracking", desc: "Automated monthly accounting and transparent payout reporting." }
    ],
    process: [
      { step: "01", title: "Portfolio Evaluation", description: "Analyzing domain assets, traffic categories, and historical RPM metrics." },
      { step: "02", title: "Feed Integration", description: "Connecting domains or campaign traffic to high-paying search feeds." },
      { step: "03", title: "Traffic Optimization", description: "Testing keywords, lander layouts, and ad placements to elevate RPMs." },
      { step: "04", title: "Automated Scaling", description: "Expanding high-yield traffic sources with daily revenue tracking." }
    ],
    faqs: [
      { q: "What is search monetization?", a: "Search monetization connects website visitors or domain traffic with targeted search advertiser feeds, earning revenue on every click." },
      { q: "Can I monetize my existing domain portfolio?", a: "Yes, we optimize domain portfolios by assigning tailored search templates that match the domain's natural search intent." },
      { q: "How are payouts managed?", a: "We provide reliable monthly payouts with detailed earnings statements breakdown by domain or campaign." },
      { q: "Do you support search arbitrage traffic?", a: "Yes, we work with media buyers running compliant search arbitrage campaigns across major native and social platforms." }
    ]
  },
  "branding": {
    headline: "Brand Strategy & Visual Identity Systems.",
    subheadline: "Build an unforgettable corporate identity. We design authoritative brand strategies, logos, and visual systems that position you as the market leader.",
    overview: "Your brand is your company's most valuable asset. TechWhales crafts compelling brand identities that instantly convey trust, innovation, and industry authority. From strategic market positioning to sleek visual guidelines, we ensure your business stands out.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    benefits: [
      { title: "Instant Market Authority", desc: "Differentiate from competitors with a world-class, premium brand image." },
      { title: "Cohesive Visual System", desc: "Unified logo marks, color tokens, typography, and asset libraries." },
      { title: "Higher Pricing Power", desc: "Premium branding empowers your sales team to command top-tier pricing." },
      { title: "Clear Market Positioning", desc: "Messaging frameworks that clearly articulate your unique value proposition." },
      { title: "Turnkey Brand Book", desc: "Comprehensive brand guidelines ensuring consistency across all media." },
      { title: "Investor & Buyer Readiness", desc: "Professional identity systems built to attract institutional investors." }
    ],
    capabilities: [
      { title: "Logo & Mark Design", desc: "Memorable logo marks engineered for digital and physical applications." },
      { title: "Corporate Identity Systems", desc: "Color palettes, typography hierarchies, and visual design rules." },
      { title: "Brand Voice & Messaging", desc: "Taglines, mission statements, and value proposition frameworks." },
      { title: "Marketing & Sales Collateral", desc: "Pitch decks, business cards, brochures, and digital presentations." },
      { title: "Social Media Kit", desc: "Branded templates for LinkedIn, Twitter, Instagram, and YouTube." },
      { title: "Brand Guidelines Document", desc: "Full PDF brand manual for internal teams and agency partners." }
    ],
    process: [
      { step: "01", title: "Brand Discovery", description: "Deep dive into your market landscape, target audience, and business vision." },
      { step: "02", title: "Strategy & Positioning", description: "Defining core brand values, tone of voice, and competitive differentiation." },
      { step: "03", title: "Visual Design Concepts", description: "Crafting distinct visual directions, logo options, and color palettes." },
      { step: "04", title: "System Rollout", description: "Delivering final vector logo files, brand book, and asset packages." }
    ],
    faqs: [
      { q: "What is included in a complete branding package?", a: "Our complete package includes logo design, color palette, typography guidelines, brand strategy manual, social media kits, and business collateral." },
      { q: "How long does the branding process take?", a: "A full brand identity package typically takes 2-4 weeks from discovery to final delivery." },
      { q: "Will I receive vector source files?", a: "Yes, you receive complete ownership rights and source files (AI, EPS, SVG, PNG, PDF) for all designs." },
      { q: "Can you rebrand an existing company?", a: "Yes, we specialize in modernizing legacy brand identities while preserving existing brand equity and customer recognition." }
    ]
  },
  "affiliate-marketing": {
    headline: "End-to-End Affiliate Program Management.",
    subheadline: "Scale your revenue through publisher partnerships. We build, manage, and optimize performance-based affiliate networks for maximum product reach.",
    overview: "Tap into thousands of active publishers and media buyers. TechWhales manages turnkey affiliate programs, handling publisher recruitment, tracking setup, commission structures, and compliance so you only pay for verified sales.",
    image: "https://images.unsplash.com/photo-1552581234-26160860f376?q=80&w=2070&auto=format&fit=crop",
    benefits: [
      { title: "Pay-For-Performance Model", desc: "Zero wasted budget — only pay commissions on verified sales or qualified leads." },
      { title: "Active Publisher Network", desc: "Direct access to top-tier media buyers, influencers, and content publishers." },
      { title: "Fraud Prevention Systems", desc: "Proprietary monitoring blocking fake leads, brand bidding, and click fraud." },
      { title: "High-Converting Landers", desc: "Optimized promotional landing pages and banners for your affiliates." },
      { title: "Seamless Platform Tracking", desc: "Integration with Everflow, Impact, HasOffers, or custom platforms." },
      { title: "Dedicated Affiliate Managers", desc: "Hands-on relationship management supporting top-performing partners." }
    ],
    capabilities: [
      { title: "Affiliate Program Setup", desc: "Configuring payout models (CPA, CPL, Revenue Share) and terms of service." },
      { title: "Publisher Recruitment", desc: "Proactively recruiting high-volume affiliates in your specific industry niche." },
      { title: "Creative Asset Library", desc: "Providing affiliates with proven banners, email copy, and ad templates." },
      { title: "Compliance Enforcement", desc: "Monitoring traffic sources to prevent trademark violation or spam." },
      { title: "Payout & Accounting Setup", desc: "Streamlining partner payouts and monthly performance reporting." },
      { title: "Offer Conversion Optimization", desc: "Continuously improving sales landers to boost affiliate conversion rates." }
    ],
    process: [
      { step: "01", title: "Program Architecture", description: "Designing commission structures, terms of service, and tracking parameters." },
      { step: "02", title: "Platform Integration", description: "Setting up tracking pixels and affiliate portals on leading network software." },
      { step: "03", title: "Publisher Onboarding", description: "Recruiting vetted publishers and equipping them with high-converting marketing assets." },
      { step: "04", title: "Optimization & Scale", description: "Managing affiliate relationships, running promotional contests, and scaling top volume." }
    ],
    faqs: [
      { q: "What affiliate platforms do you work with?", a: "We manage programs on Everflow, Impact, CJ Affiliate, ShareASale, ClickBank, and custom tracking platforms." },
      { q: "How do you protect my brand from affiliate fraud?", a: "We enforce strict publisher terms, use anti-fraud tracking tools, and perform daily audits on traffic quality." },
      { q: "What commission structure should I offer?", a: "We conduct competitive market research to design CPA/CPL models that attract top publishers while protecting your margins." },
      { q: "Can you manage publisher payouts for us?", a: "Yes, we handle payout reconciliation and partner communications seamlessly." }
    ]
  },
  "business-outsourcing": {
    headline: "Scale Operations with Dedicated Remote Teams.",
    subheadline: "Reduce operational overhead by up to 60%. We recruit, train, and manage dedicated remote customer support, sales, and back-office operations teams.",
    overview: "Growth requires focus. TechWhales Business Process Outsourcing (BPO) equips your company with highly trained remote professionals handling customer support, lead intake, sales outreach, and administrative tasks with 24/7 reliability.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    benefits: [
      { title: "Up to 60% Cost Savings", desc: "Cut payroll overhead without sacrificing quality or service speed." },
      { title: "24/7 Operational Coverage", desc: "Round-the-clock customer support and lead response across time zones." },
      { title: "Rigorous Candidate Vetting", desc: "Top 2% remote talent with fluent English communication and domain expertise." },
      { title: "Custom SOP Training", desc: "Teams fully trained on your internal software, scripts, and company workflows." },
      { title: "Dedicated Team Leads", desc: "In-house operations managers overseeing daily KPIs and quality assurance." },
      { title: "Flexible Scaling", desc: "Rapidly scale team size up or down based on seasonal volume spikes." }
    ],
    capabilities: [
      { title: "Customer Service Teams", desc: "Omnichannel support via live chat, email, phone, and ticket helpdesks." },
      { title: "Outbound Sales & Lead Intake", desc: "Dedicated reps qualifying leads, booking calendar calls, and closing deals." },
      { title: "Data Entry & Administration", desc: "Accurate back-office data processing, CRM updates, and document handling." },
      { title: "Technical Support", desc: "Level 1 & Level 2 technical troubleshooting for SaaS and tech platforms." },
      { title: "Dispatch & Logistics", desc: "Managing scheduling, routing, and order tracking communications." },
      { title: "Quality Assurance Monitoring", desc: "Regular call audits and performance reviews guaranteeing SLA standards." }
    ],
    process: [
      { step: "01", title: "Workflow Analysis", description: "Mapping out your operational processes, required software skills, and SLA targets." },
      { step: "02", title: "Talent Recruitment", description: "Sourcing and interviewing pre-vetted specialists tailored to your industry." },
      { step: "03", title: "SOP Training & Integration", description: "Intensive training on your product, brand tone, scripts, and software tools." },
      { step: "04", title: "Live Deployment & Management", description: "Launching your team with daily oversight from dedicated TechWhales managers." }
    ],
    faqs: [
      { q: "How quickly can you deploy a dedicated remote team?", a: "We can recruit, train, and deploy dedicated specialists within 1-2 weeks depending on team size." },
      { q: "What time zones do your teams support?", a: "Our teams provide 24/7/365 coverage, working U.S. Eastern, Central, Pacific, or global operating hours." },
      { q: "How do you ensure service quality?", a: "We assign dedicated Operations Managers who conduct daily call audits, ticket reviews, and KPI tracking." },
      { q: "Can our team use our existing software tools?", a: "Yes, our remote staff works directly within your Zendesk, Salesforce, HubSpot, Slack, or custom internal systems." }
    ]
  },
  "living-trust-probate": {
    headline: "Protect Assets & Secure Family Legacy.",
    subheadline: "Shield your family's estate from costly probate court. We prepare comprehensive revocable living trusts, wills, powers of attorney, and healthcare directives.",
    overview: "Without a properly structured estate plan, your family could face months of public probate court and heavy legal fees. TechWhales simplifies estate planning, preparing tailored legal documents that protect your home, financial assets, and loved ones.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2070&auto=format&fit=crop",
    benefits: [
      { title: "Bypass Probate Court", desc: "Save thousands in court fees and transfer assets directly to heirs." },
      { title: "100% Private Estate Plan", desc: "Keep financial details private, unlike public probate court records." },
      { title: "Comprehensive Asset Protection", desc: "Protect real estate, bank accounts, investments, and personal property." },
      { title: "Medical & Financial Power of Attorney", desc: "Designate trusted decision-makers in case of medical incapacitation." },
      { title: "Affordable Package Rates", desc: "Flat-fee estate planning with zero hidden attorney hourly billing." },
      { title: "Expert Document Preparation", desc: "Legally binding documents drafted strictly according to state statutes." }
    ],
    capabilities: [
      { title: "Revocable Living Trusts", desc: "Comprehensive trust documents keeping your property out of probate." },
      { title: "Pour-Over Wills", desc: "Safety-net legal wills directing remaining assets into your trust." },
      { title: "Durable Power of Attorney", desc: "Granting financial management authority to trusted family members." },
      { title: "Advance Healthcare Directives", desc: "Formal living wills specifying your medical care preferences." },
      { title: "Trust Funding Guidance", desc: "Step-by-step instructions for transferring property deeds and accounts." },
      { title: "Probate Document Assistance", desc: "Navigating court filings and estate administration when probate is required." }
    ],
    process: [
      { step: "01", title: "Estate Consultation", description: "We review your asset inventory, family structure, and specific legacy goals." },
      { step: "02", title: "Document Drafting", description: "Preparing customized trust instruments, powers of attorney, and property deeds." },
      { step: "03", title: "Review & Refinement", description: "Walking you through every clause in plain English to ensure complete satisfaction." },
      { step: "04", title: "Notarization & Execution", description: "Guiding final signature execution, notarization, and trust funding steps." }
    ],
    faqs: [
      { q: "What is the difference between a Will and a Living Trust?", a: "A Will goes through public probate court before assets are distributed, while a Living Trust transfers property privately and immediately without court intervention." },
      { q: "Do I need a trust if I only own one home?", a: "Yes, owning a home is often the primary reason to create a trust, as home ownership triggers mandatory probate in most states." },
      { q: "Can I make changes to my trust in the future?", a: "Yes, a Revocable Living Trust can be modified or updated at any time during your lifetime." },
      { q: "How much does a complete trust package cost?", a: "We provide transparent, flat-fee packages that cost significantly less than traditional hourly law firm rates." }
    ]
  },
  "tax-preparation": {
    headline: "Maximized Deductions & Precision Tax Prep.",
    subheadline: "Fulfill federal and state tax obligations with zero stress. Accurate, compliant tax returns for individuals, LLCs, and corporations engineered to save money.",
    overview: "Never pay more tax than legally required. TechWhales Tax Preparation combines experienced tax strategists with advanced software to identify every eligible deduction, ensuring complete compliance with IRS and state regulations.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2036&auto=format&fit=crop",
    benefits: [
      { title: "Maximum Tax Refund", desc: "Uncovering all legal tax credits, write-offs, and deductions available." },
      { title: "All 50 States Covered", desc: "Full filing capabilities across all state and federal tax jurisdictions." },
      { title: "Zero Filing Errors", desc: "Rigorous multi-stage audit checks eliminating costly filing mistakes." },
      { title: "Electronic E-Filing", desc: "Fast electronic submission for rapid IRS refund processing." },
      { title: "Business & Individual Returns", desc: "Expert handling of 1040, 1065, 1120S, and 1120 corporate tax forms." },
      { title: "Year-Round Tax Support", desc: "We support you 365 days a year, not just during April tax season." }
    ],
    capabilities: [
      { title: "Individual Tax Returns (1040)", desc: "W-2, 1099, investment income, and personal deduction optimization." },
      { title: "Small Business & LLC Taxes", desc: "Schedule C, partnership, and multi-member LLC tax reporting." },
      { title: "S-Corp & Corporate Tax Returns", desc: "Form 1120S and 1120 filings with owner-employee payroll optimization." },
      { title: "State & Local Tax Prep", desc: "State income tax, sales tax returns, and multi-state filings." },
      { title: "Prior Year Unfiled Taxes", desc: "Filing missing past-year tax returns to restore full IRS compliance." },
      { title: "Tax Planning Strategies", desc: "Proactive guidance structuring business expenses to lower next year's tax bill." }
    ],
    process: [
      { step: "01", title: "Secure Document Upload", description: "Upload your W-2s, 1099s, profit & loss statements to our secure portal." },
      { step: "02", title: "Deduction Review", description: "Our tax specialists analyze your records to find all legal write-offs." },
      { step: "03", title: "Return Preparation", description: "Preparing complete federal and state tax filings with double-check reviews." },
      { step: "04", title: "E-File & Confirmation", description: "E-filing directly with the IRS and providing digital copies for your records." }
    ],
    faqs: [
      { q: "What documents do I need to provide?", a: "W-2s, 1099s, bank statements, profit/loss reports, interest statements, and prior year tax returns." },
      { q: "How fast will I receive my tax refund?", a: "With our direct electronic filing and direct deposit, IRS refunds are typically issued within 14-21 days." },
      { q: "Can you prepare taxes for multiple states?", a: "Yes, we specialize in multi-state returns for businesses and remote employees working across different state lines." },
      { q: "What if I haven't filed taxes for several past years?", a: "We can retrieve official IRS transcripts and file all missing prior-year returns to bring you back into good standing." }
    ]
  },
  "tax-resolution-debt-relief": {
    headline: "IRS Debt Relief & Professional Representation.",
    subheadline: "Stop wage garnishments, bank levies, and aggressive IRS notices. We negotiate direct settlements, payment plans, and offer in compromise agreements.",
    overview: "Facing IRS back taxes can feel overwhelming. TechWhales provides licensed representation, stepping between you and tax authorities to halt enforcement actions, negotiate debt settlements, and resolve back tax burdens.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    benefits: [
      { title: "Halt IRS Collection Actions", desc: "Immediately pause wage garnishments, bank levies, and tax liens." },
      { title: "Settle For Less (Offer in Compromise)", desc: "Negotiate qualifying settlements paying a fraction of total back taxes." },
      { title: "Affordable Monthly Payment Plans", desc: "Establish manageable Installment Agreements suited to your cash flow." },
      { title: "Penalty Abatement", desc: "Request removal of accumulated IRS interest penalties due to hardship." },
      { title: "IRS Audit Defense", desc: "Professional representation standing by your side during tax audits." },
      { title: "Direct Contact Protection", desc: "We deal directly with the IRS so you never have to speak to agents." }
    ],
    capabilities: [
      { title: "Offer in Compromise (OIC)", desc: "Settling tax liabilities for significantly less than total owed amount." },
      { title: "IRS Installment Agreements", desc: "Negotiating structured monthly payment agreements with tax agencies." },
      { title: "Wage Garnishment Release", desc: "Filing urgent releases to stop IRS wage deductions from your paycheck." },
      { title: "Bank Levy Removal", desc: "Working to unfreeze levied bank accounts and restore funds." },
      { title: "Currently Not Collectible (CNC)", desc: "Securing temporary hardship status deferring collection activity." },
      { title: "Payroll Tax Debt Resolution", desc: "Resolving 941 business payroll tax liabilities and trust fund penalties." }
    ],
    process: [
      { step: "01", title: "Transfers & Power of Attorney", description: "Filing IRS Form 2848 so we can represent you and stop direct IRS calls." },
      { step: "02", title: "IRS Account Analysis", description: "Pulling official tax transcripts to verify exact balance owed and statute dates." },
      { step: "03", title: "Relief Strategy", description: "Determining whether you qualify for Offer in Compromise, Installment, or CNC status." },
      { step: "04", title: "Negotiation & Settlement", description: "Submitting formal relief proposals to the IRS and securing final resolution." }
    ],
    faqs: [
      { q: "Can the IRS really garnish my wages or freeze my bank account?", a: "Yes, the IRS has federal authority to seize funds. However, engaging our representation immediately pauses active enforcement." },
      { q: "What is an Offer in Compromise?", a: "An Offer in Compromise is an official IRS program allowing eligible taxpayers to settle tax debt for a lower amount based on income and assets." },
      { q: "Do I have to speak to the IRS personally?", a: "No. Once we file Power of Attorney, all IRS communications go directly through our team." },
      { q: "How long does tax resolution take?", a: "Collection pauses happen within 24-48 hours, while full case settlements typically take 3-6 months depending on IRS processing times." }
    ]
  },
  "real-estate-eviction": {
    headline: "Real Estate Legal Services & Eviction Support.",
    subheadline: "Protect your property assets. Professional real estate document preparation, deed transfers, lease agreements, and lawful tenant eviction assistance.",
    overview: "Property ownership requires strict legal compliance. TechWhales assists property owners, realtors, and landlords with deed preparation, lease drafting, and lawful eviction processes executed flawlessly according to local housing laws.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop",
    benefits: [
      { title: "100% Lawful Evictions", desc: "Strict adherence to state notice periods preventing case dismissals." },
      { title: "Fast Document Turnaround", desc: "Deed transfers and notices prepared within 24-48 business hours." },
      { title: "Landlord Asset Protection", desc: "Custom lease agreements shielding property owners from liability." },
      { title: "Quitclaim & Grant Deeds", desc: "Flawless real property deed transfers for family or corporate restructuring." },
      { title: "Affordable Flat Rates", desc: "Transparent pricing without expensive real estate law firm hourly billing." },
      { title: "Court Filing Guidance", desc: "Step-by-step assistance filing Unlawful Detainer court paperwork." }
    ],
    capabilities: [
      { title: "3-Day & 30-Day Eviction Notices", desc: "Drafting legally compliant pay-or-quit and notice to vacate forms." },
      { title: "Unlawful Detainer Filings", desc: "Preparing complete court paperwork to regain possession of property." },
      { title: "Quitclaim & Warranty Deeds", desc: "Transferring property ownership between individuals or LLCs." },
      { title: "Commercial & Residential Leases", desc: "Custom lease drafting protecting landlord rights and deposit terms." },
      { title: "Property Title Document Review", desc: "Reviewing title commitments and encumbrances prior to transfers." },
      { title: "Tenant Dispute Documentation", desc: "Formal breach-of-contract letters and property damage notices." }
    ],
    process: [
      { step: "01", title: "Property Assessment", description: "Reviewing lease terms, property details, and specific legal objectives." },
      { step: "02", title: "Notice Preparation", description: "Drafting mandatory statutory notices served according to local civil codes." },
      { step: "03", title: "Court Document Drafting", description: "Preparing Unlawful Detainer summons and complaints for court filing." },
      { step: "04", title: "Resolution & Execution", description: "Guiding final deed recording or law enforcement lockout coordination." }
    ],
    faqs: [
      { q: "How long does a legal eviction process take?", a: "Depending on state civil codes, uncontested evictions typically take 3-6 weeks from initial notice service to property recovery." },
      { q: "Can I evict a tenant without a written lease?", a: "Yes, month-to-month tenancy laws still apply, allowing landlords to serve statutory notices to vacate." },
      { q: "How do I transfer a property deed into my LLC?", a: "We prepare a Quitclaim or Grant Deed and handle recording instructions with the county recorder's office." },
      { q: "Why should I use your service instead of doing it myself?", a: "A single mistake on an eviction notice can restart the entire multi-week process. We ensure 100% legal accuracy from day one." }
    ]
  },
  "family-law-divorce": {
    headline: "Compassionate Family Law & Divorce Guidance.",
    subheadline: "Navigate sensitive family legal matters with care and dignity. Professional assistance with uncontested divorces, child custody agreements, and property division.",
    overview: "Family transitions require clear, compassionate guidance. TechWhales helps individuals navigate divorce proceedings, custody arrangements, and spousal support agreements smoothly without overwhelming legal fees.",
    image: "https://images.unsplash.com/photo-1505664173615-515c15dc9a6f?q=80&w=2072&auto=format&fit=crop",
    benefits: [
      { title: "Uncontested Divorce Solutions", desc: "Streamlined filings saving time and avoiding hostile courtroom battles." },
      { title: "Child Custody & Support", desc: "Drafting fair parenting plans prioritized around the child's best interests." },
      { title: "Marital Property Settlement", desc: "Clear division of assets, real estate, debts, and retirement funds." },
      { title: "Complete Confidentiality", desc: "Discreet and respectful document handling protecting family privacy." },
      { title: "Transparent Flat Pricing", desc: "Manageable package pricing keeping divorce affordable for both parties." },
      { title: "Fast Court Submission", desc: "Preparing mandatory state family court forms with zero filing errors." }
    ],
    capabilities: [
      { title: "Divorce Summons & Petition", desc: "Preparing initial divorce filings and financial disclosure declarations." },
      { title: "Marital Settlement Agreements", desc: "Comprehensive legal agreements covering property, debt, and support." },
      { title: "Parenting Plans & Custody", desc: "Structuring physical custody, visitation schedules, and holiday routines." },
      { title: "Child & Spousal Support Calculators", desc: "Calculating state guideline support figures for fair agreements." },
      { title: "Name Change Petitions", desc: "Restoring maiden names during or after divorce proceedings." },
      { title: "Legal Separation Filings", desc: "Formal legal separation paperwork when divorce is not preferred." }
    ],
    process: [
      { step: "01", title: "Private Intake", description: "Understanding your family dynamic, assets, and child custody priorities." },
      { step: "02", title: "Document Drafting", description: "Preparing petitions, financial disclosures, and proposed settlement terms." },
      { step: "03", title: "Review & Agreement", description: "Fine-tuning terms to ensure both parties reach a fair, mutual understanding." },
      { step: "04", title: "Court Filing & Final Decree", description: "Submitting paperwork to family court to receive your official judgment." }
    ],
    faqs: [
      { q: "What is an uncontested divorce?", a: "An uncontested divorce occurs when both spouses agree on key terms like property division, child custody, and support without trial." },
      { q: "How long does a divorce take to finalize?", a: "Most states have a mandatory waiting period (typically 3-6 months) before the court issues the final judgment decree." },
      { q: "How is child support calculated?", a: "Child support is calculated using state guidelines based on parental income, time share percentage, and healthcare costs." },
      { q: "Do both spouses need to appear in court?", a: "In most uncontested divorces, paperwork is submitted by mail/electronic filing without requiring court appearances." }
    ]
  },
  "small-claims-disputes": {
    headline: "Small Claims Prep & Dispute Resolution.",
    subheadline: "Recover money owed to you effectively. Complete small claims case preparation, evidence organization, demand letters, and court filing assistance.",
    overview: "Don't let unpaid debts or broken contracts ruin your business. TechWhales helps individuals and small businesses prepare compelling small claims cases, draft formal demand letters, and present winning evidence in court.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2070&auto=format&fit=crop",
    benefits: [
      { title: "Maximize Recovery Potential", desc: "Organizing strong evidence and contracts to give you the highest winning edge." },
      { title: "Formal Demand Letters", desc: "Professional legal demand letters often resolving disputes before court." },
      { title: "Proper Court Filings", desc: "Filing Plaintiffs Claims accurately with correct local jurisdiction courts." },
      { title: "Courtroom Talking Points", desc: "Providing clear summary briefs so you present your case with confidence." },
      { title: "Affordable Case Prep", desc: "Professional legal preparation for a fraction of small claims recovery value." },
      { title: "Post-Judgment Collection", desc: "Guidance enforcing monetary judgments through wage or bank garnishments." }
    ],
    capabilities: [
      { title: "Pre-Litigation Demand Letters", desc: "Formal notice demanding payment before filing lawsuits." },
      { title: "Small Claims Court Filing", desc: "Preparing Form SC-100 Plaintiffs Claim and serving defendants." },
      { title: "Evidence Binder Preparation", desc: "Organizing receipts, text messages, contracts, and photos logically." },
      { title: "Breach of Contract Claims", desc: "Recovering unpaid invoices, contractor deposits, or service debts." },
      { title: "Property Damage Recovery", desc: "Filing claims for vehicle, residential, or commercial property damage." },
      { title: "Judgement Collection Assistance", desc: "Preparing abstract of judgments and court collection paperwork." }
    ],
    process: [
      { step: "01", title: "Dispute Assessment", description: "Reviewing contracts, unpaid invoices, communications, and dollar amounts." },
      { step: "02", title: "Demand Letter Service", description: "Issuing a formal 10-day demand letter encouraging out-of-court settlement." },
      { step: "03", title: "Court Filing & Service", description: "Drafting the official small claims court petition and coordinating service." },
      { step: "04", title: "Hearing Preparation", description: "Equipping you with an organized evidence binder and key talking points." }
    ],
    faqs: [
      { q: "What is the dollar limit for small claims court?", a: "Limits vary by state, typically ranging from $5,000 to $12,500 for individuals and businesses." },
      { q: "Can attorneys represent me in small claims court?", a: "In most states, attorneys are not allowed in small claims court — parties represent themselves using our prepared case materials." },
      { q: "What if the defendant lives in another city or state?", a: "We determine proper jurisdiction rules and coordinate out-of-area service of process." },
      { q: "How do I collect the money after I win?", a: "We provide post-judgment guidance to file bank levies, wage garnishments, or property liens." }
    ]
  },
  "residential-design": {
    headline: "Architectural Drafting & Custom Home Design.",
    subheadline: "Turn your architectural vision into reality. We create detailed residential floor plans, CAD blueprints, and renovation drafts ready for construction permits.",
    overview: "Every great building starts with precision drafting. TechWhales delivers professional architectural drafting, custom home design plans, and renovation blueprints tailored for builders, homeowners, and permit approval offices.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop",
    benefits: [
      { title: "Permit-Ready Blueprints", desc: "Drafted strictly to national residential building codes for smooth city approval." },
      { title: "Custom Floor Plan Design", desc: "Layouts tailored to your lifestyle, spatial flow, and aesthetic vision." },
      { title: "CAD 2D & 3D Drafting", desc: "Precision computer-aided drafting ensuring accurate builder dimensions." },
      { title: "Renovation & Addition Plans", desc: "Detailed plans for home expansions, ADUs, and interior remodels." },
      { title: "Fast Revisions Turnaround", desc: "Quick adjustments based on engineer feedback or personal preferences." },
      { title: "Cost-Effective Design", desc: "Architectural quality drafting at accessible draftsperson pricing." }
    ],
    capabilities: [
      { title: "Custom Single-Family Home Design", desc: "Full architectural plans for new custom home construction." },
      { title: "ADU & Granny Flat Plans", desc: "Permit drafting for accessory dwelling units and garage conversions." },
      { title: "Interior Remodel Layouts", desc: "Removing load-bearing walls, kitchen redesigns, and bathroom expansions." },
      { title: "Elevation & Cross-Section Sheets", desc: "Detailed exterior elevations, foundation plans, and roof framing layouts." },
      { title: "Electrical & Plumbing Schematics", desc: "Outlining fixture locations, outlets, and plumbing runs." },
      { title: "As-Built Drawings", desc: "Documenting existing structural conditions prior to remodeling." }
    ],
    process: [
      { step: "01", title: "Conceptual Brief", description: "Discussing your design style, lot dimensions, square footage, and budget." },
      { step: "02", title: "Initial Floor Plan Sketch", description: "Drafting 2D room layouts and spatial flow options for your review." },
      { step: "03", title: "Full CAD Blueprints", description: "Developing full structural elevations, roof plans, and electrical schematics." },
      { step: "04", title: "Final Permit Package", description: "Delivering high-resolution CAD files (DWG/PDF) ready for city submittal." }
    ],
    faqs: [
      { q: "What files will I receive for construction?", a: "You receive complete print-ready PDF blueprint sets and editable AutoCAD (DWG) source files." },
      { q: "Are your plans permit-ready for city submittal?", a: "Yes, our plans adhere to standard IRC building codes and are formatted for plan check submittal." },
      { q: "Can you design an Accessory Dwelling Unit (ADU)?", a: "Yes, we specialize in detached and attached ADU plans optimized for local setback regulations." },
      { q: "How long does a complete home drafting set take?", a: "Initial floor plans take 1 week, with full blueprint sets completed in 2-3 weeks." }
    ]
  },
  "interior-staging": {
    headline: "3D Interior Design & Virtual Property Staging.",
    subheadline: "Sell properties faster and higher. Photorealistic 3D interior staging and visual renderings that bring real estate listings and architectural designs to life.",
    overview: "Empty properties take 70% longer to sell. TechWhales provides virtual 3D interior staging and photorealistic architectural renderings, transforming vacant spaces into beautifully furnished, high-converting property listings.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    benefits: [
      { title: "Sell Properties 50% Faster", desc: "Staged listings attract more views, open house visits, and purchase offers." },
      { title: "Fraction of Physical Staging Cost", desc: "Save thousands compared to hiring physical furniture rental companies." },
      { title: "Photorealistic 3D Quality", desc: "Ultra-high resolution lighting, textures, and modern furniture styling." },
      { title: "Multiple Interior Style Options", desc: "Choice of Modern, Scandinavian, Industrial, or Luxury furniture aesthetics." },
      { title: "24-48 Hour Delivery", desc: "Rapid turnaround keeping your real estate listings moving fast." },
      { title: "Virtual Renovation Preview", desc: "Visualize updated flooring, wall colors, and kitchen upgrades before building." }
    ],
    capabilities: [
      { title: "Virtual Furniture Staging", desc: "Adding modern 3D furniture into photos of vacant rooms." },
      { title: "Virtual Remodeling & Decluttering", desc: "Removing old furniture or changing wall colors, flooring, and lighting." },
      { title: "3D Architectural Renderings", desc: "Generating photorealistic interior renderings from 2D floor plans." },
      { title: "360 Virtual Tours", desc: "Interactive 3D walkthroughs for online real estate portals." },
      { title: "Commercial Office Staging", desc: "Designing collaborative workspace and executive office layouts." },
      { title: "Exterior Landscape Rendering", desc: "Visualizing pool additions, patio staging, and outdoor lighting." }
    ],
    process: [
      { step: "01", title: "Photo & Plan Submission", description: "Upload high-res photos of vacant rooms or 2D architectural floor plans." },
      { step: "02", title: "Style Selection", description: "Choose your preferred furniture theme (Modern, Luxury, Minimalist, Coastal)." },
      { step: "03", title: "3D Rendering", description: "Our 3D artists composite photorealistic furniture, lighting, and decor." },
      { step: "04", title: "High-Res Delivery", description: "Receiving print-ready images optimized for MLS, Zillow, and marketing web pages." }
    ],
    faqs: [
      { q: "How realistic do virtual 3D staged photos look?", a: "Our renderings use physical lighting engines and HD textures, making furniture virtually indistinguishable from real photos." },
      { q: "What is the turnaround time for staged photos?", a: "Standard virtual staging photo orders are delivered within 24 to 48 hours." },
      { q: "Can you remove existing messy furniture from photos?", a: "Yes, we offer virtual decluttering and item removal prior to adding new modern furniture." },
      { q: "Do staged photos work for MLS real estate listings?", a: "Yes, virtual staging is fully compliant with MLS guidelines when noted in the listing description." }
    ]
  },
  "human-resources": {
    headline: "Global HR Management & Dedicated Recruiting.",
    subheadline: "Build world-class remote teams. End-to-end talent acquisition, executive headhunting, onboarding, and payroll coordination for growing companies.",
    overview: "Finding top-tier talent is the biggest bottleneck in business growth. TechWhales HR & Talent Acquisition manages your entire hiring pipeline — from sourcing global specialists to managing remote onboarding, performance, and international payroll.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    benefits: [
      { title: "Top 1% Global Candidate Pool", desc: "Access pre-vetted engineers, marketers, operators, and sales leaders." },
      { title: "70% Faster Time-To-Hire", desc: "Streamlined candidate screening presenting qualified finalists in days." },
      { title: "Compliant Remote Onboarding", desc: "Managing employment contracts, NDAs, and international legal compliance." },
      { title: "Global Payroll Management", desc: "Seamless multi-currency contractor payouts and tax form collection." },
      { title: "Performance Management", desc: "Establishing clear KPIs, quarter reviews, and talent retention strategies." },
      { title: "Reduced Hire Replacement Risk", desc: "Replacement guarantees ensuring every candidate is a long-term fit." }
    ],
    capabilities: [
      { title: "Executive Headhunting", desc: "Direct outreach securing senior leadership and technical Directors." },
      { title: "Remote Technical Recruiting", desc: "Vetting full-stack developers, UI designers, and DevOps engineers." },
      { title: "Global Payroll & Benefits", desc: "Setting up compliant global payroll via Deel, Rippling, or Oyster." },
      { title: "Employee Handbook & SOPs", desc: "Drafting custom HR policy manuals and code-of-conduct documents." },
      { title: "Performance & Review Frameworks", desc: "Structuring 90-day reviews, KPI scorecards, and salary benchmarks." },
      { title: "Offboarding & Exit Audits", desc: "Managing professional separation procedures and asset recovery." }
    ],
    process: [
      { step: "01", title: "Talent Scorecard", description: "Defining exact technical requirements, compensation, and team culture fit." },
      { step: "02", title: "Sourcing & Vetting", description: "Reviewing hundreds of applicants and conducting rigorous technical screenings." },
      { step: "03", title: "Finalist Interviews", description: "Presenting top 3 qualified candidates with detailed evaluation dossiers." },
      { step: "04", title: "Onboarding & HR Support", description: "Managing contract signing, equipment setup, and first-week integration." }
    ],
    faqs: [
      { q: "What industries do you recruit for?", a: "We specialize in Technology, SaaS, Digital Marketing, Legal Support, Financial Services, and E-Commerce." },
      { q: "Do you handle international payroll and tax compliance?", a: "Yes, we manage international contractor agreements and compliant cross-border payroll processing." },
      { q: "What happens if a candidate doesn't work out?", a: "We provide a 90-day free replacement guarantee on all dedicated recruiting placements." },
      { q: "How long does it take to fill an open role?", a: "Initial candidate dossiers are delivered within 5-7 business days." }
    ]
  },
  "bookkeeping": {
    headline: "Precision Financial Bookkeeping & Accounting.",
    subheadline: "Maintain spotless financial records. Monthly account reconciliations, profit & loss reporting, accounts payable/receivable, and audit-ready books.",
    overview: "Clean financial books are essential for tax savings and business valuation. TechWhales Financial Bookkeeping provides meticulous daily expense tracking, monthly bank reconciliations, and clear financial statements so you always know your exact profit margins.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    benefits: [
      { title: "100% Tax-Ready Financials", desc: "Eliminate year-end tax prep panic with organized, categorized ledger accounts." },
      { title: "Monthly P&L & Balance Sheets", desc: "Clear executive reports showing cash flow, net profit, and expense trends." },
      { title: "Dedicated Bookkeeper", desc: "Personal financial specialist handling your QuickBooks or Xero accounts." },
      { title: "Accounts Payable & Receivable", desc: "Managing vendor invoices and ensuring your client bills are paid promptly." },
      { title: "Bank & Credit Card Reconciliation", desc: "Matching every transaction to prevent double charges or missing receipts." },
      { title: "Scalable Monthly Plans", desc: "Affordable flat-rate packages customized to your monthly transaction volume." }
    ],
    capabilities: [
      { title: "QuickBooks & Xero Management", desc: "Full setup, cleanup, and maintenance on leading accounting platforms." },
      { title: "Monthly Bank Reconciliations", desc: "Verifying credit card and bank statements against internal ledgers." },
      { title: "Financial Statement Preparation", desc: "Generating P&L, Balance Sheet, and Cash Flow statements monthly." },
      { title: "Payroll Ledger Integration", desc: "Syncing Gusto, ADP, or Paychex payroll data into accounting software." },
      { title: "Historical Book Cleanup", desc: "Fixing messy or un-reconciled financial records from previous years." },
      { title: "1099 Vendor Filing Prep", desc: "Tracking contractor payments and preparing end-of-year 1099-NEC forms." }
    ],
    process: [
      { step: "01", title: "Software Connection", description: "Securely linking your QuickBooks, Xero, and bank feeds for read-only access." },
      { step: "02", title: "Ledger Setup & Cleanup", description: "Standardizing your Chart of Accounts and categorizing historical transactions." },
      { step: "03", title: "Monthly Reconciliation", description: "Balancing all accounts and reviewing receipt documentation at month end." },
      { step: "04", title: "Executive Report Delivery", description: "Sending easy-to-read P&L statements and reviewing financial insights with you." }
    ],
    faqs: [
      { q: "What accounting software do you support?", a: "We work seamlessly within QuickBooks Online, Xero, Wave, FreshBooks, and NetSuite." },
      { q: "Can you fix past months or years of un-reconciled books?", a: "Yes, we offer specialized catch-up bookkeeping to clean up messy multi-year financial records." },
      { q: "How do you access my bank accounts securely?", a: "We use encrypted read-only Accountant Access permissions — we never have access to transfer funds." },
      { q: "How often will I receive financial reports?", a: "We deliver full Profit & Loss, Balance Sheet, and Cash Flow reports monthly by the 10th of each month." }
    ]
  }
};

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const details = serviceDetails[slug] || {
    headline: `${service.title}.`,
    subheadline: service.description,
    overview: `TechWhales delivers comprehensive, highly specialized ${service.title} services designed to achieve real results for your business. Our team handles strategy, execution, and continuous optimization.`,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    benefits: [
      { title: "Expert Execution", desc: "Specialized team members dedicated to your operational success." },
      { title: "Rapid Turnaround", desc: "Efficient workflows engineered to deliver fast, accurate milestones." },
      { title: "100% Transparency", desc: "Clear reporting and direct communication every step of the way." },
      { title: "Scalable Solutions", desc: "Flexible framework designed to grow as your business expands." },
      { title: "Cost-Effective Pricing", desc: "Transparent flat rates delivering maximum value without hidden fees." },
      { title: "Dedicated Support", desc: "Personal account manager standing by to assist your team." }
    ],
    capabilities: service.details.items.map(item => ({
      title: item,
      desc: `Professional ${item.toLowerCase()} tailored to your specific requirements.`
    })),
    process: [
      { step: "01", title: "Discovery", description: "Understanding your specific goals and operational requirements." },
      { step: "02", title: "Strategy", description: "Designing a customized action plan engineered for success." },
      { step: "03", title: "Execution", description: "Implementing solutions with strict quality control standards." },
      { step: "04", title: "Review", description: "Measuring performance and ensuring complete satisfaction." }
    ],
    faqs: [
      { q: `How do I get started with ${service.title}?`, a: "Simply fill out our 2-minute client assessment form below. Our team will review your details and contact you within 2 hours." },
      { q: "What is your pricing structure?", a: "We offer transparent flat-rate pricing tailored to the scope of your project, with zero hidden surprises." },
      { q: "Can I customize the service package?", a: "Yes, every engagement is customized to align directly with your company's operational needs." }
    ]
  };

  return (
    <div className="bg-[#08080a] text-white min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden relative border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/50 mb-10">
            <CustomCursorTarget>
              <Link href="/" className="hover:text-red-500 transition-colors">Home</Link>
            </CustomCursorTarget>
            <ChevronRight size={12} />
            <CustomCursorTarget>
              <Link href="/services" className="hover:text-red-500 transition-colors">Services</Link>
            </CustomCursorTarget>
            <ChevronRight size={12} />
            <span className="text-white font-black">{service.shortTitle}</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-xs font-bold uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                {service.category} Practice Group
              </div>
              
              <h1 className="text-[2.2rem] sm:text-[3.2rem] md:text-[4.2rem] font-heading font-black leading-[1.05] tracking-tighter uppercase mb-6 text-white">
                {details.headline}
              </h1>

              <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
                {details.subheadline}
              </p>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 mb-10 backdrop-blur-md">
                <p className="text-white/80 text-sm leading-relaxed">
                  {details.overview}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <CustomCursorTarget>
                  <Link 
                    href="#intake-form"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white bg-red-600 rounded-full hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto shadow-lg shadow-red-600/30"
                  >
                    Deploy {service.shortTitle} <ArrowUpRight size={16} />
                  </Link>
                </CustomCursorTarget>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white border border-white/20 rounded-full hover:bg-white/10 transition-all w-full sm:w-auto"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>

            {/* Right Featured Image */}
            <div className="lg:col-span-5 relative h-[380px] sm:h-[480px] md:h-[550px] rounded-3xl overflow-hidden group shadow-2xl border border-white/15">
              <Image 
                src={details.image} 
                alt={service.title} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#08080a]/80 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck size={16} className="text-red-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-white">Guaranteed Quality Standard</span>
                </div>
                <p className="text-xs text-white/60">Fully supported by TechWhales senior operational specialists.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE ADVANTAGES & BENEFITS GRID */}
      <section className="py-20 md:py-28 bg-[#0c0c0e] border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-widest text-red-500 font-bold block mb-3">Why TechWhales</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tighter uppercase text-white">
              Key Strategic Advantages
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {details.benefits.map((b, i) => (
              <div key={i} className="bg-[#121216] p-8 rounded-3xl border border-white/10 hover:border-red-500/40 transition-all duration-300 group">
                <div className="w-12 h-12 bg-red-600/10 rounded-2xl flex items-center justify-center mb-6 border border-red-500/20 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all">
                  <CheckCircle2 size={22} />
                </div>
                <h3 className="font-heading font-black text-lg text-white uppercase mb-2 group-hover:text-red-500 transition-colors">{b.title}</h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CAPABILITIES BREAKDOWN */}
      <section className="py-20 md:py-28 bg-[#08080a] border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-widest text-red-500 font-bold block mb-3">Deliverables</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tighter uppercase text-white">
              Core Service Capabilities
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {details.capabilities.map((cap, i) => (
              <div key={i} className="p-7 rounded-3xl bg-[#0f0f14] border border-white/10 flex flex-col justify-between hover:border-white/30 transition-all">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-2 h-2 rounded-full bg-red-600" />
                    <h3 className="font-heading font-black text-base uppercase text-white">{cap.title}</h3>
                  </div>
                  <p className="text-white/60 text-xs leading-relaxed">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EXECUTION PROCESS FRAMEWORK */}
      <section className="py-20 md:py-28 bg-[#0c0c0e] border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-widest text-red-500 font-bold block mb-3">Milestones</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tighter uppercase text-white">
              Our 4-Step Execution Framework
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {details.process.map((step, i) => (
              <div key={i} className="bg-[#121216] p-8 rounded-3xl border border-white/10 relative overflow-hidden flex flex-col justify-between">
                <div>
                  <span className="text-4xl font-heading font-black text-white/20 block mb-4">{step.step}</span>
                  <h3 className="text-xl font-heading font-black uppercase text-white mb-3">{step.title}</h3>
                  <p className="text-xs text-white/60 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS (FAQS) */}
      {details.faqs.length > 0 && (
        <section className="py-20 md:py-28 bg-[#08080a] border-b border-white/10">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-widest text-red-500 font-bold block mb-3">Clarity & Confidence</span>
              <h2 className="text-3xl sm:text-4xl font-heading font-black tracking-tighter uppercase text-white">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {details.faqs.map((faq, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#121216] border border-white/10">
                  <h3 className="font-heading font-black text-base sm:text-lg uppercase text-white mb-3 flex items-start gap-3">
                    <HelpCircle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed pl-8">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. SERVICE INTAKE SURVEY FORM */}
      <section id="intake-form" className="py-20 md:py-32 bg-[#04070f] text-white relative overflow-hidden">
        <div className="container mx-auto relative z-10 max-w-4xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-red-500 font-bold block mb-2">Priority Lead Intake</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tighter uppercase mb-4 text-white">
              Deploy {service.title}
            </h2>
            <p className="text-white/60 text-xs sm:text-base max-w-xl mx-auto">
              Complete the quick assessment below. Our team will review your specifications and issue a formal proposal within 2 hours.
            </p>
          </div>

          <MultiStepForm 
            serviceSlug={service.slug} 
            title={`Request ${service.shortTitle} Strategy`}
            subtitle={`Tailored solutions for ${service.title}`}
            theme="dark"
          />
        </div>
      </section>
    </div>
  );
}
