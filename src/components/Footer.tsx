import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ExternalLink
} from "lucide-react";
import { COMPANY } from "@/data/company";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-industrial-950 text-slate-300 pt-16 pb-8 border-t border-industrial-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-industrial-800/80">
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-gradient-to-br from-industrial-900 to-industrial-800 border border-kraft-500/40 flex items-center justify-center font-bold text-kraft-400 text-lg">
                PR
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white tracking-tight">
                  P.R. PACKAGING
                </h3>
                <span className="text-[11px] font-semibold text-kraft-400 uppercase tracking-wider block">
                  Established in 1992
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed">
              Leading manufacturer of precision paper tubes, industrial paper cores, corrugated sheets, and corrugated boxes in Boisar MIDC, Maharashtra. Engineered for strength, dimensional accuracy, and 100% recyclability.
            </p>

            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-xs text-eco-400 font-medium">
                <CheckCircle2 className="w-4 h-4 text-eco-500" />
                <span>100% Recyclable Eco-Friendly Tubes</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-kraft-400 font-medium">
                <ShieldCheck className="w-4 h-4 text-kraft-500" />
                <span>In-House Testing & Quality Control</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-kraft-400" />
                <span>48-Hour Order Execution Across India</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5 pb-2 border-b border-industrial-800 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-kraft-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-industrial-600" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-kraft-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-industrial-600" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-kraft-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-industrial-600" />
                  <span>Products</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="hover:text-kraft-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-industrial-600" />
                  <span>Industries</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/infrastructure"
                  className="hover:text-kraft-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-industrial-600" />
                  <span>Infrastructure</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/sustainability"
                  className="hover:text-kraft-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-industrial-600" />
                  <span>Sustainability</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/customer-service"
                  className="hover:text-kraft-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-industrial-600" />
                  <span>Customer Support & JIT</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-kraft-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-industrial-600" />
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Products */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5 pb-2 border-b border-industrial-800 inline-block">
              Our Products
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/products/paper-tubes"
                  className="hover:text-kraft-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-industrial-600" />
                  <span>Paper Tubes &amp; Cores</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products/textile-tubes"
                  className="hover:text-kraft-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-industrial-600" />
                  <span>Textile Tubes &amp; Yarn Cones</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products/bopp-cello-tape-cores"
                  className="hover:text-kraft-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-industrial-600" />
                  <span>BOPP / Cello Tape Cores</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products/stretch-film-paper-tubes"
                  className="hover:text-kraft-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-industrial-600" />
                  <span>Stretch Film &amp; Foil Cores</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products/corrugated-sheets"
                  className="hover:text-kraft-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-industrial-600" />
                  <span>Corrugated Sheets &amp; Liners</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products/corrugated-boxes"
                  className="hover:text-kraft-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-industrial-600" />
                  <span>Corrugated Boxes &amp; Containers</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products/mdf-board-putha"
                  className="hover:text-kraft-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-industrial-600" />
                  <span>MDF &amp; Sundry Board (Putha)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-kraft-400 hover:text-kraft-300 font-bold transition-colors flex items-center gap-1.5 pt-1"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-kraft-400" />
                  <span>View All 26 Products</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Facility */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5 pb-2 border-b border-industrial-800 inline-block">
              Manufacturing & Office
            </h4>
            <div className="space-y-3.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-kraft-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold text-xs">
                    Plant Address:
                  </strong>
                  <span>{COMPANY.address.plot}, {COMPANY.address.landmark}, {COMPANY.address.midc}, {COMPANY.address.district} – {COMPANY.address.pincode}, {COMPANY.address.state}, {COMPANY.address.country}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <MapPin className="w-4 h-4 text-eco-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold text-xs">
                    Warehouse:
                  </strong>
                  <span>Bhiwandi, Maharashtra (Central Logistics Hub)</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-kraft-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold text-xs">Direct Contacts:</strong>
                  <a href="tel:9029443776" className="hover:text-kraft-400 block">
                    Varun Mundra: +91 90294 43776
                  </a>
                  <a href="tel:9321393328" className="hover:text-kraft-400 block">
                    Suresh Mundra: +91 93213 93328
                  </a>
                  <a href="tel:8408926751" className="hover:text-kraft-400 block">
                    Factory: +91 84089 26751
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Mail className="w-4 h-4 text-kraft-400 shrink-0" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="hover:text-kraft-400 transition-colors text-xs"
                >
                  {COMPANY.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Mandatory Developer Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            Copyright &copy; {currentYear} <span className="text-white font-medium">P.R. Packaging</span>. All Rights Reserved.
          </p>

          {/* Mandatory Credit: Developed by Integral Web Solution */}
          <div className="flex items-center gap-2.5 bg-industrial-900/90 py-1.5 px-3 rounded-full border border-industrial-800">
            <span>Developed by</span>
            <a
              href="https://integralwebsolution.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-kraft-400 hover:text-kraft-300 font-bold inline-flex items-center gap-1 transition-colors underline decoration-kraft-600 hover:decoration-kraft-300"
              title="Visit Integral Web Solution"
            >
              <Image
                src="/images/iws-logo.jpg"
                alt="Integral Web Solution"
                width={16}
                height={16}
                className="rounded-full inline-block"
              />
              <span>Integral Web Solution</span>
              <ExternalLink className="w-3 h-3 text-kraft-400 ml-0.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
