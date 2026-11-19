import type { Metadata } from "next";
import { AdSenseScript } from "@/components/ads/adsense-script";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getSiteUrl, profile } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${profile.name} | Works, case studies and profile`,
    template: `%s | ${profile.name}`,
  },
  description: profile.title,
  applicationName: profile.name,
  authors: [{ name: profile.name }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${profile.name} | Works, case studies and profile`,
    description: profile.title,
    url: getSiteUrl(),
    siteName: `${profile.name}`,
    images: ["/opengraph-image"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | Works, case studies and profile`,
    description: profile.title,
    images: ["/opengraph-image"],
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
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full bg-neutral-950 text-neutral-950">
        <SiteHeader />
        {children}
        <SiteFooter />
        <AdSenseScript />
      </body>
    </html>
  );
}
