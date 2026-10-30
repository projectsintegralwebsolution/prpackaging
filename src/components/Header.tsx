"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  MessageCircle,
  Package,
  Layers,
  ShieldCheck,
  Cylinder,
  Circle,
  Disc,
  Shapes,
  PanelsTopLeft,
  Box,
  Waves,
  Scroll,
  Grid3X3,
  CircleDot,
  ShoppingBag,
  Paperclip,
  Truck,
  Settings,
  Leaf,
  FileText,
  LucideIcon
} from "lucide-react";
import { COMPANY } from "@/data/company";
import { PRODUCTS } from "@/data/products";

interface HeaderProps {
  onOpenQuoteModal: (productName?: string) => void;
}

interface ProductMegaMeta {
  icon: LucideIcon;
  shortDesc: string;
  bgClass: string;
  iconClass: string;
  hoverBgClass: string;
  hoverBorderClass: string;
}

const PRODUCT_MEGA_META: Record<string, ProductMegaMeta> = {
  // Column 1: Paper Tubes & Paper Cores (13)
  "paper-tubes": {
    icon: Cylinder,
    shortDesc: "Industrial paper tubes",
    bgClass: "bg-[#FDF5EC] border-[#F5E3CE]",
    iconClass: "text-[#9A5B25]",
    hoverBgClass: "group-hover:bg-[#F9E8D4]",
    hoverBorderClass: "group-hover:border-[#E6C59E]"
  },
  "paper-cores": {
    icon: Circle,
    shortDesc: "Paper cores for industrial use",
    bgClass: "bg-[#FDF5EC] border-[#F5E3CE]",
    iconClass: "text-[#9A5B25]",
    hoverBgClass: "group-hover:bg-[#F9E8D4]",
    hoverBorderClass: "group-hover:border-[#E6C59E]"
  },
  "textile-tubes": {
    icon: Layers,
    shortDesc: "Tubes for textile industry",
    bgClass: "bg-[#EFF6FF] border-[#DBEAFE]",
    iconClass: "text-[#1D4ED8]",
    hoverBgClass: "group-hover:bg-[#DBEAFE]",
    hoverBorderClass: "group-hover:border-[#93C5FD]"
  },
  "bopp-cello-tape-cores": {
    icon: Disc,
    shortDesc: "Cores for adhesive tapes",
    bgClass: "bg-[#FEF2F2] border-[#FECACA]",
    iconClass: "text-[#DC2626]",
    hoverBgClass: "group-hover:bg-[#FEE2E2]",
    hoverBorderClass: "group-hover:border-[#FCA5A5]"
  },
  "stretch-film-paper-tubes": {
    icon: Package,
    shortDesc: "Cores for stretch film",
    bgClass: "bg-[#EEFBF3] border-[#D1FAE5]",
    iconClass: "text-[#15803D]",
    hoverBgClass: "group-hover:bg-[#DCFCE7]",
    hoverBorderClass: "group-hover:border-[#86EFAC]"
  },
  "bubble-wrap-cores": {
    icon: Package,
    shortDesc: "Cores for bubble wrap",
    bgClass: "bg-[#EFF6FF] border-[#DBEAFE]",
    iconClass: "text-[#1D4ED8]",
    hoverBgClass: "group-hover:bg-[#DBEAFE]",
    hoverBorderClass: "group-hover:border-[#93C5FD]"
  },
  "tissue-paper-cores": {
    icon: Layers,
    shortDesc: "Cores for tissue paper",
    bgClass: "bg-[#F5F3FF] border-[#EDE9FE]",
    iconClass: "text-[#6D28D9]",
    hoverBgClass: "group-hover:bg-[#EDE9FE]",
    hoverBorderClass: "group-hover:border-[#C4B5FD]"
  },
  "foil-cores": {
    icon: Cylinder,
    shortDesc: "Cores for aluminium foil",
    bgClass: "bg-[#F1F5F9] border-[#E2E8F0]",
    iconClass: "text-[#334155]",
    hoverBgClass: "group-hover:bg-[#E2E8F0]",
    hoverBorderClass: "group-hover:border-[#CBD5E1]"
  },
  "silver-foil-cores": {
    icon: Circle,
    shortDesc: "Cores for silver foil",
    bgClass: "bg-[#FDF5EC] border-[#F5E3CE]",
    iconClass: "text-[#B45309]",
    hoverBgClass: "group-hover:bg-[#F9E8D4]",
    hoverBorderClass: "group-hover:border-[#E6C59E]"
  },
  "pvc-roll-cores": {
    icon: Disc,
    shortDesc: "Cores for PVC rolls",
    bgClass: "bg-[#EEFBF3] border-[#D1FAE5]",
    iconClass: "text-[#15803D]",
    hoverBgClass: "group-hover:bg-[#DCFCE7]",
    hoverBorderClass: "group-hover:border-[#86EFAC]"
  },
  "incense-stick-tubes": {
    icon: Package,
    shortDesc: "Tubes for incense sticks",
    bgClass: "bg-[#FEF2F2] border-[#FECACA]",
    iconClass: "text-[#C2410C]",
    hoverBgClass: "group-hover:bg-[#FEE2E2]",
    hoverBorderClass: "group-hover:border-[#FCA5A5]"
  },
  "dty-poy-textile-yarn-cones": {
    icon: Shapes,
    shortDesc: "Cones for yarn winding",
    bgClass: "bg-[#F5F3FF] border-[#EDE9FE]",
    iconClass: "text-[#6D28D9]",
    hoverBgClass: "group-hover:bg-[#EDE9FE]",
    hoverBorderClass: "group-hover:border-[#C4B5FD]"
  },
  "firecracker-tubes": {
    icon: Cylinder,
    shortDesc: "Tubes for firecracker industry",
    bgClass: "bg-[#F5F3FF] border-[#EDE9FE]",
    iconClass: "text-[#5B21B6]",
    hoverBgClass: "group-hover:bg-[#EDE9FE]",
    hoverBorderClass: "group-hover:border-[#C4B5FD]"
  },

  // Column 2: Corrugated Packaging (6)
  "corrugated-sheets": {
    icon: Layers,
    shortDesc: "High-strength sheets",
    bgClass: "bg-[#FDF5EC] border-[#F5E3CE]",
    iconClass: "text-[#9A5B25]",
    hoverBgClass: "group-hover:bg-[#F9E8D4]",
    hoverBorderClass: "group-hover:border-[#E6C59E]"
  },
  "corrugated-liners": {
    icon: PanelsTopLeft,
    shortDesc: "Liners for packaging",
    bgClass: "bg-[#FDF5EC] border-[#F5E3CE]",
    iconClass: "text-[#9A5B25]",
    hoverBgClass: "group-hover:bg-[#F9E8D4]",
    hoverBorderClass: "group-hover:border-[#E6C59E]"
  },
  "corrugated-boxes": {
    icon: Package,
    shortDesc: "Custom corrugated boxes",
    bgClass: "bg-[#FDF5EC] border-[#F5E3CE]",
    iconClass: "text-[#9A5B25]",
    hoverBgClass: "group-hover:bg-[#F9E8D4]",
    hoverBorderClass: "group-hover:border-[#E6C59E]"
  },
  "cardboard-containers": {
    icon: Box,
    shortDesc: "Sturdy cardboard containers",
    bgClass: "bg-[#FDF5EC] border-[#F5E3CE]",
    iconClass: "text-[#9A5B25]",
    hoverBgClass: "group-hover:bg-[#F9E8D4]",
    hoverBorderClass: "group-hover:border-[#E6C59E]"
  },
  "mdf-board-putha": {
    icon: Layers,
    shortDesc: "MDF boards for packaging",
    bgClass: "bg-[#FDF5EC] border-[#F5E3CE]",
    iconClass: "text-[#9A5B25]",
    hoverBgClass: "group-hover:bg-[#F9E8D4]",
    hoverBorderClass: "group-hover:border-[#E6C59E]"
  },
  "sundry-board-putha": {
    icon: PanelsTopLeft,
    shortDesc: "Sundry boards for industrial use",
    bgClass: "bg-[#FDF5EC] border-[#F5E3CE]",
    iconClass: "text-[#9A5B25]",
    hoverBgClass: "group-hover:bg-[#F9E8D4]",
    hoverBorderClass: "group-hover:border-[#E6C59E]"
  },

  // Column 3: Other Packaging (7)
  "air-bubble-roll": {
    icon: Waves,
    shortDesc: "Protective bubble rolls",
    bgClass: "bg-[#EEFBF3] border-[#D1FAE5]",
    iconClass: "text-[#15803D]",
    hoverBgClass: "group-hover:bg-[#DCFCE7]",
    hoverBorderClass: "group-hover:border-[#86EFAC]"
  },
  "ldpe-hm-rolls": {
    icon: Scroll,
    shortDesc: "Plastic rolls for packaging",
    bgClass: "bg-[#EEFBF3] border-[#D1FAE5]",
    iconClass: "text-[#15803D]",
    hoverBgClass: "group-hover:bg-[#DCFCE7]",
    hoverBorderClass: "group-hover:border-[#86EFAC]"
  },
  "pp-woven-fabric-bardan": {
    icon: Grid3X3,
    shortDesc: "Woven fabric for packaging",
    bgClass: "bg-[#EEFBF3] border-[#D1FAE5]",
    iconClass: "text-[#15803D]",
    hoverBgClass: "group-hover:bg-[#DCFCE7]",
    hoverBorderClass: "group-hover:border-[#86EFAC]"
  },
  "taco-tape": {
    icon: CircleDot,
    shortDesc: "High-quality taco tape",
    bgClass: "bg-[#EEFBF3] border-[#D1FAE5]",
    iconClass: "text-[#15803D]",
    hoverBgClass: "group-hover:bg-[#DCFCE7]",
    hoverBorderClass: "group-hover:border-[#86EFAC]"
  },
  "stretch-film": {
    icon: Package,
    shortDesc: "Stretch film for packaging",
    bgClass: "bg-[#EEFBF3] border-[#D1FAE5]",
    iconClass: "text-[#15803D]",
    hoverBgClass: "group-hover:bg-[#DCFCE7]",
    hoverBorderClass: "group-hover:border-[#86EFAC]"
  },
  "plastic-bag": {
    icon: ShoppingBag,
    shortDesc: "Durable plastic bags",
    bgClass: "bg-[#EEFBF3] border-[#D1FAE5]",
    iconClass: "text-[#15803D]",
    hoverBgClass: "group-hover:bg-[#DCFCE7]",
    hoverBorderClass: "group-hover:border-[#86EFAC]"
  },
  "metal-clip": {
    icon: Paperclip,
    shortDesc: "Clips for secure packaging",
    bgClass: "bg-[#EEFBF3] border-[#D1FAE5]",
    iconClass: "text-[#15803D]",
    hoverBgClass: "group-hover:bg-[#DCFCE7]",
    hoverBorderClass: "group-hover:border-[#86EFAC]"
  }
};

