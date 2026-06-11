"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

type AdUnitProps = {
  slot?: string;
  className?: string;
  minHeight?: number;
};

export function AdUnit({ slot, className = "", minHeight = 180 }: AdUnitProps) {
  const enabled =
    process.env.NEXT_PUBLIC_ADSENSE_ENABLED === "true" &&
    Boolean(process.env.NEXT_PUBLIC_ADSENSE_CLIENT) &&
    Boolean(slot);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    try {
      window.adsbygoogle = window.adsbygoogle ?? [];
      window.adsbygoogle.push({});
    } catch {
      // Ad blockers and preview environments can block the AdSense runtime.
    }
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <aside
      aria-label="Advertisement"
      className={`mx-auto w-full max-w-4xl border-y border-black/10 py-5 dark:border-white/10 ${className}`}
      style={{ minHeight }}
    >
      <p className="mb-3 text-xs uppercase text-neutral-500">Advertisement</p>
      <ins
        className="adsbygoogle block"
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </aside>
  );
}
