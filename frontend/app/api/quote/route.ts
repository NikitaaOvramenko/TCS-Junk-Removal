export const runtime = "nodejs";

type QuotePayload = {
  name?: string;
  lastname?: string;
  email?: string;
  phone?: string;
  street?: string;
  town?: string;
  postal_code?: string;
  description?: string;
  selectedServices?: string[];
  service?: string;
  workType?: string;
  country?: string;
};

function getForwardUrl() {
  // Prefer a fully-qualified endpoint URL.
  const direct = process.env.QUOTE_SUBMIT_URL;
  if (direct) return direct;

  // Or accept a base URL and append the legacy path used by the old (Vite) client.
  const base =
    process.env.QUOTE_BACKEND_URL ||
    process.env.SERVER_URL ||
    process.env.NEXT_PUBLIC_SERVER_URL;

  if (!base) return null;
  return `${base.replace(/\/$/, "")}/api/email/form`;
}

function json(status: number, body: unknown) {
  return Response.json(body, { status });
}

export async function POST(req: Request) {
  let payload: QuotePayload;
  try {
    payload = (await req.json()) as QuotePayload;
  } catch {
    return json(400, { message: "Invalid JSON body." });
  }

  const name = (payload.name || "").trim();
  const lastname = (payload.lastname || "").trim();
  const email = (payload.email || "").trim();
  const phone = (payload.phone || "").trim();
  const selectedServices = payload.selectedServices || [];
  const service = (payload.service || "").trim();

  if (!name || !lastname || !email || !phone) {
    return json(400, { message: "Please fill out name, last name, email, and phone." });
  }

  if (!service && (!Array.isArray(selectedServices) || selectedServices.length === 0)) {
    return json(400, { message: "Please select at least one service type." });
  }

  const forwardUrl = getForwardUrl();
  if (!forwardUrl) {
    return json(500, {
      message:
        "Server is not configured to accept quote submissions yet. Set QUOTE_SUBMIT_URL (full endpoint) or QUOTE_BACKEND_URL (base URL) in your environment.",
    });
  }

  try {
    const upstream = await fetch(forwardUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    const contentType = upstream.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      const upstreamJson = await upstream.json().catch(() => ({}));
      return json(upstream.status, upstreamJson);
    }

    const upstreamText = await upstream.text().catch(() => "");
    if (upstream.ok) {
      return json(200, { ok: true, message: upstreamText || "OK" });
    }

    return json(upstream.status, {
      message: upstreamText || "Upstream quote service returned an error.",
    });
  } catch (err) {
    console.error("Quote forward failed:", err);
    return json(502, {
      message: "Could not reach the quote server. Please try again in a moment.",
    });
  }
}


