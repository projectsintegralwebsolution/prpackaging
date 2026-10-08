"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { COMPANY } from "@/data/company";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-40 flex items-center group">
      {/* Interactive Tooltip Banner */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 mr-3 px-3.5 py-2 bg-white rounded-xl shadow-xl border border-slate-200 text-xs text-slate-800 animate-in fade-in slide-in-from-left-2">
          <div>
            <p className="font-bold text-industrial-900">Chat with P.R. Packaging</p>
            <p className="text-slate-500 text-[11px]">Varun Mundra: +91 {COMPANY.phones[0].number}</p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-slate-600 p-0.5 ml-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={COMPANY.whatsapp.link}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Chat with P.R. Packaging on WhatsApp"
        title="Chat with P.R. Packaging on WhatsApp"
      >
        {/* Subtle Ping Animation */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/40 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 relative z-10 fill-current" />
      </a>
    </div>
  );
}
