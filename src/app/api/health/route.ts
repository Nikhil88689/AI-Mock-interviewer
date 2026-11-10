export function GET() {
  return Response.json(
    { status: "ok", service: "voxora" },
    { headers: { "Cache-Control": "no-store" } },
  );
}
