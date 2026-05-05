import { ImageResponse } from "next/og";

export const alt = "Dr. Autocare — Mobile Car Valeting Stockport & Greater Manchester";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0f172a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Arial, sans-serif",
          position: "relative",
        }}
      >
        {/* amber top bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 8,
            background: "#f59e0b",
          }}
        />

        {/* logo + name */}
        <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 28 }}>
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: 44,
              background: "#f59e0b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 700,
              color: "#0f172a",
            }}
          >
            DR
          </div>
          <span style={{ fontSize: 56, fontWeight: 700, color: "#ffffff", letterSpacing: "-1px" }}>
            Dr. Autocare
          </span>
        </div>

        {/* tagline */}
        <p
          style={{
            fontSize: 30,
            color: "#94a3b8",
            textAlign: "center",
            margin: "0 100px 16px",
            lineHeight: 1.4,
          }}
        >
          Professional Mobile Car Valeting &amp; Detailing
        </p>

        {/* location pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "#f59e0b22",
            border: "1px solid #f59e0b44",
            borderRadius: 999,
            padding: "10px 28px",
            marginTop: 8,
          }}
        >
          <span style={{ fontSize: 22, color: "#f59e0b", fontWeight: 600 }}>
            Stockport &amp; Greater Manchester
          </span>
        </div>

        {/* domain */}
        <p style={{ fontSize: 18, color: "#475569", marginTop: 32 }}>drautocare.co.uk</p>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
