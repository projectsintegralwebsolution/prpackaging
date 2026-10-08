import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Headphones,
  Clock,
  RotateCcw,
  Boxes,
  Truck,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageCircle,
  ArrowRight
} from "lucide-react";
import PageBanner from "@/components/PageBanner";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "Customer Service & Inventory Management | P.R. Packaging",
  description:
    "Dedicated support for every step of the process at P.R. Packaging: Consultative support, real-time stock monitoring, just-in-time delivery, and customized inventory solutions.",
  alternates: {
    canonical: "/customer-service"
  }
};

export default function CustomerServicePage() {
  const breadcrumbs = [{ label: "Customer Service" }];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Page Banner */}
      <PageBanner
        title="Customer Service & Inventory Management"
        subtitle="Dedicated support for every step of the process—from product selection to delivery and beyond."
        breadcrumbs={breadcrumbs}
        bgImage="/images/banners/customer-service.jpg"
        tag="Client Care"
      />

      {/* 2. Overview Intro */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-kraft-700 text-xs font-bold uppercase tracking-wider">
              Customer First Approach
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-industrial-950 tracking-tight">
              Dedicated Support for Every Step of the Process
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              At P.R. Packaging, we believe in building strong, long-term relationships with our clients. Our customer service team is here to assist you at every stage, from product selection to delivery and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Three Pillars of Dedicated Customer Service */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h3 className="text-2xl sm:text-3xl font-black text-industrial-950 tracking-tight">
              Service Pillars
            </h3>
            <p className="text-slate-600 text-sm mt-1">
              Providing clear commercial guidance, tracking visibility, and responsive support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-card-hover transition-all">
              <div className="w-12 h-12 rounded-xl bg-kraft-100 text-kraft-700 flex items-center justify-center mb-6">
                <Headphones className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-industrial-900 mb-3">
                Consultative Support
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Our experts work with you to determine the best paper tube solutions for your business. We analyze your machinery chucks, winding speeds, wall tension, and humidity requirements to engineer the optimal tube specification.
              </p>
              <div className="text-xs text-kraft-700 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>Technical size selection guidance</span>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-card-hover transition-all">
              <div className="w-12 h-12 rounded-xl bg-industrial-100 text-industrial-900 flex items-center justify-center mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-industrial-900 mb-3">
                Order Tracking
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Stay informed with real-time updates on your order status, including production scheduling and shipping timelines. With order execution planned within 48 hours, you have constant visibility over batch progress.
              </p>
              <div className="text-xs text-industrial-800 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>48-Hour scheduled execution updates</span>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-card-hover transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6">
                <RotateCcw className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-industrial-900 mb-3">
                After-Sales Support
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                We stand by our products. If you have any concerns or need assistance after delivery, our team is ready to help with on-site inspection, replacement batches, or custom spec modifications for subsequent orders.
              </p>
              <div className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>Guaranteed batch consistency</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Advanced Inventory Management */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-kraft-700 text-xs font-bold uppercase tracking-wider">
                Supply Chain Security
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-industrial-950 tracking-tight leading-tight">
                Efficient Inventory for Seamless Supply
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                At P.R. Packaging, we utilize advanced inventory management systems to ensure that we always have the raw materials and finished products you need. Our streamlined processes allow us to maintain optimal stock levels, preventing delays and ensuring timely deliveries.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-industrial-900 text-sm mb-1 flex items-center gap-2">
                    <Boxes className="w-4 h-4 text-kraft-600" />
                    <span>Real-Time Stock Monitoring</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We track our inventory in real-time to manage resources effectively and meet your demands without unexpected stockouts.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-industrial-900 text-sm mb-1 flex items-center gap-2">
                    <Truck className="w-4 h-4 text-kraft-600" />
                    <span>Just-In-Time (JIT) Delivery</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Our approach minimizes waste and maximizes efficiency, getting your products to you exactly when you need them.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-industrial-900 text-sm mb-1 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-kraft-600" />
                    <span>Customized Stock Solutions</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We work with you to maintain stock levels based on your forecasted needs, so you never face a shortage or excess.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-100 aspect-[4/3]">
              <Image
                src="/images/infrastructure/warehouse.jpg"
                alt="Bhiwandi Central Inventory Management"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Contact Direct Strip */}
      <section className="py-16 bg-industrial-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">
              Speak with a Packaging Consultant Today
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Call Varun Mundra (+91 90294 43776) or Suresh Mundra (+91 93213 93328) for immediate support.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:9029443776"
              className="px-6 py-3 rounded-lg bg-kraft-600 hover:bg-kraft-700 text-white font-bold text-sm transition-colors shadow"
            >
              Call +91 90294 43776
            </a>
            <a
              href={COMPANY.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-lg bg-eco-600 hover:bg-eco-700 text-white font-bold text-sm flex items-center gap-2 transition-colors shadow"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
