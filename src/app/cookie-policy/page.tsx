import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: `Cookie Policy | ${SITE_CONFIG.brand}`,
  description: `Cookie Policy for ${SITE_CONFIG.brand}, operated by ${SITE_CONFIG.legalName}.`,
};

export default function CookiePolicyPage() {
  return (
    <>
      <section className="min-h-[35vh] flex items-center relative"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0, 212, 255, 0.05) 0%, transparent 60%), #04070F" }}>
        <div className="container mx-auto py-16">
          <nav className="flex items-center gap-2 text-sm text-white/30 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-cyan-400">Cookie Policy</span>
          </nav>
          <h1 className="text-5xl md:text-6xl font-heading font-black tracking-tighter mb-3">Cookie Policy</h1>
          <p className="text-white/40">Last updated: January 2025 · {SITE_CONFIG.legalName}</p>
        </div>
      </section>
      <section className="section-padding border-t border-white/5">
        <div className="container mx-auto max-w-3xl">
          <div className="space-y-10 text-sm text-white/50 leading-relaxed">
            <p>{SITE_CONFIG.brand}, operated by {SITE_CONFIG.legalName}, uses cookies on {SITE_CONFIG.domain}. This policy explains what cookies are, how we use them, and your choices.</p>
            {[
              { title: "What Are Cookies", content: "Cookies are small text files stored on your device when you visit a website. They help us remember your preferences and understand how you use our site." },
              { title: "How We Use Cookies", content: "We use cookies for analytics (Google Analytics), performance monitoring, preference storage, and marketing attribution. These help us improve our website and understand visitor behavior." },
              { title: "Types of Cookies We Use", content: "Essential cookies (required for site function), analytics cookies (to understand usage patterns), marketing cookies (to measure campaign effectiveness), and preference cookies (to remember your settings)." },
              { title: "Managing Cookies", content: "You can control cookies through your browser settings. Note that disabling certain cookies may affect the functionality of our website. Most browsers allow you to block or delete cookies." },
              { title: "Contact", content: `For questions about our cookie use, contact ${SITE_CONFIG.contact.general}.` },
            ].map((section, i) => (
              <div key={i}>
                <h2 className="text-lg font-heading font-black text-white mb-3">{i + 1}. {section.title}</h2>
                <p>{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
