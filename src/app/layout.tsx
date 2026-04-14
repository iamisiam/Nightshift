import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NightShift – For Nurses | Night Shift Nurse Survival Bundle",
  description: "NightShift helps nurses stay organized, reduce stress, and get through night shifts without feeling overwhelmed. The complete system for 12-hour night shift RNs.",
  keywords: "night shift nurse planner,shift worker checklist,nurse handoff sheet,medication tracker nurses,fatigue tracker printable,sleep recovery nurse,sbar report sheet,night shift survival kit,rn brain sheet,self care for nurses,digital download nurse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <head>
          <script async src="https://js.stripe.com/v3/buy-button.js"></script>
        </head>
        <body>
          {children}
        </body>
      </html>
    </>
  );
}
