import { Metadata } from "next";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Truck,
  ShieldCheck,
  Building
} from "lucide-react";
import PageBanner from "@/components/PageBanner";
import EnquiryForm from "@/components/EnquiryForm";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact Us | P.R. Packaging Boisar MIDC, Palghar",
  description:
    "Connect with P.R. Packaging at Boisar MIDC, Palghar, Maharashtra. Call Varun Mundra (+91 90294 43776) or Suresh Mundra (+91 93213 93328) for paper tubes, cores & corrugated packaging enquiries.",
  alternates: {
    canonical: "/contact"
  }
};

export default function ContactPage() {
  const breadcrumbs = [{ label: "Contact Us" }];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Page Banner */}
      <PageBanner
        title="Contact Us"
        subtitle="Connect with our team for product enquiries and customized manufacturing requirements."
        breadcrumbs={breadcrumbs}
        bgImage="/images/banners/contact.jpg"
        tag="Get in Touch"
      />

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Contact Cards & Details (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-kraft-700 text-xs font-bold uppercase tracking-wider">
                  Direct Factory Access
                </span>
                <h2 className="text-3xl font-black text-industrial-950 tracking-tight mt-1">
                  P.R. Packaging
                </h2>
                <p className="text-slate-600 text-sm mt-2">
                  Reach out directly to our key representatives or visit our manufacturing plant in Boisar MIDC.
                </p>
              </div>

              {/* Manufacturing Facility Card */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-kraft-100 text-kraft-700 flex items-center justify-center shrink-0">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-industrial-900 text-base">
                      Manufacturing Facility
                    </h3>
                    <p className="text-xs text-kraft-700 font-semibold uppercase tracking-wider mt-0.5">
                      P.R. PACKAGING
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      {COMPANY.address.plot} <br />
                      {COMPANY.address.landmark} <br />
                      {COMPANY.address.midc}, {COMPANY.address.district} – {COMPANY.address.pincode} <br />
                      {COMPANY.address.state}, {COMPANY.address.country}
                    </p>
                  </div>
                </div>
              </div>

              {/* Central Warehouse Card */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-industrial-100 text-industrial-900 flex items-center justify-center shrink-0">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-industrial-900 text-base">
                      Transit Warehouse
                    </h3>
                    <p className="text-xs text-industrial-700 font-semibold uppercase tracking-wider mt-0.5">
                      Bhiwandi Logistics Hub
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      Bhiwandi, Maharashtra, India <br />
                      <span className="text-xs text-slate-500">
                        One of India&apos;s largest logistics centers for continuous JIT dispatches across Western and Northern transport corridors.
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Persons Card */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                  <Phone className="w-4 h-4 text-kraft-600" />
                  <h3 className="font-bold text-industrial-900 text-sm uppercase tracking-wider">
                    Key Contact Persons
                  </h3>
                </div>

                <div className="space-y-3.5 text-xs sm:text-sm">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-50">
                    <div>
                      <strong className="text-industrial-900 block font-bold">Varun Mundra</strong>
                      <span className="text-xs text-slate-500">Sales &amp; Business Inquiries</span>
                    </div>
                    <a
                      href="tel:9029443776"
                      className="px-3 py-1 rounded bg-kraft-50 text-kraft-700 font-bold hover:bg-kraft-100 transition-colors"
                    >
                      +91 90294 43776
                    </a>
                  </div>

                  <div className="flex items-center justify-between pb-2 border-b border-slate-50">
                    <div>
                      <strong className="text-industrial-900 block font-bold">Suresh Mundra</strong>
                      <span className="text-xs text-slate-500">Operations &amp; Administration</span>
                    </div>
                    <a
                      href="tel:9321393328"
                      className="px-3 py-1 rounded bg-kraft-50 text-kraft-700 font-bold hover:bg-kraft-100 transition-colors"
                    >
                      +91 93213 93328
                    </a>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <strong className="text-industrial-900 block font-bold">Factory Office</strong>
                      <span className="text-xs text-slate-500">Plant &amp; Dispatch Desk</span>
                    </div>
                    <a
                      href="tel:8408926751"
                      className="px-3 py-1 rounded bg-slate-100 text-slate-800 font-bold hover:bg-slate-200 transition-colors"
                    >
                      +91 84089 26751
                    </a>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-kraft-600" />
                    <span className="text-xs text-slate-500">Email:</span>
                  </div>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-xs sm:text-sm font-bold text-kraft-700 hover:underline"
                  >
                    {COMPANY.email}
                  </a>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="p-6 rounded-2xl bg-emerald-950 text-white flex items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-sm text-emerald-300">
                    Instant WhatsApp Enquiry
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Connect directly with Varun Mundra for quick answers.
                  </p>
                </div>
                <a
                  href={COMPANY.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shrink-0 shadow"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Column: Embedded Enquiry Form (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10">
              <div className="mb-6">
                <span className="text-kraft-700 text-xs font-bold uppercase tracking-wider bg-kraft-50 px-2.5 py-1 rounded border border-kraft-200">
                  Online Technical Enquiry
                </span>
                <h3 className="text-2xl font-black text-industrial-950 tracking-tight mt-2">
                  Send Us Your Specifications
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Specify tube dimensions, wall thickness, paper type, and required quantity. We respond within 24 hours.
                </p>
              </div>

              <EnquiryForm />
            </div>
          </div>

          {/* Google Maps Section */}
          <div className="mt-16 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden p-6 sm:p-8">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-kraft-700 text-xs font-bold uppercase tracking-wider">
                  Location Map
                </span>
                <h3 className="text-xl font-bold text-industrial-900 mt-0.5">
                  Boisar MIDC Plant Location
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Plot G-49, Near Vikram Glass Naka, Boisar MIDC, Palghar – 401501
                </p>
              </div>

              <a
                href="https://maps.google.com/?q=MIDC+Boisar+Palghar+Maharashtra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-kraft-700 hover:underline inline-flex items-center gap-1"
              >
                Open in Google Maps →
              </a>
            </div>

            <div className="relative w-full h-[380px] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
              <iframe
                title="P.R. Packaging Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30046.20847526955!2d72.7300!3d19.8055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71ec50875c02d%3A0x6b8bc228b38eb310!2sBoisar%20MIDC%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter grayscale contrast-[1.05]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
