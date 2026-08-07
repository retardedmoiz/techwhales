"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Clock, MapPin, Send, CheckCircle, ChevronDown } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

const faqs = [
  { q: "How quickly do you respond to inquiries?", a: "We respond to all inquiries within 24 hours on business days. For urgent matters, email general operations at team@techwhales.com." },
  { q: "Do you offer free consultations?", a: "Yes — our initial strategy session is completely free with no obligation. We'll assess your operational bottlenecks and recommend BPO or marketing setups." },
  { q: "What information should I include in my message?", a: "Tell us your industry, what department tasks you are looking to outsource (customer support, cold calls, development), and your approximate scaling timeline." },
  { q: "Do you work with businesses outside the US?", a: "Yes, we coordinate operations globally. Our BPO teams are situated across optimal time zones to ensure seamless support." },
  { q: "How do you price your services?", a: "Pricing is structure-based or project-based. Outbound SDR or Support campaigns utilize standard hourly or monthly agent rates." },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "", email: "", company: "", service: "", budget: "", message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const services = [
    "Business Process Outsourcing (BPO)",
    "Performance Marketing / Media Buying",
    "Affiliate Network setup (Everflow)",
    "Custom Web/App Development",
    "HR Talent & Recruiting",
    "Finance Support & Bookkeeping",
    "Other Growth Services",
  ];

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Header Banner */}
      <section className="bg-[#fafafa] border-b border-black/10 py-16 md:py-24">
        <div className="container mx-auto">
          <nav className="flex items-center gap-2 text-xs text-black/50 uppercase tracking-widest mb-6">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <span>/</span>
            <span className="text-black">Contact</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tighter text-black uppercase mb-4">
            Start the Conversation.
          </h1>
          <p className="text-black/60 text-sm max-w-xl leading-relaxed">
            Let&apos;s review your operational bottlenecks, outbound appointment setting pipelines, or media campaigns. No sales scripts, just solutions.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-16">

            {/* Contact Info Sidebar */}
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-xl font-heading font-black uppercase text-black mb-4">Get in Touch</h2>
                <p className="text-black/60 text-sm leading-relaxed">
                  {SITE_CONFIG.brand} operations are run by {SITE_CONFIG.legalName}. We support global teams with reliable outsourcing solutions.
                </p>
              </div>

              {/* Contact Info blocks */}
              <div className="flex flex-col gap-4">
                <a href={`mailto:${SITE_CONFIG.contact.general}`}
                  className="border border-black/10 hover:border-black rounded-2xl p-5 block bg-[#fafafa] transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <Mail size={14} className="text-black/40" />
                    <span className="text-[0.65rem] font-bold tracking-widest uppercase text-black/55">General Counsel & Strategy</span>
                  </div>
                  <p className="text-sm font-bold text-black">{SITE_CONFIG.contact.general}</p>
                </a>

                <div className="border border-black/10 rounded-2xl p-5 bg-[#fafafa]">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock size={14} className="text-black/40" />
                    <span className="text-[0.65rem] font-bold tracking-widest uppercase text-black/55">Business Hours</span>
                  </div>
                  <p className="text-sm font-bold text-black">Monday – Friday: 9:00 AM – 6:00 PM EST</p>
                </div>

                <div className="border border-black/10 rounded-2xl p-5 bg-[#fafafa]">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={14} className="text-black/40" />
                    <span className="text-[0.65rem] font-bold tracking-widest uppercase text-black/55">Corporate Address</span>
                  </div>
                  <p className="text-xs text-black/75 leading-relaxed">
                    {SITE_CONFIG.legalName}<br />
                    {SITE_CONFIG.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="border border-black/10 bg-[#fafafa] rounded-3xl p-12 text-center h-full flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-green-50 border border-green-200">
                    <CheckCircle size={28} className="text-green-600" />
                  </div>
                  <h2 className="text-2xl font-heading font-black uppercase mb-3">Message Received!</h2>
                  <p className="text-black/60 text-sm max-w-sm mb-6">
                    Tariq and the operations team will review your inquiry and get back to you within 24 hours.
                  </p>
                  <button onClick={() => setSubmitted(false)}
                    className="text-xs font-bold uppercase tracking-widest text-black border-b border-black pb-0.5 hover:text-black/60 transition-colors">
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="border border-black/10 bg-[#fafafa] rounded-3xl p-8 md:p-12 space-y-6">
                  <h2 className="text-xl font-heading font-black uppercase text-black border-b border-black/5 pb-4">
                    Get a Free Consultation
                  </h2>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-name" className="block text-[0.65rem] font-bold tracking-widest uppercase text-black/50 mb-2">Full Name *</label>
                      <input id="contact-name" type="text" required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="John Smith"
                        className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-sm text-black focus:outline-none focus:border-black transition-colors" />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-[0.65rem] font-bold tracking-widest uppercase text-black/50 mb-2">Email Address *</label>
                      <input id="contact-email" type="email" required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-sm text-black focus:outline-none focus:border-black transition-colors" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-company" className="block text-[0.65rem] font-bold tracking-widest uppercase text-black/50 mb-2">Company Name</label>
                      <input id="contact-company" type="text"
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        placeholder="Acme Corp"
                        className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-sm text-black focus:outline-none focus:border-black transition-colors" />
                    </div>
                    <div>
                      <label htmlFor="contact-service" className="block text-[0.65rem] font-bold tracking-widest uppercase text-black/50 mb-2">Primary Need</label>
                      <select id="contact-service"
                        value={formState.service}
                        onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                        className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-sm text-black/80 focus:outline-none focus:border-black transition-colors">
                        <option value="">Select a service...</option>
                        {services.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-budget" className="block text-[0.65rem] font-bold tracking-widest uppercase text-black/50 mb-2">Monthly Budget Range</label>
                    <select id="contact-budget"
                      value={formState.budget}
                      onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                      className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-sm text-black/80 focus:outline-none focus:border-black transition-colors">
                      <option value="">Select budget range...</option>
                      <option>Under $2,000/mo</option>
                      <option>$2,000 – $5,000/mo</option>
                      <option>$5,000 – $15,000/mo</option>
                      <option>$15,000+/mo</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-[0.65rem] font-bold tracking-widest uppercase text-black/50 mb-2">Goals & Details *</label>
                    <textarea id="contact-message" required rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Describe the operations or marketing needs you are looking to address..."
                      className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-sm text-black focus:outline-none focus:border-black transition-colors resize-none" />
                  </div>

                  <button type="submit"
                    className="w-full py-4 font-bold uppercase tracking-widest text-white bg-black hover:bg-black/90 rounded-xl transition-colors text-xs"
                  >
                    Send Inquiry
                  </button>
                  <p className="text-center text-[0.65rem] text-black/40">
                    By submitting, you agree to our <Link href="/legal" className="underline hover:text-black">Privacy Policy</Link>.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-black/10 bg-[#fafafa]">
        <div className="container mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <span className="text-xs uppercase tracking-widest text-black/50 font-bold block mb-2">FAQ</span>
            <h2 className="text-3xl font-heading font-black uppercase text-black">Common Questions</h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-black/10 bg-white rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  id={`faq-${i}`}
                  aria-expanded={openFaq === i}
                >
                  <span className="font-heading font-black text-sm uppercase">{faq.q}</span>
                  <ChevronDown size={14} className={`flex-shrink-0 text-black/40 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-sm text-black/65 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
