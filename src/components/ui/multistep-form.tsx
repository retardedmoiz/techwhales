"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { CheckIcon, ArrowRightIcon, Send, Sparkles } from "lucide-react";

export type StepFieldType = "text" | "email" | "tel" | "select" | "textarea";

export type FormStep = {
  id: number;
  label: string;
  field: string;
  placeholder: string;
  type?: StepFieldType;
  options?: string[];
};

// Preset detailed multi-step lead capture flows per service
export const SERVICE_FORM_STEPS: Record<string, FormStep[]> = {
  "web-development": [
    { id: 1, label: "Full Name", field: "name", placeholder: "e.g. Alex Morgan", type: "text" },
    { id: 2, label: "Work Email", field: "email", placeholder: "alex@company.com", type: "email" },
    { id: 3, label: "Phone / WhatsApp", field: "phone", placeholder: "+1 (555) 000-0000", type: "tel" },
    { id: 4, label: "Project Scope", field: "projectType", placeholder: "Select project scope", type: "select", options: ["New Corporate Website", "Custom Web App / Portal", "High-Converting E-commerce", "Site Redesign & Speed Optimization"] },
    { id: 5, label: "Preferred Tech Stack", field: "techStack", placeholder: "Select tech stack", type: "select", options: ["Next.js / React (Recommended)", "WordPress / Custom CMS", "Shopify Store", "Custom API & Database Backend"] },
    { id: 6, label: "Estimated Budget & Timeline", field: "details", placeholder: "e.g. $5k-$15k budget, need to launch within 30 days...", type: "textarea" }
  ],
  "digital-marketing": [
    { id: 1, label: "Full Name", field: "name", placeholder: "e.g. Sarah Jenkins", type: "text" },
    { id: 2, label: "Work Email", field: "email", placeholder: "sarah@brand.com", type: "email" },
    { id: 3, label: "Phone / WhatsApp", field: "phone", placeholder: "+1 (555) 000-0000", type: "tel" },
    { id: 4, label: "Primary Growth Goal", field: "goal", placeholder: "Select main target", type: "select", options: ["Scale Online Sales & E-commerce", "B2B High-Quality Lead Gen", "Brand Visibility & Reach", "Full Funnel Overhaul"] },
    { id: 5, label: "Current Active Channels", field: "channels", placeholder: "Select current channel", type: "select", options: ["Meta Ads (FB/IG)", "Google Search & Shopping", "TikTok & Influencer Ads", "Organic / SEO & Email"] },
    { id: 6, label: "Target Monthly Ad Budget", field: "budget", placeholder: "e.g. $3,000 - $20,000+ / month", type: "text" }
  ],
  "media-buying": [
    { id: 1, label: "Full Name", field: "name", placeholder: "e.g. Marcus Vance", type: "text" },
    { id: 2, label: "Work Email", field: "email", placeholder: "marcus@agency.com", type: "email" },
    { id: 3, label: "Direct Phone Number", field: "phone", placeholder: "+1 (555) 000-0000", type: "tel" },
    { id: 4, label: "Target Ad Platforms", field: "platform", placeholder: "Choose primary platform", type: "select", options: ["Meta Ads (Facebook & Instagram)", "TikTok Video Ads", "Google Search & YouTube", "Multi-Platform Omni Scaling"] },
    { id: 5, label: "Current Monthly Ad Spend", field: "spend", placeholder: "Select current spend", type: "select", options: ["Under $5,000 / mo", "$5,000 - $20,000 / mo", "$20,000 - $50,000 / mo", "$50,000+ / mo"] },
    { id: 6, label: "Target CPA / ROAS Goal", field: "goalDetails", placeholder: "e.g. Target ROAS 3.5x or CPA under $45", type: "text" }
  ],
  "search-monetization": [
    { id: 1, label: "Full Name", field: "name", placeholder: "e.g. David Lin", type: "text" },
    { id: 2, label: "Work Email", field: "email", placeholder: "david@domaincorp.com", type: "email" },
    { id: 3, label: "Direct Phone / Telegram", field: "phone", placeholder: "Phone or Telegram handle", type: "text" },
    { id: 4, label: "Traffic / Domain Type", field: "trafficType", placeholder: "Select inventory type", type: "select", options: ["Parked Domains Portfolio", "Search Arbitrage Campaigns", "Native & Push Ad Traffic", "Direct Navigation Traffic"] },
    { id: 5, label: "Daily Traffic Volume", field: "volume", placeholder: "e.g. 50,000+ daily clicks", type: "text" },
    { id: 6, label: "Current Monetization Provider", field: "feedProvider", placeholder: "e.g. System1, Bodis, Sedo, Tonic...", type: "text" }
  ],
  "branding": [
    { id: 1, label: "Full Name", field: "name", placeholder: "e.g. Elena Rostova", type: "text" },
    { id: 2, label: "Work Email", field: "email", placeholder: "elena@startup.io", type: "email" },
    { id: 3, label: "Phone Number", field: "phone", placeholder: "+1 (555) 000-0000", type: "tel" },
    { id: 4, label: "Company / Brand Name", field: "brandName", placeholder: "e.g. Lumina Technologies", type: "text" },
    { id: 5, label: "Branding Scope", field: "scope", placeholder: "Select branding focus", type: "select", options: ["Full Visual Identity & Logo System", "Brand Positioning & Messaging Strategy", "Complete Corporate Rebranding", "High-Converting Ad Creatives & Assets"] },
    { id: 6, label: "Timeline & Vision", field: "details", placeholder: "Describe your brand vision and expected launch timeline...", type: "textarea" }
  ],
  "affiliate-marketing": [
    { id: 1, label: "Full Name", field: "name", placeholder: "e.g. Chris Bennett", type: "text" },
    { id: 2, label: "Work Email", field: "email", placeholder: "chris@network.com", type: "email" },
    { id: 3, label: "Direct Phone / Skype", field: "phone", placeholder: "Phone or Skype ID", type: "text" },
    { id: 4, label: "Affiliate Program Goal", field: "status", placeholder: "Select program goal", type: "select", options: ["Launch New Affiliate Program (Everflow)", "Publisher Recruitment & Affiliate Scale", "Network Operations Management", "Fraud Auditing & Compliance"] },
    { id: 5, label: "Primary Niche / Vertical", field: "vertical", placeholder: "e.g. E-commerce, Legal, Finance, SaaS", type: "text" },
    { id: 6, label: "Target Monthly Revenue", field: "volume", placeholder: "e.g. Scaling to $50k+ monthly payout", type: "text" }
  ],
  "business-outsourcing": [
    { id: 1, label: "Full Name", field: "name", placeholder: "e.g. Robert Sterling", type: "text" },
    { id: 2, label: "Work Email", field: "email", placeholder: "robert@enterprise.com", type: "email" },
    { id: 3, label: "Phone / WhatsApp", field: "phone", placeholder: "+1 (555) 000-0000", type: "tel" },
    { id: 4, label: "Team Capacity Needed", field: "teamSize", placeholder: "Select required capacity", type: "select", options: ["1-3 Dedicated Support Reps", "5-10 Full BPO Operations Unit", "Dedicated SDR Outbound Sales Team", "Custom Hybrid Operations Team"] },
    { id: 5, label: "Coverage Shift", field: "shift", placeholder: "Select coverage window", type: "select", options: ["24/7 Global Support Coverage", "US Eastern / Pacific Business Hours", "Custom Shift Window"] },
    { id: 6, label: "Operational Requirements", field: "requirements", placeholder: "Describe your current bottlenecks or key tasks to outsource...", type: "textarea" }
  ],
  "living-trust-probate": [
    { id: 1, label: "Full Name", field: "name", placeholder: "e.g. Michael Thorne", type: "text" },
    { id: 2, label: "Phone Number", field: "phone", placeholder: "+1 (555) 000-0000", type: "tel" },
    { id: 3, label: "Email Address", field: "email", placeholder: "michael@example.com", type: "email" },
    { id: 4, label: "Legal Service Needed", field: "service", placeholder: "Select legal service", type: "select", options: ["Living Trust Creation & Asset Protection", "Probate Court Navigation & Settlement", "Comprehensive Estate Plan", "Deed Transfers & Beneficiary Planning"] },
    { id: 5, label: "Marital & Family Status", field: "familyStatus", placeholder: "Select status", type: "select", options: ["Married with Children", "Single with Children", "Married without Children", "Individual / Estate Owner"] },
    { id: 6, label: "City & State", field: "location", placeholder: "e.g. Los Angeles, CA", type: "text" }
  ],
  "tax-preparation": [
    { id: 1, label: "Full Name", field: "name", placeholder: "e.g. Jennifer Ross", type: "text" },
    { id: 2, label: "Email Address", field: "email", placeholder: "jennifer@example.com", type: "email" },
    { id: 3, label: "Direct Phone Number", field: "phone", placeholder: "+1 (555) 000-0000", type: "tel" },
    { id: 4, label: "Entity Type", field: "entity", placeholder: "Select filing type", type: "select", options: ["Individual / Family Return", "LLC / Partnership Return", "S-Corp / C-Corp Tax Return", "Multiple Business Entities"] },
    { id: 5, label: "Tax Year(s) Needed", field: "taxYears", placeholder: "e.g. 2024 Current Return, Back Tax Years", type: "text" },
    { id: 6, label: "Estimated Annual Gross Income", field: "revenue", placeholder: "e.g. $100k - $500k", type: "text" }
  ],
  "tax-resolution-debt-relief": [
    { id: 1, label: "Full Name", field: "name", placeholder: "e.g. Daniel Miller", type: "text" },
    { id: 2, label: "Phone Number", field: "phone", placeholder: "+1 (555) 000-0000", type: "tel" },
    { id: 3, label: "Email Address", field: "email", placeholder: "daniel@example.com", type: "email" },
    { id: 4, label: "IRS / Tax Challenge", field: "issue", placeholder: "Select main issue", type: "select", options: ["IRS Back Taxes & Unpaid Debt", "Unfiled Tax Returns Defense", "Audit Representation", "Wage Garnishment / Bank Liens"] },
    { id: 5, label: "Estimated Tax Debt Amount", field: "debtAmount", placeholder: "Select debt range", type: "select", options: ["$5,000 - $15,000", "$15,000 - $50,000", "$50,000 - $100,000", "$100,000+"] },
    { id: 6, label: "IRS Notice Received?", field: "noticeDetails", placeholder: "e.g. Received Final Notice of Intent to Levy", type: "text" }
  ],
  "real-estate-eviction": [
    { id: 1, label: "Full Name", field: "name", placeholder: "e.g. Rachel Adams", type: "text" },
    { id: 2, label: "Phone Number", field: "phone", placeholder: "+1 (555) 000-0000", type: "tel" },
    { id: 3, label: "Email Address", field: "email", placeholder: "rachel@example.com", type: "email" },
    { id: 4, label: "Real Estate Service", field: "serviceType", placeholder: "Select service required", type: "select", options: ["Lawful Eviction Notice & Court Filing", "Deed Transfer & Ownership Change", "Property Lease Review & Contracts", "Property Dispute Consultation"] },
    { id: 5, label: "Property City & County", field: "location", placeholder: "e.g. Los Angeles County, CA", type: "text" },
    { id: 6, label: "Urgency / Case Details", field: "details", placeholder: "Brief description of tenant issue or property timeline...", type: "textarea" }
  ],
  "family-law-divorce": [
    { id: 1, label: "Full Name", field: "name", placeholder: "Confidential / Full Name", type: "text" },
    { id: 2, label: "Confidential Phone Number", field: "phone", placeholder: "+1 (555) 000-0000", type: "tel" },
    { id: 3, label: "Email Address", field: "email", placeholder: "confidential@example.com", type: "email" },
    { id: 4, label: "Family Law Matter", field: "need", placeholder: "Select legal area", type: "select", options: ["Divorce Filing / Dissolution", "Child Custody & Support", "Spousal Support & Asset Division", "Pre-Filing Mediation"] },
    { id: 5, label: "Hearing Date or Deadline?", field: "timeline", placeholder: "e.g. Court date set, planning ahead", type: "text" },
    { id: 6, label: "Additional Context", field: "details", placeholder: "Brief confidential summary of your situation...", type: "textarea" }
  ],
  "small-claims-disputes": [
    { id: 1, label: "Full Name", field: "name", placeholder: "e.g. James Carter", type: "text" },
    { id: 2, label: "Phone Number", field: "phone", placeholder: "+1 (555) 000-0000", type: "tel" },
    { id: 3, label: "Email Address", field: "email", placeholder: "james@example.com", type: "email" },
    { id: 4, label: "Dispute Amount Range", field: "amount", placeholder: "Select dispute value", type: "select", options: ["Under $2,500", "$2,500 - $5,000", "$5,000 - $10,000", "$10,000+"] },
    { id: 5, label: "Brief Summary of Dispute", field: "summary", placeholder: "Describe unpaid contract or damage issue...", type: "textarea" }
  ],
  "residential-design": [
    { id: 1, label: "Full Name", field: "name", placeholder: "e.g. Sophia Martinez", type: "text" },
    { id: 2, label: "Email Address", field: "email", placeholder: "sophia@example.com", type: "email" },
    { id: 3, label: "Phone Number", field: "phone", placeholder: "+1 (555) 000-0000", type: "tel" },
    { id: 4, label: "Design Scope", field: "scope", placeholder: "Select drafting scope", type: "select", options: ["New Custom Home Blueprint", "Renovation & Extension Drafting", "Floorplan Redesign", "Permit Drawings"] },
    { id: 5, label: "Property Square Footage & Location", field: "sqft", placeholder: "e.g. 2,800 sq ft, Pasadena CA", type: "text" }
  ],
  "interior-staging": [
    { id: 1, label: "Full Name", field: "name", placeholder: "e.g. Amanda Vance", type: "text" },
    { id: 2, label: "Email Address", field: "email", placeholder: "amanda@realty.com", type: "email" },
    { id: 3, label: "Phone Number", field: "phone", placeholder: "+1 (555) 000-0000", type: "tel" },
    { id: 4, label: "Staging Service", field: "service", placeholder: "Select staging method", type: "select", options: ["3D Virtual Staging & Renders", "On-Site Physical Staging", "Realtor Listing Suite", "Interior Styling Consultation"] },
    { id: 5, label: "Property Location & Listing Date", field: "listingDate", placeholder: "e.g. Malibu CA, listing next month", type: "text" }
  ],
  "human-resources": [
    { id: 1, label: "Full Name", field: "name", placeholder: "e.g. David Vance", type: "text" },
    { id: 2, label: "Work Email", field: "email", placeholder: "david@company.com", type: "email" },
    { id: 3, label: "Phone Number", field: "phone", placeholder: "+1 (555) 000-0000", type: "tel" },
    { id: 4, label: "Hiring Service", field: "requirement", placeholder: "Select HR service", type: "select", options: ["Remote Tech & Developer Sourcing", "Sales & Support Staffing", "Payroll & HR Compliance", "Recruiting Audit"] },
    { id: 5, label: "Target Roles to Fill", field: "roles", placeholder: "e.g. 2 SDRs, 1 Senior React Dev", type: "text" }
  ],
  "bookkeeping": [
    { id: 1, label: "Full Name", field: "name", placeholder: "e.g. Thomas Wright", type: "text" },
    { id: 2, label: "Work Email", field: "email", placeholder: "thomas@business.com", type: "email" },
    { id: 3, label: "Phone Number", field: "phone", placeholder: "+1 (555) 000-0000", type: "tel" },
    { id: 4, label: "Monthly Revenue / Expense Volume", field: "volume", placeholder: "Select monthly scale", type: "select", options: ["Under $10k / month", "$10k - $50k / month", "$50k - $200k / month", "$200k+ / month"] },
    { id: 5, label: "Current Accounting Software", field: "software", placeholder: "e.g. QuickBooks, Xero, Wave, None", type: "text" }
  ]
};

