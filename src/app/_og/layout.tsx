/* eslint-disable @next/next/no-img-element */

// Shared OG renderer. Returns the JSX tree for ImageResponse.
// Two themes — "paper" (cream) and "ink" (black) — both 1200x630.

type Theme = "paper" | "ink";

type Props = {
  theme: Theme;
  eyebrow: string;
  headline: React.ReactNode;
  subhead: string;
  footer?: string;
};

const PAPER = "#f4f0e8";
const INK = "#0a0a0a";
const SIGNAL = "#ff3d00";
const MUTED_ON_PAPER = "#6b6657";
const MUTED_ON_INK = "rgba(244,240,232,0.6)";

export function ogLayout({
  theme,
  eyebrow,
  headline,
  subhead,
  footer = "JOINOFFCUT.COM",
}: Props) {
  const bg = theme === "paper" ? PAPER : INK;
  const fg = theme === "paper" ? INK : PAPER;
  const muted = theme === "paper" ? MUTED_ON_PAPER : MUTED_ON_INK;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        background: bg,
        color: fg,
        padding: 64,
        fontFamily: "Space Grotesk",
        position: "relative",
      }}
    >
      {/* Top row: eyebrow + brand */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontFamily: "JetBrains Mono",
          fontSize: 16,
          letterSpacing: 3,
          textTransform: "uppercase",
          color: muted,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: SIGNAL,
            }}
          />
          <span>{eyebrow}</span>
        </div>
        <div style={{ display: "flex", color: fg, fontSize: 24, fontWeight: 700 }}>
          OFFCUT<span style={{ color: SIGNAL }}>.</span>
        </div>
      </div>

      {/* Center: headline */}
      <div
        style={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          marginTop: 24,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 132,
            lineHeight: 0.92,
            letterSpacing: -4,
            fontWeight: 700,
          }}
        >
          {headline}
        </div>
      </div>

      {/* Bottom row */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          borderTop: `1px solid ${theme === "paper" ? "rgba(10,10,10,0.16)" : "rgba(244,240,232,0.20)"}`,
          paddingTop: 24,
          marginTop: 24,
        }}
      >
        <div
          style={{
            display: "flex",
            maxWidth: 760,
            fontSize: 22,
            lineHeight: 1.35,
            color: muted,
          }}
        >
          {subhead}
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "JetBrains Mono",
            fontSize: 14,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: muted,
          }}
        >
          {footer}
        </div>
      </div>
    </div>
  );
}
