import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: `Legal Terms & Conditions | ${SITE_CONFIG.brand}`,
  description: `Legal agreements, Terms of Service, and disclosures for ${SITE_CONFIG.brand}, operated by ${SITE_CONFIG.legalName}.`,
};

export default function LegalPage() {
  const terms = [
    { title: "Acceptance of Terms", content: `By accessing this website and utilizing the services of ${SITE_CONFIG.brand} (operated by ${SITE_CONFIG.legalName}), you agree to comply with and be bound by these Terms & Conditions. If you do not agree, please cease all usage immediately.` },
    { title: "Corporate Registration & Ownership", content: `${SITE_CONFIG.brand} is the digital operations brand of ${SITE_CONFIG.legalName}, a registered business entity in the State of California. Principal offices are situated at ${SITE_CONFIG.address}. All agreements are governed by the laws of the State of California, United States.` },
    { title: "Services Rendered", content: `We specialize in Business Process Outsourcing (BPO), Outbound & Inbound Sales Campaigns, Performance Marketing, Everflow Affiliate Network configurations, Paid Media Buying (Meta, TikTok), Search Arbitrage (RSOC), Ads for Domains (AFD) monetization, custom development, and HR talent acquisition. Precise deliverables are structured in individual client Service Level Agreements (SLAs).` },
    { title: "Intellectual Property Rights", content: `All materials displayed, including text, custom graphics, mockups, generated case-study results, and structural codebase, are the exclusive property of ${SITE_CONFIG.legalName} and are protected under international copyright, trademark, and trade secret laws.` },
    { title: "Confidentiality & Compliance", content: `We adhere strictly to client confidentiality. Under our BPO and HR support wings, employee payroll coordination, employee engagement files, and customer database records are securely processed under client-authorized CRMs and secure networks. We enforce robust compliance checks for fraud prevention in affiliate traffic.` },
    { title: "Limitation of Liability", content: `In no event shall ${SITE_CONFIG.legalName} or its owner Tariq Khan be held liable for any indirect, circumstantial, or punitive damages resulting from platform downtime or performance fluctuations. Total aggregate liability is limited to the fees collected under the specific client SLA during the immediate 3-month window preceding the claim.` },
    { title: "Arbitration & Disputes", content: `Any dispute or claim arising out of operations or terms shall be settled by binding arbitration in Los Angeles, California, in accordance with the commercial rules of the American Arbitration Association.` }
  ];

  const privacy = [
    { title: "Data Collection", content: `We collect contact parameters (name, corporate email, phone, company size) voluntarily submitted during consultation bookings, alongside automated analytical parameters (cookies, screen resolution, referral path) via standard site cookies to monitor UI performance.` },
    { title: "Usage of Personal Records", content: `Records are utilized strictly to coordinate scheduling, deliver performance marketing reporting metrics, optimize outbound sales templates, and send technical notifications. We never distribute personal information to unrelated brokers.` },
    { title: "Third-Party Integrations & Monitored Feeds", content: `Our monetization models utilize parking services like Sedo, Bodis, and System1. Our affiliate programs run Everflow. While navigating these dashboards, statistical click data is gathered to combat compliance violations and filter invalid traffic.` },
    { title: "Data Security Measures", content: `We implement transport layer security (HTTPS) and restrictive IAM permissions to safeguard our data feeds. We maintain clear logs to coordinate onboarding and bookkeeping audits.` }
  ];

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Page Header */}
      <section className="bg-[#fafafa] border-b border-black/10 py-16 md:py-24">
        <div className="container mx-auto">
          <nav className="flex items-center gap-2 text-xs text-black/50 uppercase tracking-widest mb-6">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <span>/</span>
            <span className="text-black">Legal Terms</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tighter text-black uppercase mb-4">
            Legal Disclosures
          </h1>
          <p className="text-black/60 text-sm max-w-xl leading-relaxed">
            Please read these terms and privacy disclosures carefully. Operated by {SITE_CONFIG.legalName} (Los Angeles, CA).
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto max-w-4xl">
          {/* Section 1: Terms & Conditions */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-heading font-black uppercase text-black mb-8 border-b border-black pb-4">
              Terms & Conditions
            </h2>
            <div className="space-y-8">
              {terms.map((item, idx) => (
                <div key={idx}>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-black/40 mb-2">
                    {idx + 1}. {item.title}
                  </h3>
                  <p className="text-black/75 text-sm leading-relaxed">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Privacy Disclosures */}
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-black uppercase text-black mb-8 border-b border-black pb-4">
              Privacy Policy
            </h2>
            <div className="space-y-8">
              {privacy.map((item, idx) => (
                <div key={idx}>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-black/40 mb-2">
                    {idx + 1}. {item.title}
                  </h3>
                  <p className="text-black/75 text-sm leading-relaxed">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Direct Compliance Contact */}
          <div className="mt-20 p-8 border border-black/10 rounded-2xl bg-[#fafafa] text-center">
            <h3 className="text-sm font-heading font-black text-black uppercase mb-2">
              Compliance & Legal Inquiries
            </h3>
            <p className="text-black/60 text-xs mb-4">
              Direct all official documents, copyright notifications, or bookkeeping compliance audits to our general counsel email.
            </p>
            <a 
              href={`mailto:${SITE_CONFIG.contact.general}`} 
              className="text-sm font-bold uppercase tracking-widest text-black border-b border-black pb-0.5 hover:text-black/60 hover:border-black/60 transition-colors"
            >
              {SITE_CONFIG.contact.general}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
