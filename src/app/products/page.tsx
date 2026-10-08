import { Metadata } from "next";
import ProductsClient from "@/components/ProductsClient";

export const metadata: Metadata = {
  title: "Industrial Packaging Products | Paper Tubes, Cores & Corrugated Boxes",
  description:
    "Explore P.R. Packaging's complete range of paper tubes, industrial cores, BOPP tape cores, stretch film tubes, textile tubes, corrugated sheets and boxes manufactured in Boisar MIDC.",
  alternates: {
    canonical: "/products"
  }
};

export default function ProductsPage() {
  return <ProductsClient />;
}
