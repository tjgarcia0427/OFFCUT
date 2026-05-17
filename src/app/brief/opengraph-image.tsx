import { ImageResponse } from "next/og";
import { loadOgFonts } from "../_og/fonts";
import { ogLayout } from "../_og/layout";

export const runtime = "nodejs";
export const alt = "OFFCUT — brief a piece, get it made by an independent designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const fonts = await loadOgFonts();

  return new ImageResponse(
    ogLayout({
      theme: "paper",
      eyebrow: "BRIEF A PIECE // 5 MIN",
      headline: (
        <>
          <span>Tell a</span>
          <span style={{ fontWeight: 400, fontStyle: "italic" }}>
            designer
          </span>
          <span>what you</span>
          <span style={{ color: "#ff3d00" }}>want made.</span>
        </>
      ),
      subhead:
        "Stop scrolling through five thousand hoodies that don't fit. Brief one designer. Get one-of-one. Escrow holds the deposit.",
      footer: "JOINOFFCUT.COM/BRIEF",
    }),
    { ...size, fonts }
  );
}
