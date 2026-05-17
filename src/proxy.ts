import { NextRequest, NextResponse } from "next/server";

// HTTP Basic Auth for /admin/*. Username is "admin", password from env.
// Kept intentionally simple — replace with real auth when the
// admin grows beyond a single set of eyes.
export function proxy(req: NextRequest) {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) {
    return new NextResponse(
      "ADMIN_PASSWORD env var is not set on this deployment.",
      { status: 500 }
    );
  }

  const header = req.headers.get("authorization");
  if (header) {
    const [scheme, encoded] = header.split(" ");
    if (scheme === "Basic" && encoded) {
      const decoded = Buffer.from(encoded, "base64").toString("utf8");
      const idx = decoded.indexOf(":");
      const user = idx === -1 ? decoded : decoded.slice(0, idx);
      const pass = idx === -1 ? "" : decoded.slice(idx + 1);
      if (user === "admin" && pass === password) {
        return NextResponse.next();
      }
    }
  }

  return new NextResponse("Auth required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="OFFCUT admin", charset="UTF-8"',
    },
  });
}

export const config = {
  matcher: ["/admin/:path*"],
};
