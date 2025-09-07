import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Flash Car | Automotive Services & Products",
  description:
    "Flash Car, under Riyadh Sky, is a Qatar-based automotive company with 30+ years of experience in Dubai and Dammam. We deliver trusted vehicle services, quality products, and expert care worldwide.",
  keywords: [
    "Flash Car",
    "Riyadh Sky",
    "automotive services",
    "car care Qatar",
    "vehicle service Dubai",
    "auto products Dammam",
    "car repair Qatar",
    "global automotive company",
  ],
  authors: [{ name: "Flash Car Team" }],
  openGraph: {
    title: "Flash Car | Redefining Automotive Care",
    description:
      "Flash Car delivers high-quality automotive services and products across Qatar, Dubai, and Dammam with 30+ years of industry trust and innovation.",
    // url: "https://flashcar.com",
    siteName: "Flash Car",
    locale: "en_QA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flash Car | Redefining Automotive Care",
    description:
      "Flash Car, a Qatar-based automotive leader under Riyadh Sky, offers trusted services, innovative products, and certified technicians.",
  },
  robots: {
    index: true,
    follow: true,
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
