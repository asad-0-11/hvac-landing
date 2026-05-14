import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HVACPro Kuwait — AMC Contract Software for Kuwait HVAC Contractors",
  description:
    "The first software built for Kuwait HVAC contractors. Track AMC contracts, dispatch technicians, send Arabic invoices, and renew contracts on autopilot.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} antialiased`}>
      <body className="min-h-screen bg-white">{children}</body>
    </html>
  );
}
