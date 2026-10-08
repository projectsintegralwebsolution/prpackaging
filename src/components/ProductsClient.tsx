"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Filter,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Package,
  Layers,
  Sparkles,
  ChevronRight
} from "lucide-react";
import PageBanner from "@/components/PageBanner";
import EnquiryModal from "@/components/EnquiryModal";
import { PRODUCTS, PRODUCT_CATEGORIES } from "@/data/products";

export default function ProductsClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Products");
  const [searchQuery, setSearchQuery] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | undefined>(undefined);

  const breadcrumbs = [{ label: "Products" }];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === "All Products" || product.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.tagline.toLowerCase().includes(q) ||
        product.applications.some((app) => app.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleOpenQuote = (productName?: string) => {
    setSelectedProduct(productName);
    setModalOpen(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Page Banner */}
      <PageBanner
        title="Industrial Packaging Products"
        subtitle="Paper tubes, cores, corrugated sheets and boxes engineered for diverse manufacturing applications."
        breadcrumbs={breadcrumbs}
        bgImage="/images/banners/products.jpg"
        tag="Product Catalog"
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filter and Search Bar */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mb-12 flex flex-col md:flex-row items-center justify-between gap-5">
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {PRODUCT_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                  selectedCategory === category
                    ? "bg-industrial-950 text-white shadow-md"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products or applications..."
              className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-kraft-500 focus:bg-white text-slate-900"
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 flex items-center justify-between text-xs font-semibold text-slate-500">
          <span>Showing {filteredProducts.length} of {PRODUCTS.length} Products</span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-kraft-600 hover:underline"
            >
              Clear search
            </button>
          )}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.slug}
              className="group bg-white rounded-xl shadow-sm hover:shadow-card-hover border border-slate-200 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Image Container with Crisp Presentation */}
                <div className="relative w-full h-56 bg-slate-100 overflow-hidden flex items-center justify-center p-3 border-b border-slate-100">
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

                {/* Info */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-industrial-900 group-hover:text-kraft-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                    {product.tagline}
                  </p>

                  {/* Top specifications pill */}
                  <div className="mt-3 pt-3 border-t border-slate-100 space-y-1 text-[11px] text-slate-600">
                    {product.specifications.slice(0, 2).map((s) => (
                      <div key={s.label} className="flex justify-between">
                        <span className="text-slate-400">{s.label}:</span>
                        <span className="font-semibold text-slate-800 text-right">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-5 pb-5 pt-0 flex items-center justify-between border-t border-slate-50 mt-2">
                <Link
                  href={`/products/${product.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-industrial-900 hover:text-kraft-600 transition-colors"
                >
                  <span>Product Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  onClick={() => handleOpenQuote(product.name)}
                  className="text-xs font-bold px-3 py-1.5 rounded-lg bg-kraft-600 text-white hover:bg-kraft-700 shadow-sm transition-colors"
                >
                  Request Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Specs Comparison Table */}
        <div className="mt-20 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm overflow-hidden">
          <div className="mb-6">
            <span className="text-kraft-700 text-xs font-bold uppercase tracking-wider">
              Technical Specifications Matrix
            </span>
            <h2 className="text-2xl font-black text-industrial-950 tracking-tight mt-1">
              Client Technical Range &amp; Production Capabilities
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Supported by P.R. Packaging Boisar manufacturing unit specifications.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-industrial-950 text-white uppercase text-[11px] tracking-wider">
                  <th className="p-3 font-bold rounded-l">Parameter</th>
                  <th className="p-3 font-bold">Client Standard Range</th>
                  <th className="p-3 font-bold">Materials &amp; Composition</th>
                  <th className="p-3 font-bold rounded-r">Execution &amp; Logistics</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-bold text-industrial-900">Tube Diameter</td>
                  <td className="p-3.5">14 mm to 100 mm (Inner dia 0.5&quot; to 4&quot;)</td>
                  <td className="p-3.5">Recycled kraft paper, virgin kraft liners, white paper</td>
                  <td className="p-3.5">Precision cut square edges</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-bold text-industrial-900">Tube Length</td>
                  <td className="p-3.5">1 inch to 130 inches</td>
                  <td className="p-3.5">High-strength dextrine powder adhesive</td>
                  <td className="p-3.5">Order planned &amp; executed in 48 hours</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-bold text-industrial-900">Wall Thickness</td>
                  <td className="p-3.5">1 mm to 20 mm (up to 15 mm standard options)</td>
                  <td className="p-3.5">Eco-friendly and 100% recyclable raw materials</td>
                  <td className="p-3.5">In-house quality testing with machines</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-bold text-industrial-900">Corrugated Boxes</td>
                  <td className="p-3.5">In-house manufacturing for sizes up to 52 inches</td>
                  <td className="p-3.5">Single-face fluted rolls &amp; multi-ply kraft cartons</td>
                  <td className="p-3.5">In-house fleet of delivery vehicles across India</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-bold text-industrial-900">Printing &amp; Customization</td>
                  <td className="p-3.5">Internal and external printing in any customer color</td>
                  <td className="p-3.5">Brand logo printing &amp; color-coded outer wraps</td>
                  <td className="p-3.5">Boisar MIDC facility &amp; Bhiwandi warehouse</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Custom Order CTA Strip */}
        <div className="mt-12 p-8 rounded-2xl bg-industrial-950 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold">
              Require Custom Diameters, Lengths or Printing?
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Our engineering team can adjust winding mandrels to your required millimeter tolerances.
            </p>
          </div>
          <button
            onClick={() => handleOpenQuote()}
            className="px-6 py-3 rounded-lg bg-kraft-600 hover:bg-kraft-700 text-white font-bold text-sm shrink-0 transition-colors shadow"
          >
            Submit Custom Specification
          </button>
        </div>
      </div>

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        productName={selectedProduct}
      />
    </div>
  );
}
