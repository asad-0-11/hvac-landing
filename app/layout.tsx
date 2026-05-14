import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HVAC AMC Software for Kuwait Contractors | HVACPro Kuwait",
  description:
    "Track AMC contracts, dispatch technicians, send KWD Arabic invoices, and renew contracts on autopilot. The first software built specifically for Kuwait HVAC contractors.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} scroll-smooth`}>
      <body
        className="min-h-screen antialiased"
        style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
