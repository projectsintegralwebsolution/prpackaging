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
    slug: product.slug,
  }));
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) {
    return {
      title: "Product Not Found | P.R. Packaging",
    };
  }

  return {
    title: `${product.name} | P.R. Packaging Manufacturer`,
    description: `${product.name} manufactured by P.R. Packaging in Boisar MIDC, Maharashtra. ${product.tagline}. Specifications: ${product.specifications[0]?.label}: ${product.specifications[0]?.value}.`,
    openGraph: {
      title: `${product.name} | P.R. Packaging`,
      description: product.overview,
      images: [
        {
          url: product.image,
          alt: product.name,
        },
      ],
    },
    alternates: {
      canonical: `/products/${product.slug}`,
    },
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

  return (
    <ProductDetailClient
      product={product}
      relatedProducts={relatedProducts}
    />
  );
}
