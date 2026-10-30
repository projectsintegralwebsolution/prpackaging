"use client";

import React, { useEffect, useState, useRef } from "react";

interface StatCounterProps {
  value: string;
  suffix?: string;
  label: string;
  description?: string;
}

export default function StatCounter({
  value,
  suffix = "",
  label,
  description
}: StatCounterProps) {
  const [displayValue, setDisplayValue] = useState("0");
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // If the value contains non-numeric range like "14–100" or "1–130", handle smoothly
          if (value.includes("–") || value.includes("-")) {
            setDisplayValue(value);
            return;
          }

          const targetNum = parseInt(value, 10);
          if (isNaN(targetNum)) {
            setDisplayValue(value);
            return;
          }

          // Count up
          const duration = 1500;
          const steps = 40;
          const stepTime = duration / steps;
          let currentStep = 0;

          const startVal = targetNum > 1000 ? targetNum - 100 : 0;
          const range = targetNum - startVal;

          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            const currentCount = Math.floor(startVal + range * progress);
            setDisplayValue(currentCount.toString());

            if (currentStep >= steps) {
              setDisplayValue(targetNum.toString());
              clearInterval(timer);
            }
          }, stepTime);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div
      ref={ref}
      className="p-6 bg-white rounded-xl shadow-sm border border-slate-200/80 hover:border-kraft-400 hover:shadow-card-hover transition-all duration-300 text-center flex flex-col justify-between"
    >
      <div>
        <div className="text-3xl sm:text-4xl font-extrabold text-industrial-900 tracking-tight flex items-center justify-center font-heading">
          <span>{displayValue}</span>
          {suffix && <span className="text-kraft-600 ml-0.5">{suffix}</span>}
        </div>
        <div className="text-sm font-bold text-slate-700 uppercase tracking-wider mt-2">
          {label}
        </div>
      </div>
      {description && (
        <div className="text-xs text-slate-500 mt-2 border-t border-slate-100 pt-2">
          {description}
        </div>
      )}
    </div>
  );
}
