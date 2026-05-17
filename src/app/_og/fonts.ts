// Load Google Font files for use in ImageResponse.
// Fetched at request time; cached by the edge after first hit per region.

async function loadGoogleFont(
  family: string,
  weight: number
): Promise<ArrayBuffer> {
  const cssUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(
    family
  )}:wght@${weight}`;
  const css = await fetch(cssUrl, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
    },
  }).then((r) => r.text());

  const match = css.match(
    /src:\s*url\((https:\/\/[^)]+)\)\s*format\('(?:opentype|truetype|woff2?)'\)/
  );
  if (!match) {
    throw new Error(`OG: could not parse font URL for ${family} ${weight}`);
  }
  const res = await fetch(match[1]);
  if (!res.ok) {
    throw new Error(`OG: failed to fetch font ${family} ${weight}`);
  }
  return res.arrayBuffer();
}

export async function loadOgFonts() {
  const [display, displayItalic, mono] = await Promise.all([
    loadGoogleFont("Space Grotesk", 700),
    loadGoogleFont("Space Grotesk", 400),
    loadGoogleFont("JetBrains Mono", 500),
  ]);
  return [
    {
      name: "Space Grotesk",
      data: display,
      weight: 700 as const,
      style: "normal" as const,
    },
    {
      name: "Space Grotesk",
      data: displayItalic,
      weight: 400 as const,
      style: "normal" as const,
    },
    {
      name: "JetBrains Mono",
      data: mono,
      weight: 500 as const,
      style: "normal" as const,
    },
  ];
}
