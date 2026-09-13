import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { getCourse } from "@/lib/courses";
import { getPack, getPackPricingFor } from "@/lib/packs";
import { createClient } from "@/lib/supabase/server";
import { getUserPurchasedSlugs } from "@/lib/purchases";

export async function POST(request: NextRequest) {
  const { slug, packSlug } = await request.json();
  const origin = request.headers.get("origin") ?? process.env.NEXT_PUBLIC_SITE_URL!;

  if (packSlug) {
    const pack = getPack(packSlug);
    if (!pack) {
      return NextResponse.json({ error: "Pack introuvable" }, { status: 404 });
    }

    // Ownership is always re-derived server-side from the authenticated session
    // (if any) — never trust a client-supplied list of already-owned courses.
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const ownedSlugs = user ? await getUserPurchasedSlugs(supabase, user.id) : [];

    const { fullyOwned, remainingSlugs, discounted } = getPackPricingFor(pack, ownedSlugs);

    if (fullyOwned) {
      return NextResponse.json(
        { error: "Tu possèdes déjà toutes les formations de ce pack." },
        { status: 400 }
      );
    }

    const remainingCourses = remainingSlugs
      .map((s) => getCourse(s))
      .filter((c): c is NonNullable<typeof c> => !!c);

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: `Pack — ${pack.title}`,
              description: remainingCourses.map((c) => c.shortTitle).join(", "),
            },
            unit_amount: discounted * 100,
          },
          quantity: 1,
        },
      ],
      metadata: { pack_slug: pack.slug, course_slugs: remainingSlugs.join(",") },
      success_url: `${origin}/merci?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/parcours`,
    });

    return NextResponse.json({ url: session.url });
  }

  const course = getCourse(slug);

  if (!course) {
    return NextResponse.json({ error: "Formation introuvable" }, { status: 404 });
  }

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "eur",
          product_data: { name: course.title },
          unit_amount: course.priceEuros * 100,
        },
        quantity: 1,
      },
    ],
    metadata: { course_slug: course.slug },
    success_url: `${origin}/merci?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/formations/${course.slug}`,
  });

  return NextResponse.json({ url: session.url });
}
