import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const checks = [];

function pass(label, detail = "") {
  checks.push({ label, detail, ok: true });
}

function fail(label, detail = "") {
  checks.push({ label, detail, ok: false });
}

function file(path) {
  return join(root, path);
}

function requireFile(path, label = path) {
  if (existsSync(file(path))) {
    pass(label);
    return true;
  }

  fail(label, `${path} is missing`);
  return false;
}

const requiredRoutes = [
  "src/app/page.tsx",
  "src/app/about/page.tsx",
  "src/app/contact/page.tsx",
  "src/app/work/page.tsx",
  "src/app/insights/page.tsx",
  "src/app/privacy-policy/page.tsx",
  "src/app/terms/page.tsx",
  "src/app/editorial-policy/page.tsx",
  "src/app/robots.ts",
  "src/app/sitemap.ts",
  "src/app/ads.txt/route.ts",
  "src/app/opengraph-image.tsx",
  "src/app/manifest.ts",
];

requiredRoutes.forEach((route) => requireFile(route));

const sequenceDir = file("public/sequences/akshay");
if (existsSync(sequenceDir)) {
  const frames = readdirSync(sequenceDir).filter((name) => /^frame-\d{4}\.svg$/.test(name));
  const totalBytes = frames.reduce((sum, name) => sum + statSync(join(sequenceDir, name)).size, 0);

  if (frames.length >= 96) {
    pass("cinematic frame sequence", `${frames.length} frames, ${(totalBytes / 1024 / 1024).toFixed(1)} MB`);
  } else {
    fail("cinematic frame sequence", `expected at least 96 frames, found ${frames.length}`);
  }

  requireFile("public/sequences/akshay/manifest.json", "cinematic frame manifest");
} else {
  fail("cinematic frame sequence", "public/sequences/akshay is missing");
}

const envExample = file(".env.example");
if (existsSync(envExample)) {
  const env = readFileSync(envExample, "utf8");
  const requiredEnv = [
    "NEXT_PUBLIC_SITE_URL",
    "NEXT_PUBLIC_ADSENSE_ENABLED",
    "NEXT_PUBLIC_ADSENSE_CLIENT",
    "NEXT_PUBLIC_ADSENSE_SLOT_IN_ARTICLE",
    "ADSENSE_PUBLISHER_ID",
    "CONTACT_TO_EMAIL",
    "CONTACT_FROM_EMAIL",
    "RESEND_API_KEY",
  ];

  requiredEnv.forEach((key) => {
    if (env.includes(`${key}=`)) {
      pass(`env template: ${key}`);
    } else {
      fail(`env template: ${key}`, "missing from .env.example");
    }
  });
} else {
  fail("env template", ".env.example is missing");
}

const packageJson = JSON.parse(readFileSync(file("package.json"), "utf8"));
["lint", "build", "generate:sequence"].forEach((script) => {
  if (packageJson.scripts?.[script]) {
    pass(`npm script: ${script}`);
  } else {
    fail(`npm script: ${script}`, "missing from package.json");
  }
});

if (existsSync(file("vercel.json"))) {
  pass("vercel config");
} else {
  fail("vercel config", "vercel.json is missing");
}

const failures = checks.filter((check) => !check.ok);

for (const check of checks) {
  const prefix = check.ok ? "PASS" : "FAIL";
  const suffix = check.detail ? ` - ${check.detail}` : "";
  console.log(`${prefix}: ${check.label}${suffix}`);
}

if (failures.length > 0) {
  console.error(`\n${failures.length} launch readiness check(s) failed.`);
  process.exit(1);
}

console.log("\nLaunch readiness checks passed.");
