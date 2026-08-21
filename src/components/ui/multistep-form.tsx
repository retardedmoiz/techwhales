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

// Preset tailored questions for each service slug
export const SERVICE_FORM_STEPS: Record<string, FormStep[]> = {
  "web-development": [
    { id: 1, label: "Full Name", field: "name", placeholder: "e.g. Alex Morgan", type: "text" },
    { id: 2, label: "Work Email", field: "email", placeholder: "alex@company.com", type: "email" },
    { id: 3, label: "Project Type", field: "projectType", placeholder: "Select project scope", type: "select", options: ["New Website", "Web App / Custom Portal", "E-commerce Store", "Redesign & Speed Optimization"] },
    { id: 4, label: "Budget & Timeline", field: "details", placeholder: "e.g. $5k - $10k budget, launch in 30 days", type: "text" }
  ],
  "digital-marketing": [
    { id: 1, label: "Full Name", field: "name", placeholder: "e.g. Sarah Jenkins", type: "text" },
    { id: 2, label: "Work Email", field: "email", placeholder: "sarah@brand.com", type: "email" },
    { id: 3, label: "Primary Growth Goal", field: "goal", placeholder: "Select your main target", type: "select", options: ["Increase Online Sales", "High-Quality Lead Gen", "Brand Awareness", "Full Funnel Overhaul"] },
    { id: 4, label: "Target Monthly Budget", field: "budget", placeholder: "e.g. $3k - $15k / month", type: "text" }
  ],
  "media-buying": [
    { id: 1, label: "Full Name", field: "name", placeholder: "e.g. Marcus Vance", type: "text" },
    { id: 2, label: "Work Email", field: "email", placeholder: "marcus@agency.com", type: "email" },
    { id: 3, label: "Target Channels", field: "channels", placeholder: "Choose primary platform", type: "select", options: ["Meta Ads (FB/IG)", "TikTok Ads", "Google & Search Media", "Multi-Channel Scaling"] },
    { id: 4, label: "Current Monthly Ad Spend", field: "spend", placeholder: "e.g. $5,000+ / month", type: "text" }
  ],
  "search-monetization": [
    { id: 1, label: "Full Name", field: "name", placeholder: "e.g. David Lin", type: "text" },
    { id: 2, label: "Work Email", field: "email", placeholder: "david@domaincorp.com", type: "email" },
    { id: 3, label: "Traffic / Inventory Type", field: "trafficType", placeholder: "Select domain type", type: "select", options: ["Parked Domains", "Search Arbitrage", "Native Ad Traffic", "Direct Navigation"] },
    { id: 4, label: "Est. Daily Clicks / Traffic", field: "volume", placeholder: "e.g. 50k clicks per day", type: "text" }
  ],
  "branding": [
    { id: 1, label: "Full Name", field: "name", placeholder: "e.g. Elena Rostova", type: "text" },
    { id: 2, label: "Work Email", field: "email", placeholder: "elena@startup.io", type: "email" },
    { id: 3, label: "Branding Scope", field: "scope", placeholder: "Select branding focus", type: "select", options: ["Full Brand Identity & Logo", "Brand Rebranding & Strategy", "Market Positioning", "Creative Ad Assets"] },
    { id: 4, label: "Company / Project Name", field: "brandName", placeholder: "e.g. Lumina Technologies", type: "text" }
  ],
  "affiliate-marketing": [
    { id: 1, label: "Full Name", field: "name", placeholder: "e.g. Chris Bennett", type: "text" },
    { id: 2, label: "Work Email", field: "email", placeholder: "chris@network.com", type: "email" },
    { id: 3, label: "Program Status", field: "status", placeholder: "Select current status", type: "select", options: ["Launch New Affiliate Program", "Publisher Recruitment & Scale", "Network Management", "Compliance & Fraud Audit"] },
    { id: 4, label: "Business Vertical", field: "vertical", placeholder: "e.g. E-commerce, Finance, Legal", type: "text" }
  ],
  "business-outsourcing": [
    { id: 1, label: "Full Name", field: "name", placeholder: "e.g. Robert Sterling", type: "text" },
    { id: 2, label: "Work Email", field: "email", placeholder: "robert@enterprise.com", type: "email" },
    { id: 3, label: "Team Size Needed", field: "teamSize", placeholder: "Select required capacity", type: "select", options: ["1-3 Dedicated Support Agents", "5-10 Full BPO Operations", "Dedicated SDR Sales Team", "Custom Hybrid Team"] },
    { id: 4, label: "Operational Goals", field: "requirements", placeholder: "Briefly describe your support / sales needs...", type: "textarea" }
  ],
  "living-trust-probate": [
    { id: 1, label: "Full Name", field: "name", placeholder: "e.g. Michael Thorne", type: "text" },
    { id: 2, label: "Phone or Email", field: "contact", placeholder: "michael@example.com or (555) 000-0000", type: "text" },
    { id: 3, label: "Legal Service Needed", field: "service", placeholder: "Select primary concern", type: "select", options: ["Living Trust Creation", "Probate Court Navigation", "Comprehensive Estate Plan", "Asset Protection"] },
    { id: 4, label: "City & State", field: "location", placeholder: "e.g. Los Angeles, CA", type: "text" }
  ],
  "tax-preparation": [
    { id: 1, label: "Full Name", field: "name", placeholder: "e.g. Jennifer Ross", type: "text" },
    { id: 2, label: "Email Address", field: "email", placeholder: "jennifer@example.com", type: "email" },
    { id: 3, label: "Entity Type", field: "entity", placeholder: "Select tax filing type", type: "select", options: ["Individual / Family Return", "LLC / Partnership", "S-Corp / C-Corp", "Multiple Business Entities"] },
    { id: 4, label: "Filing Tax Year(s)", field: "taxYears", placeholder: "e.g. 2024 Return, Past Due Years", type: "text" }
  ],
  "tax-resolution-debt-relief": [
    { id: 1, label: "Full Name", field: "name", placeholder: "e.g. Daniel Miller", type: "text" },
    { id: 2, label: "Phone / Email", field: "contact", placeholder: "(555) 123-4567 or email", type: "text" },
    { id: 3, label: "IRS / Tax Issue", field: "issue", placeholder: "Select your main challenge", type: "select", options: ["IRS Back Taxes & Debt", "Unfiled Returns Defense", "Audit Representation", "Wage Garnishment / Liens"] },
    { id: 4, label: "Estimated Tax Debt Amount", field: "debtAmount", placeholder: "e.g. $10,000 - $50,000+", type: "text" }
  ],
  "real-estate-eviction": [
    { id: 1, label: "Full Name", field: "name", placeholder: "e.g. Rachel Adams", type: "text" },
    { id: 2, label: "Phone / Email", field: "contact", placeholder: "rachel@example.com or phone", type: "text" },
    { id: 3, label: "Real Estate Service", field: "serviceType", placeholder: "Select property assistance", type: "select", options: ["Lawful Eviction Notice & Filing", "Deed & Property Transfer", "Lease Review & Contracts", "Property Dispute Consultation"] },
    { id: 4, label: "Property Location", field: "location", placeholder: "e.g. Los Angeles County, CA", type: "text" }
  ],
  "family-law-divorce": [
    { id: 1, label: "Full Name", field: "name", placeholder: "e.g. Anonymous / Confidential", type: "text" },
    { id: 2, label: "Phone / Email", field: "contact", placeholder: "Confidential phone or email", type: "text" },
    { id: 3, label: "Legal Need", field: "need", placeholder: "Select family law matter", type: "select", options: ["Divorce Filing / Dissolution", "Child Custody & Support", "Spousal Support & Asset Division", "Mediation & Pre-Filing"] },
    { id: 4, label: "Timeline / Court Date?", field: "timeline", placeholder: "e.g. Planning ahead, court date pending", type: "text" }
  ],
  "small-claims-disputes": [
    { id: 1, label: "Full Name", field: "name", placeholder: "e.g. James Carter", type: "text" },
    { id: 2, label: "Contact Info", field: "contact", placeholder: "james@example.com or phone", type: "text" },
    { id: 3, label: "Claim Amount Range", field: "amount", placeholder: "Select dispute value", type: "select", options: ["Under $2,500", "$2,500 - $5,000", "$5,000 - $10,000", "$10,000+"] },
    { id: 4, label: "Brief Summary of Dispute", field: "summary", placeholder: "e.g. Unpaid contract, damaged goods", type: "textarea" }
  ],
  "residential-design": [
    { id: 1, label: "Full Name", field: "name", placeholder: "e.g. Sophia Martinez", type: "text" },
    { id: 2, label: "Email Address", field: "email", placeholder: "sophia@example.com", type: "email" },
    { id: 3, label: "Design Scope", field: "scope", placeholder: "Select drafting service", type: "select", options: ["New Custom Home Blueprint", "Renovation & Extension Drafting", "Floorplan Optimization", "Permit & Contractor Drawings"] },
    { id: 4, label: "Est. Square Footage", field: "sqft", placeholder: "e.g. 2,800 sq ft", type: "text" }
  ],
  "interior-staging": [
    { id: 1, label: "Full Name", field: "name", placeholder: "e.g. Amanda Vance", type: "text" },
    { id: 2, label: "Email Address", field: "email", placeholder: "amanda@realty.com", type: "email" },
    { id: 3, label: "Staging Service", field: "service", placeholder: "Select staging method", type: "select", options: ["3D Virtual Staging & Renders", "On-Site Physical Staging", "Realtor Listing Asset Suite", "Interior Styling Consultation"] },
    { id: 4, label: "Property Location & Listing Date", field: "listingDate", placeholder: "e.g. Beverly Hills, listing in 2 weeks", type: "text" }
  ],
  "human-resources": [
    { id: 1, label: "Full Name", field: "name", placeholder: "e.g. David Vance", type: "text" },
    { id: 2, label: "Work Email", field: "email", placeholder: "david@company.com", type: "email" },
    { id: 3, label: "Talent Requirement", field: "requirement", placeholder: "Select HR service", type: "select", options: ["Remote Tech & Developer Sourcing", "Sales & Support Staffing", "Payroll & HR Compliance", "Full Recruiting Audit"] },
    { id: 4, label: "Roles to Fill", field: "roles", placeholder: "e.g. 2 SDRs, 1 Senior Frontend Dev", type: "text" }
  ],
  "bookkeeping": [
    { id: 1, label: "Full Name", field: "name", placeholder: "e.g. Thomas Wright", type: "text" },
    { id: 2, label: "Work Email", field: "email", placeholder: "thomas@business.com", type: "email" },
    { id: 3, label: "Monthly Revenue / Expenses", field: "volume", placeholder: "Select monthly scale", type: "select", options: ["Under $10k / month", "$10k - $50k / month", "$50k - $200k / month", "$200k+ / month"] },
    { id: 4, label: "Accounting Software Used", field: "software", placeholder: "e.g. QuickBooks, Xero, None", type: "text" }
  ]
};

