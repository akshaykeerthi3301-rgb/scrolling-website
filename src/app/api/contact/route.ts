import { NextResponse } from "next/server";
import { profile } from "@/lib/site";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

function sanitize(value: string) {
  return value.replace(/[<>]/g, "").trim();
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as ContactPayload | null;

  if (!body?.name || !body.email || !body.message) {
    return NextResponse.json({ error: "Please fill every field." }, { status: 400 });
  }

  const name = sanitize(body.name);
  const email = sanitize(body.email);
  const message = sanitize(body.message);

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  if (message.length < 20) {
    return NextResponse.json({ error: "Please add a little more project context." }, { status: 400 });
  }

  const resendKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? profile.email;
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

  if (resendKey) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `Portfolio inquiry from ${name}`,
        text: [`Name: ${name}`, `Email: ${email}`, "", message].join("\n"),
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "The message could not be sent right now. Please email directly instead." },
        { status: 502 },
      );
    }
  }

  return NextResponse.json({
    ok: true,
    message: resendKey ? "Contact request sent." : "Contact request accepted in development mode.",
  });
}
