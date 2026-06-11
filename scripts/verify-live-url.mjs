const baseUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

if (!baseUrl) {
  console.error("Set NEXT_PUBLIC_SITE_URL before running live verification.");
  process.exit(1);
}

const checks = [
  { path: "/", expect: "Akshaykeerthi" },
  { path: "/work", expect: "Selected systems" },
  { path: "/insights", expect: "Notes that make the portfolio" },
  { path: "/privacy-policy", expect: "Privacy Policy" },
  { path: "/editorial-policy", expect: "Editorial and Advertising Policy" },
  { path: "/robots.txt", expect: "sitemap" },
  { path: "/sitemap.xml", expect: "/work/cinematic-portfolio-engine" },
  { path: "/ads.txt", expect: "google.com" },
];

let failures = 0;

for (const check of checks) {
  const url = `${baseUrl}${check.path}`;
  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "akshaykeerthi-launch-verifier/1.0",
      },
    });
    const body = await response.text();
    const ok = response.ok && body.includes(check.expect);
    const status = ok ? "PASS" : "FAIL";

    console.log(`${status}: ${url} (${response.status})`);

    if (!ok) {
      failures += 1;
      console.log(`  Expected response to include: ${check.expect}`);
    }
  } catch (error) {
    failures += 1;
    console.log(`FAIL: ${url}`);
    console.log(`  ${error instanceof Error ? error.message : String(error)}`);
  }
}

if (failures > 0) {
  console.error(`\n${failures} live verification check(s) failed.`);
  process.exit(1);
}

console.log("\nLive verification passed.");
