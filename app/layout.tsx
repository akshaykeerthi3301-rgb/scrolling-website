import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://akshaykeerthi.vercel.app";
const FULL_NAME = "Akshay Keerthi";

export const metadata: Metadata = {
  // ── Title ──────────────────────────────────────────────────────────────────
  // "Akshay Keerthi" front-loaded so it appears in every browser tab/SERP
  title: {
    default: `${FULL_NAME} — Private Banker, Full-Stack Developer & Builder`,
    template: `%s | ${FULL_NAME}`,
  },

  // ── Description ────────────────────────────────────────────────────────────
  // 155 chars max; name + differentiators + CTA
  description:
    "Akshay Keerthi — IIM Sambalpur MBA, Private Banking Manager at ICICI Bank, and full-stack developer. Shipped FleetSense SaaS, an NSE algorithmic trading bot, and WebCraft AI.",

  // ── Keywords ───────────────────────────────────────────────────────────────
  keywords: [
    "Akshay Keerthi",
    "akshay keerthi portfolio",
    "akshay keerthi developer",
    "akshay keerthi IIM Sambalpur",
    "akshay keerthi ICICI Bank",
    "private banking manager Bangalore",
    "full-stack developer India",
    "MBA developer portfolio",
    "FleetSense",
    "algorithmic trading bot India",
    "WebCraft AI",
    "Next.js developer India",
    "GSAP portfolio",
  ],

  // ── Canonical / author ─────────────────────────────────────────────────────
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  authors: [{ name: FULL_NAME, url: SITE_URL }],
  creator: FULL_NAME,
  publisher: FULL_NAME,

  // ── Open Graph ─────────────────────────────────────────────────────────────
  openGraph: {
    type: "profile",
    firstName: "Akshay",
    lastName: "Keerthi",
    username: "akshaykeerthi",
    title: `${FULL_NAME} — Private Banker & Full-Stack Developer`,
    description:
      "IIM Sambalpur MBA · Private Banking at ICICI Bank · Ships full-stack products — FleetSense, Cross Asset Alpha Bot, WebCraft AI.",
    url: SITE_URL,
    siteName: FULL_NAME,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${FULL_NAME} — Portfolio`,
      },
    ],
    locale: "en_IN",
  },

  // ── Twitter / X ────────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: `${FULL_NAME} — Private Banker & Full-Stack Developer`,
    description:
      "IIM Sambalpur MBA · Private Banking at ICICI · Builds full-stack products. FleetSense, Cross Asset Alpha Bot, WebCraft AI.",
    creator: "@akshaykeerthi",
    images: ["/og-image.png"],
  },

  // ── Robots ─────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Verification ───────────────────────────────────────────────────────────
  // Add your Google Search Console verification token here when prompted
  // verification: { google: "YOUR_TOKEN" },
};

// ── Structured Data ──────────────────────────────────────────────────────────
// Person schema — every field Google uses for Knowledge Panel & SERP enrichment
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: FULL_NAME,
  givenName: "Akshay",
  familyName: "Keerthi",
  url: SITE_URL,
  email: "akshaykeerthi3301@gmail.com",
  jobTitle: "Private Banking Manager & Full-Stack Developer",
  description:
    "Akshay Keerthi is an IIM Sambalpur MBA and Private Banking Manager at ICICI Bank, Bangalore. He also builds full-stack products — including FleetSense (fleet SaaS), a Cross Asset Alpha algorithmic trading bot for NSE derivatives, and WebCraft AI.",
  image: `${SITE_URL}/og-image.png`,
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "IIM Sambalpur",
      url: "https://www.iimsambalpur.ac.in",
      description: "Master of Business Administration, 2023–2025",
    },
    {
      "@type": "EducationalOrganization",
      name: "College of Engineering Muttathara, Kerala",
      description: "B.Tech Computer Engineering, 2017–2021",
    },
  ],
  worksFor: {
    "@type": "Organization",
    name: "ICICI Bank",
    url: "https://www.icicibank.com",
  },
  knowsAbout: [
    "Private Banking",
    "Wealth Management",
    "HNI Portfolio Management",
    "Full-Stack Development",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "Algorithmic Trading",
    "SaaS Development",
    "GSAP Animation",
    "PostgreSQL",
  ],
  nationality: {
    "@type": "Country",
    name: "India",
  },
  sameAs: [
    "https://linkedin.com/in/akshaykeerthi",
    "https://github.com/akshaykeerthi3301-rgb",
    "https://x.com/akshaykeerthi",
  ],
};

// WebSite schema — enables Google Sitelinks & SearchAction
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: FULL_NAME,
  url: SITE_URL,
  description:
    "Personal portfolio of Akshay Keerthi — Private Banker, full-stack developer, and builder.",
  author: { "@id": `${SITE_URL}/#person` },
  inLanguage: "en-IN",
  copyrightYear: 2026,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

// BreadcrumbList — helps Google show rich URL trails in SERP
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Projects", item: `${SITE_URL}/projects` },
    { "@type": "ListItem", position: 3, name: "Blog", item: `${SITE_URL}/blog` },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        {/* Preconnect to Google fonts if added later */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}
