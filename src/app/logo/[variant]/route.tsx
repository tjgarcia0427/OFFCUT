import { ImageResponse } from "next/og";
import { loadOgFonts } from "@/app/_og/fonts";

export const runtime = "nodejs";

// 1080x1080 brand mark, optimized to look good when IG/X/etc. crop a
// profile photo to a circle. All content sits inside the inscribed circle.
// Variants:
//   /logo/paper  — cream background, ink text, orange period
//   /logo/ink    — ink background, cream text, orange period

const PAPER = "#f4f0e8";
const INK = "#0a0a0a";
const SIGNAL = "#ff3d00";
const SIZE = 1080;

export async function GET(
  _req: Request,
  ctx: { params: Promise<{ variant: string }> }
) {
  const { variant } = await ctx.params;
  if (variant !== "paper" && variant !== "ink") {
    return new Response("Not found. Use /logo/paper or /logo/ink.", {
      status: 404,
    });
  }

  const isInk = variant === "ink";
  const bg = isInk ? INK : PAPER;
  const fg = isInk ? PAPER : INK;

  const fonts = await loadOgFonts();

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: bg,
          color: fg,
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Space Grotesk",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 320,
            lineHeight: 0.84,
            letterSpacing: -8,
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>OFF</div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            CUT<span style={{ color: SIGNAL }}>.</span>
          </div>
        </div>
      </div>
    ),
    {
      width: SIZE,
      height: SIZE,
      fonts,
      headers: {
        "Cache-Control": "public, max-age=86400, s-maxage=86400",
      },
    }
  );
}
