import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { site } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  title: "Active Path Mental Health | Care That Never Gives Up",
  description:
    "Personalized TMS Therapy and SPRAVATO® for treatment-resistant depression across Oregon and Washington. Book your free consultation or find out if you qualify.",
  icons: {
    icon: "/images/favicon.png",
  },
  keywords: [
    "Active Path Mental Health",
    "TMS Oregon",
    "TMS Washington",
    "SPRAVATO",
    "BrainsWay",
    "NeuroStar",
    "treatment resistant depression",
  ],
  openGraph: {
    title: "Active Path Mental Health | Care That Never Gives Up",
    description:
      "FDA-cleared TMS and SPRAVATO® across Oregon & Washington. Free consultation. Call (971) 396-5996.",
    url: site.website,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#1D2C4C",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href={site.ghl.origin} />
        <link rel="prefetch" href={site.ghl.calendar.src} />
      </head>
      <body className="font-sans">
        {children}
        <Script src={site.ghl.embedScriptSrc} strategy="afterInteractive" />
      </body>
    </html>
  );
}
