/* eslint-disable @next/next/no-img-element */

// 1080×1080 post designs for the launch grid.
// Each is a static React tree consumed by ImageResponse.

const PAPER = "#f4f0e8";
const INK = "#0a0a0a";
const SIGNAL = "#ff3d00";

type PostSlug =
  | "manifesto"
  | "principles"
  | "how-it-works"
  | "pricing"
  | "sample-brief"
  | "founder";

type PostDesign = {
  alt: string;
  render: () => React.ReactElement;
};

const PAD = 80;

function shell(theme: "paper" | "ink", inner: React.ReactNode, eyebrow?: string, footer?: string) {
  const bg = theme === "ink" ? INK : PAPER;
  const fg = theme === "ink" ? PAPER : INK;
  const muted =
    theme === "ink" ? "rgba(244,240,232,0.55)" : "rgba(10,10,10,0.55)";
  const line =
    theme === "ink" ? "rgba(244,240,232,0.20)" : "rgba(10,10,10,0.16)";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        background: bg,
        color: fg,
        padding: PAD,
        fontFamily: "Space Grotesk",
      }}
    >
      {/* Top row: eyebrow + brand */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontFamily: "JetBrains Mono",
          fontSize: 20,
          letterSpacing: 3,
          textTransform: "uppercase",
          color: muted,
        }}
      >
        <span style={{ display: "flex" }}>{eyebrow ?? "§ OFFCUT"}</span>
        <span style={{ display: "flex", color: fg, fontSize: 28, fontWeight: 700 }}>
          OFFCUT<span style={{ color: SIGNAL }}>.</span>
        </span>
      </div>

      {/* Body */}
      <div
        style={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          marginTop: 24,
        }}
      >
        {inner}
      </div>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: `1px solid ${line}`,
          paddingTop: 20,
          marginTop: 24,
          fontFamily: "JetBrains Mono",
          fontSize: 16,
          letterSpacing: 3,
          textTransform: "uppercase",
          color: muted,
        }}
      >
        <span style={{ display: "flex" }}>{footer ?? "ONE BRIEF / ONE DESIGNER / ONE-OF-ONE"}</span>
        <span style={{ display: "flex" }}>JOINOFFCUT.COM</span>
      </div>
    </div>
  );
}

