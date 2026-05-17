import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rehan Ali | Digital Marketing Specialist",
  description:
    "Certified Digital Marketing Specialist based in Lahore, Pakistan. Expert in Facebook Ads, Shopify, Canva, SEO & social media — serving clients in PK, UK & US.",
  keywords:
    "digital marketing, Facebook ads, Shopify, SEO, Canva, social media, Pakistan, Lahore",
  authors: [{ name: "Rehan Ali" }],
  openGraph: {
    title: "Rehan Ali | Digital Marketing Specialist",
    description:
      "Helping businesses grow online with paid ads, content creation, and e-commerce.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
