"use client";

import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import { FadeUp } from "@/components/ui/fade-up";

export default function TermsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-[#fafafa] border-b border-black/10 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <FadeUp>
            <nav className="flex items-center gap-2 text-xs font-bold text-black/40 uppercase tracking-widest mb-6">
              <Link href="/" className="hover:text-black transition-colors">Home</Link>
              <span>/</span>
              <span className="text-black">Terms of Service</span>
            </nav>
            <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tighter text-black uppercase mb-4">
              Terms of Service
            </h1>
            <p className="text-black/60 text-sm max-w-xl leading-relaxed font-medium">
              Effective Date: January 1, 2024. Operated by {SITE_CONFIG.legalName}.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-4xl">
          <FadeUp delay={0.2}>
            <div className="prose prose-neutral max-w-none prose-headings:font-heading prose-headings:font-black prose-headings:uppercase prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-black/70 prose-p:leading-relaxed prose-li:text-black/70">
              <p>
                Welcome to {SITE_CONFIG.brand}, operated by {SITE_CONFIG.legalName} ("Company", "we", "our", "us"). 
                By accessing or using our website located at {SITE_CONFIG.siteUrl}, you agree to be bound by these Terms of Service.
              </p>

              <h2>1. Services Provided</h2>
              <p>
                {SITE_CONFIG.brand} provides business process outsourcing, outbound sales, digital marketing, web development, and other growth-related services. The specific scope, deliverables, and fees for any engagement will be outlined in a separate Statement of Work (SOW) or Master Services Agreement (MSA) signed by both parties.
              </p>

              <h2>2. Client Responsibilities</h2>
              <p>
                To ensure the successful execution of our services, clients are expected to provide timely feedback, necessary access to systems (CRMs, ad accounts, etc.), and accurate information. Delays caused by the client may affect project timelines and deliverables.
              </p>

              <h2>3. Intellectual Property</h2>
              <p>
                Unless otherwise specified in a separate agreement, all methodologies, frameworks, codebases, and marketing strategies developed by {SITE_CONFIG.brand} remain our intellectual property. Upon full payment for custom deliverables (such as a website or specific ad creatives), ownership of those specific deliverables will transfer to the client.
              </p>

              <h2>4. Payment Terms</h2>
              <p>
                Invoices are typically due upon receipt unless otherwise stated in your MSA. We reserve the right to suspend services for accounts that are past due by more than 15 days. All fees are non-refundable once services have been rendered.
              </p>

              <h2>5. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, {SITE_CONFIG.legalName} shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from your use of our services.
              </p>

              <h2>6. Termination</h2>
              <p>
                Either party may terminate a service agreement according to the notice period specified in their MSA (typically 30 days written notice). Upon termination, the client is responsible for all fees incurred up to the date of termination.
              </p>

              <h2>7. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.
              </p>

              <h2>8. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us at:<br /><br />
                <strong>{SITE_CONFIG.legalName}</strong><br />
                {SITE_CONFIG.address}<br />
                Email: {SITE_CONFIG.contact.general}
              </p>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
