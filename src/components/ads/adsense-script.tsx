import Script from "next/script";

export function AdSenseScript() {
  const enabled = process.env.NEXT_PUBLIC_ADSENSE_ENABLED === "true";
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

  if (!enabled || !client) {
    return null;
  }

  return (
    <Script
      async
      id="google-adsense"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`}
      strategy="afterInteractive"
      crossOrigin="anonymous"
    />
  );
}
