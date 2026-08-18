/**
 * TechWhales Site Configuration (United Tech LLC)
 */

export const SITE_CONFIG = {
  brand: "TechWhales",
  tagline: "Scale Without Limits",
  legalName: "United Tech LLC",
  owner: "Tariq Khan",
  domain: "techwhales.com",
  siteUrl: "https://techwhales.com",
  address: "744 S Figueroa St, Los Angeles, CA 90017, USA",
  phone: "+1 (213) 555-0199", // placeholder phone matching LA area code

  contact: {
    general: "Team@techwhales.com",
    support: "Support@techwhales.com",
    hr: "HR@techwhales.com",
    billing: "billing@techwhales.com",
  },

  social: {
    linkedin: "https://linkedin.com/company/techwhales",
    twitter: "https://twitter.com/techwhales",
    facebook: "https://facebook.com/techwhales",
    instagram: "https://instagram.com/techwhales",
  },

  seo: {
    title: "TechWhales | Premium Digital Growth & BPO Partner",
    description: "TechWhales is the premier operations and marketing partner of United Tech LLC. We provide elite BPO, Outbound & Inbound Sales, Performance Marketing, Affiliate Marketing, Media Buying, Search Arbitrage, Web Development, HR, and Bookkeeping services.",
    ogImage: "/og-image.jpg",
  },
};

export const SERVICES = [
  {
    slug: "business-process-outsourcing",
    title: "Business Process Outsourcing (BPO)",
    shortTitle: "BPO Services",
    category: "operations",
    description: "Reduce operational costs and improve efficiency. We provide highly trained inbound support, outbound lead generation, appointment setting, customer acquisition, help desk, and closed-loop sales.",
    icon: "🏢",
    details: {
      outbound: ["Cold Calling", "Lead Generation", "Appointment Setting", "Sales Campaigns", "Customer Acquisition", "Follow-up Calls", "Telemarketing"],
      inbound: ["Customer Support", "Technical Support", "Order Processing", "Live Call Answering", "Customer Service", "Help Desk Operations"],
      sales: ["Sales Development Representatives (SDRs)", "Inside Sales Teams", "Lead Qualification", "Pipeline Management", "Sales Process Optimization", "CRM Management", "Closing Support"]
    }
  },
  {
    slug: "digital-marketing",
    title: "Digital & Performance Marketing",
    shortTitle: "Marketing",
    category: "marketing",
    description: "Comprehensive marketing strategies, email marketing, social media outreach, and lead nurturing designed to connect your brand value with scalable revenue.",
    icon: "📈",
    details: {
      items: ["Digital Marketing", "Email Marketing", "Social Media Marketing", "Performance Marketing", "Marketing Strategy", "Campaign Management", "Lead Nurturing"]
    }
  },
  {
    slug: "affiliate-marketing",
    title: "Affiliate Marketing Management",
    shortTitle: "Affiliate",
    category: "marketing",
    description: "End-to-end management of affiliate networks, publisher recruitment, and payout configurations. Tracking campaigns via industry-leading platforms like Everflow.",
    icon: "🤝",
    details: {
      items: ["Affiliate Program Setup & Management", "Affiliate Network Partnerships", "Partner & Publisher Recruitment", "Performance Tracking & Reporting", "Commission & Payout Management", "Fraud Prevention & Compliance Monitoring"]
    }
  },
  {
    slug: "media-buying",
    title: "Paid Media Buying",
    shortTitle: "Media Buying",
    category: "marketing",
    description: "Launch and optimize profitable paid traffic across major ad platforms, including Meta Ads, TikTok Ads, and Search/Programmatic networks, maximizing ROI and ROAS.",
    icon: "📣",
    details: {
      items: ["Paid Social Advertising (Meta, TikTok, etc.)", "Search & Programmatic Media Buying", "Campaign Setup & Management", "Budget Allocation & Optimization", "Creative & A/B Testing", "ROI & Performance Analysis"]
    }
  },
  {
    slug: "search-monetization",
    title: "Performance Marketing & Ad Monetization",
    shortTitle: "Monetization",
    category: "monetization",
    description: "Optimize domains and parking portfolios (AFD) and run high-yield search arbitrage campaigns (RSOC) using platforms such as System1, Sedo, and Bodis.",
    icon: "💰",
    details: {
      items: ["RSOC (Search Arbitrage) Campaign Management", "AFD (Ads for Domains) Monetization", "Domain Parking & Portfolio Management", "Creative Development & Testing", "Traffic Acquisition & Scaling", "Real-Time Reporting & Optimization"]
    }
  },
  {
    slug: "web-development",
    title: "Web & Custom App Development",
    shortTitle: "Development",
    category: "technology",
    description: "Design and build speed-optimized, modern websites, custom landing pages, and e-commerce platforms focused on turning traffic into buyers.",
    icon: "💻",
    details: {
      items: ["Website Development", "Landing Page Design & Development", "E-commerce Development", "UI/UX Design", "Custom Web Applications", "Website Maintenance & Support"]
    }
  },
  {
    slug: "branding",
    title: "Brand Strategy & Creative Direction",
    shortTitle: "Branding",
    category: "marketing",
    description: "Define your company's market positioning, create beautiful identity systems, write brand messaging guides, and manage online reputation.",
    icon: "✨",
    details: {
      items: ["Brand Strategy", "Brand Identity Development", "Positioning", "Brand Messaging", "Content Strategy", "Creative Direction", "Reputation Management"]
    }
  },
  {
    slug: "human-resources",
    title: "HR & Talent Acquisition",
    shortTitle: "HR Services",
    category: "operations",
    description: "Source, onboard, and manage remote talent and dedicated teams. We handle candidate vetting, payroll coordination, and performance management support.",
    icon: "👥",
    details: {
      items: ["Recruitment", "Talent Acquisition", "Employee Onboarding", "HR Administration", "Payroll Coordination", "Performance Management Support", "Employee Engagement"]
    }
  },
  {
    slug: "bookkeeping",
    title: "Financial Bookkeeping Services",
    shortTitle: "Bookkeeping",
    category: "operations",
    description: "Keep your company's financials clean, balanced, and compliant. We coordinate daily bookkeeping, accounts payable/receivable, bank reconciliations, and reporting.",
    icon: "📊",
    details: {
      items: ["Daily Bookkeeping", "Accounts Payable", "Accounts Receivable", "Bank Reconciliation", "Financial Record Management", "Expense Tracking", "Monthly Financial Reporting"]
    }
  }
];

