import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetailClient from "@/components/ProductDetailClient";
import { PRODUCTS } from "@/data/products";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug
  }));
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) {
    return {
      title: "Product Not Found | P.R. Packaging"
    };
  }

  return {
    title: `${product.name} Manufacturer in Boisar, Maharashtra | P.R. Packaging`,
    description: `${product.name} by P.R. Packaging (Estd. 1992, Boisar MIDC). ${product.tagline}. ${product.specifications[0]?.label}: ${product.specifications[0]?.value}. Request a quote today.`,
    openGraph: {
      title: `${product.name} | P.R. Packaging`,
      description: product.overview,
      images: [
        {
          url: product.image,
          alt: `${product.name} - P.R. Packaging`
        }
      ]
    },
    alternates: {
      canonical: `/products/${product.slug}`
    }
  };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = PRODUCTS.filter((p) =>
    product.relatedSlugs?.includes(p.slug)
  );

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: `https://prpackaging.in${product.image}`,
    description: product.overview,
    category: product.category,
    brand: {
      "@type": "Brand",
      name: "P.R. Packaging"
    },
    manufacturer: {
      "@type": "Organization",
      name: "P.R. Packaging",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Plot No. G-134, Opp. Tarapur Transformers, MIDC Boisar",
        addressLocality: "Palghar",
        addressRegion: "Maharashtra",
        postalCode: "401506",
        addressCountry: "IN"
      }
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://prpackaging.in/"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: "https://prpackaging.in/products"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `https://prpackaging.in/products/${product.slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ProductDetailClient
        product={product}
        relatedProducts={relatedProducts}
      />
    </>
  );
}
