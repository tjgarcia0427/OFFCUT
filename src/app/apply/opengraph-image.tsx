import { ImageResponse } from "next/og";
import { loadOgFonts } from "../_og/fonts";
import { ogLayout } from "../_og/layout";

export const runtime = "nodejs";
export const alt = "OFFCUT — get paid to make what you actually want to make";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const fonts = await loadOgFonts();

  return new ImageResponse(
    ogLayout({
      theme: "ink",
      eyebrow: "FOR DESIGNERS // APPLY",
      headline: (
        <>
          <span>Make.</span>
          <span style={{ color: "#ff3d00" }}>Get paid.</span>
          <span>Repeat.</span>
        </>
      ),
      subhead:
        "Inviting the first 50 independent streetwear designers. 85% revenue share, escrow on day one, no fees on the first 3 commissions.",
      footer: "JOINOFFCUT.COM/APPLY",
    }),
    { ...size, fonts }
  );
}
