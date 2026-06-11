import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = join(process.cwd(), "public", "sequences", "akshay");
const frameCount = 96;
const width = 1600;
const height = 900;

mkdirSync(outDir, { recursive: true });

function panel(x, y, w, h, fill, stroke, opacity = 1) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="${fill}" stroke="${stroke}" stroke-width="1" opacity="${opacity}"/>`;
}

function line(x1, y1, x2, y2, color, opacity = 1, widthValue = 1) {
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${widthValue}" opacity="${opacity}"/>`;
}

function frame(index) {
  const t = index / (frameCount - 1);
  const sweep = 90 + t * 1240;
  const lift = Math.sin(t * Math.PI) * 54;
  const warmth = Math.round(65 + t * 70);
  const teal = Math.round(110 + Math.sin(t * Math.PI * 2) * 42);
  const amber = `rgb(244, ${warmth + 96}, 110)`;
  const cyan = `rgb(56, ${teal + 55}, ${teal + 74})`;
  const background = `rgb(${8 + t * 10}, ${8 + t * 8}, ${7 + t * 4})`;

  const grid = Array.from({ length: 18 }, (_, i) => {
    const y = 520 + i * 28;
    const spread = i * 45;
    return line(800 - spread, y, 800 + spread, y, "rgba(246,241,232,0.18)", 1, 1);
  }).join("");

  const rays = Array.from({ length: 17 }, (_, i) => {
    const x = 140 + i * 82;
    return line(800, 508, x, 900, "rgba(246,241,232,0.12)", 1, 1);
  }).join("");

  const dots = Array.from({ length: 42 }, (_, i) => {
    const x = (i * 97 + index * 15) % width;
    const y = 110 + ((i * 53 + index * 7) % 520);
    const r = 1 + ((i + index) % 3);
    return `<circle cx="${x}" cy="${y}" r="${r}" fill="rgba(246,241,232,0.34)"/>`;
  }).join("");

  const screens = [
    panel(955, 164 - lift * 0.2, 260, 146, "rgba(10,30,29,0.74)", "rgba(105,226,207,0.45)", 0.95),
    panel(1238, 252 + lift * 0.12, 218, 116, "rgba(38,22,15,0.78)", "rgba(244,190,110,0.42)", 0.95),
    panel(1010, 352 + lift * 0.18, 382, 180, "rgba(14,14,13,0.78)", "rgba(246,241,232,0.2)", 0.94),
  ].join("");

  const codeLines = Array.from({ length: 11 }, (_, i) => {
    const x = 1030 + (i % 3) * 10;
    const y = 382 + i * 13 + lift * 0.18;
    const w = 86 + ((i * 37 + index * 4) % 180);
    return `<rect x="${x}" y="${y}" width="${w}" height="3" rx="1.5" fill="${i % 2 === 0 ? cyan : amber}" opacity="${0.32 + (i % 4) * 0.08}"/>`;
  }).join("");

  const ribbon = `<path d="M 0 ${640 - lift} C ${260 + sweep * 0.12} ${500 - lift}, ${360 + sweep * 0.18} ${760 - lift * 0.4}, 1600 ${550 + lift * 0.15}" fill="none" stroke="${amber}" stroke-width="4" opacity="0.42"/>`;
  const scan = `<rect x="${sweep}" y="0" width="68" height="${height}" fill="rgba(255,255,255,0.08)"/>`;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="${width}" height="${height}" fill="${background}"/>
  <rect x="0" y="0" width="${width}" height="${height}" fill="rgba(0,0,0,0.12)"/>
  ${dots}
  <path d="M0 530 C 270 430, 430 560, 800 500 C 1110 450, 1320 470, 1600 390 L1600 900 L0 900 Z" fill="rgba(16,22,19,0.86)"/>
  ${grid}
  ${rays}
  ${ribbon}
  <rect x="134" y="${270 - lift * 0.25}" width="470" height="308" rx="8" fill="rgba(246,241,232,0.06)" stroke="rgba(246,241,232,0.18)"/>
  <rect x="166" y="${303 - lift * 0.25}" width="168" height="168" rx="84" fill="rgba(244,190,110,0.18)" stroke="rgba(244,190,110,0.38)"/>
  <path d="M 214 ${412 - lift * 0.25} L 286 ${350 - lift * 0.25} L 392 ${448 - lift * 0.25}" fill="none" stroke="${cyan}" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="365" y="${360 - lift * 0.25}" font-family="Arial, sans-serif" font-size="72" font-weight="700" fill="rgba(246,241,232,0.86)">AK</text>
  <text x="365" y="${410 - lift * 0.25}" font-family="Arial, sans-serif" font-size="22" fill="rgba(246,241,232,0.58)">cinematic systems</text>
  ${screens}
  ${codeLines}
  ${scan}
  <rect x="0" y="0" width="${width}" height="${height}" fill="none" stroke="rgba(246,241,232,0.08)" stroke-width="16"/>
</svg>`;
}

for (let index = 0; index < frameCount; index += 1) {
  writeFileSync(join(outDir, `frame-${String(index).padStart(4, "0")}.svg`), frame(index));
}

writeFileSync(
  join(outDir, "manifest.json"),
  JSON.stringify(
    {
      frameCount,
      width,
      height,
      extension: "svg",
      generatedAt: new Date().toISOString(),
      note: "Placeholder cinematic sequence. Replace with WebP/AVIF frames from generated video before final launch.",
    },
    null,
    2,
  ),
);
