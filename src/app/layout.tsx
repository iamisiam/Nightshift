import type { Metadata } from "next";
import { Bebas_Neue, Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "2026 Night Shift Nurse Survival Bundle – 2 PDFs (8 Pages) | Shift Scheduler, SBAR Handoff, Med Timeline, Fatigue Tracker, Sleep Recovery, Self-Care",
  description: "2026 Night Shift Nurse Survival Bundle – 2 PDFs (8 pages total). Shift Scheduler • SBAR Handoff • Med Timeline • Fatigue Tracker • Sleep Recovery • Self-Care. Finally — a complete system built by (and for) 12-hour night shift RNs. Stop piecing together random templates. This bundle gives you everything in one place so you stay organized, protect your license, and actually recover between shifts.",
  keywords: "night shift nurse planner,shift worker checklist,nurse handoff sheet,medication tracker nurses,fatigue tracker printable,sleep recovery nurse,sbar report sheet,2026 nurse planner,rotating shift scheduler,night shift survival kit,rn brain sheet,self care for nurses,digital download nurse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </head>
      <body
        className={`${bebasNeue.variable} ${barlow.variable} ${barlowCondensed.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