// Default general lead generation steps (6 Steps)
export const DEFAULT_FORM_STEPS: FormStep[] = [
  { id: 1, label: "Full Name", field: "name", placeholder: "e.g. Tariq Khan", type: "text" },
  { id: 2, label: "Email Address", field: "email", placeholder: "you@company.com", type: "email" },
  { id: 3, label: "Phone / WhatsApp", field: "phone", placeholder: "+1 (555) 000-0000", type: "tel" },
  { id: 4, label: "Service of Interest", field: "service", placeholder: "Select a solution", type: "select", options: ["Web & Custom App Development", "Digital & Performance Marketing", "Paid Media & Search Monetization", "BPO & Operations Support", "Legal & Tax Solutions"] },
  { id: 5, label: "Company / Business Name", field: "company", placeholder: "e.g. Acme Corp", type: "text" },
  { id: 6, label: "Project Goals & Timeline", field: "goal", placeholder: "How can TechWhales help you succeed?", type: "textarea" }
];

interface MultiStepFormProps {
  serviceSlug?: string;
  customSteps?: FormStep[];
  title?: string;
  subtitle?: string;
  className?: string;
  theme?: "dark" | "light";
}

export function MultiStepForm({
  serviceSlug,
  customSteps,
  title = "Start Your Project",
  subtitle = "Tailored solutions designed for rapid execution.",
  className,
  theme = "dark"
}: MultiStepFormProps) {
  const steps = customSteps || (serviceSlug && SERVICE_FORM_STEPS[serviceSlug]) || DEFAULT_FORM_STEPS;
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isComplete, setIsComplete] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsComplete(true);
      }, 600);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const currentStepData = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;
  const isDark = theme === "dark";

  if (isComplete) {
    return (
      <div className={cn("w-full max-w-md mx-auto", className)}>
        <div className={cn(
          "relative overflow-hidden rounded-3xl border p-8 md:p-12 text-center shadow-2xl backdrop-blur-md transition-all",
          isDark 
            ? "border-white/10 bg-[#08080a] text-white" 
            : "border-black/10 bg-white text-black"
        )}>
          <div className="absolute inset-0 bg-gradient-to-b from-red-600/10 to-transparent pointer-events-none" />
          <div className="relative flex flex-col items-center gap-6 animate-in fade-in zoom-in-95 duration-500 z-10">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-600/10 border border-red-600/30 text-red-600 shadow-lg">
              <CheckIcon className="h-10 w-10 animate-in zoom-in duration-500 delay-150" strokeWidth={3} />
            </div>
            <div className="space-y-2 text-center">
              <span className="text-xs uppercase tracking-widest font-bold text-red-600 block">Lead Secured</span>
              <h3 className="text-2xl md:text-3xl font-heading font-black uppercase tracking-tight">You&apos;re All Set!</h3>
              <p className={cn("text-sm font-medium leading-relaxed max-w-xs mx-auto", isDark ? "text-white/60" : "text-black/60")}>
                Thank you <strong className={isDark ? "text-white" : "text-black"}>{formData.name || "there"}</strong>! Our senior strategy team has received your assessment and will contact you directly.
              </p>
            </div>
            <button
              onClick={() => {
                setFormData({});
                setCurrentStep(0);
                setIsComplete(false);
              }}
              className="mt-2 text-xs uppercase tracking-widest font-bold text-red-600 hover:underline"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("w-full max-w-md mx-auto", className)}>
      <div className={cn(
        "relative overflow-hidden rounded-3xl border p-6 md:p-8 shadow-2xl backdrop-blur-md transition-all",
        isDark 
          ? "border-white/10 bg-[#08080a] text-white" 
          : "border-black/10 bg-white text-black"
      )}>
        {/* Header */}
        <div className="mb-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-600/20 text-[0.65rem] font-bold uppercase tracking-widest text-red-600 mb-3">
            <Sparkles size={12} /> Strategic Intake Portal
          </div>
          <h3 className="text-xl md:text-2xl font-heading font-black uppercase tracking-tight leading-tight">
            {title}
          </h3>
          <p className={cn("text-xs font-medium mt-1", isDark ? "text-white/50" : "text-black/50")}>
            {subtitle}
          </p>
        </div>

        {/* Step Numbers & Indicators */}
        <div className="mb-6 flex items-center justify-center gap-1.5 flex-wrap">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => index < currentStep && setCurrentStep(index)}
                disabled={index > currentStep}
                className={cn(
                  "group relative flex h-7 w-7 md:h-8 md:w-8 items-center justify-center rounded-full transition-all duration-300 font-bold text-xs",
                  "disabled:cursor-not-allowed",
                  index < currentStep && (isDark ? "bg-white/10 text-white/70" : "bg-black/10 text-black/70"),
                  index === currentStep && "bg-red-600 text-white shadow-lg shadow-red-600/30 scale-105",
                  index > currentStep && (isDark ? "bg-white/5 text-white/30" : "bg-black/5 text-black/30")
                )}
              >
                {index < currentStep ? (
                  <CheckIcon className="h-3.5 w-3.5" strokeWidth={3} />
                ) : (
                  <span>{step.id}</span>
                )}
              </button>
              {index < steps.length - 1 && (
                <div className={cn("h-[2px] w-3 sm:w-5 transition-colors duration-300", index < currentStep ? "bg-red-600" : (isDark ? "bg-white/10" : "bg-black/10"))} />
              )}
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className={cn("mb-6 overflow-hidden rounded-full h-[3px]", isDark ? "bg-white/10" : "bg-black/10")}>
          <div
            className="h-full bg-gradient-to-r from-red-600 to-red-500 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Input Fields Container */}
        <div className="space-y-6">
          <div key={currentStepData.id} className="space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="flex items-baseline justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-red-600 flex items-center gap-1.5">
                {currentStepData.label}
              </label>
              <span className={cn("text-xs font-semibold tabular-nums", isDark ? "text-white/40" : "text-black/40")}>
                Step {currentStep + 1} of {steps.length}
              </span>
            </div>

            {/* Render input based on field type (NO autoFocus to prevent page jumping on load) */}
            {currentStepData.type === "select" ? (
              <div className="grid grid-cols-1 gap-2 mt-2">
                {currentStepData.options?.map((opt) => {
                  const isSelected = formData[currentStepData.field] === opt;
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => handleInputChange(currentStepData.field, opt)}
                      className={cn(
                        "w-full text-left px-4 py-3 rounded-xl border text-xs md:text-sm font-semibold transition-all duration-200 flex items-center justify-between",
                        isSelected
                          ? "border-red-600 bg-red-600/10 text-red-600 font-bold"
                          : isDark
                          ? "border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:border-white/20"
                          : "border-black/10 bg-black/5 text-black/80 hover:bg-black/10 hover:border-black/20"
                      )}
                    >
                      <span>{opt}</span>
                      {isSelected && <CheckIcon className="h-4 w-4 text-red-600" strokeWidth={3} />}
                    </button>
                  );
                })}
              </div>
            ) : currentStepData.type === "textarea" ? (
              <textarea
                rows={3}
                placeholder={currentStepData.placeholder}
                value={formData[currentStepData.field] || ""}
                onChange={(e) => handleInputChange(currentStepData.field, e.target.value)}
                className={cn(
                  "w-full rounded-2xl p-4 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-600 resize-none",
                  isDark
                    ? "border border-white/10 bg-white/5 text-white placeholder:text-white/30"
                    : "border border-black/10 bg-black/5 text-black placeholder:text-black/30"
                )}
              />
            ) : (
              <input
                type={currentStepData.type || "text"}
                placeholder={currentStepData.placeholder}
                value={formData[currentStepData.field] || ""}
                onChange={(e) => handleInputChange(currentStepData.field, e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && formData[currentStepData.field]?.trim()) {
                    e.preventDefault();
                    handleNext();
                  }
                }}
                className={cn(
                  "w-full h-12 rounded-2xl px-4 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-600",
                  isDark
                    ? "border border-white/10 bg-white/5 text-white placeholder:text-white/30"
                    : "border border-black/10 bg-black/5 text-black placeholder:text-black/30"
                )}
              />
            )}
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-2">
            <button
              type="button"
              onClick={handleNext}
              disabled={!formData[currentStepData.field]?.trim() || isSubmitting}
              className={cn(
                "w-full h-12 rounded-full font-bold uppercase text-xs tracking-widest transition-all duration-300 flex items-center justify-center gap-2 shadow-lg disabled:opacity-40 disabled:cursor-not-allowed",
                "bg-red-600 text-white hover:bg-black hover:shadow-red-600/20"
              )}
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  {currentStep === steps.length - 1 ? "Submit Proposal Request" : "Continue"}
                  {currentStep === steps.length - 1 ? (
                    <Send className="h-3.5 w-3.5" />
                  ) : (
                    <ArrowRightIcon className="h-3.5 w-3.5" />
                  )}
                </>
              )}
            </button>

            {currentStep > 0 && (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep - 1)}
                className={cn(
                  "w-full text-center text-xs font-semibold uppercase tracking-wider transition-colors py-1",
                  isDark ? "text-white/40 hover:text-white" : "text-black/40 hover:text-black"
                )}
              >
                Go Back
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
