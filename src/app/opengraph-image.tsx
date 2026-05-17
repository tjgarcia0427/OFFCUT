import { ImageResponse } from "next/og";
import { loadOgFonts } from "./_og/fonts";
import { ogLayout } from "./_og/layout";

export const runtime = "nodejs";
export const alt = "OFFCUT — commission platform for independent streetwear designers";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const fonts = await loadOgFonts();

  return new ImageResponse(
    ogLayout({
      theme: "paper",
      eyebrow: "OPEN FOR COMMISSIONS // VOL. 001",
      headline: (
        <>
          <span>Stop</span>
          <span style={{ fontWeight: 400, fontStyle: "italic" }}>
            scrolling.
          </span>
          <span>Start</span>
          <span style={{ color: "#ff3d00" }}>briefing.</span>
        </>
      ),
      subhead:
        "Commission platform for independent streetwear designers. Brief a piece. A designer makes it. Once. Yours.",
    }),
    { ...size, fonts }
  );
}
