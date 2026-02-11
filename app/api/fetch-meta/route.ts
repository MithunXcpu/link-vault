import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();

    if (!url || typeof url !== "string") {
      return NextResponse.json({ error: "URL required" }, { status: 400 });
    }

    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Accept: "text/html,application/xhtml+xml",
      },
      signal: AbortSignal.timeout(8000),
    });

    const html = await res.text();

    // Extract title
    const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    const ogTitleMatch = html.match(
      /<meta[^>]*property=["']og:title["'][^>]*content=["']([^"']+)["']/i
    );
    const title =
      ogTitleMatch?.[1] || titleMatch?.[1]?.trim().replace(/\s+/g, " ") || "";

    // Extract description
    const ogDescMatch = html.match(
      /<meta[^>]*property=["']og:description["'][^>]*content=["']([^"']+)["']/i
    );
    const metaDescMatch = html.match(
      /<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i
    );
    const description = ogDescMatch?.[1] || metaDescMatch?.[1] || "";

    // Extract OG image
    const ogImageMatch = html.match(
      /<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["']/i
    );
    const image = ogImageMatch?.[1] || "";

    // Extract site name
    const ogSiteMatch = html.match(
      /<meta[^>]*property=["']og:site_name["'][^>]*content=["']([^"']+)["']/i
    );
    const siteName = ogSiteMatch?.[1] || "";

    // Extract keywords
    const keywordsMatch = html.match(
      /<meta[^>]*name=["']keywords["'][^>]*content=["']([^"']+)["']/i
    );
    const keywords = keywordsMatch?.[1] || "";

    return NextResponse.json({
      title,
      description,
      image,
      siteName,
      keywords,
    });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Failed to fetch";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