export const INDUSTRIES = [
  { slug: "startups", title: "Startups", icon: "🚀" },
  { slug: "medium-businesses", title: "Medium-sized Businesses", icon: "🏢" },
  { slug: "ecommerce", title: "E-Commerce Companies", icon: "🛒" },
  { slug: "healthcare", title: "Healthcare Organizations", icon: "🏥" },
  { slug: "legal", title: "Legal Firms", icon: "⚖️" },
  { slug: "agencies", title: "Agencies", icon: "📣" },
  { slug: "small-businesses", title: "Small Businesses", icon: "🏪" },
  { slug: "enterprises", title: "Enterprises", icon: "🏭" },
  { slug: "saas", title: "SaaS Companies", icon: "💻" },
  { slug: "real-estate", title: "Real Estate Companies", icon: "🏠" },
  { slug: "financial-services", title: "Financial Services Companies", icon: "💳" },
  { slug: "professional-providers", title: "Professional Service Providers", icon: "🤝" }
];

export const PORTFOLIO = [
  {
    title: "Email Marketing Performance",
    category: "Email Marketing",
    metrics: "8M+ emails sent · 12.59% CTOR",
    extra: "154K+ active subscribers",
  },
  {
    title: "Everflow Affiliate Portal",
    category: "Affiliate Marketing",
    metrics: "Partner reporting & payout tracking",
    extra: "Real-time dashboard tracking",
  },
  {
    title: "Meta Ad Accounts",
    category: "Media Buying",
    metrics: "$1.88M+ managed ad spend",
    extra: "Creative-led scaling & ROI tracking",
  },
  {
    title: "Media Buying Reporting",
    category: "Media Buying",
    metrics: "Real-time ROI, RPC & CVR tracking",
    extra: "Campaign level analytics",
  },
  {
    title: "Bodis Domain parking",
    category: "Domain Parking",
    metrics: "Domain portfolio monetization",
    extra: "Optimized ad feeds via Google",
  },
  {
    title: "System1 AFD Earnings",
    category: "Ad Monetization",
    metrics: "$59K+ 30-day revenue",
    extra: "System1 RAMP Partner API",
  },
  {
    title: "Claim Source",
    category: "Web Development",
    metrics: "Legal Claims Intake Platform",
    extra: "High-converting multi-step lead gen system",
  },
  {
    title: "MUGS Café & Dessert Bar",
    category: "Web Development",
    metrics: "Hospitality Brand Portal",
    extra: "Stunning custom UI/UX for food & beverage",
  },
  {
    title: "Wellness Platform",
    category: "Web Development",
    metrics: "Save Your Soul Society",
    extra: "Wellness community and booking portal",
  }
];

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Industries", href: "/industries" },
  { name: "Contact", href: "/contact" }
];
