"use client";

import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import BackToTop from "./BackToTop";
import EnquiryModal from "./EnquiryModal";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | undefined>(
    undefined
  );

  const handleOpenQuote = (productName?: string) => {
    setSelectedProduct(productName);
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
    setSelectedProduct(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50 text-slate-900 antialiased selection:bg-kraft-500 selection:text-white">
      <Header onOpenQuoteModal={handleOpenQuote} />
      <main className="flex-grow">{children}</main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
      <EnquiryModal
        isOpen={isQuoteOpen}
        onClose={handleCloseQuote}
        productName={selectedProduct}
      />
    </div>
  );
}
