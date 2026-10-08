"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ShieldCheck,
  Package,
  Layers,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Phone,
  FileText,
  Clock,
  Truck,
  ChevronRight,
  Info
} from "lucide-react";
import PageBanner from "@/components/PageBanner";
import EnquiryForm from "@/components/EnquiryForm";
import EnquiryModal from "@/components/EnquiryModal";
import { Product, PRODUCTS } from "@/data/products";
import { COMPANY } from "@/data/company";

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailClient({
  product,
  relatedProducts
}: ProductDetailClientProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const breadcrumbs = [
    { label: "Products", href: "/products" },
    { label: product.name }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Page Banner */}
      <PageBanner
        title={product.name}
        subtitle={product.tagline}
        breadcrumbs={breadcrumbs}
        bgImage="/images/banners/products.jpg"
        tag={product.category}
      />

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Product Details (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Image Gallery and Overview */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm p-6 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Main Product Image Container */}
                <div className="md:col-span-6 relative w-full h-72 sm:h-80 bg-slate-50 rounded-xl overflow-hidden border border-slate-200 flex items-center justify-center p-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    priority
                    className="object-contain p-4 hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-industrial-900 text-white">
                      Estd. 1992
                    </span>
                  </div>
                </div>

                {/* Introduction & Quick Meta */}
                <div className="md:col-span-6 space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-kraft-700 bg-kraft-50 px-2.5 py-1 rounded-full border border-kraft-200 inline-block">
                    {product.category}
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-black text-industrial-950 tracking-tight">
                    {product.name}
                  </h1>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {product.overview}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-3">
                    <button
                      onClick={() => setModalOpen(true)}
                      className="px-5 py-2.5 rounded-lg bg-kraft-600 hover:bg-kraft-700 text-white font-bold text-xs sm:text-sm transition-colors shadow-sm"
                    >
                      Request Technical Quote
                    </button>
                    <a
                      href={COMPANY.whatsapp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-lg bg-eco-600 hover:bg-eco-700 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Available Specifications Table */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-6 pb-3 border-b border-slate-100">
                <FileText className="w-5 h-5 text-kraft-600" />
                <h2 className="text-xl font-bold text-industrial-900">
                  Available Technical Specifications
                </h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs sm:text-sm text-left border-collapse">
                  <tbody>
                    {product.specifications.map((spec, idx) => (
                      <tr
                        key={spec.label}
                        className={idx % 2 === 0 ? "bg-slate-50" : "bg-white"}
                      >
                        <td className="p-3.5 font-bold text-industrial-900 w-1/3 border-b border-slate-100">
                          {spec.label}
                        </td>
                        <td className="p-3.5 text-slate-700 font-medium border-b border-slate-100">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Specification Note for Technical Flexibility */}
              {product.specNotes && (
                <div className="mt-4 p-3.5 bg-kraft-50 border border-kraft-200 rounded-lg flex items-start gap-2.5 text-xs text-kraft-900">
                  <Info className="w-4 h-4 text-kraft-700 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">{product.specNotes}</p>
                </div>
              )}
            </div>

            {/* Key Features */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-6 pb-3 border-b border-slate-100">
                <ShieldCheck className="w-5 h-5 text-kraft-600" />
                <h2 className="text-xl font-bold text-industrial-900">
                  Key Product Features
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-kraft-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications & Industries Served */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Applications */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
                  <Package className="w-5 h-5 text-kraft-600" />
                  <h3 className="text-lg font-bold text-industrial-900">
                    Target Applications
                  </h3>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                  {product.applications.map((app, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-kraft-600 shrink-0 mt-0.5" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Industries Served */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
                  <Layers className="w-5 h-5 text-kraft-600" />
                  <h3 className="text-lg font-bold text-industrial-900">
                    Industries Served
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {product.industries.map((ind, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-slate-100 text-industrial-900 text-xs font-semibold border border-slate-200"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
                  Suitable for high-speed winding machinery and automated packaging lines.
                </div>
              </div>
            </div>

            {/* Why Choose Our Product */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg font-bold text-industrial-900 mb-4 pb-2 border-b border-slate-100">
                Why Source {product.shortName} from P.R. Packaging?
              </h3>
              <div className="space-y-3">
                {product.whyChooseUs.map((reason, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-kraft-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {reason}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Products Grid */}
            {relatedProducts.length > 0 && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
                <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-100">
                  <h3 className="text-lg font-bold text-industrial-900">
                    Related Packaging Products
                  </h3>
                  <Link
                    href="/products"
                    className="text-xs font-bold text-kraft-700 hover:underline"
                  >
                    View All Products →
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {relatedProducts.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/products/${rel.slug}`}
                      className="group p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-kraft-400 hover:bg-white transition-all text-center flex flex-col justify-between"
                    >
                      <div className="relative h-28 w-full mb-2 bg-white rounded-lg overflow-hidden p-2">
                        <Image
                          src={rel.image}
                          alt={rel.name}
                          fill
                          className="object-contain p-1 group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <span className="text-xs font-bold text-industrial-900 group-hover:text-kraft-700 block line-clamp-2">
                        {rel.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Sticky Enquiry Form & Fast Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            {/* Embedded Dedicated Enquiry Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm">
              <div className="mb-5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-kraft-700 bg-kraft-50 px-2 py-0.5 rounded border border-kraft-200">
                  Direct Enquiry
                </span>
                <h3 className="text-lg font-bold text-industrial-950 mt-2">
                  Get Technical Quote for {product.shortName}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in your dimensions or call our Boisar plant.
                </p>
              </div>

              <EnquiryForm initialProduct={product.name} />
            </div>

            {/* Quick Contact Box */}
            <div className="p-6 rounded-2xl bg-industrial-950 text-white space-y-4">
              <h4 className="font-bold text-sm text-kraft-400 uppercase tracking-wider">
                Direct Plant Contacts
              </h4>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-kraft-400 shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-[10px]">Varun Mundra:</span>
                    <a href="tel:9029443776" className="text-white font-bold hover:underline">
                      +91 90294 43776
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-kraft-400 shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-[10px]">Suresh Mundra:</span>
                    <a href="tel:9321393328" className="text-white font-bold hover:underline">
                      +91 93213 93328
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-kraft-400 shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-[10px]">Factory:</span>
                    <a href="tel:8408926751" className="text-white font-bold hover:underline">
                      +91 84089 26751
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={COMPANY.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-lg bg-eco-600 hover:bg-eco-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        productName={product.name}
      />
    </div>
  );
}
