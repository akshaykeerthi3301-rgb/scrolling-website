import { ImageResponse } from "next/og";
import { profile } from "@/lib/site";

export const alt = `${profile.name} cinematic full-stack portfolio`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          color: "#f7f1e8",
          background: "linear-gradient(135deg, #080807 0%, #132321 55%, #5a2c20 100%)",
          fontFamily: "Arial",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 28, opacity: 0.72 }}>{profile.domain}</div>
          <div style={{ border: "1px solid rgba(247,241,232,0.35)", padding: "14px 18px", fontSize: 28 }}>AK</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, fontWeight: 700, lineHeight: 0.95 }}>{profile.name}</div>
          <div style={{ marginTop: 28, maxWidth: 760, fontSize: 34, lineHeight: 1.24, opacity: 0.82 }}>
            Cinematic full-stack portfolio for products, AI workflows, and deployable systems.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
