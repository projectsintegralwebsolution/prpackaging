"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Package,
  Layers,
  Sparkles
} from "lucide-react";
import { COMPANY } from "@/data/company";

interface HeroSliderProps {
  onOpenQuoteModal: (productName?: string) => void;
}

interface Slide {
  id: number;
  eyebrow: string;
  headline: string;
  description: string;
  image: string;
  badgeIcon: React.ElementType;
  primaryCtaText: string;
  primaryAction: "quote" | "products";
}

const SLIDES: Slide[] = [
  {
    id: 1,
    eyebrow: "Established 1992 • Boisar MIDC, Maharashtra",
    headline: "Reliable Paper Tube & Core Manufacturing Since 1992",
    description:
      "Over three decades of manufacturing high-strength spiral paper tubes, industrial cores, and custom paper packaging for India's leading industrial sectors.",
    image: "/images/hero/slide-1.jpg",
    badgeIcon: ShieldCheck,
    primaryCtaText: "Request a Quote",
    primaryAction: "quote"
  },
  {
    id: 2,
    eyebrow: "Engineered Precision • 14mm to 100mm Diameter",
    headline: "Precision-Made Paper Tubes for Diverse Industries",
    description:
      "Calibrated for high-speed winding across textiles, BOPP tape, stretch film, aluminium foils, and plastic roll converting lines.",
    image: "/images/hero/slide-2.jpg",
    badgeIcon: Package,
    primaryCtaText: "Explore Products",
    primaryAction: "products"
  },
  {
    id: 3,
    eyebrow: "100% Recyclable • Dextrine Bonded Kraft Paper",
    headline: "Sustainable Packaging Solutions for Modern Industry",
    description:
      "Eco-friendly paper tubes, cores, and corrugated sheets crafted from recycled paper and virgin liners, supporting your sustainability goals.",
    image: "/images/hero/slide-3.jpg",
    badgeIcon: Sparkles,
    primaryCtaText: "Request a Quote",
    primaryAction: "quote"
  },
  {
    id: 4,
    eyebrow: "In-House Testing • In-House Fleet Across India",
    headline: "Built for Quality. Designed for Reliability.",
    description:
      "Advanced automated paper tube winders, in-house quality testing, and 48-hour order planning and execution from our Boisar facility and Bhiwandi warehouse.",
    image: "/images/hero/slide-4.jpg",
    badgeIcon: Layers,
    primaryCtaText: "Explore Products",
    primaryAction: "products"
  }
];

export default function HeroSlider({ onOpenQuoteModal }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  const slide = SLIDES[currentSlide];
  const BadgeIcon = slide.badgeIcon;

  return (
    <div
      className="relative w-full h-[520px] sm:h-[580px] md:h-[640px] lg:h-[700px] overflow-hidden bg-industrial-950 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Hero Carousel"
    >
      {/* Background Slides */}
      {SLIDES.map((s, index) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <Image
            src={s.image}
            alt={s.headline}
            fill
            priority={index === 0}
            className="object-cover object-center filter brightness-95"
          />
          {/* Dual Overlay: Left-heavy dark gradient for text readability + bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-r from-industrial-950/95 via-industrial-950/75 to-industrial-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-industrial-950/80 via-transparent to-transparent" />
        </div>
      ))}

      {/* Slide Content Layer */}
      <div className="relative z-20 max-w-7xl h-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-2xl text-left">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-kraft-500/20 border border-kraft-400/40 text-kraft-300 text-xs sm:text-sm font-semibold tracking-wide mb-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <BadgeIcon className="w-4 h-4 text-kraft-400" />
            <span>{slide.eyebrow}</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-5 animate-in fade-in slide-in-from-bottom-3 duration-700">
            {slide.headline}
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-slate-300 mb-8 leading-relaxed line-clamp-3 sm:line-clamp-none animate-in fade-in slide-in-from-bottom-4 duration-700">
            {slide.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 animate-in fade-in slide-in-from-bottom-5 duration-700">
            {slide.primaryAction === "quote" ? (
              <button
                onClick={() => onOpenQuoteModal()}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-kraft-600 hover:bg-kraft-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-kraft-900/30 transition-all hover:scale-[1.02]"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-kraft-600 hover:bg-kraft-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-kraft-900/30 transition-all hover:scale-[1.02]"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}

            <a
              href={COMPANY.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-slate-900/80 hover:bg-slate-900 text-slate-200 border border-slate-700 hover:border-eco-500 font-semibold text-sm sm:text-base backdrop-blur-sm transition-all"
            >
              <MessageCircle className="w-4 h-4 text-eco-400" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Manual Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-industrial-900/70 hover:bg-industrial-900 text-white flex items-center justify-center border border-white/10 backdrop-blur-sm transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-industrial-900/70 hover:bg-industrial-900 text-white flex items-center justify-center border border-white/10 backdrop-blur-sm transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === currentSlide
                ? "w-8 h-2.5 bg-kraft-500"
                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
