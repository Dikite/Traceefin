import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/navbar/page";
import Footer from "./components/footer/page";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Traceefin.com Private Limited",
  description:
    "Traceefin provides tailored verification and compliance solutions for banking, fintech, lending, and other industries. With 50+ ready-to-use verification products and 250+ API endpoints, we help businesses streamline KYC, AML, and financial health analysis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        {/* ✅ Open Graph Tags for WhatsApp, Facebook, LinkedIn */}
        <meta property="og:title" content="Traceefin.com Private Limited" />
        <meta
          property="og:description"
          content="Verification and compliance solutions for banking, fintech, and lending industries."
        />
        <meta property="og:image" content="https://traceefin.com/logo.png" />
        <meta property="og:url" content="https://traceefin.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Traceefin" />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Traceefin.com Private Limited" />
        <meta
          name="twitter:description"
          content="Verification and compliance solutions for fintech and financial services."
        />
        <meta name="twitter:image" content="https://traceefin.com/logo.png" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