export const DESIGNS: Record<PostSlug, PostDesign> = {
  manifesto: {
    alt: "Malls are out. Online stores sell you the same five hoodies.",
    render: () =>
      shell(
        "ink",
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 88,
            lineHeight: 0.96,
            letterSpacing: -3,
            fontWeight: 700,
          }}
        >
          <span style={{ display: "flex" }}>Malls are out.</span>
          <span style={{ display: "flex" }}>Online stores sell</span>
          <span style={{ display: "flex" }}>you the same five</span>
          <span style={{ display: "flex" }}>hoodies. The mass</span>
          <span style={{ display: "flex" }}>market designs for</span>
          <span style={{ display: "flex" }}>a person who</span>
          <span style={{ display: "flex", color: SIGNAL, fontStyle: "italic", fontWeight: 400 }}>
            doesn&apos;t exist.
          </span>
        </div>,
        "§ MANIFESTO // 001"
      ),
  },

  principles: {
    alt: "No drops. No waitlists. No FOMO. No subscriptions. No middlemen.",
    render: () =>
      shell(
        "paper",
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 132,
            lineHeight: 1.0,
            letterSpacing: -5,
            fontWeight: 700,
          }}
        >
          {[
            "drops.",
            "waitlists.",
            "FOMO.",
            "subscriptions.",
            "middlemen.",
          ].map((word) => (
            <span key={word} style={{ display: "flex", gap: 24 }}>
              <span style={{ display: "flex", color: SIGNAL }}>No</span>
              <span style={{ display: "flex" }}>{word}</span>
            </span>
          ))}
        </div>,
        "§ HOUSE RULES"
      ),
  },

  "how-it-works": {
    alt: "How OFFCUT works in four steps: brief, pitches, pick, made.",
    render: () =>
      shell(
        "ink",
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 32,
            width: "100%",
          }}
        >
          {[
            ["01", "Brief", "You write what you want."],
            ["02", "Pitches", "Designers send moodboards + price."],
            ["03", "Pick", "Choose one. Deposit goes to escrow."],
            ["04", "Made", "They make it. You wear it. Once."],
          ].map(([n, t, b]) => (
            <div
              key={n}
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 28,
                borderTop: "1px solid rgba(244,240,232,0.18)",
                paddingTop: 18,
              }}
            >
              <span
                style={{
                  display: "flex",
                  fontFamily: "JetBrains Mono",
                  fontSize: 28,
                  color: SIGNAL,
                  width: 80,
                }}
              >
                {n}
              </span>
              <span
                style={{
                  display: "flex",
                  fontSize: 78,
                  fontWeight: 700,
                  letterSpacing: -2,
                  width: 360,
                }}
              >
                {t}
              </span>
              <span
                style={{
                  display: "flex",
                  fontSize: 26,
                  color: "rgba(244,240,232,0.72)",
                  flex: 1,
                }}
              >
                {b}
              </span>
            </div>
          ))}
        </div>,
        "§ HOW IT WORKS"
      ),
  },

  pricing: {
    alt: "15% to us. 85% to the designer. 50% deposit in escrow.",
    render: () =>
      shell(
        "paper",
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 48,
            width: "100%",
          }}
        >
          {[
            ["15%", "to us", "Platform fee. No subs, no listing fees."],
            ["85%", "to the designer", "Withdraw whenever. We don't hold it."],
            ["50%", "deposit in escrow", "Released when you approve the piece."],
          ].map(([big, label, sub]) => (
            <div
              key={big}
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 36,
              }}
            >
              <span
                style={{
                  display: "flex",
                  fontSize: 168,
                  fontWeight: 700,
                  letterSpacing: -6,
                  color: INK,
                  lineHeight: 0.9,
                  width: 320,
                }}
              >
                {big.replace("%", "")}
                <span style={{ display: "flex", color: SIGNAL }}>%</span>
              </span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  gap: 4,
                }}
              >
                <span
                  style={{
                    display: "flex",
                    fontSize: 36,
                    fontWeight: 700,
                    letterSpacing: -1,
                  }}
                >
                  {label}
                </span>
                <span style={{ display: "flex", fontSize: 22, color: "rgba(10,10,10,0.55)" }}>
                  {sub}
                </span>
              </div>
            </div>
          ))}
        </div>,
        "§ WHAT IT COSTS"
      ),
  },

  "sample-brief": {
    alt: "Example brief: oversized chore coat in Carhartt-weight raw denim.",
    render: () =>
      shell(
        "ink",
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "JetBrains Mono",
            fontSize: 32,
            lineHeight: 1.35,
            width: "100%",
            color: "rgba(244,240,232,0.92)",
          }}
        >
          <span style={{ display: "flex", color: SIGNAL, marginBottom: 18 }}>
            &gt; BRIEF #117
          </span>
          <span style={{ display: "flex" }}>&gt; Oversized chore coat</span>
          <span style={{ display: "flex" }}>&gt; Carhartt-weight raw denim</span>
          <span style={{ display: "flex" }}>&gt; Boxy fit (Engineered Garments)</span>
          <span style={{ display: "flex" }}>&gt; Patch pockets, hidden placket</span>
          <span style={{ display: "flex" }}>&gt; No branding</span>
          <span style={{ display: "flex" }}>&gt; M with extra room</span>
          <span style={{ display: "flex", marginTop: 12 }}>&gt; $420–650</span>
          <span style={{ display: "flex" }}>&gt; 5 weeks</span>
          <span style={{ display: "flex", marginTop: 12, color: SIGNAL }}>
            &gt; 7 designers pitched.
          </span>
        </div>,
        "§ WHAT A REAL BRIEF LOOKS LIKE"
      ),
  },

  founder: {
    alt: "Founder note from Tristan, builder of OFFCUT.",
    render: () =>
      shell(
        "paper",
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 32,
            maxWidth: 880,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 52,
              lineHeight: 1.18,
              letterSpacing: -1.5,
              fontWeight: 500,
              color: INK,
            }}
          >
            <span style={{ display: "flex" }}>
              I built OFFCUT because I hate shopping in malls
            </span>
            <span style={{ display: "flex" }}>
              and don&apos;t trust online stores. I wanted a place
            </span>
            <span style={{ display: "flex" }}>
              where I could tell someone exactly what I want
            </span>
            <span style={{ display: "flex" }}>
              made — and have them make it.
            </span>
            <span style={{ display: "flex", color: SIGNAL, marginTop: 16 }}>
              Now that exists.
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontFamily: "JetBrains Mono",
              fontSize: 20,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "rgba(10,10,10,0.55)",
            }}
          >
            <span
              style={{
                display: "flex",
                width: 48,
                height: 2,
                background: INK,
              }}
            />
            <span style={{ display: "flex" }}>Tristan, founder</span>
          </div>
        </div>,
        "§ FOUNDER NOTE"
      ),
  },
};

export type { PostSlug };
