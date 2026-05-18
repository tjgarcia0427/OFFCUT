import { ImageResponse } from "next/og";
import { loadOgFonts } from "@/app/_og/fonts";
import { DESIGNS, type PostSlug } from "../_designs";

export const runtime = "nodejs";

const SIZE = 1080;

export async function GET(
  _req: Request,
  ctx: { params: Promise<{ slug: string }> }
) {
  const { slug } = await ctx.params;
  const design = DESIGNS[slug as PostSlug];
  if (!design) {
    return new Response(
      `Not found. Valid posts: ${Object.keys(DESIGNS).join(", ")}.`,
      { status: 404 }
    );
  }

  const fonts = await loadOgFonts();

  return new ImageResponse(design.render(), {
    width: SIZE,
    height: SIZE,
    fonts,
    headers: {
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
