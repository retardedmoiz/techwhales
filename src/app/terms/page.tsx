import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${SITE_CONFIG.brand}`,
  description: `Terms & Conditions for ${SITE_CONFIG.brand}, operated by ${SITE_CONFIG.legalName}.`,
};

export default function TermsPage() {
  const terms = [
    { title: "Acceptance of Terms", content: `By using ${SITE_CONFIG.brand}'s website and services, you agree to these Terms and Conditions. If you do not agree, please cease all usage immediately. ${SITE_CONFIG.legalName} reserves the right to modify these terms at any time.` },
    { title: "Services", content: `${SITE_CONFIG.brand}, operated by ${SITE_CONFIG.legalName}, provides digital marketing, BPO, outbound sales, web development, and consulting services. Service details, deliverables, and pricing are specified in individual service agreements.` },
    { title: "Intellectual Property", content: `All content on this website, including text, graphics, logos, and images, is the property of ${SITE_CONFIG.legalName} and is protected by applicable intellectual property laws. You may not reproduce or distribute any content without written permission.` },
    { title: "Limitation of Liability", content: `${SITE_CONFIG.legalName} shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the fees paid by you in the three months preceding the claim.` },
    { title: "Confidentiality", content: `Both parties agree to maintain confidentiality of any proprietary information shared during the course of the engagement. This obligation survives the termination of services.` },
    { title: "Governing Law", content: `These terms shall be governed by and construed in accordance with the laws of the State of California, United States. Any disputes shall be resolved through binding arbitration in Los Angeles.` },
    { title: "Contact", content: `Questions about these Terms should be directed to ${SITE_CONFIG.contact.general}. ${SITE_CONFIG.legalName} is the legal entity responsible for ${SITE_CONFIG.brand}.` },
  ];

  return (
    <div className="bg-white text-black min-h-screen">
      <section className="bg-[#fafafa] border-b border-black/10 py-16 md:py-24">
        <div className="container mx-auto">
          <nav className="flex items-center gap-2 text-xs text-black/50 uppercase tracking-widest mb-6">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <span>/</span>
            <span className="text-black">Terms & Conditions</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-heading font-black tracking-tighter text-black uppercase mb-3">Terms & Conditions</h1>
          <p className="text-black/60 text-sm">Last updated: August 2026 · {SITE_CONFIG.legalName}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-3xl">
          <p className="text-black/75 leading-relaxed mb-10 text-sm md:text-base">
            These Terms and Conditions govern your use of the {SITE_CONFIG.brand} website and services provided by {SITE_CONFIG.legalName}.
            By accessing our website at {SITE_CONFIG.domain}, you agree to be bound by these terms.
          </p>
          <div className="space-y-10">
            {terms.map((section, i) => (
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
