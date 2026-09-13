import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { isAdminEmail } from "@/lib/admin";

export async function POST(request: NextRequest) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!isAdminEmail(user?.email)) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 403 });
  }

  const { id, status } = await request.json();
  if (!id || !["pending", "approved", "rejected"].includes(status)) {
    return NextResponse.json({ error: "Requête invalide" }, { status: 400 });
  }

  const admin = createAdminClient();
  const { error } = await admin.from("reviews").update({ status }).eq("id", id);

  if (error) {
    return NextResponse.json({ error: "Échec de la mise à jour" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
