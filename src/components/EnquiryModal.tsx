"use client";

import React, { useEffect } from "react";
import { X, ShieldCheck } from "lucide-react";
import EnquiryForm from "./EnquiryForm";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
}

export default function EnquiryModal({
  isOpen,
  onClose,
  productName
}: EnquiryModalProps) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 animate-in fade-in duration-200">
      {/* Darkened High-Contrast Professional Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/75 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Container */}
      <div className="relative z-10 w-full max-w-xl max-h-[92vh] overflow-y-auto bg-white rounded-2xl shadow-2xl shadow-slate-950/40 border border-slate-300 text-left animate-in zoom-in-95 duration-200">
        {/* Subtle P.R. Packaging Industrial Brand Accent Line */}
        <div className="h-1.5 w-full bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800" />

        <div className="p-6 sm:p-8">
          {/* Header Section */}
          <div className="flex items-start justify-between pb-5 mb-5 border-b border-slate-200">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md mb-2 border border-blue-200/90 shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>Direct Manufacturer Enquiry &bull; Estd. 1992</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Request a Technical Quote
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                P.R. Packaging &bull; Boisar MIDC Plant &bull; 48-Hour Order Planning
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors border border-transparent hover:border-slate-200 shrink-0 ml-3"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Reusable Form */}
          <EnquiryForm
            initialProduct={productName}
            isModal={true}
            onSuccessClose={onClose}
          />
        </div>
      </div>
    </div>
  );
}
