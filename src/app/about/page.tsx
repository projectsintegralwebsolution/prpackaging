import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Users,
  Compass,
  Clock,
  Award,
  Leaf,
  Layers,
  Truck,
  ArrowRight,
  MapPin,
  Sparkles
} from "lucide-react";
import PageBanner from "@/components/PageBanner";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "About Us | P.R. Packaging - Established 1992",
  description:
    "Learn about P.R. Packaging, established in 1992 in Boisar MIDC, Maharashtra. Manufacturer of paper tubes, industrial cores, and corrugated packaging backed by 40+ skilled workers and decades of experience.",
  alternates: {
    canonical: "/about"
  }
};

export default function AboutPage() {
  const breadcrumbs = [{ label: "About Us" }];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Page Banner */}
      <PageBanner
        title="About P.R. Packaging"
        subtitle="Decades of experience in reliable paper packaging manufacturing since 1992."
        breadcrumbs={breadcrumbs}
        bgImage="/images/banners/about.jpg"
        tag="Company Profile"
      />

      {/* 2. Company Overview */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kraft-100 text-kraft-900 border border-kraft-200 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-kraft-700" />
                <span>Established in 1992</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-industrial-950 tracking-tight leading-tight">
                Pioneering Paper Tube &amp; Packaging Solutions
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Established in the year 1992 in Maharashtra, India, <strong className="text-industrial-900">&quot;P.R. Packaging&quot;</strong> is involved as the Manufacturer of the best quality range of <strong className="text-industrial-900">Paper Tube, Carton Box, Paper Roll, Paper Board, Corrugated Sheet, Corrugated Box, etc.</strong>
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                All our products are getting widely acclaimed among our large clientele for their exclusive designs, superior quality, and reliability. Apart from this, our ability to maintain timelines as well as quality in the assortment, providing cost-effective solutions and assurance to make timely shipments of the orders placed by customers have assisted us in positioning our name in the list of top-notch companies in the industry.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-industrial-900 text-sm mb-1">
                    Precision Tube Range
                  </h4>
                  <p className="text-xs text-slate-500">
                    Inner diameters from 0.5&quot; to 4&quot; (14mm–100mm) and custom lengths from 1&quot; to 130 inches.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-industrial-900 text-sm mb-1">
                    In-House Corrugated Boxes
                  </h4>
                  <p className="text-xs text-slate-500">
                    Comprehensive in-house manufacturing process capable of producing boxes up to 52 inches.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-industrial-900 aspect-[4/3]">
                <Image
                  src="/images/products/paper-tubes.jpg"
                  alt="Paper Tubes Manufactured by P.R. Packaging"
                  fill
                  className="object-contain p-4 bg-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Journey Since 1992 */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-kraft-700 text-xs font-bold uppercase tracking-wider">
              Our Journey Since 1992
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-industrial-950 tracking-tight mt-1">
              Three Decades of Engineering Paper Tubes &amp; Cores
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Founded over three decades ago, P.R. Packaging began with a commitment to providing dependable, precision-wound paper tubes to regional industrial clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm relative">
              <div className="text-4xl font-extrabold text-kraft-600 font-heading mb-3">
                1992
              </div>
              <h3 className="font-bold text-industrial-900 text-lg mb-2">
                Establishment in Maharashtra
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                P.R. Packaging was established in Maharashtra to serve Indian industries requiring high-quality paper packaging, tubes, and corrugated boxes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm relative">
              <div className="text-4xl font-extrabold text-industrial-900 font-heading mb-3">
                Boisar MIDC
              </div>
              <h3 className="font-bold text-industrial-900 text-lg mb-2">
                Strategic Manufacturing Plant
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Positioned in Boisar MIDC (Palghar district) with proximity to Mumbai, Western railway routes, and major ports for rapid supply chain access.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm relative">
              <div className="text-4xl font-extrabold text-eco-600 font-heading mb-3">
                48 Hours
              </div>
              <h3 className="font-bold text-industrial-900 text-lg mb-2">
                Execution &amp; In-House Fleet
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Expanded logistics with our Bhiwandi warehouse hub and dedicated vehicle fleet, enabling 48-hour order planning and execution across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Manufacturing Expertise & Machinery */}
      <section className="py-20 bg-industrial-950 text-white border-b border-industrial-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-kraft-400 text-xs font-bold uppercase tracking-wider">
                Manufacturing Expertise
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                Advanced Paper Tube Machinery Built for Demanding Applications
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Our advanced Paper Tube Machinery is designed to meet the growing demands of the paper tube and core industry with precision, efficiency, and durability. Built using cutting-edge technology, our machines ensure high-quality production for packaging, textiles, construction, and consumer goods.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-kraft-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-semibold text-sm block">High-Speed Production:</strong>
                    <span className="text-xs text-slate-400">Capable of producing paper tubes at high speeds with consistent quality, increasing output and efficiency.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-kraft-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-semibold text-sm block">Customization Options:</strong>
                    <span className="text-xs text-slate-400">Easily adjustable to produce various tube diameters, lengths, and thicknesses according to specific industry needs.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-kraft-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-semibold text-sm block">Automated Controls:</strong>
                    <span className="text-xs text-slate-400">Equipped with user-friendly, fully automated control systems for precise operation and minimal manual intervention.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-[4/3]">
              <Image
                src="/images/infrastructure/machinery.jpg"
                alt="Paper Tube Machinery at P.R. Packaging Boisar"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Team & Workforce */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-[4/3]">
              <Image
                src="/images/infrastructure/factory.jpg"
                alt="P.R. Packaging Skilled Manufacturing Team"
                fill
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-industrial-100 text-industrial-900 border border-industrial-200 text-xs font-bold uppercase tracking-wider">
                <Users className="w-4 h-4 text-industrial-700" />
                <span>40+ Skilled Workers</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-industrial-950 tracking-tight leading-tight">
                Our Team of Qualified &amp; Trained Professionals
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                At P.R. Packaging, we have a dedicated team of <strong className="text-industrial-900">40+ experienced skilled workers</strong> looking after our manufacturing unit.
              </p>

              <p className="text-slate-600 text-sm leading-relaxed">
                Our staff includes seasoned machine operators, winding specialists, cutting technicians, quality controllers, and logistics coordinators. Every team member undergoes continuous training on automated machinery operation, safety procedures, and dimensional tolerance standards.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <span className="text-3xl font-extrabold text-industrial-900 font-heading block">
                    40+
                  </span>
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wide mt-1 block">
                    Skilled Workers
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <span className="text-3xl font-extrabold text-kraft-600 font-heading block">
                    100%
                  </span>
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wide mt-1 block">
                    In-House Operation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Quality Commitment */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-kraft-700 text-xs font-bold uppercase tracking-wider">
                Quality Commitment
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-industrial-950 tracking-tight">
                In-House Testing &amp; Strict Quality Control System
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Testing of our products is performed in-house using dedicated testing machines and a stringent quality control system.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Before any batch is cleared for dispatch, our quality specialists inspect radial crush resistance, moisture content, inner and outer diameter tolerances, wall thickness uniformity, and straightness to ensure complete satisfaction on high-speed customer winding machines.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <ShieldCheck className="w-5 h-5 text-kraft-600 shrink-0" />
                  <span>Radial crush and compression strength evaluation</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <ShieldCheck className="w-5 h-5 text-kraft-600 shrink-0" />
                  <span>Precise digital caliper measurement of ID and wall thickness (1mm–20mm)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <ShieldCheck className="w-5 h-5 text-kraft-600 shrink-0" />
                  <span>High-grade dextrine powder bond verification</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <ShieldCheck className="w-5 h-5 text-kraft-600 shrink-0" />
                  <span>Smooth burr-free square cut inspection</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-[4/3]">
              <Image
                src="/images/infrastructure/quality-testing.jpg"
                alt="Quality Testing Lab at P.R. Packaging"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Sustainability Commitment */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-200 text-xs font-bold uppercase tracking-wider mb-2">
              <Leaf className="w-4 h-4 text-emerald-700" />
              <span>Sustainable Manufacturing</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-industrial-950 tracking-tight">
              Eco-Friendly Manufacturing Practices
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              We are committed to reducing our environmental impact using sustainable materials and processes. Our paper tubes are made from recycled paper and are 100% recyclable, supporting your sustainability goals while providing high-quality packaging solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-industrial-900 text-base mb-2">
                Recycled Materials
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                All our tubes are crafted using eco-friendly raw materials, recycled kraft paper, and virgin kraft liners.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-industrial-900 text-base mb-2">
                Waste Reduction
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We minimize production waste through efficient automated manufacturing processes and circular material reuse.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-industrial-900 text-base mb-2">
                Sustainability Certifications
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We hold certifications demonstrating our commitment to green manufacturing practices and environmental responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Why Choose Us (Icon Cards) */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-industrial-950 tracking-tight">
              Why Us?
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Core pillars that define P.R. Packaging as a preferred packaging partner since 1992.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY.whyChooseUs.map((factor) => (
              <div
                key={factor.title}
                className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-kraft-400 transition-colors"
              >
                <h3 className="font-bold text-industrial-900 text-base mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-kraft-600 shrink-0" />
                  <span>{factor.title}</span>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {factor.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 p-8 rounded-2xl bg-industrial-950 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold">
                Need Customized Packaging Solutions for Your Plant?
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                Consult with our Boisar MIDC engineering team for size specifications and sample tubes.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg bg-kraft-600 hover:bg-kraft-700 text-white font-bold text-sm shrink-0 transition-colors shadow"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
