import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { notifyNewReview } from "@/lib/notify";

export async function POST(request: NextRequest) {
  const { name, courseSlug, rating, comment } = await request.json();

  if (!name || typeof name !== "string" || !comment || typeof comment !== "string") {
    return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
  }
  const numericRating = Number(rating);
  if (!Number.isInteger(numericRating) || numericRating < 1 || numericRating > 5) {
    return NextResponse.json({ error: "Note invalide" }, { status: 400 });
  }

  const admin = createAdminClient();
  const { error } = await admin.from("reviews").insert({
    name: name.trim().slice(0, 100),
    course_slug: courseSlug || null,
    rating: numericRating,
    comment: comment.trim().slice(0, 2000),
    status: "pending",
  });

  if (error) {
    return NextResponse.json({ error: "Échec de l'enregistrement" }, { status: 500 });
  }

  await notifyNewReview({ name, rating: numericRating, comment, courseSlug });

  return NextResponse.json({ ok: true });
}
