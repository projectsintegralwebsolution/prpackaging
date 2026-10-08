"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Settings,
  Zap,
  Cpu,
  Leaf,
  Layers,
  Award,
  Users,
  Compass,
  Headphones,
  RotateCcw,
  Truck,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ExternalLink,
  Sliders,
  Printer,
  ChevronRight
} from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import StatCounter from "@/components/StatCounter";
import EnquiryModal from "@/components/EnquiryModal";
import EnquiryForm from "@/components/EnquiryForm";
import { COMPANY } from "@/data/company";
import { PRODUCTS } from "@/data/products";
import { INDUSTRIES } from "@/data/industries";

export default function HomeClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | undefined>(undefined);

  const handleOpenQuote = (productName?: string) => {
    setSelectedProduct(productName);
    setModalOpen(true);
  };

  // Why choose us icons map
  const whyChooseIcons = [
    Compass,
    Clock,
    ShieldCheck,
    Users,
    Award,
    Leaf
  ];

  return (
    <div className="bg-slate-50 overflow-hidden">
      {/* 1. Hero Slider */}
      <HeroSlider onOpenQuoteModal={handleOpenQuote} />

      {/* 2. Company Introduction */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Text & Credibility */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-kraft-100 text-kraft-900 border border-kraft-200 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-kraft-700" />
                <span>Established in 1992 • Maharashtra, India</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-industrial-950 tracking-tight leading-tight">
                Trusted Paper Packaging Manufacturer Since 1992
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Established in the year 1992 in Maharashtra, India, <strong className="text-industrial-900">P.R. Packaging</strong> is involved as the manufacturer of the best quality range of <span className="text-industrial-900 font-semibold">Paper Tubes, Carton Boxes, Paper Rolls, Paper Boards, Corrugated Sheets, and Corrugated Boxes</span>.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                All our products are widely acclaimed among our extensive clientele for their exclusive designs, superior quality, and reliability. Apart from this, our ability to maintain timelines as well as quality in the assortment, providing cost-effective solutions and assurance to make timely shipments of orders placed by customers have assisted us in positioning our name in the list of top-notch companies in the packaging industry.
              </p>

              {/* Bullet highlights from client PDF */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-kraft-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-slate-700">
                    High radial crush strength paper tubes
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-kraft-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-slate-700">
                    In-house corrugated box manufacturing up to 52&quot;
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-kraft-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-slate-700">
                    Order planned &amp; executed in 48 hours
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-kraft-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-slate-700">
                    In-house fleet of delivery vehicles across India
                  </span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-industrial-900 text-white text-sm font-bold hover:bg-industrial-800 transition-colors shadow-sm"
                >
                  <span>Learn About Our Journey</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={() => handleOpenQuote()}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-kraft-600 text-white text-sm font-bold hover:bg-kraft-700 transition-colors shadow-sm"
                >
                  <span>Request a Technical Quote</span>
                </button>
              </div>
            </div>

            {/* Right Column: Industrial Visual Presentation */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-industrial-950 aspect-[4/3]">
                <Image
                  src="/images/products/paper-tubes.jpg"
                  alt="P.R. Packaging Paper Tubes of Various Diameters"
                  fill
                  className="object-contain p-4 bg-white"
                />
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -left-6 bg-industrial-900 text-white p-5 rounded-xl shadow-xl border border-industrial-700 max-w-[240px] hidden sm:block">
                <div className="text-3xl font-extrabold text-kraft-400 font-heading">
                  1992
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-300 mt-1">
                  Estd. In Maharashtra
                </div>
                <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                  Over three decades of manufacturing trust &amp; technical precision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Key Statistics (Animated Counters) */}
      <section className="py-14 bg-industrial-950 border-b border-industrial-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-kraft-400 text-xs font-bold uppercase tracking-wider">
              Technical Capabilities At A Glance
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Verified Production Specifications
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCounter
              value="1992"
              suffix=""
              label="Since 1992"
              description="Over 30 years in paper packaging"
            />
            <StatCounter
              value="40"
              suffix="+"
              label="Skilled Workers"
              description="Experienced manufacturing craftsmen"
            />
            <StatCounter
              value="14–100"
              suffix=" mm"
              label="Tube Diameter"
              description="Inner diameter from 0.5&quot; to 4&quot;"
            />
            <StatCounter
              value="1–130"
              suffix=" inch"
              label="Tube Length"
              description="Precision cut rings to master logs"
            />
          </div>
        </div>
      </section>

      {/* 4. Product Categories (12 Authenticated Cards) */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-kraft-100 text-kraft-900 border border-kraft-200 text-xs font-bold uppercase tracking-wider mb-2">
                <span>Our Product Portfolio</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-industrial-950 tracking-tight">
                Engineered Paper Packaging Solutions
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
                We manufacture paper tubes, industrial cores, and corrugated products engineered for high strength, durability, and eco-friendly composition.
              </p>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-bold text-kraft-700 hover:text-kraft-800 transition-colors shrink-0"
            >
              <span>View All 14 Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Grid of 12 Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {PRODUCTS.slice(0, 12).map((product) => (
              <div
                key={product.slug}
                className="group bg-white rounded-xl shadow-sm hover:shadow-card-hover border border-slate-200 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* Clean Image Container */}
                  <div className="relative w-full h-52 bg-slate-100 overflow-hidden flex items-center justify-center p-3 border-b border-slate-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2.5 right-2.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-industrial-900/80 text-white backdrop-blur-sm">
                        {product.category === "Corrugated Packaging" ? "Corrugated" : "Paper Tube"}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5">
                    <h3 className="text-base font-bold text-industrial-900 group-hover:text-kraft-700 transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                      {product.tagline}
                    </p>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="px-5 pb-5 pt-0 flex items-center justify-between border-t border-slate-50 mt-2">
                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-industrial-900 hover:text-kraft-600 transition-colors"
                  >
                    <span>View Product</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={() => handleOpenQuote(product.name)}
                    className="text-xs font-semibold px-2.5 py-1 rounded bg-kraft-50 text-kraft-700 hover:bg-kraft-100 border border-kraft-200 transition-colors"
                  >
                    Quote
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-industrial-900 text-white font-bold text-sm hover:bg-industrial-800 transition-all shadow"
            >
              <span>Explore Full Technical Product Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Why Choose P.R. Packaging */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-kraft-100 text-kraft-900 border border-kraft-200 text-xs font-bold uppercase tracking-wider mb-2">
              <span>Why Choose Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-industrial-950 tracking-tight">
              Factors Responsible for Our Enormous Success
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              By providing quality products and having experienced knowledge of the market since 1992, we have been able to attain a large and loyal client base across diverse industrial verticals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COMPANY.whyChooseUs.map((item, idx) => {
              const IconComp = whyChooseIcons[idx] || ShieldCheck;
              return (
                <div
                  key={item.title}
                  className="p-7 rounded-xl bg-slate-50 border border-slate-200 hover:border-kraft-300 hover:bg-white hover:shadow-card-hover transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-kraft-100 text-kraft-700 flex items-center justify-center mb-5 group-hover:bg-kraft-600 group-hover:text-white transition-colors">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-industrial-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Manufacturing Capabilities */}
      <section className="py-20 bg-industrial-950 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-kraft-400 text-xs font-bold uppercase tracking-wider">
                Precision Engineering
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                Advanced Paper Tube Machinery &amp; Production Capabilities
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Our advanced Paper Tube Machinery is designed to meet the growing demands of the paper tube and core industry with precision, efficiency, and durability. Built using cutting-edge technology, our machines ensure high-quality production for packaging, textiles, construction, and consumer goods.
              </p>

              <div className="p-4 rounded-xl bg-industrial-900 border border-industrial-800 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-kraft-400">
                  Standard Dimension Spectrum
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                  <div>
                    <span className="text-slate-500 block">Diameter:</span>
                    <strong className="text-white">14 mm – 100 mm</strong> (0.5&quot; to 4&quot; ID)
                  </div>
                  <div>
                    <span className="text-slate-500 block">Lengths:</span>
                    <strong className="text-white">1&quot; to 130 inches</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Wall Thickness:</span>
                    <strong className="text-white">1 mm to 20 mm</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Corrugated Box:</span>
                    <strong className="text-white">Sizes up to 52 inches</strong>
                  </div>
                </div>
              </div>

              <Link
                href="/infrastructure"
                className="inline-flex items-center gap-2 text-sm font-bold text-kraft-400 hover:text-kraft-300 transition-colors"
              >
                <span>View Machinery &amp; Facility Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Grid of 7 Highlights */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-industrial-900/80 border border-industrial-800 hover:border-kraft-500/50 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <Sliders className="w-5 h-5 text-kraft-400" />
                  <h4 className="font-bold text-white text-sm">Custom Dimensions</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Easily adjustable to produce customized tube diameters, lengths, and wall thicknesses for unique winding specs.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-industrial-900/80 border border-industrial-800 hover:border-kraft-500/50 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="w-5 h-5 text-kraft-400" />
                  <h4 className="font-bold text-white text-sm">High-Speed Production</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Automated high-speed winding machinery capable of meeting high volume schedules with consistent quality.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-industrial-900/80 border border-industrial-800 hover:border-kraft-500/50 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <Cpu className="w-5 h-5 text-kraft-400" />
                  <h4 className="font-bold text-white text-sm">Automated Controls</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Equipped with user-friendly, fully automated control systems for precise operation and minimal manual intervention.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-industrial-900/80 border border-industrial-800 hover:border-kraft-500/50 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <Leaf className="w-5 h-5 text-eco-400" />
                  <h4 className="font-bold text-white text-sm">Energy Efficiency</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Engineered with energy-saving features that reduce operational footprint and production costs.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-industrial-900/80 border border-industrial-800 hover:border-kraft-500/50 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck className="w-5 h-5 text-kraft-400" />
                  <h4 className="font-bold text-white text-sm">In-House Testing</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  In-house testing of products with machines and strict quality control system verifying crush and moisture parameters.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-industrial-900/80 border border-industrial-800 hover:border-kraft-500/50 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <Printer className="w-5 h-5 text-kraft-400" />
                  <h4 className="font-bold text-white text-sm">Custom Printing</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Printing available as per customer demand in any color for branding on tube interiors or outer surfaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Industries We Serve (9 Visual Cards) */}
      <section className="py-20 bg-slate-100/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-kraft-700 text-xs font-bold uppercase tracking-wider">
              Diverse Applications
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-industrial-950 tracking-tight mt-1">
              Industries We Serve
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              From continuous yarn spinning to master carton shipping, we supply paper tubes and cores tailored to demanding industrial requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-card-hover border border-slate-200 overflow-hidden flex flex-col justify-between group transition-all duration-300"
              >
                <div>
                  <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={ind.image}
                      alt={ind.name}
                      fill
                      className="object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-industrial-900 group-hover:text-kraft-600 transition-colors">
                      {ind.name}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                      {ind.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-slate-50">
                  <div className="text-[11px] font-semibold text-kraft-700 uppercase tracking-wide mb-1">
                    Suitable Products:
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {ind.suitableProducts.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/products/${p.slug}`}
                        className="text-[11px] bg-slate-100 hover:bg-kraft-100 text-slate-700 hover:text-kraft-800 px-2 py-0.5 rounded transition-colors"
                      >
                        {p.name}
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/industries"
                    className="text-xs font-bold text-industrial-900 group-hover:text-kraft-600 inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Sustainability Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-950 via-industrial-950 to-industrial-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold uppercase tracking-wider">
                <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                <span>Eco-Friendly Manufacturing</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                Packaging with a Sustainable Future
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                We are committed to reducing our environmental impact using sustainable materials and processes. Our paper tubes are made from recycled paper and are 100% recyclable, supporting your sustainability goals while providing high-quality packaging solutions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="text-emerald-400 font-bold text-sm mb-1">
                    Recycled Materials
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    All our tubes are crafted using eco-friendly raw materials, recycled kraft paper, and virgin liners.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="text-emerald-400 font-bold text-sm mb-1">
                    Waste Reduction
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    We minimize production waste through efficient automated winding and recycling of paper trim.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="text-emerald-400 font-bold text-sm mb-1">
                    100% Recyclable Tubes
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Biodegradable composition using organic dextrine powder bonding for circular lifecycle.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="text-emerald-400 font-bold text-sm mb-1">
                    Green Certifications
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    We hold certifications demonstrating our commitment to green and sustainable manufacturing practices.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/sustainability"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-colors shadow-lg"
                >
                  <span>Explore Our Sustainability Practices</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Sustainability Image Presentation */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 aspect-[4/3]">
                <Image
                  src="/images/hero/slide-3.jpg"
                  alt="Sustainable paper packaging manufacturing at P.R. Packaging"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Infrastructure Preview */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Grid */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="relative h-48 sm:h-56 rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/images/infrastructure/factory.jpg"
                  alt="Boisar MIDC Facility"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
                  <span className="text-white text-xs font-bold">Boisar MIDC Facility</span>
                </div>
              </div>

              <div className="relative h-48 sm:h-56 rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/images/infrastructure/warehouse.jpg"
                  alt="Bhiwandi Warehouse"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
                  <span className="text-white text-xs font-bold">Bhiwandi Warehouse</span>
                </div>
              </div>

              <div className="relative h-48 sm:h-56 rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/images/infrastructure/machinery.jpg"
                  alt="Paper Tube Machinery"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
                  <span className="text-white text-xs font-bold">Automated Winders</span>
                </div>
              </div>

              <div className="relative h-48 sm:h-56 rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/images/infrastructure/quality-testing.jpg"
                  alt="Quality Testing Lab"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
                  <span className="text-white text-xs font-bold">In-House QC Testing</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-industrial-100 text-industrial-900 border border-industrial-200 text-xs font-bold uppercase tracking-wider">
                <span>Infrastructure &amp; Strategic Presence</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-industrial-950 tracking-tight">
                Manufacturing in Boisar MIDC &amp; Central Transit at Bhiwandi
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our manufacturing unit is based in Boisar MIDC—one of the largest industrial areas in India. We also maintain our dedicated transit warehouse in Bhiwandi, which is one of the biggest transportation and logistics hubs in India.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-kraft-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-industrial-900 font-bold text-sm block">
                      Strategic Connectivity (90 km from Mumbai)
                    </strong>
                    <span className="text-xs text-slate-600">
                      Seamless rail access via Western Line and road transport along the Mumbai-Ahmedabad highway. Proximity to JNPT port and upcoming Wadhwan port.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-kraft-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-industrial-900 font-bold text-sm block">
                      Team of 40+ Experienced Skilled Workers
                    </strong>
                    <span className="text-xs text-slate-600">
                      Trained operators overseeing automated paper tube machinery and stringent quality checkpoints.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Truck className="w-5 h-5 text-kraft-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-industrial-900 font-bold text-sm block">
                      In-House Vehicle Fleet &amp; 48-Hour Order Execution
                    </strong>
                    <span className="text-xs text-slate-600">
                      Orders planned and executed in 48 hours and shipped across India in our in-house fleet of transport vehicles.
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/infrastructure"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-kraft-600 hover:bg-kraft-700 text-white font-bold text-sm transition-colors shadow-sm"
                >
                  <span>Explore Our Infrastructure</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Customer Service / Support Preview */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-kraft-700 text-xs font-bold uppercase tracking-wider">
              Dedicated Support
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-industrial-950 tracking-tight mt-1">
              Customer Service &amp; Efficient Inventory Management
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              At P.R. Packaging, we believe in building strong, long-term relationships with our clients, assisting you at every stage from product selection to just-in-time delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-card-hover transition-all">
              <Headphones className="w-8 h-8 text-kraft-600 mb-4" />
              <h3 className="font-bold text-industrial-900 text-base mb-2">
                Consultative Support
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our experts work directly with you to determine the ideal diameter, length, and wall thickness for your winding machinery.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-card-hover transition-all">
              <Clock className="w-8 h-8 text-kraft-600 mb-4" />
              <h3 className="font-bold text-industrial-900 text-base mb-2">
                Order Tracking
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Stay informed with real-time updates on your order status, including production scheduling and dispatch timelines.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-card-hover transition-all">
              <RotateCcw className="w-8 h-8 text-kraft-600 mb-4" />
              <h3 className="font-bold text-industrial-900 text-base mb-2">
                After-Sales Support
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We stand firmly by our products. If you have any technical concerns after delivery, our team is ready to assist.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-card-hover transition-all">
              <Truck className="w-8 h-8 text-kraft-600 mb-4" />
              <h3 className="font-bold text-industrial-900 text-base mb-2">
                Just-In-Time Delivery
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Minimizes inventory holding waste, delivering tubes and corrugated packaging to your plant exactly when needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. CTA Section */}
      <section className="py-16 bg-kraft-600 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
              Looking for Reliable Paper Tube &amp; Packaging Solutions?
            </h2>
            <p className="text-kraft-100 text-sm sm:text-base mt-2 max-w-2xl">
              Get in touch with our team at Boisar MIDC for custom dimension quotations, sample tubes, and batch manufacturing schedules.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <button
              onClick={() => handleOpenQuote()}
              className="px-7 py-3.5 rounded-lg bg-industrial-950 hover:bg-industrial-900 text-white font-bold text-sm shadow-xl transition-all hover:scale-105"
            >
              Request a Quote
            </button>
            <a
              href={COMPANY.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-lg bg-white text-industrial-950 font-bold text-sm hover:bg-kraft-50 transition-all flex items-center gap-2 shadow"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* 12. Contact Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Contact Details Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-kraft-700 text-xs font-bold uppercase tracking-wider">
                  Get In Touch
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-industrial-950 tracking-tight mt-1">
                  Connect With P.R. Packaging
                </h3>
                <p className="text-slate-600 text-sm mt-2">
                  Reach out directly to our management, sales, or factory teams in Boisar MIDC, Palghar.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-kraft-600 shrink-0 mt-1" />
                  <div>
                    <strong className="text-xs font-bold uppercase tracking-wider text-industrial-900 block">
                      Factory Address
                    </strong>
                    <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                      {COMPANY.address.plot}, {COMPANY.address.landmark}, {COMPANY.address.midc}, {COMPANY.address.district} – {COMPANY.address.pincode}, {COMPANY.address.state}, {COMPANY.address.country}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <Phone className="w-5 h-5 text-kraft-600 shrink-0 mt-1" />
                  <div className="text-xs space-y-1">
                    <strong className="text-xs font-bold uppercase tracking-wider text-industrial-900 block mb-1">
                      Direct Phone Contacts
                    </strong>
                    <p className="text-slate-700">
                      Varun Mundra: <a href="tel:9029443776" className="font-bold text-kraft-700 hover:underline">+91 90294 43776</a>
                    </p>
                    <p className="text-slate-700">
                      Suresh Mundra: <a href="tel:9321393328" className="font-bold text-kraft-700 hover:underline">+91 93213 93328</a>
                    </p>
                    <p className="text-slate-700">
                      Factory Office: <a href="tel:8408926751" className="font-bold text-kraft-700 hover:underline">+91 84089 26751</a>
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <Mail className="w-5 h-5 text-kraft-600 shrink-0" />
                  <div>
                    <strong className="text-xs font-bold uppercase tracking-wider text-industrial-900 block">
                      Email Address
                    </strong>
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="text-xs font-bold text-kraft-700 hover:underline"
                    >
                      {COMPANY.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Interactive Contact Form */}
            <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="mb-6">
                <h4 className="text-xl font-bold text-industrial-900">
                  Send Us an Online Enquiry
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Specify your required inner diameter, length, and wall thickness for prompt quoting.
                </p>
              </div>

              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        productName={selectedProduct}
      />
    </div>
  );
}
