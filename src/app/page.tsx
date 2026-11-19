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
                    description: profile.summary,
          alumniOf: [
            {
              "@type": "CollegeOrUniversity",
              name: "IIM Sambalpur",
            },
            {
              "@type": "CollegeOrUniversity",
              name: "College of Engineering Muttathara",
            },
          ],
          knowsAbout: [
            "AI product development",
            "LLM evaluation",
            "Private banking",
            "Employee relations",
            "Marketplace vendor management",
            "Go-to-market strategy",
            "Next.js",
            "Python",
          ],
          sameAs: [profile.linkedin, profile.github],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: profile.name,
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
