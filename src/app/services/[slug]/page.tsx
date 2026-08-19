import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Check, ChevronRight } from "lucide-react";
import { SERVICES, SITE_CONFIG } from "@/lib/config";
import { CustomCursorTarget } from "@/components/ui/custom-cursor";

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
  };
}

const serviceDetails: Record<string, {
  headline: string;
  subheadline: string;
  benefits: string[];
  process: { step: string; description: string }[];
  faqs: { q: string; a: string }[];
  image: string;
}> = {
  "living-trust-probate": {
    headline: "Protect Your Family.",
    subheadline: "Secure your assets and make sure your family is taken care of without the stress of probate court.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2070&auto=format&fit=crop",
    benefits: ["Avoid probate court", "Protect your assets", "Keep matters private", "Provide for your family"],
    process: [
      { step: "Consult", description: "We listen to your needs and understand your family situation." },
      { step: "Draft", description: "We prepare clear and legally sound trust documents." },
      { step: "Review", description: "We go over everything with you to ensure accuracy." },
      { step: "Finalize", description: "We help you sign and securely store your documents." }
    ],
    faqs: []
  },
  "family-law-divorce": {
    headline: "Support During Hard Times.",
    subheadline: "We provide compassionate and professional legal help to guide you through divorce and family matters.",
    image: "https://images.unsplash.com/photo-1505664173615-515c15dc9a6f?q=80&w=2072&auto=format&fit=crop",
    benefits: ["Compassionate support", "Fair asset division", "Child custody help", "Private and confidential"],
    process: [
      { step: "Consult", description: "We discuss your situation in a private meeting." },
      { step: "Plan", description: "We develop a strategy that protects your interests." },
      { step: "Mediate", description: "We work to reach fair agreements whenever possible." },
      { step: "Resolve", description: "We finalize the process so you can move forward." }
    ],
    faqs: []
  },
  "real-estate-eviction": {
    headline: "Property Protection.",
    subheadline: "Comprehensive legal assistance for buying, selling, managing real estate, and lawful eviction processes.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop",
    benefits: ["Accurate deed transfers", "Lawful evictions", "Contract review", "Dispute resolution"],
    process: [
      { step: "Review", description: "We review your property situation or contracts." },
      { step: "Prepare", description: "We prepare the necessary legal documents." },
      { step: "Execute", description: "We handle filings, notices, or negotiations." },
      { step: "Resolve", description: "We ensure a smooth resolution to protect your asset." }
    ],
    faqs: []
  },
  "small-claims-disputes": {
    headline: "Resolve Disputes Quickly.",
    subheadline: "If someone owes you money, we can help you prepare and present your small claims case effectively.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2070&auto=format&fit=crop",
    benefits: ["Clear case preparation", "Affordable assistance", "Proper court filing", "Higher chance of success"],
    process: [
      { step: "Review", description: "We review your dispute and evidence." },
      { step: "Prepare", description: "We organize your case for the judge." },
      { step: "File", description: "We handle the court filing process." },
      { step: "Guide", description: "We explain exactly what to say in court." }
    ],
    faqs: []
  },
  "tax-preparation": {
    headline: "Accurate Tax Prep.",
    subheadline: "We prepare personal and business taxes across all fifty states. Our goal is to ensure you get the maximum return possible.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2036&auto=format&fit=crop",
    benefits: ["Maximum return", "Accurate filing", "All fifty states", "Business and personal"],
    process: [
      { step: "Collect", description: "We gather all your tax documents safely." },
      { step: "Review", description: "We check for all possible deductions." },
      { step: "Prepare", description: "We prepare your return accurately." },
      { step: "File", description: "We file your taxes electronically." }
    ],
    faqs: []
  },
  "tax-resolution-debt-relief": {
    headline: "Get Out Of Tax Debt.",
    subheadline: "We provide professional representation for IRS audits and help you find a way out of tax debt.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    benefits: ["Audit defense", "Stop IRS letters", "Reduce tax debt", "Affordable payment plans"],
    process: [
      { step: "Assess", description: "We review the IRS notices and your total debt." },
      { step: "Plan", description: "We find the best relief program for you." },
      { step: "Negotiate", description: "We talk to the IRS on your behalf." },
      { step: "Settle", description: "We finalize the agreement to reduce your burden." }
    ],
    faqs: []
  },
  "residential-design": {
    headline: "Beautiful Home Plans.",
    subheadline: "We create accurate blueprints and residential plans tailored to your vision for your next home project.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop",
    benefits: ["Custom home design", "Accurate blueprints", "Fast turnaround", "Ready for construction"],
    process: [
      { step: "Vision", description: "We discuss your ideas and requirements." },
      { step: "Draft", description: "We create the initial floor plans." },
      { step: "Refine", description: "We adjust the plans based on your feedback." },
      { step: "Deliver", description: "We provide final blueprints ready for builders." }
    ],
    faqs: []
  },
  "interior-staging": {
    headline: "Stunning Property Staging.",
    subheadline: "We provide beautiful 3D interior design and property staging that helps realtors and owners sell homes faster.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    benefits: ["Realistic 3D staging", "Increase property value", "Sell homes faster", "Affordable visual updates"],
    process: [
      { step: "Review", description: "We review photos or plans of the property." },
      { step: "Design", description: "We design a beautiful interior layout." },
      { step: "Render", description: "We create high quality 3D images." },
      { step: "Deliver", description: "We send you the images for your listings." }
    ],
    faqs: []
  },
  "business-outsourcing": {
    headline: "Grow Your Team.",
    subheadline: "Expand your business with our reliable remote teams. We handle customer service, sales, and daily operations.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    benefits: ["Lower staffing costs", "Reliable support teams", "Focus on growth", "Flexible operations"],
    process: [
      { step: "Assess", description: "We determine exactly what tasks you need help with." },
      { step: "Assemble", description: "We build a dedicated team for your business." },
      { step: "Train", description: "We train the team on your specific processes." },
      { step: "Manage", description: "We oversee the daily work to ensure quality." }
    ],
    faqs: []
  },
  "digital-marketing": {
    headline: "Reach More Customers.",
    subheadline: "We run honest and effective marketing campaigns on social media and Google to bring real customers to your business.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    benefits: ["Increase brand awareness", "Get more leads", "Honest reporting", "Targeted advertising"],
    process: [
      { step: "Strategy", description: "We find out where your best customers spend time." },
      { step: "Create", description: "We make engaging ads and posts." },
      { step: "Launch", description: "We start the campaigns with a set budget." },
      { step: "Optimize", description: "We improve the ads daily to get better results." }
    ],
    faqs: []
  },
  "affiliate-marketing": {
    headline: "Partnerships That Scale.",
    subheadline: "End to end management of affiliate networks and publishers, tracking campaigns for maximum profitability.",
    image: "https://images.unsplash.com/photo-1552581234-26160860f376?q=80&w=2070&auto=format&fit=crop",
    benefits: ["Affiliate network setup", "Publisher recruitment", "Commission tracking", "Fraud prevention"],
    process: [
      { step: "Setup", description: "We configure your affiliate platform and tracking." },
      { step: "Recruit", description: "We recruit top tier publishers for your offers." },
      { step: "Manage", description: "Daily management of payouts and relationships." },
      { step: "Scale", description: "We scale performing partners for more growth." }
    ],
    faqs: []
  },
  "media-buying": {
    headline: "Paid Media Buying.",
    subheadline: "Strategic media acquisition engineered to maximize reach, minimize waste, and deliver measurable results.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    benefits: ["Cross channel planning", "Real time bid optimization", "Audience targeting", "Transparent reporting"],
    process: [
      { step: "Plan", description: "We build a media plan aligned to your audience." },
      { step: "Place", description: "Campaigns go live across premium inventory." },
      { step: "Optimize", description: "Daily bid management and creative rotation." },
      { step: "Report", description: "Weekly reports showing true return on investment." }
    ],
    faqs: []
  },
  "search-monetization": {
    headline: "Search Monetization.",
    subheadline: "Optimize domains and run high yield search arbitrage campaigns using top tier platforms.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
    benefits: ["Search arbitrage campaigns", "Domain portfolio optimization", "Real time reporting", "Maximum yield"],
    process: [
      { step: "Analyze", description: "We analyze your domain portfolio and traffic sources." },
      { step: "Deploy", description: "We deploy optimized feeds and landing pages." },
      { step: "Acquire", description: "We drive high intent traffic to your domains." },
      { step: "Yield", description: "Daily optimization to maximize your revenue." }
    ],
    faqs: []
  },
  "web-development": {
    headline: "Websites That Work.",
    subheadline: "We build fast, secure, and beautiful websites that represent your brand and are easy for your customers to use.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    benefits: ["Custom design", "Mobile friendly", "Fast loading speeds", "Easy to update"],
    process: [
      { step: "Plan", description: "We map out the structure of your new website." },
      { step: "Design", description: "We create a beautiful look that matches your brand." },
      { step: "Build", description: "We code the website to be fast and secure." },
      { step: "Launch", description: "We publish the site and ensure everything works." }
    ],
    faqs: []
  },
  "branding": {
    headline: "Brand Systems That Lead.",
    subheadline: "Define your company market positioning and create beautiful identity systems that command authority.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    benefits: ["Brand strategy", "Logo design", "Brand messaging", "Comprehensive guidelines"],
    process: [
      { step: "Discover", description: "Deep dive into your company values and market gaps." },
      { step: "Position", description: "We define your unique angle and message." },
      { step: "Design", description: "We build the visual system to match the positioning." },
      { step: "Apply", description: "Rollout across all digital and physical touchpoints." }
    ],
    faqs: []
  },
  "human-resources": {
    headline: "Elite Talent Acquisition.",
    subheadline: "Source, onboard, and manage remote talent and dedicated teams. We handle vetting so you can focus on building.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    benefits: ["Global talent sourcing", "Remote team onboarding", "Payroll coordination", "Performance management"],
    process: [
      { step: "Profile", description: "We define the exact skills and culture fit you need." },
      { step: "Source", description: "We headhunt top candidates globally." },
      { step: "Screen", description: "Rigorous technical and cultural interviews." },
      { step: "Onboard", description: "Seamless transition into your company workflow." }
    ],
    faqs: []
  },
  "bookkeeping": {
    headline: "Clear Financial Records.",
    subheadline: "Keep your business finances clean and organized. We track your expenses so you always know where you stand.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    benefits: ["Accurate tracking", "Monthly reports", "Ready for tax season", "Financial clarity"],
    process: [
      { step: "Connect", description: "We securely connect to your bank or accounting software." },
      { step: "Track", description: "We categorize all your daily expenses and income." },
      { step: "Reconcile", description: "We make sure the books match the bank exactly." },
      { step: "Report", description: "We send you a clear financial report every month." }
    ],
    faqs: []
  }
};

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  // Fallback to generic details if specific ones aren't mapped
  const details = serviceDetails[slug] || {
    headline: service.title,
    subheadline: service.description,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    benefits: ["Expert assistance", "Dedicated support", "Great solutions", "Real results"],
    process: [
      { step: "Listen", description: "Understanding your unique needs." },
      { step: "Plan", description: "Developing a clear approach." },
      { step: "Act", description: "Implementing the solution flawlessly." },
      { step: "Review", description: "Checking for success and quality." }
    ],
    faqs: []
  };

  let formLabel = "What is your primary objective?";
  let formOptions = ["Immediate Help", "Consultation", "Pricing info", "Long term Partnership"];

  if (service.category === "Legal") {
    formLabel = `What type of ${service.shortTitle} assistance do you need?`;
    formOptions = ["Urgent Legal Help", "Document Preparation", "Dispute Resolution", "General Consultation"];
  } else if (service.category === "Tax") {
    formLabel = `What is your primary tax concern?`;
    formOptions = ["Personal Tax Prep", "Business Taxes", "IRS Debt/Audit", "Tax Planning"];
  } else if (service.category === "Design") {
    formLabel = `What best describes your design project?`;
    formOptions = ["New Construction", "Remodel/Renovation", "Virtual Staging", "Commercial Space"];
  } else if (service.category === "Operations") {
    formLabel = `Where do you need operational support?`;
    formOptions = ["Remote Staffing", "HR & Recruiting", "Bookkeeping", "Process Outsourcing"];
  } else if (service.category === "Marketing") {
    formLabel = `What is your primary marketing goal?`;
    formOptions = ["More Leads/Sales", "Brand Awareness", "Social Media Growth", "Affiliate Partnerships"];
  } else if (service.category === "Technology") {
    formLabel = `What type of technology project?`;
    formOptions = ["New Website", "E-commerce Store", "Custom Web App", "Site Redesign"];
  } else if (service.category === "Monetization") {
    formLabel = `What is your primary monetization focus?`;
    formOptions = ["Domain Parking", "Search Arbitrage", "Ad Revenue", "Portfolio Management"];
  }
  
  if (slug === "family-law-divorce") {
    formLabel = "What specific family matter do you need help with?";
    formOptions = ["Filing for Divorce", "Child Custody", "Asset Division", "Mediation"];
  } else if (slug === "real-estate-eviction") {
    formLabel = "What real estate issue are you facing?";
    formOptions = ["Evicting a Tenant", "Drafting Leases", "Property Dispute", "Deed Transfer"];
  } else if (slug === "small-claims-disputes") {
    formLabel = "What is the nature of your dispute?";
    formOptions = ["Unpaid Debt", "Property Damage", "Breach of Contract", "Defending a Claim"];
  } else if (slug === "tax-resolution-debt-relief") {
    formLabel = "What tax issue are you facing?";
    formOptions = ["IRS Audit", "Back Taxes Owed", "Wage Garnishment", "Unfiled Returns"];
  }

  return (
    <div className="bg-white text-black min-h-screen">
      {/* HERO SECTION */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden relative">
        <div className="container mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black/40 mb-12">
            <CustomCursorTarget>
              <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>
            </CustomCursorTarget>
            <ChevronRight size={12} />
            <CustomCursorTarget>
              <Link href="/services" className="hover:text-red-600 transition-colors">Services</Link>
            </CustomCursorTarget>
            <ChevronRight size={12} />
            <span className="text-black">{service.shortTitle}</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 lg:pr-10">
              <span className="text-xs font-bold uppercase tracking-widest text-red-600 mb-4 block">
                {service.category}
              </span>
              <h1 className="text-[2.5rem] md:text-[4rem] font-heading font-black leading-[1.1] tracking-tighter uppercase mb-6 text-black">
                {details.headline}
              </h1>
              <p className="text-black/60 text-lg leading-relaxed mb-10 max-w-xl">
                {details.subheadline}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <CustomCursorTarget>
                  <Link 
                    href="/contact"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white bg-black rounded-full hover:bg-red-600 transition-all duration-300 w-full sm:w-auto"
                  >
                    Deploy {service.shortTitle} <ArrowUpRight size={16} />
                  </Link>
                </CustomCursorTarget>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-6 relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden group shadow-2xl">
              <Image 
                src={details.image} 
                alt={service.title} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                priority
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* CORE BENEFITS */}
      <section className="py-24 bg-[#fafafa] border-y border-black/5">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-4 mb-8">
              <h2 className="text-3xl font-heading font-black tracking-tighter uppercase">The Advantage</h2>
            </div>
            {details.benefits.map((b, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-black/5 hover:border-red-600/30 transition-colors shadow-sm">
                <div className="w-10 h-10 bg-[#fafafa] rounded-full flex items-center justify-center mb-6 border border-black/5 text-red-600">
                  <Check size={18} strokeWidth={3} />
                </div>
                <p className="font-bold text-sm leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS FRAMEWORK */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter uppercase mb-4">
              Our Process
            </h2>
            <p className="text-black/50">A simple step by step approach to helping you.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-8 left-12 right-12 h-[1px] bg-black/10 z-0" />
            
            {details.process.map((step, i) => (
              <div key={i} className="relative z-10">
                <div className="w-16 h-16 bg-white border-2 border-black rounded-full flex items-center justify-center text-xl font-heading font-black mb-6 shadow-xl">
                  {i + 1}
                </div>
                <h3 className="text-xl font-heading font-black uppercase mb-3">{step.step}</h3>
                <p className="text-sm text-black/60 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE INTAKE SURVEY */}
      <section className="py-32 bg-[#04070f] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <Image src="/abstract-growth.png" alt="Texture" fill className="object-cover grayscale mix-blend-overlay" />
        </div>
        <div className="container mx-auto relative z-10 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter uppercase mb-4 text-white">
              Client Intake Survey
            </h2>
            <p className="text-white/60 text-sm md:text-base">
              Secure priority placement for {service.title}. Complete the brief assessment below.
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
                <label className="text-[0.7rem] font-bold uppercase tracking-widest text-white/50 block mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-black/50 border border-white/10 px-5 py-4 rounded-xl text-sm text-white focus:border-red-600 focus:outline-none transition-colors"
                  placeholder="jane@example.com"
                />
              </div>
            </div>

            <div>
              <label className="text-[0.7rem] font-bold uppercase tracking-widest text-white/50 block mb-4">{formLabel}</label>
              <div className="grid grid-cols-2 gap-4">
                {formOptions.map((opt) => (
                  <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                    <input type="radio" name="objective" value={opt} className="accent-red-600 w-4 h-4 cursor-pointer" />
                    <span className="text-sm text-white/70 group-hover:text-white transition-colors">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="text-[0.7rem] font-bold uppercase tracking-widest text-white/50 block mb-2">Additional Details</label>
              <textarea 
                rows={4}
                className="w-full bg-black/50 border border-white/10 px-5 py-4 rounded-xl text-sm text-white focus:border-red-600 focus:outline-none transition-colors resize-none"
                placeholder="Briefly describe your current situation or requirements..."
              />
            </div>

            <button className="w-full py-5 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-xl hover:bg-red-600 hover:text-white transition-colors duration-300 flex items-center justify-center gap-3">
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
