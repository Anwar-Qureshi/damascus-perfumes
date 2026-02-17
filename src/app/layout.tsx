import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { Navbar } from "@/components/landing/Navbar";
import { LeadCapture } from "@/components/landing/LeadCapture";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Damascus Perfumes | Silk Road Noir",
    template: "%s | Damascus Perfumes",
  },
  description: "Authentic luxury fragrances from Kannauj, India. Roots of Fragrance, Reimagined.",
  keywords: ["perfume", "fragrance", "attar", "oud", "luxury", "damascus", "kannauj", "india", "scent"],
  authors: [{ name: "Damascus Perfumes" }],
  icons: {
    icon: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
  openGraph: {
    title: "Damascus Perfumes | Silk Road Noir",
    description: "Authentic luxury fragrances from Kannauj, India.",
    url: "https://damascusperfumes.com",
    siteName: "Damascus Perfumes",
    images: [
      {
        url: "/bg.jpg",
        width: 1200,
        height: 630,
        alt: "Damascus Perfumes Collection",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${inter.variable} antialiased bg-damasus-black text-white`}
      >
        <Navbar />
        <CartDrawer />
        {children}
        <LeadCapture />
      </body>
    </html>
  );
}
