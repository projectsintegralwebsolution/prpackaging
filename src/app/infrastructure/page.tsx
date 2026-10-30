import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Factory,
  Truck,
  ShieldCheck,
  CheckCircle2,
  Users,
  Settings,
  Cpu,
  Zap,
  MapPin,
  Clock,
  Layers,
  ArrowRight
} from "lucide-react";
import PageBanner from "@/components/PageBanner";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "Infrastructure & Machinery | P.R. Packaging Boisar MIDC",
  description:
    "Explore P.R. Packaging's manufacturing unit in Boisar MIDC and warehouse in Bhiwandi. High-speed automated machinery, in-house quality testing, 40+ skilled workforce, and in-house delivery fleet.",
  alternates: {
    canonical: "/infrastructure"
  }
};

export default function InfrastructurePage() {
  const breadcrumbs = [{ label: "Infrastructure" }];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Page Banner */}
      <PageBanner
        title="Infrastructure & Machinery"
        subtitle="Manufacturing capabilities backed by technology, quality control and skilled professionals."
        breadcrumbs={breadcrumbs}
        bgImage="/images/banners/infrastructure.jpg"
        tag="Manufacturing Facilities"
      />

      {/* 2. Facility Overview: Boisar MIDC & Bhiwandi Warehouse */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-kraft-700 text-xs font-bold uppercase tracking-wider">
              Dual Operational Hubs
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-industrial-950 tracking-tight mt-1">
              Manufacturing Facility in Boisar MIDC &amp; Warehouse in Bhiwandi
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              Our manufacturing unit is based in Boisar MIDC, one of the largest industrial areas in India. We also have our dedicated warehouse in Bhiwandi, which is one of the biggest transportation and logistics hubs of India.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Boisar MIDC Facility */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between">
              <div>
                <div className="relative h-64 w-full bg-industrial-900">
                  <Image
                    src="/images/infrastructure/factory.jpg"
                    alt="Boisar MIDC Manufacturing Facility"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded bg-industrial-950/80 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                      Manufacturing Plant
                    </span>
                  </div>
                </div>

                <div className="p-7 space-y-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-kraft-600" />
                    <h3 className="text-xl font-bold text-industrial-900">
                      Boisar MIDC (Palghar District)
                    </h3>
                  </div>

                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide">
                    Plot No. G-49, Near Vikram Glass Naka, Boisar MIDC – 401501
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    Boisar MIDC (Maharashtra Industrial Development Corporation) is a premier industrial zone located in the Palghar district of Maharashtra, India. Its strategic location offers unmatched advantages for high-volume manufacturing:
                  </p>

                  <div className="space-y-2.5 text-xs text-slate-700 pt-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-kraft-600 shrink-0 mt-0.5" />
                      <span><strong>Proximity to Major Cities:</strong> Boisar is approx 90 km from Mumbai, providing easy access to India&apos;s largest financial and consumer market.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-kraft-600 shrink-0 mt-0.5" />
                      <span><strong>Rail &amp; Road Connectivity:</strong> Well connected via Western Line (Boisar railway station) and Mumbai-Ahmedabad highway for smooth transit of raw materials and finished goods.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-kraft-600 shrink-0 mt-0.5" />
                      <span><strong>Access to Ports:</strong> Proximity to JNPT (Jawaharlal Nehru Port Trust) and the upcoming Wadhwan port (planned biggest port in India) streamlines export shipments.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-kraft-600 shrink-0 mt-0.5" />
                      <span><strong>Industrial Ecosystem &amp; Resources:</strong> Embedded in an industrial hub with continuous water, electricity, engineering suppliers, and reliable waste management.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bhiwandi Warehouse */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between">
              <div>
                <div className="relative h-64 w-full bg-industrial-900">
                  <Image
                    src="/images/infrastructure/warehouse.jpg"
                    alt="Bhiwandi Transit Warehouse"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded bg-industrial-950/80 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                      Logistics Hub
                    </span>
                  </div>
                </div>

                <div className="p-7 space-y-4">
                  <div className="flex items-center gap-2">
                    <Truck className="w-5 h-5 text-kraft-600" />
                    <h3 className="text-xl font-bold text-industrial-900">
                      Bhiwandi Transit Warehouse
                    </h3>
                  </div>

                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide">
                    Bhiwandi, Maharashtra • India&apos;s Central Freight Corridor
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    Bhiwandi is widely recognized as one of India&apos;s biggest logistics and transportation epicenters. Our dedicated warehouse facility in Bhiwandi provides critical operational advantages:
                  </p>

                  <div className="space-y-2.5 text-xs text-slate-700 pt-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-kraft-600 shrink-0 mt-0.5" />
                      <span><strong>Central Inventory Buffer:</strong> Holds strategic stock of raw materials, standard tube sizes, and finished packaging to prevent client production bottlenecks.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-kraft-600 shrink-0 mt-0.5" />
                      <span><strong>National Freight Convergence:</strong> Direct tie-ins with interstate logistics networks connecting Maharashtra, Gujarat, Delhi-NCR, and South India.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-kraft-600 shrink-0 mt-0.5" />
                      <span><strong>Just-in-Time Dispatches:</strong> Enables rapid delivery within hours to industrial estates in Thane, Navi Mumbai, and surrounding regions.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Advanced Machinery & Technology */}
      <section className="py-20 bg-industrial-950 text-white border-b border-industrial-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-kraft-400 text-xs font-bold uppercase tracking-wider">
                Machinery &amp; Technology
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                Advanced Paper Tube Machinery
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Our advanced Paper Tube Machinery is designed to meet the growing demands of the paper tube and core industry with precision, efficiency, and durability. Built using cutting-edge technology, our machines ensure high-quality production for a wide range of applications such as packaging, textiles, construction, and consumer goods.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-industrial-900 border border-industrial-800">
                  <div className="flex items-center gap-2.5 text-white font-bold text-sm mb-1">
                    <Zap className="w-4 h-4 text-kraft-400" />
                    <span>High-Speed Production</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Capable of producing paper tubes at high speeds with consistent quality, increasing output and efficiency for volume industrial orders.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-industrial-900 border border-industrial-800">
                  <div className="flex items-center gap-2.5 text-white font-bold text-sm mb-1">
                    <Settings className="w-4 h-4 text-kraft-400" />
                    <span>Customization Options</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Easily adjustable to produce various tube diameters, lengths, and thicknesses according to specific industry needs.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-industrial-900 border border-industrial-800">
                  <div className="flex items-center gap-2.5 text-white font-bold text-sm mb-1">
                    <Cpu className="w-4 h-4 text-kraft-400" />
                    <span>Automated Controls</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Equipped with user-friendly, fully automated control systems for precise operation and minimal manual intervention.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-industrial-900 border border-industrial-800">
                  <div className="flex items-center gap-2.5 text-white font-bold text-sm mb-1">
                    <Zap className="w-4 h-4 text-eco-400" />
                    <span>Energy Efficiency</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Engineered with energy-saving features that reduce operational costs without compromising performance.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-[4/3]">
              <Image
                src="/images/infrastructure/machinery.jpg"
                alt="Paper Tube Machine Operation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Quality Testing Lab */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-[4/3]">
              <Image
                src="/images/infrastructure/quality-testing.jpg"
                alt="In-House Testing of Products"
                fill
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-kraft-700 text-xs font-bold uppercase tracking-wider">
                Rigorous Testing
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-industrial-950 tracking-tight leading-tight">
                In-House Testing &amp; Quality Control System
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                In-house testing of our products with machines and a comprehensive quality control system ensures that every paper tube and core complies with client dimensional and structural tolerances.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <ShieldCheck className="w-5 h-5 text-kraft-600 mb-2" />
                  <h4 className="font-bold text-industrial-900 text-sm mb-1">
                    Crush &amp; Compression
                  </h4>
                  <p className="text-xs text-slate-500">
                    Verifies radial resistance so tubes withstand high-tension winding and heavy roll weight.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <ShieldCheck className="w-5 h-5 text-kraft-600 mb-2" />
                  <h4 className="font-bold text-industrial-900 text-sm mb-1">
                    Calibrated Dimensions
                  </h4>
                  <p className="text-xs text-slate-500">
                    Digital micrometer inspection of inner diameter (0.5&quot; to 4&quot;) and wall thickness (1mm to 20mm).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <ShieldCheck className="w-5 h-5 text-kraft-600 mb-2" />
                  <h4 className="font-bold text-industrial-900 text-sm mb-1">
                    Moisture Control
                  </h4>
                  <p className="text-xs text-slate-500">
                    Monitored curing ensuring tubes maintain straightness without shrinkage or warping.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <ShieldCheck className="w-5 h-5 text-kraft-600 mb-2" />
                  <h4 className="font-bold text-industrial-900 text-sm mb-1">
                    Bond Strength
                  </h4>
                  <p className="text-xs text-slate-500">
                    Dextrine powder adhesive curing tested for multi-ply delamination prevention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Production Capabilities Summary Table */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-kraft-700 text-xs font-bold uppercase tracking-wider">
              Verified Production Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-industrial-950 tracking-tight mt-1">
              Production Capabilities for Paper Tubes &amp; Packaging
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              All metrics grounded in client factory capabilities at Boisar MIDC.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider block">
                  Available Lengths
                </span>
                <span className="text-lg font-bold text-industrial-950 mt-1 block">
                  1 inch to 130 inches
                </span>
                <p className="text-xs text-slate-500 mt-1">
                  Cut rings, shipping lengths, up to 130&quot; continuous logs.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider block">
                  Diameter Sizes
                </span>
                <span className="text-lg font-bold text-industrial-950 mt-1 block">
                  Inner Dia: 0.5&quot; to 4&quot; (15mm–100mm)
                </span>
                <p className="text-xs text-slate-500 mt-1">
                  Outer diameter spectrum: 14mm to 100mm.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider block">
                  Wall Thickness
                </span>
                <span className="text-lg font-bold text-industrial-950 mt-1 block">
                  1 mm to 20 mm
                </span>
                <p className="text-xs text-slate-500 mt-1">
                  Lightweight cores to extra heavy-duty industrial walls.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider block">
                  Paper Used
                </span>
                <span className="text-lg font-bold text-industrial-950 mt-1 block">
                  Kraft paper, virgin kraft liners, white paper
                </span>
                <p className="text-xs text-slate-500 mt-1">
                  Custom colors available as per client choice.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider block">
                  Gumming &amp; Bonding
                </span>
                <span className="text-lg font-bold text-industrial-950 mt-1 block">
                  High-quality dextrine powder
                </span>
                <p className="text-xs text-slate-500 mt-1">
                  Provides high tensile bond strength and eco-friendly recyclability.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider block">
                  In-House Box Sizes
                </span>
                <span className="text-lg font-bold text-industrial-950 mt-1 block">
                  Sizes up to 52 inches
                </span>
                <p className="text-xs text-slate-500 mt-1">
                  In-house corrugated box manufacturing machinery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Skilled Workforce & Logistics & Delivery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Skilled Workforce */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-kraft-100 text-kraft-700 flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-industrial-900">
                Skilled Workforce: 40+ Experienced Workers
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We have a dedicated team of <strong className="text-industrial-900">40+ experienced skilled workers</strong> looking after our manufacturing unit in Boisar MIDC.
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Their hands-on expertise in paper spiral winding, tension tuning, adhesive mixing, slitting, and dimensional inspection ensures zero quality compromises.
              </p>
            </div>

            {/* Logistics & In-House Delivery Fleet */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-industrial-900 text-white flex items-center justify-center">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-industrial-900">
                Delivery &amp; Shipping: In-House Fleet
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Orders are planned and executed in <strong className="text-industrial-900">48 hours</strong> and can be shipped across India in our dedicated in-house fleet of vehicles.
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Direct vehicle dispatches eliminate third-party transshipment delays, protecting paper tubes and corrugated packaging from moisture and transit damage.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-kraft-600 hover:bg-kraft-700 text-white font-bold text-sm transition-all shadow"
            >
              <span>Schedule a Visit to Our Boisar MIDC Facility</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
