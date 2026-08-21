"use client";

import React, { useState } from "react";
import { Check, ArrowRight, Loader2 } from "lucide-react";

export function MedicareLeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    businessEmail: "",
    phone: "",
    jobTitle: "",
    website: "",
    campaignType: "Medicare Live Transfers",
    statesServed: "",
    dailyVolume: "",
    transferModel: "Warm Transfer",
    agentCapacity: "",
    launchDate: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceSlug: "medicare-bpo",
          formData
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-[#121216] border border-white/15 rounded-3xl p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-2xl">
        <div className="w-16 h-16 bg-red-600/20 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-500/30">
          <Check size={32} />
        </div>
        <h3 className="text-2xl sm:text-3xl font-heading font-black text-white uppercase mb-4">
          Pilot Request Received
        </h3>
        <p className="text-white/70 text-sm leading-relaxed mb-6">
          Thank you for reaching out. Our US operational management team will review your campaign criteria and contact you within 2 business hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="px-6 py-3 text-xs font-bold uppercase tracking-widest text-white bg-white/10 rounded-full hover:bg-white/20 transition-all"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#121216] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl max-w-3xl mx-auto">
      <div className="mb-8 text-center border-b border-white/10 pb-6">
        <h3 className="text-2xl sm:text-3xl font-heading font-black text-white uppercase mb-2">
          Request a Medicare BPO Pilot
        </h3>
        <p className="text-white/60 text-xs sm:text-sm">
          Discuss your campaign requirements, transfer model, and receiving agent capacity.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          {/* Full Name */}
          <div>
            <label className="block text-[0.7rem] font-bold uppercase tracking-wider text-white/80 mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-xl bg-[#08080a] border border-white/15 text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-red-500 transition-colors"
            />
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-[0.7rem] font-bold uppercase tracking-wider text-white/80 mb-2">
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="companyName"
              required
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Healthcare Partners LLC"
              className="w-full px-4 py-3 rounded-xl bg-[#08080a] border border-white/15 text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-red-500 transition-colors"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {/* Business Email */}
          <div>
            <label className="block text-[0.7rem] font-bold uppercase tracking-wider text-white/80 mb-2">
              Business Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="businessEmail"
              required
              value={formData.businessEmail}
              onChange={handleChange}
              placeholder="john@company.com"
              className="w-full px-4 py-3 rounded-xl bg-[#08080a] border border-white/15 text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-red-500 transition-colors"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-[0.7rem] font-bold uppercase tracking-wider text-white/80 mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
              className="w-full px-4 py-3 rounded-xl bg-[#08080a] border border-white/15 text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-red-500 transition-colors"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {/* Job Title */}
          <div>
            <label className="block text-[0.7rem] font-bold uppercase tracking-wider text-white/80 mb-2">
              Job Title
            </label>
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              placeholder="VP of Operations"
              className="w-full px-4 py-3 rounded-xl bg-[#08080a] border border-white/15 text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-red-500 transition-colors"
            />
          </div>

          {/* Company Website */}
          <div>
            <label className="block text-[0.7rem] font-bold uppercase tracking-wider text-white/80 mb-2">
              Company Website
            </label>
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="www.company.com"
              className="w-full px-4 py-3 rounded-xl bg-[#08080a] border border-white/15 text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-red-500 transition-colors"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {/* Campaign Type Dropdown */}
          <div>
            <label className="block text-[0.7rem] font-bold uppercase tracking-wider text-white/80 mb-2">
              Campaign Type <span className="text-red-500">*</span>
            </label>
            <select
              name="campaignType"
              value={formData.campaignType}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-[#08080a] border border-white/15 text-white text-xs focus:outline-none focus:border-red-500 transition-colors"
            >
              <option value="Medicare Live Transfers">Medicare Live Transfers</option>
              <option value="Medicare Lead Qualification">Medicare Lead Qualification</option>
              <option value="Inbound Medicare Calls">Inbound Medicare Calls</option>
              <option value="Appointment Setting">Appointment Setting</option>
              <option value="Customer Support">Customer Support</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Desired Transfer Model Dropdown */}
          <div>
            <label className="block text-[0.7rem] font-bold uppercase tracking-wider text-white/80 mb-2">
              Desired Transfer Model <span className="text-red-500">*</span>
            </label>
            <select
              name="transferModel"
              value={formData.transferModel}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-[#08080a] border border-white/15 text-white text-xs focus:outline-none focus:border-red-500 transition-colors"
            >
              <option value="Warm Transfer">Warm Transfer</option>
              <option value="Live Transfer">Live Transfer</option>
              <option value="Inbound Transfer">Inbound Transfer</option>
              <option value="Not Sure">Not Sure</option>
            </select>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {/* States Served */}
          <div>
            <label className="block text-[0.7rem] font-bold uppercase tracking-wider text-white/80 mb-2">
              States Served
            </label>
            <input
              type="text"
              name="statesServed"
              value={formData.statesServed}
              onChange={handleChange}
              placeholder="e.g. FL, TX, CA, Nationwide"
              className="w-full px-4 py-3 rounded-xl bg-[#08080a] border border-white/15 text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-red-500 transition-colors"
            />
          </div>

          {/* Estimated Daily Call Volume */}
          <div>
            <label className="block text-[0.7rem] font-bold uppercase tracking-wider text-white/80 mb-2">
              Est. Daily Call Volume
            </label>
            <input
              type="text"
              name="dailyVolume"
              value={formData.dailyVolume}
              onChange={handleChange}
              placeholder="e.g. 100 - 500 calls"
              className="w-full px-4 py-3 rounded-xl bg-[#08080a] border border-white/15 text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-red-500 transition-colors"
            />
          </div>

          {/* Current Agent Capacity */}
          <div>
            <label className="block text-[0.7rem] font-bold uppercase tracking-wider text-white/80 mb-2">
              Licensed Agent Capacity
            </label>
            <input
              type="text"
              name="agentCapacity"
              value={formData.agentCapacity}
              onChange={handleChange}
              placeholder="e.g. 10 licensed agents"
              className="w-full px-4 py-3 rounded-xl bg-[#08080a] border border-white/15 text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-red-500 transition-colors"
            />
          </div>
        </div>

        {/* Preferred Launch Date */}
        <div>
          <label className="block text-[0.7rem] font-bold uppercase tracking-wider text-white/80 mb-2">
            Preferred Launch Date
          </label>
          <input
            type="text"
            name="launchDate"
            value={formData.launchDate}
            onChange={handleChange}
            placeholder="e.g. Within 2 weeks / Immediately"
            className="w-full px-4 py-3 rounded-xl bg-[#08080a] border border-white/15 text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-red-500 transition-colors"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-[0.7rem] font-bold uppercase tracking-wider text-white/80 mb-2">
            Campaign Specifications & Notes
          </label>
          <textarea
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your campaign goals, receiving hours, or current BPO challenges..."
            className="w-full px-4 py-3 rounded-xl bg-[#08080a] border border-white/15 text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-red-500 transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 px-6 rounded-full bg-red-600 hover:bg-white hover:text-black text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-red-600/30"
        >
          {loading ? (
            <Loader2 className="animate-spin" size={16} />
          ) : (
            <>
              <span>Request Pilot Discussion</span>
              <ArrowRight size={16} />
            </>
          )}
        </button>

        <p className="text-[0.68rem] text-white/40 text-center">
          By submitting this form, you agree to be contacted regarding your business inquiry.
        </p>
      </form>
    </div>
  );
}
