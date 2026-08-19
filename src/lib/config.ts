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
    slug: "living-trust",
    title: "Living Trust",
    shortTitle: "Living Trust",
    category: "Legal",
    description: "Secure your assets and ensure your family is protected. We help you create clear and legally sound living trusts to avoid probate.",
    icon: "📄",
    details: { items: ["Asset Protection", "Estate Planning", "Family Security", "Document Preparation"] }
  },
  {
    slug: "probate",
    title: "Probate",
    shortTitle: "Probate",
    category: "Legal",
    description: "Navigate the probate process easily. Our team provides clear guidance to settle estates quickly and properly.",
    icon: "⚖️",
    details: { items: ["Estate Settlement", "Legal Guidance", "Asset Distribution", "Court Representation"] }
  },
  {
    slug: "deed-services",
    title: "Deed Services",
    shortTitle: "Deed Services",
    category: "Legal",
    description: "Transfer property ownership smoothly. We prepare and record all types of property deeds accurately.",
    icon: "🏠",
    details: { items: ["Property Transfer", "Title Updates", "Document Recording", "Legal Preparation"] }
  },
  {
    slug: "divorce",
    title: "Divorce",
    shortTitle: "Divorce",
    category: "Legal",
    description: "Professional support during difficult times. We handle your divorce proceedings with care and strict confidentiality.",
    icon: "🤝",
    details: { items: ["Legal Filing", "Mediation", "Asset Division", "Confidential Support"] }
  },
  {
    slug: "child-custody-family-law",
    title: "Child Custody and Family Law",
    shortTitle: "Family Law",
    category: "Legal",
    description: "Protecting the best interests of your children. We offer genuine advice and representation for all family law matters.",
    icon: "👨‍👩‍👧",
    details: { items: ["Custody Agreements", "Visitation Rights", "Family Support", "Legal Representation"] }
  },
  {
    slug: "eviction",
    title: "Eviction",
    shortTitle: "Eviction",
    category: "Legal",
    description: "Lawful and efficient eviction services for property owners. We manage the entire legal process from notice to resolution.",
    icon: "🚪",
    details: { items: ["Legal Notices", "Court Filings", "Tenant Disputes", "Property Recovery"] }
  },
  {
    slug: "small-claim",
    title: "Small Claim",
    shortTitle: "Small Claim",
    category: "Legal",
    description: "Resolve disputes quickly and fairly. We assist with filing and presenting your small claims case effectively.",
    icon: "⚖️",
    details: { items: ["Case Preparation", "Legal Filing", "Dispute Resolution", "Court Assistance"] }
  },
  {
    slug: "real-estate-services",
    title: "Real Estate Services",
    shortTitle: "Real Estate",
    category: "Legal",
    description: "Comprehensive legal help for buying, selling, or managing real estate properties.",
    icon: "🏢",
    details: { items: ["Contract Review", "Closing Assistance", "Property Disputes", "Legal Counsel"] }
  },
  {
    slug: "tax-preparation",
    title: "Tax Preparation",
    shortTitle: "Tax Prep",
    category: "Tax",
    description: "Accurate tax returns for individuals and businesses across all fifty states. We ensure you get the maximum return possible.",
    icon: "💵",
    details: { items: ["Small Business Taxes", "Corporate Taxes", "LLC and Partnerships", "Payroll Tax Returns"] }
  },
  {
    slug: "tax-resolution-audits",
    title: "Tax Resolution and Audits",
    shortTitle: "Tax Resolution",
    category: "Tax",
    description: "Professional representation for IRS audits and tax disputes. We work to resolve your tax problems completely.",
    icon: "🛡️",
    details: { items: ["IRS Representation", "Audit Defense", "Delinquent Taxes", "Penalty Abatement"] }
  },
  {
    slug: "tax-debt-relief",
    title: "Tax Debt Relief",
    shortTitle: "Debt Relief",
    category: "Tax",
    description: "Find a way out of tax debt. We negotiate payment plans and offers in compromise to reduce your burden.",
    icon: "📉",
    details: { items: ["Offer In Compromise", "Payment Plans", "Debt Negotiation", "Financial Planning"] }
  },
  {
    slug: "residential-design-drafting",
    title: "Residential Design and Drafting",
    shortTitle: "Design",
    category: "Design",
    description: "Beautiful residential plans tailored to your vision. We provide accurate drafting for your next home project.",
    icon: "✏️",
    details: { items: ["Custom Home Design", "Floor Plans", "Blueprint Drafting", "Renovation Planning"] }
  },
  {
    slug: "interior-design-staging",
    title: "Interior Design and Staging",
    shortTitle: "Staging",
    category: "Design",
    description: "Stunning interior design and property staging. We create visual experiences that help sell homes faster.",
    icon: "🛋️",
    details: { items: ["3D Staging", "Property Visualizations", "Interior Planning", "Realtor Services"] }
  },
  {
    slug: "business-outsourcing",
    title: "Business Process Outsourcing",
    shortTitle: "Outsourcing",
    category: "Business",
    description: "Grow your company with our remote support teams. We handle customer service, sales calls, and daily tasks.",
    icon: "📞",
    details: { items: ["Customer Support", "Sales Teams", "Lead Generation", "Daily Operations"] }
  },
  {
    slug: "web-development",
    title: "Web Development",
    shortTitle: "Web Dev",
    category: "Technology",
    description: "Fast and secure websites that represent your brand perfectly. We build easy to use platforms for your business.",
    icon: "💻",
    details: { items: ["Custom Websites", "Landing Pages", "Online Stores", "Website Maintenance"] }
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortTitle: "Marketing",
    category: "Marketing",
    description: "Reach more customers online. We run genuine marketing campaigns that bring real results and engagement.",
    icon: "📱",
    details: { items: ["Social Media", "Paid Advertising", "Email Campaigns", "Brand Awareness"] }
  },
  {
    slug: "bookkeeping",
    title: "Bookkeeping",
    shortTitle: "Bookkeeping",
    category: "Business",
    description: "Keep your financial records clean and organized. We track your expenses and prepare clear monthly reports.",
    icon: "📊",
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
