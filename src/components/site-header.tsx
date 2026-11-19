"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Mail, Menu, X } from "lucide-react";
import { navItems, profile } from "@/lib/site";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-neutral-950/68 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 text-sm text-white md:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Akshay Keerthi home">
          <span className="grid size-9 place-items-center rounded-sm border border-white/20 bg-white text-sm font-semibold text-neutral-950">
            AK
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-semibold">{profile.name}</span>
            <span className="mt-1 text-xs text-white/55">Works &middot; Case studies &middot; Profile</span>
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-white/68 transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-10 w-10 items-center justify-center rounded-sm border border-white/15 text-white/68 transition hover:border-white/40 hover:text-white sm:inline-flex"
            aria-label="LinkedIn"
          >
            <ExternalLink size={16} aria-hidden="true" />
          </a>
          <Link
            href="/contact"
            className="inline-flex h-10 items-center gap-2 rounded-sm border border-white/15 px-3.5 text-white transition hover:border-white/40 hover:bg-white/10"
          >
            <Mail size={16} aria-hidden="true" />
            <span className="hidden sm:inline">Get in touch</span>
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-white/15 text-white md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-neutral-950/95 px-5 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-2 text-sm text-white/68 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
