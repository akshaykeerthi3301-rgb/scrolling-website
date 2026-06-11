import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navItems, profile, socialLinks, trustPages } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.3fr_0.7fr_0.7fr] md:px-8">
        <div>
          <p className="text-lg font-semibold">{profile.name}</p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/58">{profile.summary}</p>
          <p className="mt-6 text-xs text-white/44">
            Built for {profile.domain}. Replace the domain with your live custom domain before AdSense review.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold">Navigate</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/60">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
            {trustPages.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold">Connect</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/60">
            {socialLinks.map((item) => (
              <Link key={item.href} href={item.href} className="inline-flex items-center gap-2 transition hover:text-white">
                {item.label}
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
