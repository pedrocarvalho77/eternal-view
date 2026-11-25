import { renderPage } from "@/lib/page";

// Re-generated at most once an hour, like the repo list it shows.
export const revalidate = 3600;

export async function GET() {
  return new Response(await renderPage(), { headers: { "content-type": "text/html; charset=utf-8" } });
}
