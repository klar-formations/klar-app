import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Non connecté" }, { status: 401 });
  }

  const { firstName, lastName, phone, address } = await request.json();

  const { error } = await supabase.from("profiles").upsert(
    {
      user_id: user.id,
      first_name: firstName || null,
      last_name: lastName || null,
      phone: phone || null,
      address: address || null,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "user_id" }
  );

  if (error) {
    return NextResponse.json({ error: "Échec de l'enregistrement" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
