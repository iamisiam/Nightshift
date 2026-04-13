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
  title: "2026 Night Shift Nurse Survival Bundle Printable PDF | Shift Scheduler, SBAR Handoff Report, Medication Timeline, Fatigue Tracker, Sleep Recovery Checklist – Digital Download",
  description: "Tired of scattered notes and burnout during 12-hour night shifts in 2026? This hyper-specific printable bundle is designed exclusively for shift-working RNs to stay organized, ensure safe handoffs, track meds, monitor fatigue, and protect your recovery sleep.",
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
      </body>
    </html>
  );
}