/**
 * TechWhales Site Configuration (United Tech LLC)
 */

export const SITE_CONFIG = {
  brand: "TechWhales",
  tagline: "Scale Without Limits",
  legalName: "United Tech LLC",
  owner: "Tariq Khan",
  domain: "techwhales.net",
  siteUrl: "https://techwhales.net",
  address: "744 S Figueroa St, Los Angeles, CA 90017, USA",
  phone: "+1 (213) 5550199",

  contact: {
    general: "Team@techwhales.net",
    support: "Support@techwhales.net",
    hr: "HR@techwhales.net",
    billing: "billing@techwhales.net",
  },

  social: {
    linkedin: "https://linkedin.com/company/techwhales",
    twitter: "https://twitter.com/techwhales",
    facebook: "https://facebook.com/techwhales",
    instagram: "https://instagram.com/techwhales",
  },

  seo: {
    title: "TechWhales | Legal Tax and Business Operations",
    description: "TechWhales is the premier business partner of United Tech LLC. We provide Legal, Tax, Design, Marketing, and Web Development services in an easy and professional way.",
    ogImage: "/ogimage.jpg",
  },
};

export const SERVICES = [
  {
    slug: "living-trust-probate",
    title: "Living Trust and Probate",
    shortTitle: "Trust & Probate",
    category: "Legal",
    description: "Secure your assets and ensure your family is protected. We help you create clear living trusts and navigate probate court easily.",
    icon: "ShieldCheck",
    details: { items: ["Asset Protection", "Estate Planning", "Probate Navigation", "Document Preparation"] }
  },
  {
    slug: "family-law-divorce",
    title: "Family Law and Divorce",
    shortTitle: "Family Law",
    category: "Legal",
    description: "Compassionate and professional legal help to guide you through divorce proceedings and child custody matters.",
    icon: "Users",
    details: { items: ["Divorce Filing", "Mediation", "Child Custody", "Asset Division"] }
  },
  {
    slug: "real-estate-eviction",
    title: "Real Estate and Eviction",
    shortTitle: "Real Estate",
    category: "Legal",
    description: "Comprehensive legal assistance for property transfers, deed services, and lawful eviction processes.",
    icon: "Home",
    details: { items: ["Deed Transfers", "Contract Review", "Eviction Notices", "Property Disputes"] }
  },
  {
    slug: "small-claims-disputes",
    title: "Small Claims and Disputes",
    shortTitle: "Small Claims",
    category: "Legal",
    description: "Resolve disputes quickly and fairly. We assist with filing and presenting your small claims case effectively.",
    icon: "Scale",
    details: { items: ["Case Preparation", "Legal Filing", "Dispute Resolution", "Court Assistance"] }
  },
  {
    slug: "tax-preparation",
    title: "Tax Preparation",
    shortTitle: "Tax Prep",
    category: "Tax",
    description: "Accurate tax returns for individuals and businesses. We ensure you get the maximum return possible.",
    icon: "FileText",
    details: { items: ["Small Business Taxes", "Corporate Taxes", "LLC Returns", "Payroll Taxes"] }
  },
  {
    slug: "tax-resolution-debt-relief",
    title: "Tax Resolution and Debt Relief",
    shortTitle: "Tax Resolution",
    category: "Tax",
    description: "Professional representation for IRS audits. We negotiate payment plans and offers to reduce your tax burden.",
    icon: "Briefcase",
    details: { items: ["IRS Representation", "Audit Defense", "Debt Negotiation", "Penalty Abatement"] }
  },
  {
    slug: "residential-design",
    title: "Residential Design and Drafting",
    shortTitle: "Design",
    category: "Design",
    description: "Beautiful residential plans tailored to your vision. We provide accurate blueprints for your next project.",
    icon: "PenTool",
    details: { items: ["Custom Home Design", "Floor Plans", "Blueprint Drafting", "Renovation Planning"] }
  },
  {
    slug: "interior-staging",
    title: "3D Interior Staging and Visuals",
    shortTitle: "Staging",
    category: "Design",
    description: "Stunning interior design and property staging. We create visual experiences that help sell homes faster.",
    icon: "Image",
    details: { items: ["3D Staging", "Property Visualizations", "Interior Planning", "Realtor Services"] }
  },
  {
    slug: "business-outsourcing",
    title: "Business Process Outsourcing",
    shortTitle: "Outsourcing",
    category: "Operations",
    description: "Reduce operational costs and improve efficiency. We provide highly trained support and sales teams.",
    icon: "Headphones",
    details: { items: ["Customer Support", "Sales Teams", "Lead Generation", "Daily Operations"] }
  },
  {
    slug: "digital-marketing",
    title: "Digital and Performance Marketing",
    shortTitle: "Marketing",
    category: "Marketing",
    description: "Comprehensive marketing strategies designed to connect your brand value with scalable revenue.",
    icon: "Target",
    details: { items: ["Social Media", "Paid Advertising", "Email Campaigns", "Brand Awareness"] }
  },
  {
    slug: "affiliate-marketing",
    title: "Affiliate Marketing Management",
    shortTitle: "Affiliate",
    category: "Marketing",
    description: "End to end management of affiliate networks, publisher recruitment, and payout configurations.",
    icon: "Network",
    details: { items: ["Program Setup", "Publisher Recruitment", "Performance Tracking", "Fraud Prevention"] }
  },
  {
    slug: "media-buying",
    title: "Paid Media Buying",
    shortTitle: "Media Buying",
    category: "Marketing",
    description: "Launch and optimize profitable paid traffic across major ad platforms, maximizing your return on investment.",
    icon: "TrendingUp",
    details: { items: ["Meta Advertising", "TikTok Ads", "Search Media", "Campaign Optimization"] }
  },
  {
    slug: "search-monetization",
    title: "Search Monetization",
    shortTitle: "Monetization",
    category: "Monetization",
    description: "Optimize domains and run high yield search campaigns using top tier platforms.",
    icon: "DollarSign",
    details: { items: ["Campaign Management", "Domain Parking", "Creative Testing", "Traffic Acquisition"] }
  },
  {
    slug: "web-development",
    title: "Web and Custom App Development",
    shortTitle: "Web Dev",
    category: "Technology",
    description: "Design and build modern websites and platforms focused on turning traffic into buyers.",
    icon: "Code",
    details: { items: ["Custom Websites", "Landing Pages", "Online Stores", "Platform Maintenance"] }
  },
  {
    slug: "branding",
    title: "Brand Strategy and Creative",
    shortTitle: "Branding",
    category: "Marketing",
    description: "Define your company market positioning and create beautiful identity systems that command authority.",
    icon: "Sparkles",
    details: { items: ["Brand Strategy", "Identity Development", "Market Positioning", "Reputation Management"] }
  },
  {
    slug: "human-resources",
    title: "HR and Talent Acquisition",
    shortTitle: "HR",
    category: "Operations",
    description: "Source, onboard, and manage remote talent and dedicated teams. We handle candidate vetting easily.",
    icon: "UserPlus",
    details: { items: ["Recruitment", "Employee Onboarding", "Payroll Coordination", "Performance Management"] }
  },
  {
    slug: "bookkeeping",
    title: "Financial Bookkeeping Services",
    shortTitle: "Bookkeeping",
    category: "Operations",
    description: "Keep your company financial records clean, balanced, and compliant. We manage daily bookkeeping.",
    icon: "PieChart",
    details: { items: ["Daily Tracking", "Bank Reconciliation", "Expense Reports", "Financial Clarity"] }
  }
];

