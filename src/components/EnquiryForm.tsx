"use client";

import React, { useState, useEffect } from "react";
import {
  Send,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Clock,
  ShieldCheck,
  Ruler
} from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { INDUSTRIES } from "@/data/industries";

interface EnquiryFormProps {
  initialProduct?: string;
  isModal?: boolean;
  onSuccessClose?: () => void;
}

export default function EnquiryForm({
  initialProduct = "",
  isModal = false,
  onSuccessClose
}: EnquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    phone: "",
    email: "",
    product: initialProduct || PRODUCTS[0]?.name || "Paper Tubes",
    industry: "",
    diameter: "",
    length: "",
    wallThickness: "",
    quantity: "",
    message: "",
    _hp: ""
  });

  useEffect(() => {
    if (initialProduct) {
      setFormData((prev) => ({ ...prev, product: initialProduct }));
    }
  }, [initialProduct]);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validation
    if (!formData.name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 10) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!formData.product.trim()) {
      setError("Please select the product required.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit enquiry. Please try again.");
      }

      setSuccess(true);
    } catch (err: unknown) {
      const errorMsg =
        err instanceof Error ? err.message : "Something went wrong. Please call or WhatsApp us directly.";
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppDirect = () => {
    const text = `*New Product Enquiry via Website:*
*Name:* ${formData.name || "N/A"}
*Company:* ${formData.companyName || "N/A"}
*Phone:* ${formData.phone || "N/A"}
*Email:* ${formData.email || "N/A"}
*Product:* ${formData.product}
*Industry:* ${formData.industry || "Not specified"}
*Dimensions:* Dia: ${formData.diameter || "-"} | Length: ${formData.length || "-"} | Wall: ${formData.wallThickness || "-"}
*Quantity:* ${formData.quantity || "-"}
*Message:* ${formData.message || "-"}`;

    const url = `https://wa.me/919029443776?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  if (success) {
    return (
      <div className="bg-emerald-50/90 border-2 border-emerald-300 rounded-2xl p-8 text-center animate-in fade-in duration-200 shadow-lg shadow-emerald-950/5">
        <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md shadow-emerald-600/30">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-black text-slate-950 tracking-tight mb-2">
          Enquiry Received Successfully!
        </h3>
        <p className="text-slate-700 max-w-md mx-auto mb-6 text-sm font-medium leading-relaxed">
          Thank you, <span className="font-bold text-slate-950">{formData.name}</span>. Our technical manufacturing team at P.R. Packaging has logged your enquiry and will respond within 24 hours.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => {
              setSuccess(false);
              if (onSuccessClose) onSuccessClose();
            }}
            className="w-full sm:w-auto px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-sm font-bold shadow-sm transition-colors"
          >
            {isModal ? "Close Window" : "Submit Another Enquiry"}
          </button>
          <button
            onClick={handleWhatsAppDirect}
            className="w-full sm:w-auto px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp Directly</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Anti-spam honeypot (hidden from human visitors) */}
      <div className="hidden" aria-hidden="true" style={{ display: "none" }}>
        <input
          type="text"
          name="_hp"
          tabIndex={-1}
          autoComplete="off"
          value={formData._hp}
          onChange={handleChange}
        />
      </div>

      {error && (
        <div className="p-3.5 bg-rose-50 border border-rose-300 rounded-lg flex items-center gap-2.5 text-rose-800 text-sm font-medium animate-in fade-in">
          <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
          <span>{error}</span>
        </div>
      )}

      {/* Trust Strip - High-contrast subtle blue-tinted manufacturing badge bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs bg-blue-50/80 border border-blue-200/90 p-3 rounded-lg shadow-2xs">
        <span className="flex items-center gap-1.5 font-bold text-slate-900">
          <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
          <span>Direct Factory Quote &bull; Zero Middlemen</span>
        </span>
        <span className="flex items-center gap-1.5 font-bold text-blue-900">
          <Clock className="w-4 h-4 text-blue-600 shrink-0" />
          <span>48-Hour Order Execution Window</span>
        </span>
      </div>

      {/* Row 1: Name & Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-900 mb-1.5">
            Your Name <span className="text-blue-600">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Rajesh Sharma"
            className="w-full px-3.5 py-2.5 text-sm font-medium text-slate-950 placeholder:text-slate-400 rounded-lg border border-slate-300 bg-white hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-colors shadow-2xs"
          />
        </div>

        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-900 mb-1.5">
            Company Name
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="e.g. Apex Industries Pvt Ltd"
            className="w-full px-3.5 py-2.5 text-sm font-medium text-slate-950 placeholder:text-slate-400 rounded-lg border border-slate-300 bg-white hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-colors shadow-2xs"
          />
        </div>
      </div>

      {/* Row 2: Phone & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-900 mb-1.5">
            Phone Number <span className="text-blue-600">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. 98200XXXXX"
            className="w-full px-3.5 py-2.5 text-sm font-medium text-slate-950 placeholder:text-slate-400 rounded-lg border border-slate-300 bg-white hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-colors shadow-2xs"
          />
        </div>

        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-900 mb-1.5">
            Email Address <span className="text-blue-600">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. rajesh@apexindustries.com"
            className="w-full px-3.5 py-2.5 text-sm font-medium text-slate-950 placeholder:text-slate-400 rounded-lg border border-slate-300 bg-white hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-colors shadow-2xs"
          />
        </div>
      </div>

      {/* Row 3: Product Required & Industry */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-900 mb-1.5">
            Product Required <span className="text-blue-600">*</span>
          </label>
          <select
            name="product"
            required
            value={formData.product}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 text-sm font-semibold text-slate-950 rounded-lg border border-slate-300 bg-white hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-colors shadow-2xs cursor-pointer"
          >
            {PRODUCTS.map((p) => (
              <option key={p.slug} value={p.name}>
                {p.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-900 mb-1.5">
            Industry / Sector
          </label>
          <select
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 text-sm font-semibold text-slate-950 rounded-lg border border-slate-300 bg-white hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-colors shadow-2xs cursor-pointer"
          >
            <option value="">Select Industry</option>
            {INDUSTRIES.map((ind) => (
              <option key={ind.id} value={ind.name}>
                {ind.name}
              </option>
            ))}
            <option value="Other Industry">Other Industry</option>
          </select>
        </div>
      </div>

      {/* Row 4: Technical Dimensions (Tube specs) - Distinct Technical Block */}
      <div className="p-3.5 bg-slate-50/90 border border-slate-300 rounded-xl shadow-2xs">
        <div className="flex items-center justify-between mb-2.5">
          <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-900">
            <Ruler className="w-3.5 h-3.5 text-blue-600" />
            <span>Required Technical Dimensions</span>
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 bg-slate-200/80 px-2 py-0.5 rounded">
            Optional / As Needed
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2.5">
          <div>
            <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wide mb-1">
              Diameter (ID)
            </label>
            <input
              type="text"
              name="diameter"
              value={formData.diameter}
              onChange={handleChange}
              placeholder="e.g. 76mm (3&quot;)"
              className="w-full px-2.5 py-1.5 text-xs font-medium text-slate-950 placeholder:text-slate-400 rounded-md border border-slate-300 bg-white hover:border-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 transition-colors"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wide mb-1">
              Length (L)
            </label>
            <input
              type="text"
              name="length"
              value={formData.length}
              onChange={handleChange}
              placeholder="e.g. 500mm / 40&quot;"
              className="w-full px-2.5 py-1.5 text-xs font-medium text-slate-950 placeholder:text-slate-400 rounded-md border border-slate-300 bg-white hover:border-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 transition-colors"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wide mb-1">
              Wall Thickness (T)
            </label>
            <input
              type="text"
              name="wallThickness"
              value={formData.wallThickness}
              onChange={handleChange}
              placeholder="e.g. 5mm to 10mm"
              className="w-full px-2.5 py-1.5 text-xs font-medium text-slate-950 placeholder:text-slate-400 rounded-md border border-slate-300 bg-white hover:border-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Row 5: Quantity */}
      <div>
        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-900 mb-1.5">
          Estimated Quantity / Monthly Requirement
        </label>
        <input
          type="text"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          placeholder="e.g. 5,000 pcs or recurring monthly batch"
          className="w-full px-3.5 py-2.5 text-sm font-medium text-slate-950 placeholder:text-slate-400 rounded-lg border border-slate-300 bg-white hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-colors shadow-2xs"
        />
      </div>

      {/* Row 6: Message */}
      <div>
        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-900 mb-1.5">
          Custom Requirements / Technical Notes
        </label>
        <textarea
          name="message"
          rows={isModal ? 2 : 3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Mention paper grade (Kraft/White/Recycled), crush strength requirements, surface finish, or delivery destination..."
          className="w-full px-3.5 py-2.5 text-sm font-medium text-slate-950 placeholder:text-slate-400 rounded-lg border border-slate-300 bg-white hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-colors shadow-2xs resize-none"
        />
      </div>

      {/* Action Buttons - High Contrast Industrial Design */}
      <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
        <button
          type="submit"
          disabled={loading}
          className="w-full sm:flex-1 py-3 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-md shadow-blue-600/25 hover:shadow-lg hover:shadow-blue-600/35 transition-all duration-200 disabled:opacity-50 cursor-pointer"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Submitting Technical Enquiry...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Submit Technical Enquiry</span>
            </>
          )}
        </button>

        <button
          type="button"
          onClick={handleWhatsAppDirect}
          className="w-full sm:w-auto py-3 px-5 rounded-lg bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 hover:shadow-lg transition-all duration-200 cursor-pointer shrink-0"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Quick WhatsApp</span>
        </button>
      </div>
    </form>
  );
}
