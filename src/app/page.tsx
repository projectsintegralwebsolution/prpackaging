import { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "P.R. Packaging | Paper Tubes, Paper Cores & Corrugated Boxes Manufacturer Since 1992",
  description:
    "Manufacturer of Paper Tubes, Paper Cores, Corrugated Sheets, Corrugated Boxes and related paper packaging products established in 1992 in Boisar MIDC, Maharashtra, India.",
  alternates: {
    canonical: "/"
  }
};

export default function HomePage() {
  return <HomeClient />;
}
