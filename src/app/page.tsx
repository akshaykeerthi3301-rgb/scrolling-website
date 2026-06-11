import { CinematicPortfolioExperience } from "@/components/cinematic/cinematic-portfolio-experience";
import { JsonLd } from "@/components/seo/json-ld";
import { getSiteUrl, profile } from "@/lib/site";

export default function Home() {
  const siteUrl = getSiteUrl();

  return (
    <main className="bg-neutral-950 text-white">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          url: siteUrl,
          email: profile.email,
          jobTitle: "Full-stack builder",
          description: profile.summary,
          knowsAbout: ["Next.js", "cinematic web design", "automation", "AI workflows", "portfolio systems"],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: `${profile.name} Portfolio`,
          url: siteUrl,
          description: profile.title,
          publisher: {
            "@type": "Person",
            name: profile.name,
          },
        }}
      />
      <CinematicPortfolioExperience />
    </main>
  );
}
