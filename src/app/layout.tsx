import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  metadataBase: new URL("https://prpackaging.in"),
  title: {
    default: "P.R. Packaging | Paper Tubes, Paper Cores & Corrugated Boxes Manufacturer Since 1992",
    template: "%s | P.R. Packaging"
  },
  description:
    "P.R. Packaging (Estd. 1992 in Boisar MIDC, Maharashtra) is a premier manufacturer of precision paper tubes, industrial paper cores, corrugated sheets, and corrugated boxes for textiles, BOPP tape, stretch film, foils, and packaging.",
  keywords: [
    "Paper Tubes Manufacturer",
    "Paper Cores Boisar MIDC",
    "Corrugated Boxes Manufacturer Maharashtra",
    "BOPP Tape Cores",
    "Textile Tubes",
    "Stretch Film Paper Tubes",
    "Bubble Wrap Cores",
    "Tissue Paper Cores",
    "DTY POY Yarn Cones",
    "Corrugated Sheets Liners",
    "Incense Stick Agarbatti Tubes",
    "P.R. Packaging Boisar Palghar"
  ],
  authors: [{ name: "P.R. Packaging" }],
  creator: "Integral Web Solution",
  publisher: "P.R. Packaging",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://prpackaging.in",
    title: "P.R. Packaging | Industrial Paper Tubes & Corrugated Packaging Manufacturer",
    description:
      "Premier manufacturer of precision paper tubes, paper cores, corrugated sheets and boxes since 1992 in Boisar MIDC, Maharashtra.",
    siteName: "P.R. Packaging",
    images: [
      {
        url: "/images/hero/slide-1.jpg",
        width: 1200,
        height: 630,
        alt: "P.R. Packaging Manufacturing Unit - Boisar MIDC"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "P.R. Packaging | Paper Tubes & Corrugated Packaging Manufacturer",
    description: "Reliable manufacturer of paper tubes, paper cores & corrugated boxes since 1992 in Maharashtra, India.",
    images: ["/images/hero/slide-1.jpg"]
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaOrganization = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "name": COMPANY.name,
    "legalName": COMPANY.legalName,
    "foundingDate": "1992",
    "url": "https://prpackaging.in",
    "logo": "https://prpackaging.in/images/products/paper-tubes.jpg",
    "description": COMPANY.longDesc,
    "email": COMPANY.email,
    "telephone": "+91-9029443776",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": `${COMPANY.address.plot}, ${COMPANY.address.landmark}, ${COMPANY.address.midc}`,
      "addressLocality": "Boisar, District Palghar",
      "addressRegion": "Maharashtra",
      "postalCode": COMPANY.address.pincode,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "19.8055",
      "longitude": "72.7547"
    },
    "areaServed": "India",
    "knowsAbout": [
      "Paper Tubes Manufacturing",
      "Industrial Paper Cores",
      "Corrugated Boxes",
      "Corrugated Sheets",
      "Sustainable Packaging Solutions"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-9029443776",
        "contactType": "sales",
        "name": "Varun Mundra",
        "availableLanguage": ["English", "Hindi", "Marathi", "Gujarati"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-9321393328",
        "contactType": "customer service",
        "name": "Suresh Mundra"
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrganization) }}
        />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
