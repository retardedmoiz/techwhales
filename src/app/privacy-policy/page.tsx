import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE_CONFIG.brand}`,
  description: `Privacy Policy for ${SITE_CONFIG.brand}, operated by ${SITE_CONFIG.legalName}.`,
};

export default function PrivacyPolicyPage() {
  const sections = [
    { title: "Information We Collect", content: `We collect information you provide directly to us, including name, email address, company name, phone number, and any other details you choose to provide. We also collect info automatically when you use our services, including cookies to monitor platform engagement.` },
    { title: "How We Use Your Information", content: `We use this data to deliver customer support, manage performance marketing channels, optimize outbound appointment setting workflows, and coordinate bookkeeping records under the operations of ${SITE_CONFIG.legalName}.` },
    { title: "Information Sharing", content: `We do not sell, trade, or transfer your personal credentials to third parties without your consent. We may share information with validated service providers who assist us in operating our affiliate tracking platforms (Everflow) or domain parking configurations, subject to strict privacy rules.` },
    { title: "Data Security", content: `We use transport layer security (HTTPS) and restricted credentials access controls to safeguard data. However, no transmission over the Internet can be guaranteed 100% secure.` },
    { title: "Cookies & Monetization Logs", content: `We use cookies to maintain session states and track clicks to verify traffic validity in search arbitrage campaigns. This assists us in detecting compliance issues and filtering out bots.` },
    { title: "Contact Us", content: `For privacy-related questions, contact us at ${SITE_CONFIG.contact.general}. ${SITE_CONFIG.legalName} is the legal owner of ${SITE_CONFIG.brand}.` },
  ];

  return (
    <div className="bg-white text-black min-h-screen">
      <section className="bg-[#fafafa] border-b border-black/10 py-16 md:py-24">
        <div className="container mx-auto">
          <nav className="flex items-center gap-2 text-xs text-black/50 uppercase tracking-widest mb-6">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <span>/</span>
            <span className="text-black">Privacy Policy</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-heading font-black tracking-tighter text-black uppercase mb-3">Privacy Policy</h1>
          <p className="text-black/60 text-sm">Last updated: August 2026 · {SITE_CONFIG.legalName}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-3xl">
          <p className="text-black/70 leading-relaxed mb-10 text-sm md:text-base">
            This Privacy Policy describes how {SITE_CONFIG.legalName} (&quot;{SITE_CONFIG.brand}&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and shares information when you utilize our services, including our website at {SITE_CONFIG.domain}.
          </p>
          <div className="space-y-10">
            {sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-lg font-heading font-black text-black uppercase mb-3">{i + 1}. {section.title}</h2>
                <p className="text-black/75 leading-relaxed text-sm">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
