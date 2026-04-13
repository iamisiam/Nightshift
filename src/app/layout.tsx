import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  title: "2026 Night Shift Nurse Survival Bundle – 8 Printable Pages | Shift Scheduler, SBAR Handoff, Med Timeline, Fatigue Tracker, Sleep Recovery, Self-Care",
  description: "2026 Night Shift Nurse Survival Bundle – 8 Printable Pages. Shift Scheduler • SBAR Handoff • Med Timeline • Fatigue Tracker • Sleep Recovery • Self-Care. Finally — a complete system built by (and for) 12-hour night shift RNs. Stop piecing together random templates. This bundle gives you everything in one place so you stay organized, protect your license, and actually recover between shifts.",
  keywords: "night shift nurse planner,shift worker checklist,nurse handoff sheet,medication tracker nurses,fatigue tracker printable,sleep recovery nurse,sbar report sheet,2026 nurse planner,rotating shift scheduler,night shift survival kit,rn brain sheet,self care for nurses,digital download nurse",
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
        <Analytics />
      </body>
    </html>
  );
}
