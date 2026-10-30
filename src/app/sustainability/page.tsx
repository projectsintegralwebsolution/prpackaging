import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Leaf,
  Recycle,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Zap,
  ArrowRight,
  Layers,
  HeartHandshake
} from "lucide-react";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Sustainability & Eco-Friendly Packaging | P.R. Packaging",
  description:
    "Responsible paper packaging designed with sustainability in mind. 100% recyclable paper tubes, recycled kraft materials, waste reduction, and energy-efficient manufacturing.",
  alternates: {
    canonical: "/sustainability"
  }
};

export default function SustainabilityPage() {
  const breadcrumbs = [{ label: "Sustainability" }];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Page Banner */}
      <PageBanner
        title="Sustainability & Eco-Friendly Manufacturing"
        subtitle="Responsible paper packaging designed with sustainability in mind."
        breadcrumbs={breadcrumbs}
        bgImage="/images/banners/sustainability.jpg"
        tag="Green Manufacturing"
      />

      {/* 2. Core Commitment Statement */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
                <Leaf className="w-4 h-4 text-emerald-700" />
                <span>Our Environmental Commitment</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-industrial-950 tracking-tight leading-tight">
                Committed to Reducing Environmental Impact Across Every Tube We Make
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                At P.R. Packaging, we are committed to reducing our environmental impact using sustainable materials and processes. Our paper tubes are made from recycled paper and are 100% recyclable, supporting your sustainability goals while providing high-quality packaging solutions.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    100% biodegradable and recyclable cylindrical paper tubes and cores
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    Natural starch-based dextrine powder bonding free from hazardous chemicals
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    Zero-landfill cutting scrap policies with closed-loop paper recycling
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-100 aspect-[4/3]">
              <Image
                src="/images/hero/slide-3.jpg"
                alt="Sustainable Paper Packaging Manufacturing"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Four Core Pillars of Sustainability */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-emerald-700 text-xs font-bold uppercase tracking-wider">
              Sustainable Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-industrial-950 tracking-tight mt-1">
              Responsible Practices Built Into Everyday Operations
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Authentic practices documented in our Boisar MIDC manufacturing operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Recycled Materials */}
            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-card-hover transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-5">
                <Recycle className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-industrial-900 text-lg mb-2">
                Recycled Materials
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                All our tubes are crafted using eco-friendly raw materials, recycled kraft paper, and virgin kraft liners responsibly procured from certified mills.
              </p>
            </div>

            {/* Recyclable Paper Tubes */}
            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-card-hover transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-5">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-industrial-900 text-lg mb-2">
                Recyclable Paper Tubes
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our finished paper tubes, cores, and corrugated cartons enter standard paper recycling streams with zero toxic residues.
              </p>
            </div>

            {/* Waste Reduction */}
            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-card-hover transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-5">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-industrial-900 text-lg mb-2">
                Waste Reduction
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We minimize production waste through automated winding optimization, computerized cut lengths, and trim compaction.
              </p>
            </div>

            {/* Energy Efficiency */}
            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-card-hover transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-5">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-industrial-900 text-lg mb-2">
                Energy-Efficient Plant
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our machinery is engineered with energy-saving features that reduce power consumption and carbon footprints during continuous runs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Natural Dextrine Powder Adhesive */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-kraft-700 text-xs font-bold uppercase tracking-wider">
                Non-Toxic Bonding Formulation
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-industrial-950 tracking-tight leading-tight">
                High-Quality Dextrine Powder Gumming
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Unlike synthetic solvent-based adhesives that complicate recycling, P.R. Packaging utilizes high-quality dextrine powder as the primary bonding adhesive for paper tube layers.
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-kraft-600 shrink-0 mt-0.5" />
                  <span>Starch-derived organic composition that easily dissolves in paper repulping vats</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-kraft-600 shrink-0 mt-0.5" />
                  <span>High solids content imparting exceptional radial rigidity and crush resistance</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-kraft-600 shrink-0 mt-0.5" />
                  <span>Safe for food packaging sleeves, consumer goods, and cosmetic containers</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 p-8 rounded-2xl bg-kraft-50 border border-kraft-200 space-y-4">
              <h3 className="text-lg font-bold text-industrial-900">
                Sustainability Certifications &amp; Green Practices
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We hold certifications demonstrating our commitment to green manufacturing practices. Our production facility in Boisar MIDC adheres to local environmental guidelines for water, energy, and solid waste handling.
              </p>
              <div className="p-4 bg-white rounded-xl border border-kraft-100 flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-emerald-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-industrial-900">
                    Compliant Packaging Partner
                  </h4>
                  <p className="text-xs text-slate-500">
                    Helping B2B corporate brands achieve zero-plastic transit and circular packaging milestones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Sustainable Call to Action */}
      <section className="py-16 bg-emerald-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">
              Switch to 100% Recyclable Industrial Paper Tubes
            </h3>
            <p className="text-emerald-300 text-xs sm:text-sm mt-1 max-w-xl">
              Let us help your supply chain eliminate unnecessary non-biodegradable packaging with custom-engineered paper tubes and corrugated boxes.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-7 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold text-sm shrink-0 transition-colors shadow"
          >
            Enquire for Sustainable Packaging
          </Link>
        </div>
      </section>
    </div>
  );
}
