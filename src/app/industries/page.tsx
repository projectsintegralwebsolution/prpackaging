import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Package,
  Layers,
  Sparkles
} from "lucide-react";
import PageBanner from "@/components/PageBanner";
import { INDUSTRIES } from "@/data/industries";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "Industries We Serve | P.R. Packaging",
  description:
    "Packaging solutions designed for demanding industrial applications: Textile, BOPP tape, Stretch film, Bubble wrap, Plastic roll, Aluminium & foil, PVC roll, Incense stick, and general packaging industries.",
  alternates: {
    canonical: "/industries"
  }
};

export default function IndustriesPage() {
  const breadcrumbs = [{ label: "Industries" }];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Page Banner */}
      <PageBanner
        title="Industries We Serve"
        subtitle="Packaging solutions designed for demanding industrial applications across manufacturing sectors."
        breadcrumbs={breadcrumbs}
        bgImage="/images/banners/industries.jpg"
        tag="Industrial Verticals"
      />

      {/* Intro Overview */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-kraft-100 text-kraft-900 border border-kraft-200 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Specialized Manufacturing Focus</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-industrial-950 tracking-tight">
            Tailored Paper Tubes &amp; Packaging Engineered for Your Equipment
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Different winding lines present unique stresses—from high radial compression in stretch film to super-smooth surfaces needed for micro-thin aluminium foils. P.R. Packaging calibrates tube plies, wall thicknesses, and tolerances specifically for your industry.
          </p>
        </div>
      </section>

      {/* 9 Industry Sections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {INDUSTRIES.map((ind, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={ind.id}
                id={ind.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden p-6 sm:p-10 transition-all hover:shadow-card-hover"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
                    isEven ? "" : "lg:grid-flow-dense"
                  }`}
                >
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-5 ${
                      isEven ? "" : "lg:col-start-8"
                    } relative`}
                  >
                    <div className="relative w-full h-72 sm:h-80 bg-slate-100 rounded-xl overflow-hidden border border-slate-200 p-4 flex items-center justify-center">
                      <Image
                        src={ind.image}
                        alt={ind.name}
                        fill
                        className="object-contain p-4 hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* Text Details Column */}
                  <div
                    className={`lg:col-span-7 ${
                      isEven ? "" : "lg:col-start-1"
                    } space-y-5`}
                  >
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-industrial-100 text-industrial-900 border border-industrial-200 text-xs font-bold uppercase tracking-wider">
                      <span>Industry Vertical #{index + 1}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-black text-industrial-950 tracking-tight">
                      {ind.name}
                    </h2>

                    <p className="text-kraft-700 font-semibold text-sm">
                      {ind.tagline}
                    </p>

                    <p className="text-slate-600 text-sm leading-relaxed">
                      {ind.description}
                    </p>

                    {/* Key Technical Requirements */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-industrial-900 mb-2">
                        Key Requirements Solved:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                        {ind.keyRequirements.map((req, rIdx) => (
                          <div key={rIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-kraft-600 shrink-0 mt-0.5" />
                            <span>{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Suitable Products */}
                    <div className="pt-2 border-t border-slate-100">
                      <span className="text-xs font-bold uppercase tracking-wider text-industrial-900 block mb-2">
                        Recommended Products:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {ind.suitableProducts.map((prod) => (
                          <Link
                            key={prod.slug}
                            href={`/products/${prod.slug}`}
                            className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-kraft-100 text-slate-800 hover:text-kraft-800 transition-colors border border-slate-200"
                          >
                            <span>{prod.name}</span>
                            <ArrowRight className="w-3 h-3 text-kraft-600" />
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Client Value Proposition */}
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600">
                      <strong className="text-industrial-900 font-semibold block mb-0.5">
                        The P.R. Packaging Advantage:
                      </strong>
                      <span>{ind.clientValue}</span>
                    </div>

                    <div className="pt-2">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-industrial-900 text-white font-bold text-xs sm:text-sm hover:bg-industrial-800 transition-colors shadow-sm"
                      >
                        <span>Enquire for {ind.name}</span>
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom Conversion Banner */}
      <section className="py-16 bg-industrial-950 text-white border-t border-industrial-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">
              Looking for Custom Dimensions for Your Sector?
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Connect with Varun Mundra or our technical team at Boisar MIDC for sample tubes and custom trial runs.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-7 py-3 rounded-lg bg-kraft-600 hover:bg-kraft-700 text-white font-bold text-sm shrink-0 transition-colors shadow"
          >
            Contact Sales Team
          </Link>
        </div>
      </section>
    </div>
  );
}