export const INDUSTRIES = [
  { slug: "startups", title: "Startups", icon: "🚀" },
  { slug: "medium-businesses", title: "Growing Businesses", icon: "🏢" },
  { slug: "ecommerce", title: "Online Stores", icon: "🛒" },
  { slug: "healthcare", title: "Healthcare", icon: "🏥" },
  { slug: "legal", title: "Law Firms", icon: "⚖️" },
  { slug: "agencies", title: "Agencies", icon: "📣" },
  { slug: "small-businesses", title: "Local Shops", icon: "🏪" },
  { slug: "enterprises", title: "Large Companies", icon: "🏭" },
  { slug: "saas", title: "Software Companies", icon: "💻" },
  { slug: "real-estate", title: "Real Estate", icon: "🏠" },
  { slug: "financial", title: "Financial Groups", icon: "💳" },
  { slug: "professional", title: "Service Providers", icon: "🤝" }
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
    extra: "Creative led scaling and ROI tracking",
  },
  {
    title: "Media Buying Reporting",
    category: "Media Buying",
    metrics: "Real time ROI, RPC and CVR tracking",
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
    metrics: "$59K+ 30 day revenue",
    extra: "System1 RAMP Partner API",
  },
  {
    title: "Claim Source",
    category: "Web Development",
    metrics: "Legal Claims Intake Platform",
    extra: "High converting multi step lead gen system",
  },
  {
    title: "MUGS Cafe and Dessert Bar",
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