function getProductMegaMeta(slug: string): ProductMegaMeta {
  return (
    PRODUCT_MEGA_META[slug] || {
      icon: Package,
      shortDesc: "Industrial packaging solution",
      bgClass: "bg-[#FDF5EC] border-[#F5E3CE]",
      iconClass: "text-[#9A5B25]",
      hoverBgClass: "group-hover:bg-[#F9E8D4]",
      hoverBorderClass: "group-hover:border-[#E6C59E]"
    }
  );
}

export default function Header({ onOpenQuoteModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [productsMegaOpen, setProductsMegaOpen] = useState(false);
  const [headerBottomOffset, setHeaderBottomOffset] = useState<number>(80);
  const headerRef = useRef<HTMLElement | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  const updateHeaderOffset = () => {
    if (headerRef.current) {
      const rect = headerRef.current.getBoundingClientRect();
      setHeaderBottomOffset(Math.max(Math.round(rect.bottom), 56));
    }
  };

  const handleMegaEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    updateHeaderOffset();
    setProductsMegaOpen(true);
  };

  const handleMegaLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setProductsMegaOpen(false);
    }, 130);
  };

  useEffect(() => {
    const handleScrollOrResize = () => {
      setIsScrolled(window.scrollY > 20);
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        setHeaderBottomOffset(Math.max(Math.round(rect.bottom), 56));
      }
    };
    handleScrollOrResize();
    window.addEventListener("scroll", handleScrollOrResize, { passive: true });
    window.addEventListener("resize", handleScrollOrResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScrollOrResize);
      window.removeEventListener("resize", handleScrollOrResize);
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  // Close menus on route change
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
  const otherPackagingProducts = PRODUCTS.filter(
    (p) => p.category === "Other Packaging Products"
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
        ref={headerRef}
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
                Paper Tubes &amp; Packaging • Estd. 1992
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

            {/* Products with Premium International B2B Mega Menu */}
            <div
              className="static"
              onMouseEnter={handleMegaEnter}
              onMouseLeave={handleMegaLeave}
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

              {/* Mega Menu Dropdown Container — Compact, Balanced & Zero Internal Scroll */}
              {productsMegaOpen && (
                <div
                  onMouseEnter={handleMegaEnter}
                  onMouseLeave={handleMegaLeave}
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-1 w-[1080px] xl:w-[1140px] max-w-[calc(100vw-24px)] z-50 animate-in fade-in slide-in-from-top-1 duration-150 overflow-visible"
                >
                  <div className="bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(15,23,42,0.2)] border border-slate-200/90 px-5 py-3.5 overflow-visible">
                    {/* Three Main Columns */}
                    <div className="grid grid-cols-12 gap-4 xl:gap-5 overflow-visible">
                      {/* COLUMN 1: PAPER TUBES & PAPER CORES (13) */}
                      <div className="col-span-6 border-r border-slate-200/75 pr-4 xl:pr-5">
                        {/* Compact Category Header */}
                        <div className="flex items-center justify-between gap-2 pb-2 mb-1.5 border-b border-[#EED7BE]">
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className="w-8 h-8 rounded-lg bg-[#FDF5EC] border border-[#F2DEC4] flex items-center justify-center text-[#9A5B25] shrink-0">
                              <Cylinder className="w-4 h-4" strokeWidth={1.9} />
                            </div>
                            <div className="min-w-0">
                              <h3 className="text-xs font-extrabold uppercase tracking-wide text-industrial-950 leading-none">
                                Paper Tubes &amp; Paper Cores ({tubeCoreProducts.length})
                              </h3>
                              <p className="text-[10.5px] text-slate-500 mt-0.5 leading-tight truncate">
                                High-strength paper tubes and cores for diverse industrial applications
                              </p>
                            </div>
                          </div>

                          <Link
                            href="/products"
                            onClick={() => setProductsMegaOpen(false)}
                            className="text-[11px] font-bold text-[#A66324] hover:text-[#844B16] inline-flex items-center gap-1 shrink-0 transition-colors group/viewall"
                          >
                            <span>View All {PRODUCTS.length} Products</span>
                            <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover/viewall:translate-x-0.5" />
                          </Link>
                        </div>

                        {/* Compact Two-Column Product Grid */}
                        <div className="grid grid-cols-2 gap-x-2.5 gap-y-0.5">
                          {tubeCoreProducts.map((prod) => {
                            const meta = getProductMegaMeta(prod.slug);
                            const IconComponent = meta.icon;
                            return (
                              <Link
                                key={prod.slug}
                                href={`/products/${prod.slug}`}
                                onClick={() => setProductsMegaOpen(false)}
                                className="group flex items-center justify-between gap-2 px-2 py-1 rounded-lg border border-transparent hover:bg-slate-50/90 hover:border-slate-200/80 transition-all duration-150"
                              >
                                <div className="flex items-center gap-2 min-w-0">
                                  <div
                                    className={`w-7 h-7 rounded-lg border ${meta.bgClass} ${meta.hoverBgClass} ${meta.hoverBorderClass} flex items-center justify-center shrink-0 transition-all duration-150`}
                                  >
                                    <IconComponent
                                      className={`w-3.5 h-3.5 ${meta.iconClass} transition-transform duration-150 group-hover:scale-110`}
                                      strokeWidth={1.85}
                                    />
                                  </div>
                                  <div className="min-w-0">
                                    <div className="text-[12px] font-bold text-industrial-950 group-hover:text-[#9A5B25] transition-colors leading-tight truncate">
                                      {prod.name}
                                    </div>
                                    <div className="text-[10px] text-slate-500 leading-tight truncate">
                                      {meta.shortDesc}
                                    </div>
                                  </div>
                                </div>

                                <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-[#9A5B25] group-hover:translate-x-0.5 transition-all duration-150 shrink-0" />
                              </Link>
                            );
                          })}
                        </div>
                      </div>

                      {/* COLUMN 2: CORRUGATED PACKAGING */}
                      <div className="col-span-3 border-r border-slate-200/75 pr-4 xl:pr-5">
                        {/* Compact Category Header */}
                        <div className="flex items-center gap-2.5 pb-2 mb-1.5 border-b border-[#EED7BE]">
                          <div className="w-8 h-8 rounded-lg bg-[#FDF5EC] border border-[#F2DEC4] flex items-center justify-center text-[#9A5B25] shrink-0">
                            <Box className="w-4 h-4" strokeWidth={1.9} />
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-xs font-extrabold uppercase tracking-wide text-industrial-950 leading-none">
                              Corrugated Packaging
                            </h3>
                            <p className="text-[10.5px] text-slate-500 mt-0.5 leading-tight truncate">
                              Durable and sustainable corrugated solutions
                            </p>
                          </div>
                        </div>

                        {/* Compact Product List */}
                        <div className="space-y-0.5">
                          {corrugatedProducts.map((prod) => {
                            const meta = getProductMegaMeta(prod.slug);
                            const IconComponent = meta.icon;
                            return (
                              <Link
                                key={prod.slug}
                                href={`/products/${prod.slug}`}
                                onClick={() => setProductsMegaOpen(false)}
                                className="group flex items-center justify-between gap-2 px-2 py-1 rounded-lg border border-transparent hover:bg-slate-50/90 hover:border-slate-200/80 transition-all duration-150"
                              >
                                <div className="flex items-center gap-2 min-w-0">
                                  <div
                                    className={`w-7 h-7 rounded-lg border ${meta.bgClass} ${meta.hoverBgClass} ${meta.hoverBorderClass} flex items-center justify-center shrink-0 transition-all duration-150`}
                                  >
                                    <IconComponent
                                      className={`w-3.5 h-3.5 ${meta.iconClass} transition-transform duration-150 group-hover:scale-110`}
                                      strokeWidth={1.85}
                                    />
                                  </div>
                                  <div className="min-w-0">
                                    <div className="text-[12px] font-bold text-industrial-950 group-hover:text-[#9A5B25] transition-colors leading-tight truncate">
                                      {prod.shortName}
                                    </div>
                                    <div className="text-[10px] text-slate-500 leading-tight truncate">
                                      {meta.shortDesc}
                                    </div>
                                  </div>
                                </div>

                                <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-[#9A5B25] group-hover:translate-x-0.5 transition-all duration-150 shrink-0" />
                              </Link>
                            );
                          })}
                        </div>
                      </div>

                      {/* COLUMN 3: OTHER PACKAGING */}
                      <div className="col-span-3">
                        {/* Compact Category Header */}
                        <div className="flex items-center gap-2.5 pb-2 mb-1.5 border-b border-[#BCEAD5]">
                          <div className="w-8 h-8 rounded-lg bg-[#EEFBF3] border border-[#D1FAE5] flex items-center justify-center text-[#15803D] shrink-0">
                            <Package className="w-4 h-4" strokeWidth={1.9} />
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-xs font-extrabold uppercase tracking-wide text-industrial-950 leading-none">
                              Other Packaging
                            </h3>
                            <p className="text-[10.5px] text-slate-500 mt-0.5 leading-tight truncate">
                              Wide range of packaging materials and accessories
                            </p>
                          </div>
                        </div>

                        {/* Compact Product List */}
                        <div className="space-y-0.5">
                          {otherPackagingProducts.map((prod) => {
                            const meta = getProductMegaMeta(prod.slug);
                            const IconComponent = meta.icon;
                            return (
                              <Link
                                key={prod.slug}
                                href={`/products/${prod.slug}`}
                                onClick={() => setProductsMegaOpen(false)}
                                className="group flex items-center justify-between gap-2 px-2 py-1 rounded-lg border border-transparent hover:bg-slate-50/90 hover:border-slate-200/80 transition-all duration-150"
                              >
                                <div className="flex items-center gap-2 min-w-0">
                                  <div
                                    className={`w-7 h-7 rounded-lg border ${meta.bgClass} ${meta.hoverBgClass} ${meta.hoverBorderClass} flex items-center justify-center shrink-0 transition-all duration-150`}
                                  >
                                    <IconComponent
                                      className={`w-3.5 h-3.5 ${meta.iconClass} transition-transform duration-150 group-hover:scale-110`}
                                      strokeWidth={1.85}
                                    />
                                  </div>
                                  <div className="min-w-0">
                                    <div className="text-[12px] font-bold text-industrial-950 group-hover:text-[#15803D] transition-colors leading-tight truncate">
                                      {prod.shortName}
                                    </div>
                                    <div className="text-[10px] text-slate-500 leading-tight truncate">
                                      {meta.shortDesc}
                                    </div>
                                  </div>
                                </div>

                                <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-[#15803D] group-hover:translate-x-0.5 transition-all duration-150 shrink-0" />
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* COMPACT BOTTOM FEATURE BAR */}
                    <div className="mt-2.5 bg-[#F4F7FB] border border-[#E2E8F0] rounded-xl px-4 py-2 flex items-center justify-between gap-3">
                      <div className="grid grid-cols-4 gap-0 divide-x divide-slate-200/90 flex-1">
                        {/* 1. 48-Hour Order Turnaround */}
                        <div className="flex items-center gap-2 pr-3">
                          <div className="w-7 h-7 rounded-full bg-white border border-slate-200/90 shadow-2xs flex items-center justify-center text-[#1D4ED8] shrink-0">
                            <Truck className="w-3.5 h-3.5" strokeWidth={1.9} />
                          </div>
                          <div className="min-w-0">
                            <div className="text-[11px] font-extrabold text-[#1E3A8A] leading-tight truncate">
                              48-Hour Order Turnaround
                            </div>
                            <div className="text-[10px] text-slate-500 leading-tight truncate">
                              14–100 mm tubes • Boxes up to 52&quot;
                            </div>
                          </div>
                        </div>

                        {/* 2. Custom Sizes & Specifications */}
                        <div className="flex items-center gap-2 px-3">
                          <div className="w-7 h-7 rounded-full bg-white border border-slate-200/90 shadow-2xs flex items-center justify-center text-[#1D4ED8] shrink-0">
                            <Settings className="w-3.5 h-3.5" strokeWidth={1.9} />
                          </div>
                          <div className="min-w-0">
                            <div className="text-[11px] font-extrabold text-[#1E3A8A] leading-tight truncate">
                              Custom Sizes &amp; Specifications
                            </div>
                            <div className="text-[10px] text-slate-500 leading-tight truncate">
                              As per your requirement
                            </div>
                          </div>
                        </div>

                        {/* 3. Consistent Quality & Strength */}
                        <div className="flex items-center gap-2 px-3">
                          <div className="w-7 h-7 rounded-full bg-white border border-slate-200/90 shadow-2xs flex items-center justify-center text-[#1D4ED8] shrink-0">
                            <ShieldCheck className="w-3.5 h-3.5" strokeWidth={1.9} />
                          </div>
                          <div className="min-w-0">
                            <div className="text-[11px] font-extrabold text-[#1E3A8A] leading-tight truncate">
                              Consistent Quality &amp; Strength
                            </div>
                            <div className="text-[10px] text-slate-500 leading-tight truncate">
                              For industrial applications
                            </div>
                          </div>
                        </div>

                        {/* 4. Sustainable Packaging Solutions */}
                        <div className="flex items-center gap-2 pl-3">
                          <div className="w-7 h-7 rounded-full bg-white border border-slate-200/90 shadow-2xs flex items-center justify-center text-[#15803D] shrink-0">
                            <Leaf className="w-3.5 h-3.5" strokeWidth={1.9} />
                          </div>
                          <div className="min-w-0">
                            <div className="text-[11px] font-extrabold text-[#1E3A8A] leading-tight truncate">
                              Sustainable Packaging Solutions
                            </div>
                            <div className="text-[10px] text-slate-500 leading-tight truncate">
                              Eco-friendly and recyclable
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Compact Custom Quote CTA Button */}
                      <button
                        onClick={() => {
                          setProductsMegaOpen(false);
                          onOpenQuoteModal();
                        }}
                        className="px-4 py-2 rounded-lg bg-[#A66324] hover:bg-[#8E521B] active:bg-[#7A4515] text-white text-xs font-bold shrink-0 inline-flex items-center gap-1.5 shadow-sm shadow-[#A66324]/20 hover:shadow transition-all duration-150 cursor-pointer group/cta"
                      >
                        <FileText className="w-3.5 h-3.5 text-[#FDE68A]" strokeWidth={2} />
                        <span>Custom Quote</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover/cta:translate-x-0.5" />
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

              {/* Products Collapsible Accordion in Mobile */}
              <div>
                <button
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  className="w-full flex items-center justify-between py-2.5 px-3 rounded-lg text-base font-semibold text-industrial-900 hover:bg-slate-50"
                >
                  <span>Products ({PRODUCTS.length})</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileProductsOpen ? "rotate-180 text-[#9A5B25]" : ""
                    }`}
                  />
                </button>

                {mobileProductsOpen && (
                  <div className="p-3 space-y-4 bg-slate-50/90 rounded-2xl text-sm border border-slate-200/80 mt-1.5">
                    <Link
                      href="/products"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between py-2 px-3 rounded-xl bg-white border border-[#EED7BE] font-bold text-xs text-[#A66324] hover:bg-[#FDF5EC] transition-colors shadow-2xs"
                    >
                      <span>View All {PRODUCTS.length} Products</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    {/* Mobile Category 1: Paper Tubes & Paper Cores */}
                    <div>
                      <div className="flex items-center gap-2 px-2 pb-2 border-b border-[#EED7BE]">
                        <div className="w-7 h-7 rounded-lg bg-[#FDF5EC] border border-[#F2DEC4] flex items-center justify-center text-[#9A5B25] shrink-0">
                          <Cylinder className="w-3.5 h-3.5" strokeWidth={1.9} />
                        </div>
                        <div>
                          <div className="text-[11px] font-extrabold uppercase tracking-wider text-industrial-950">
                            Paper Tubes &amp; Paper Cores ({tubeCoreProducts.length})
                          </div>
                          <div className="text-[10px] text-slate-500">
                            High-strength industrial tubes &amp; cores
                          </div>
                        </div>
                      </div>
                      <div className="space-y-1 mt-2">
                        {tubeCoreProducts.map((p) => {
                          const meta = getProductMegaMeta(p.slug);
                          const IconComponent = meta.icon;
                          return (
                            <Link
                              key={p.slug}
                              href={`/products/${p.slug}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="group flex items-center justify-between gap-2 py-1.5 px-2 rounded-xl hover:bg-white transition-colors"
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                <div
                                  className={`w-8 h-8 rounded-lg border ${meta.bgClass} flex items-center justify-center shrink-0`}
                                >
                                  <IconComponent
                                    className={`w-4 h-4 ${meta.iconClass}`}
                                    strokeWidth={1.85}
                                  />
                                </div>
                                <div className="min-w-0">
                                  <div className="text-xs font-bold text-industrial-950 truncate">
                                    {p.name}
                                  </div>
                                  <div className="text-[10px] text-slate-500 truncate">
                                    {meta.shortDesc}
                                  </div>
                                </div>
                              </div>
                              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            </Link>
                          );
                        })}
                      </div>
                    </div>

                    {/* Mobile Category 2: Corrugated Packaging */}
                    <div>
                      <div className="flex items-center gap-2 px-2 pb-2 border-b border-[#EED7BE]">
                        <div className="w-7 h-7 rounded-lg bg-[#FDF5EC] border border-[#F2DEC4] flex items-center justify-center text-[#9A5B25] shrink-0">
                          <Box className="w-3.5 h-3.5" strokeWidth={1.9} />
                        </div>
                        <div>
                          <div className="text-[11px] font-extrabold uppercase tracking-wider text-industrial-950">
                            Corrugated Packaging
                          </div>
                          <div className="text-[10px] text-slate-500">
                            Durable and sustainable corrugated solutions
                          </div>
                        </div>
                      </div>
                      <div className="space-y-1 mt-2">
                        {corrugatedProducts.map((p) => {
                          const meta = getProductMegaMeta(p.slug);
                          const IconComponent = meta.icon;
                          return (
                            <Link
                              key={p.slug}
                              href={`/products/${p.slug}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="group flex items-center justify-between gap-2 py-1.5 px-2 rounded-xl hover:bg-white transition-colors"
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                <div
                                  className={`w-8 h-8 rounded-lg border ${meta.bgClass} flex items-center justify-center shrink-0`}
                                >
                                  <IconComponent
                                    className={`w-4 h-4 ${meta.iconClass}`}
                                    strokeWidth={1.85}
                                  />
                                </div>
                                <div className="min-w-0">
                                  <div className="text-xs font-bold text-industrial-950 truncate">
                                    {p.shortName}
                                  </div>
                                  <div className="text-[10px] text-slate-500 truncate">
                                    {meta.shortDesc}
                                  </div>
                                </div>
                              </div>
                              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            </Link>
                          );
                        })}
                      </div>
                    </div>

                    {/* Mobile Category 3: Other Packaging */}
                    <div>
                      <div className="flex items-center gap-2 px-2 pb-2 border-b border-[#BCEAD5]">
                        <div className="w-7 h-7 rounded-lg bg-[#EEFBF3] border border-[#D1FAE5] flex items-center justify-center text-[#15803D] shrink-0">
                          <Package className="w-3.5 h-3.5" strokeWidth={1.9} />
                        </div>
                        <div>
                          <div className="text-[11px] font-extrabold uppercase tracking-wider text-industrial-950">
                            Other Packaging
                          </div>
                          <div className="text-[10px] text-slate-500">
                            Packaging materials and accessories
                          </div>
                        </div>
                      </div>
                      <div className="space-y-1 mt-2">
                        {otherPackagingProducts.map((p) => {
                          const meta = getProductMegaMeta(p.slug);
                          const IconComponent = meta.icon;
                          return (
                            <Link
                              key={p.slug}
                              href={`/products/${p.slug}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="group flex items-center justify-between gap-2 py-1.5 px-2 rounded-xl hover:bg-white transition-colors"
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                <div
                                  className={`w-8 h-8 rounded-lg border ${meta.bgClass} flex items-center justify-center shrink-0`}
                                >
                                  <IconComponent
                                    className={`w-4 h-4 ${meta.iconClass}`}
                                    strokeWidth={1.85}
                                  />
                                </div>
                                <div className="min-w-0">
                                  <div className="text-xs font-bold text-industrial-950 truncate">
                                    {p.shortName}
                                  </div>
                                  <div className="text-[10px] text-slate-500 truncate">
                                    {meta.shortDesc}
                                  </div>
                                </div>
                              </div>
                              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            </Link>
                          );
                        })}
                      </div>
                    </div>

                    {/* Mobile Custom Quote Button inside Accordion */}
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        onOpenQuoteModal();
                      }}
                      className="w-full py-2.5 px-4 rounded-xl bg-[#A66324] hover:bg-[#8E521B] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5 text-[#FDE68A]" />
                      <span>Custom Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
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
                Customer Support &amp; JIT
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
