import { NextRequest, NextResponse } from "next/server";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  company?: unknown;
};

const requests = new Map<string, { count: number; resetAt: number }>();
const windowMs = 60_000;
const maxRequests = 5;

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function getClientKey(request: NextRequest) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "local"
  );
}

function isRateLimited(key: string) {
  const now = Date.now();
  const current = requests.get(key);

  if (!current || current.resetAt <= now) {
    requests.set(key, { count: 1, resetAt: now + windowMs });
    return false;
  }

  current.count += 1;
  return current.count > maxRequests;
}

export async function POST(request: NextRequest) {
  if (isRateLimited(getClientKey(request))) {
    return NextResponse.json(
      { message: "Too many messages. Please try again in a minute." },
      { status: 429 },
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { message: "Invalid message format." },
      { status: 400 },
    );
  }

  const name = clean(payload.name);
  const email = clean(payload.email);
  const message = clean(payload.message);
  const company = clean(payload.company);

  if (company) {
    return NextResponse.json({ message: "Message received." });
  }

  if (name.length < 2 || name.length > 120) {
    return NextResponse.json(
      { message: "Please enter your name." },
      { status: 400 },
    );
  }

  if (!isEmail(email) || email.length > 180) {
    return NextResponse.json(
      { message: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (message.length < 10 || message.length > 2000) {
    return NextResponse.json(
      { message: "Please write a message between 10 and 2000 characters." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || "kochtaziz8@gmail.com";
  const from =
    process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

  if (!apiKey) {
    console.info("Contact form submission received without email provider", {
      email,
      name,
      to,
    });

    return NextResponse.json(
      {
        message:
          "Message received by the site backend. Email delivery still needs RESEND_API_KEY on the server.",
      },
      { status: 202 },
    );
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: email,
      subject: `Portfolio message from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { message: "Message could not be delivered. Please email directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({
    message: "Message sent successfully. Thank you for reaching out.",
  });
}
