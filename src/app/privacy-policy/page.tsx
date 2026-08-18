"use client";

import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import { FadeUp } from "@/components/ui/fade-up";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-[#fafafa] border-b border-black/10 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <FadeUp>
            <nav className="flex items-center gap-2 text-xs font-bold text-black/40 uppercase tracking-widest mb-6">
              <Link href="/" className="hover:text-black transition-colors">Home</Link>
              <span>/</span>
              <span className="text-black">Privacy Policy</span>
            </nav>
            <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tighter text-black uppercase mb-4">
              Privacy Policy
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
                At {SITE_CONFIG.brand}, operated by {SITE_CONFIG.legalName} ("Company", "we", "us", or "our"), we respect your privacy and are committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit {SITE_CONFIG.siteUrl}.
              </p>

              <h2>1. Information We Collect</h2>
              <p>
                We collect several types of information from and about users of our Website, including:
              </p>
              <ul>
                <li><strong>Personal Data:</strong> Information by which you may be personally identified, such as name, postal address, e-mail address, telephone number, or any other identifier by which you may be contacted online or offline.</li>
                <li><strong>Usage Data:</strong> Information about your internet connection, the equipment you use to access our Website, and usage details (IP addresses, browser types, interaction with the site).</li>
              </ul>

              <h2>2. How We Collect Information</h2>
              <p>We collect this information:</p>
              <ul>
                <li>Directly from you when you provide it to us (e.g., by filling out forms on our Website to request a consultation).</li>
                <li>Automatically as you navigate through the site using cookies, web beacons, and other tracking technologies.</li>
              </ul>

              <h2>3. How We Use Your Information</h2>
              <p>We use information that we collect about you or that you provide to us:</p>
              <ul>
                <li>To present our Website and its contents to you.</li>
                <li>To provide you with information, products, or services that you request from us.</li>
                <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us.</li>
                <li>To notify you about changes to our Website or any products or services we offer or provide though it.</li>
                <li>For marketing purposes, provided you have opted in or as permitted by law.</li>
              </ul>

              <h2>4. Disclosure of Your Information</h2>
              <p>
                We may disclose aggregated information about our users, and information that does not identify any individual, without restriction. We do not sell your personal data to third parties. We may disclose personal information to contractors, service providers, and other third parties we use to support our business (such as CRM software providers).
              </p>

              <h2>5. Data Security</h2>
              <p>
                We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. However, the transmission of information via the internet is not completely secure, and we cannot guarantee the security of your personal information transmitted to our Website.
              </p>

              <h2>6. Changes to Our Privacy Policy</h2>
              <p>
                It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users' personal information, we will notify you through a notice on the Website home page.
              </p>

              <h2>7. Contact Information</h2>
              <p>
                To ask questions or comment about this privacy policy and our privacy practices, contact us at:<br /><br />
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
