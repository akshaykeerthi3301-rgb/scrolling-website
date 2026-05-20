import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akshay Keerthi — Designer & Developer",
  description:
    "Akshay Keerthi is a creative designer and developer building scroll-driven digital experiences, brand identities, and high-performance web products.",
  keywords: [
    "Akshay Keerthi",
    "designer",
    "developer",
    "portfolio",
    "web design",
    "creative agency",
  ],
  authors: [{ name: "Akshay Keerthi" }],
  creator: "Akshay Keerthi",
  metadataBase: new URL("https://akshaykeerthi.vercel.app"),
  openGraph: {
    title: "Akshay Keerthi — Designer & Developer",
    description:
      "Akshay Keerthi builds digital experiences that move people — from brand identity to scroll-driven web products.",
    url: "https://akshaykeerthi.vercel.app",
    siteName: "Akshay Keerthi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshay Keerthi — Designer & Developer",
    description: "Akshay Keerthi builds digital experiences that move people.",
    creator: "@akshaykeerthi",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Akshay Keerthi",
  url: "https://akshaykeerthi.vercel.app",
  jobTitle: "Designer & Developer",
  description:
    "Akshay Keerthi is a creative designer and developer building scroll-driven digital experiences and brand identities.",
  sameAs: [
    "https://twitter.com/akshaykeerthi",
    "https://linkedin.com/in/akshaykeerthi",
    "https://github.com/akshaykeerthi",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
