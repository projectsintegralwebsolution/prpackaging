"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      title="Back to Top"
      className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-industrial-900/90 hover:bg-kraft-600 text-white shadow-xl hover:shadow-2xl border border-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:-translate-y-1 active:scale-95 animate-in fade-in zoom-in"
    >
      <ArrowUp className="w-5 h-5 stroke-[2.5]" />
    </button>
  );
}
