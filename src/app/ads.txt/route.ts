export function GET() {
  const publisherId = process.env.ADSENSE_PUBLISHER_ID;
  const body = publisherId
    ? `google.com, ${publisherId}, DIRECT, f08c47fec0942fa0\n`
    : "# Set ADSENSE_PUBLISHER_ID=pub-0000000000000000 before requesting AdSense review.\n";

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=300",
    },
  });
}
