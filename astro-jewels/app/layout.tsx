import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shivdatta Gemstones & Jewellery | Astrology-Based Wedding Jewellery",
  description: "India’s First Astrology-Certified Wedding Jewellery. Kundali-based designs for prosperity, harmoney & love. Certified Gemstones & Dosha Shanti Jewellery.",
  keywords: ["Astrology Jewellery India", "Kundali Based Wedding Jewellery", "Gemstones for Marriage", "Mangal Dosha Shanti Jewellery", "Shivdatta Gemstones"],
};

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${montserrat.variable}`}>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
