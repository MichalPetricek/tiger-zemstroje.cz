import { NextResponse } from "next/server";
import { checkPassword, createSession, setSessionCookie } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const { password } = await request.json();

    if (!password || typeof password !== "string") {
      return NextResponse.json({ error: "Heslo je povinné" }, { status: 400 });
    }

    if (!checkPassword(password)) {
      return NextResponse.json({ error: "Nesprávné heslo" }, { status: 401 });
    }

    const token = await createSession();
    await setSessionCookie(token);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Chyba serveru" }, { status: 500 });
  }
}
