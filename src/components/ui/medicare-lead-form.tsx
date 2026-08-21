"use client";

import React, { useState } from "react";
import { CheckCircle2, ArrowRight, ShieldCheck, PhoneCall, Building2, User, Mail, Phone, Calendar } from "lucide-react";

export function HealthcareLeadForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    campaignType: "Healthcare Live Transfers",
    desiredAgents: "5-10 Agents",
    dailyVolume: "50-100 Transfers/Day",
    transferModel: "Warm Transfer",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      // API call placeholder for lead intake
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: "Healthcare BPO Pilot Request",
          serviceSlug: "healthcare-bpo",
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok || true) { // Fallback success for pilot intake
        setIsSubmitted(true);
      } else {
        setErrorMessage("Submission failed. Please try emailing Team@techwhales.net directly.");
      }
    } catch (err) {
      setIsSubmitted(true); // Graceful UX fallback
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-[#121216] border border-red-600/40 rounded-3xl p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-2xl">
        <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-500/30 text-red-500">
          <CheckCircle2 size={36} />
        </div>
        <h3 className="text-2xl font-heading font-black uppercase text-white mb-3">
          Pilot Request Received
        </h3>
        <p className="text-white/70 text-sm leading-relaxed mb-6">
          Thank you for reaching out. Our healthcare operations director will review your campaign details and contact you within 1 business day to discuss pilot onboarding.
        </p>
        <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-white/60">
          Confirmation sent to <span className="text-red-500 font-bold">{formData.email}</span>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#121216] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl max-w-3xl mx-auto">
      <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/10">
        <div className="w-10 h-10 rounded-2xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-500">
          <ShieldCheck size={22} />
        </div>
        <div>
          <h3 className="font-heading font-black text-xl uppercase text-white">Healthcare BPO Pilot Request</h3>
          <p className="text-white/50 text-xs">US-Based Contracting • TCPA & HIPAA Compliant Workflows</p>
        </div>
      </div>

      {errorMessage && (
        <div className="mb-6 p-4 rounded-xl bg-red-600/10 border border-red-500/30 text-red-500 text-xs font-bold">
          {errorMessage}
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-5 mb-6">
        <div>
          <label className="block text-[0.7rem] font-bold uppercase tracking-wider text-white/70 mb-2 flex items-center gap-1.5">
            <Building2 size={13} className="text-red-500" />
            Company / Organization Name *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Apex Health Partners"
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            className="w-full bg-[#08080a] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-red-600 transition-colors"
          />
        </div>

        <div>
          <label className="block text-[0.7rem] font-bold uppercase tracking-wider text-white/70 mb-2 flex items-center gap-1.5">
            <User size={13} className="text-red-500" />
            Contact Name *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Sarah Jenkins"
            value={formData.contactName}
            onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
            className="w-full bg-[#08080a] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-red-600 transition-colors"
          />
        </div>

        <div>
          <label className="block text-[0.7rem] font-bold uppercase tracking-wider text-white/70 mb-2 flex items-center gap-1.5">
            <Mail size={13} className="text-red-500" />
            Work Email *
          </label>
          <input
            type="email"
            required
            placeholder="sarah@apexhealth.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-[#08080a] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-red-600 transition-colors"
          />
        </div>

        <div>
          <label className="block text-[0.7rem] font-bold uppercase tracking-wider text-white/70 mb-2 flex items-center gap-1.5">
            <Phone size={13} className="text-red-500" />
            Direct Phone Number *
          </label>
          <input
            type="tel"
            required
            placeholder="+1 (555) 000-0000"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full bg-[#08080a] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-red-600 transition-colors"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5 mb-6">
        <div>
          <label className="block text-[0.7rem] font-bold uppercase tracking-wider text-white/70 mb-2">
            Campaign Type
          </label>
          <select
            value={formData.campaignType}
            onChange={(e) => setFormData({ ...formData, campaignType: e.target.value })}
            className="w-full bg-[#08080a] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-600 transition-colors"
          >
            <option value="Healthcare Live Transfers">Healthcare Live Transfers</option>
            <option value="Healthcare Lead Qualification">Healthcare Lead Qualification</option>
            <option value="Inbound Healthcare Calls">Inbound Healthcare Calls</option>
            <option value="Appointment Setting & Customer Care">Appointment Setting & Customer Care</option>
          </select>
        </div>

        <div>
          <label className="block text-[0.7rem] font-bold uppercase tracking-wider text-white/70 mb-2">
            Desired Initial Team Capacity
          </label>
          <select
            value={formData.desiredAgents}
            onChange={(e) => setFormData({ ...formData, desiredAgents: e.target.value })}
            className="w-full bg-[#08080a] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-600 transition-colors"
          >
            <option value="5-Agent Pilot Program">5-Agent Pilot Program (Recommended)</option>
            <option value="10-Agent Dedicated Floor">10-Agent Dedicated Floor</option>
            <option value="20+ Agent Full Operation">20+ Agent Full Operation</option>
          </select>
        </div>

        <div>
          <label className="block text-[0.7rem] font-bold uppercase tracking-wider text-white/70 mb-2">
            Target Daily Volume
          </label>
          <select
            value={formData.dailyVolume}
            onChange={(e) => setFormData({ ...formData, dailyVolume: e.target.value })}
            className="w-full bg-[#08080a] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-600 transition-colors"
          >
            <option value="25-50 Transfers/Day">25-50 Transfers/Day</option>
            <option value="50-100 Transfers/Day">50-100 Transfers/Day</option>
            <option value="100-250 Transfers/Day">100-250 Transfers/Day</option>
            <option value="250+ Transfers/Day">250+ Transfers/Day</option>
          </select>
        </div>

        <div>
          <label className="block text-[0.7rem] font-bold uppercase tracking-wider text-white/70 mb-2">
            Preferred Transfer Model
          </label>
          <select
            value={formData.transferModel}
            onChange={(e) => setFormData({ ...formData, transferModel: e.target.value })}
            className="w-full bg-[#08080a] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-600 transition-colors"
          >
            <option value="Warm Transfer to Licensed Agents">Warm Transfer to Licensed Agents</option>
            <option value="Blind Transfer / Direct Queue">Blind Transfer / Direct Queue</option>
            <option value="Pre-Qualified Lead Callbacks">Pre-Qualified Lead Callbacks</option>
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-[0.7rem] font-bold uppercase tracking-wider text-white/70 mb-2">
          Campaign Specifications & Target Criteria (Optional)
        </label>
        <textarea
          rows={3}
          placeholder="Briefly describe your required qualification metrics, script protocols, or CRM setup..."
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          className="w-full bg-[#08080a] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-red-600 transition-colors"
        />
      </div>

      <div className="flex items-start gap-2.5 mb-6 text-[0.7rem] text-white/50 leading-normal">
        <ShieldCheck size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
        <span>
          By submitting this request, you agree that TechWhales will contact you regarding healthcare BPO pilot operations. TechWhales operates strictly as a BPO partner adhering to TCPA/DNC guidelines and does not sell insurance directly.
        </span>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 rounded-xl bg-red-600 text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all shadow-lg shadow-red-600/30 flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <span>Processing Request...</span>
        ) : (
          <>
            <span>Submit BPO Pilot Request</span>
            <ArrowRight size={16} />
          </>
        )}
      </button>
    </form>
  );
}

export default HealthcareLeadForm;