// Default general lead generation steps
export const DEFAULT_FORM_STEPS: FormStep[] = [
  { id: 1, label: "Full Name", field: "name", placeholder: "e.g. Tariq Khan", type: "text" },
  { id: 2, label: "Email Address", field: "email", placeholder: "you@company.com", type: "email" },
  { id: 3, label: "Service of Interest", field: "service", placeholder: "Select a solution", type: "select", options: ["Web & Custom App Development", "Digital & Performance Marketing", "Paid Media & Search Monetization", "BPO & Operations Support", "Legal & Tax Solutions"] },
  { id: 4, label: "Project Goal / Details", field: "goal", placeholder: "How can TechWhales help you succeed?", type: "textarea" }
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
              <span className="text-xs uppercase tracking-widest font-bold text-red-600 block">Inquiry Received</span>
              <h3 className="text-2xl md:text-3xl font-heading font-black uppercase tracking-tight">You&apos;re All Set!</h3>
              <p className={cn("text-sm font-medium leading-relaxed max-w-xs mx-auto", isDark ? "text-white/60" : "text-black/60")}>
                Thank you <strong className={isDark ? "text-white" : "text-black"}>{formData.name || "there"}</strong>! A TechWhales specialist will review your request and contact you within 2 business hours.
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
            <Sparkles size={12} /> Fast Response Form
          </div>
          <h3 className="text-xl md:text-2xl font-heading font-black uppercase tracking-tight leading-tight">
            {title}
          </h3>
          <p className={cn("text-xs font-medium mt-1", isDark ? "text-white/50" : "text-black/50")}>
            {subtitle}
          </p>
        </div>

        {/* Step Numbers & Indicators */}
        <div className="mb-6 flex items-center justify-center gap-2">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => index < currentStep && setCurrentStep(index)}
                disabled={index > currentStep}
                className={cn(
                  "group relative flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 font-bold text-xs",
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
                <div className={cn("h-[2px] w-6 md:w-8 transition-colors duration-300", index < currentStep ? "bg-red-600" : (isDark ? "bg-white/10" : "bg-black/10"))} />
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
              <label className="text-sm font-bold uppercase tracking-wider text-red-600 flex items-center gap-1.5">
                {currentStepData.label}
              </label>
              <span className={cn("text-xs font-semibold tabular-nums", isDark ? "text-white/40" : "text-black/40")}>
                Step {currentStep + 1} of {steps.length}
              </span>
            </div>

            {/* Render input based on field type */}
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
                autoFocus
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
                autoFocus
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
                  {currentStep === steps.length - 1 ? "Submit Inquiry" : "Continue"}
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
