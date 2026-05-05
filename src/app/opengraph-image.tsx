import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#faf7f2",
          color: "#1a1814",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ width: "40px", height: "1px", background: "#6b4423" }} />
          <div
            style={{
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#6b6457",
              fontFamily: "Helvetica, Arial, sans-serif",
            }}
          >
            {site.role}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ fontSize: 96, lineHeight: 1.05, letterSpacing: "-0.02em" }}>
            {site.name}
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#6b6457",
              maxWidth: "900px",
              lineHeight: 1.3,
              fontFamily: "Helvetica, Arial, sans-serif",
            }}
          >
            Academic writing, thesis development, and English ↔ Urdu translation.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 22,
            color: "#6b4423",
            fontFamily: "Helvetica, Arial, sans-serif",
          }}
        >
          <div>kainatnaz.com</div>
          <div style={{ fontStyle: "italic", color: "#6b6457" }}>
            Considered words. Rigorous research.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
