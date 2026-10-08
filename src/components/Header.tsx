"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  MessageCircle,
  Package,
  Layers,
  Sparkles,
  ShieldCheck
} from "lucide-react";
import { COMPANY } from "@/data/company";
import { PRODUCTS } from "@/data/products";

interface HeaderProps {
  onOpenQuoteModal: (productName?: string) => void;
}

export default function Header({ onOpenQuoteModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [productsMegaOpen, setProductsMegaOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsMegaOpen(false);
  }, [pathname]);

  const tubeCoreProducts = PRODUCTS.filter(
    (p) => p.category === "Paper Tubes & Cores"
  );
  const corrugatedProducts = PRODUCTS.filter(
    (p) => p.category === "Corrugated Packaging"
  );
  const specialtyProducts = PRODUCTS.filter(
    (p) => p.category === "Specialty Tubes & Containers"
  );

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-industrial-950 text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-industrial-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-kraft-400" />
              <span>Boisar MIDC, Palghar, Maharashtra</span>
            </span>
            <a
              href="mailto:prpackaging2@gmail.com"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-kraft-400" />
              <span>{COMPANY.email}</span>
            </a>
            <span className="hidden md:flex items-center gap-1 text-eco-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Since 1992 | 40+ Skilled Workforce</span>
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <a
              href={`tel:${COMPANY.phones[0].number}`}
              className="flex items-center gap-1.5 font-medium hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-kraft-400" />
              <span>Call: +91 {COMPANY.phones[0].number}</span>
            </a>
            <a
              href={COMPANY.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-eco-400 hover:text-eco-300 font-medium transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200"
            : "bg-white py-4 shadow-sm border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-industrial-900 to-industrial-800 flex items-center justify-center text-kraft-400 font-bold text-xl shadow-md border border-industrial-700 group-hover:border-kraft-500 transition-colors">
              PR
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-industrial-900 leading-none">
                P.R. PACKAGING
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-kraft-700 uppercase mt-1">
                Paper Tubes & Packaging • Estd. 1992
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link
              href="/"
              className={`text-sm font-semibold transition-colors hover:text-kraft-600 ${
                pathname === "/" ? "text-kraft-600 font-bold" : "text-industrial-800"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`text-sm font-semibold transition-colors hover:text-kraft-600 ${
                pathname === "/about" ? "text-kraft-600 font-bold" : "text-industrial-800"
              }`}
            >
              About Us
            </Link>

            {/* Products with Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setProductsMegaOpen(true)}
              onMouseLeave={() => setProductsMegaOpen(false)}
            >
              <Link
                href="/products"
                className={`flex items-center gap-1 text-sm font-semibold transition-colors hover:text-kraft-600 py-2 ${
                  pathname.startsWith("/products")
                    ? "text-kraft-600 font-bold"
                    : "text-industrial-800"
                }`}
              >
                <span>Products</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    productsMegaOpen ? "rotate-180 text-kraft-600" : ""
                  }`}
                />
              </Link>

              {/* Mega Menu Dropdown */}
              {productsMegaOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[850px] bg-white rounded-xl shadow-2xl border border-slate-200 p-6 grid grid-cols-3 gap-6 transition-all duration-200 animate-in fade-in slide-in-from-top-2">
                  {/* Category 1: Paper Tubes & Cores */}
                  <div className="border-r border-slate-100 pr-5">
                    <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
                      <Package className="w-4 h-4 text-kraft-600" />
                      <span className="text-xs font-bold uppercase tracking-wider text-industrial-900">
                        Paper Tubes & Cores
                      </span>
                    </div>
                    <ul className="space-y-1.5 text-xs">
                      {tubeCoreProducts.slice(0, 7).map((prod) => (
                        <li key={prod.slug}>
                          <Link
                            href={`/products/${prod.slug}`}
                            className="block py-1 px-2 rounded hover:bg-kraft-50 hover:text-kraft-700 text-slate-700 transition-colors"
                          >
                            {prod.name}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link
                          href="/products"
                          className="inline-flex items-center gap-1 text-kraft-700 font-bold text-xs pt-1 hover:underline"
                        >
                          View all tube specs <ArrowRight className="w-3 h-3" />
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Category 2: Corrugated Packaging */}
                  <div className="border-r border-slate-100 pr-5">
                    <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
                      <Layers className="w-4 h-4 text-kraft-600" />
                      <span className="text-xs font-bold uppercase tracking-wider text-industrial-900">
                        Corrugated Packaging
                      </span>
                    </div>
                    <ul className="space-y-2 text-xs">
                      {corrugatedProducts.map((prod) => (
                        <li key={prod.slug}>
                          <Link
                            href={`/products/${prod.slug}`}
                            className="block py-1.5 px-2 rounded hover:bg-kraft-50 hover:text-kraft-700 text-slate-700 transition-colors"
                          >
                            <span className="font-semibold block">{prod.name}</span>
                            <span className="text-[11px] text-slate-500">
                              {prod.slug === "corrugated-boxes"
                                ? "In-house manufacturing up to 52\""
                                : "Rolls & layer separation sheets"}
                            </span>
                          </Link>
                        </li>
                      ))}
                      {/* Additional tube cores */}
                      {tubeCoreProducts.slice(7).map((prod) => (
                        <li key={prod.slug}>
                          <Link
                            href={`/products/${prod.slug}`}
                            className="block py-1 px-2 rounded hover:bg-kraft-50 hover:text-kraft-700 text-slate-700 transition-colors"
                          >
                            {prod.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Category 3: Specialty & Highlights */}
                  <div>
                    <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
                      <Sparkles className="w-4 h-4 text-kraft-600" />
                      <span className="text-xs font-bold uppercase tracking-wider text-industrial-900">
                        Specialty Containers
                      </span>
                    </div>
                    <ul className="space-y-2 text-xs">
                      {specialtyProducts.map((prod) => (
                        <li key={prod.slug}>
                          <Link
                            href={`/products/${prod.slug}`}
                            className="block py-1.5 px-2 rounded hover:bg-kraft-50 hover:text-kraft-700 text-slate-700 transition-colors"
                          >
                            <span className="font-semibold block">{prod.name}</span>
                            <span className="text-[11px] text-slate-500">
                              {prod.slug === "incense-stick-tubes"
                                ? "Aesthetic printed agarbatti tubes"
                                : "Rigid 2-piece & 3-piece canisters"}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>

                    {/* Quick Specs Highlight Box */}
                    <div className="mt-4 p-3 bg-industrial-50 rounded-lg border border-industrial-100 text-xs text-slate-600">
                      <p className="font-bold text-industrial-900 mb-1">
                        Fast 48-Hour Order Turnaround
                      </p>
                      <p className="text-[11px] text-slate-500 mb-2">
                        Tubes from 14–100 mm dia and lengths up to 130 inches.
                      </p>
                      <button
                        onClick={() => {
                          setProductsMegaOpen(false);
                          onOpenQuoteModal();
                        }}
                        className="text-xs text-kraft-700 font-bold hover:underline inline-flex items-center gap-1"
                      >
                        Request Custom Dimensions <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/industries"
              className={`text-sm font-semibold transition-colors hover:text-kraft-600 ${
                pathname === "/industries"
                  ? "text-kraft-600 font-bold"
                  : "text-industrial-800"
              }`}
            >
              Industries
            </Link>

            <Link
              href="/infrastructure"
              className={`text-sm font-semibold transition-colors hover:text-kraft-600 ${
                pathname === "/infrastructure"
                  ? "text-kraft-600 font-bold"
                  : "text-industrial-800"
              }`}
            >
              Infrastructure
            </Link>

            <Link
              href="/sustainability"
              className={`text-sm font-semibold transition-colors hover:text-kraft-600 ${
                pathname === "/sustainability"
                  ? "text-kraft-600 font-bold"
                  : "text-industrial-800"
              }`}
            >
              Sustainability
            </Link>

            <Link
              href="/contact"
              className={`text-sm font-semibold transition-colors hover:text-kraft-600 ${
                pathname === "/contact"
                  ? "text-kraft-600 font-bold"
                  : "text-industrial-800"
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={COMPANY.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-2.5 rounded-lg border border-slate-200 text-eco-700 bg-eco-50 hover:bg-eco-100 hover:border-eco-300 transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-5 h-5 text-eco-600" />
            </a>

            <button
              onClick={() => onOpenQuoteModal()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-kraft-600 text-white font-semibold text-sm hover:bg-kraft-700 shadow-sm transition-all hover:shadow-md"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenQuoteModal()}
              className="px-3 py-1.5 rounded-md bg-kraft-600 text-white text-xs font-semibold"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-industrial-800 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Out Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed top-0 right-0 w-full max-w-sm h-full bg-white shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div className="p-5 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded bg-industrial-900 text-kraft-400 flex items-center justify-center font-bold text-sm">
                  PR
                </div>
                <div>
                  <div className="font-bold text-industrial-900 text-base">
                    P.R. PACKAGING
                  </div>
                  <div className="text-[10px] text-slate-500 font-medium">
                    Boisar MIDC • Since 1992
                  </div>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-md hover:bg-slate-100 text-slate-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="p-5 flex-1 space-y-1">
              <Link
                href="/"
                className="block py-2.5 px-3 rounded-lg text-base font-semibold text-industrial-900 hover:bg-slate-50"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="block py-2.5 px-3 rounded-lg text-base font-semibold text-industrial-900 hover:bg-slate-50"
              >
                About Us
              </Link>

              {/* Products Collapsible in Mobile */}
              <div>
                <button
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  className="w-full flex items-center justify-between py-2.5 px-3 rounded-lg text-base font-semibold text-industrial-900 hover:bg-slate-50"
                >
                  <span>Products</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileProductsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileProductsOpen && (
                  <div className="pl-4 pr-2 py-2 space-y-1 bg-slate-50 rounded-lg text-sm">
                    <Link
                      href="/products"
                      className="block py-1.5 px-2 font-bold text-kraft-700 hover:underline"
                    >
                      All Products Overview →
                    </Link>
                    {PRODUCTS.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/products/${p.slug}`}
                        className="block py-1.5 px-2 text-slate-700 hover:text-kraft-700"
                      >
                        {p.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/industries"
                className="block py-2.5 px-3 rounded-lg text-base font-semibold text-industrial-900 hover:bg-slate-50"
              >
                Industries
              </Link>

              <Link
                href="/infrastructure"
                className="block py-2.5 px-3 rounded-lg text-base font-semibold text-industrial-900 hover:bg-slate-50"
              >
                Infrastructure
              </Link>

              <Link
                href="/sustainability"
                className="block py-2.5 px-3 rounded-lg text-base font-semibold text-industrial-900 hover:bg-slate-50"
              >
                Sustainability
              </Link>

              <Link
                href="/customer-service"
                className="block py-2.5 px-3 rounded-lg text-base font-semibold text-industrial-900 hover:bg-slate-50"
              >
                Customer Support & JIT
              </Link>

              <Link
                href="/contact"
                className="block py-2.5 px-3 rounded-lg text-base font-semibold text-industrial-900 hover:bg-slate-50"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="p-5 border-t border-slate-100 bg-slate-50 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 rounded-lg bg-kraft-600 text-white font-bold text-center block shadow hover:bg-kraft-700"
              >
                Request a Quote
              </button>

              <a
                href={COMPANY.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-lg bg-eco-600 text-white font-bold flex items-center justify-center gap-2 shadow hover:bg-eco-700"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>

              <div className="text-center text-xs text-slate-500 pt-2">
                Boisar MIDC: +91 {COMPANY.phones[0].number}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
