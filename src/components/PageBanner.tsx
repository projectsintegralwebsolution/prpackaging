import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageBannerProps {
  title: string;
  subtitle: string;
  breadcrumbs: BreadcrumbItem[];
  bgImage: string;
  tag?: string;
}

export default function PageBanner({
  title,
  subtitle,
  breadcrumbs,
  bgImage,
  tag
}: PageBannerProps) {
  return (
    <div className="relative w-full min-h-[300px] sm:min-h-[360px] flex items-center justify-center bg-industrial-950 overflow-hidden">
      {/* Background Image with Crisp Presentation */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt={title}
          fill
          priority
          className="object-cover object-center opacity-40 brightness-90 filter"
        />
        {/* Dual Industrial Gradient Overlays for High Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-industrial-950/90 via-industrial-950/80 to-industrial-900/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-industrial-950 via-transparent to-transparent opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center sm:text-left">
        {tag && (
          <div className="mb-3 inline-block">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-kraft-500/20 text-kraft-300 border border-kraft-500/30">
              {tag}
            </span>
          </div>
        )}

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 max-w-4xl drop-shadow-sm">
          {title}
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mb-6 leading-relaxed">
          {subtitle}
        </p>

        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-black/40 backdrop-blur-sm border border-white/10 text-xs sm:text-sm text-slate-300"
        >
          <Link
            href="/"
            className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>

          {breadcrumbs.map((crumb, idx) => {
            const isLast = idx === breadcrumbs.length - 1;
            return (
              <React.Fragment key={crumb.label}>
                <ChevronRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                {crumb.href && !isLast ? (
                  <Link
                    href={crumb.href}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-kraft-400 font-semibold" aria-current="page">
                    {crumb.label}
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </div>

      {/* Subtle bottom edge line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-kraft-600 via-kraft-400 to-kraft-600 opacity-60" />
    </div>
  );
}
