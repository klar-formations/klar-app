import { NextRequest, NextResponse } from "next/server";
import { createClient as createAnonClient } from "@supabase/supabase-js";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { createAdminClient } from "@/lib/supabase/admin";

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Signature manquante" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    return NextResponse.json(
      { error: `Signature invalide : ${(err as Error).message}` },
      { status: 400 }
    );
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const email = session.customer_details?.email;
    const courseSlug = session.metadata?.course_slug;
    const packSlug = session.metadata?.pack_slug;
    const packCourseSlugs = session.metadata?.course_slugs;

    const slugsToGrant = packSlug && packCourseSlugs
      ? packCourseSlugs.split(",").filter(Boolean)
      : courseSlug
        ? [courseSlug]
        : [];

    if (!email || slugsToGrant.length === 0) {
      console.error("Webhook: email ou formation(s) manquant(s) sur la session", session.id);
      return NextResponse.json({ received: true });
    }

    const admin = createAdminClient();

    // Resolve the account for this email, creating it silently if it doesn't exist yet.
    // (generateLink never sends an email itself — it only creates/finds the user.)
    const { data: linkData, error: linkError } = await admin.auth.admin.generateLink({
      type: "magiclink",
      email,
    });

    if (linkError || !linkData?.user) {
      console.error("Impossible de résoudre le compte utilisateur :", linkError);
      return NextResponse.json({ error: "user resolution failed" }, { status: 500 });
    }

    const userId = linkData.user.id;

    const { error: purchaseError } = await admin.from("purchases").upsert(
      slugsToGrant.map((slug) => ({
        user_id: userId,
        course_slug: slug,
        stripe_session_id: session.id,
        amount_total: session.amount_total,
        currency: session.currency,
      })),
      { onConflict: "user_id,course_slug" }
    );

    if (purchaseError) {
      console.error("Erreur d'enregistrement de l'achat :", purchaseError);
      return NextResponse.json({ error: "purchase save failed" }, { status: 500 });
    }

    // Actually send the sign-in link, via Supabase's own Magic Link email template.
    const anon = createAnonClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    await anon.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback?next=/mes-formations/${slugsToGrant[0]}`,
      },
    });
  }

  return NextResponse.json({ received: true });
}
