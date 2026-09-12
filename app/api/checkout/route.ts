import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { getCourse } from "@/lib/courses";
import { getPack, getPackCourses, getPackPricing } from "@/lib/packs";

export async function POST(request: NextRequest) {
  const { slug, packSlug } = await request.json();
  const origin = request.headers.get("origin") ?? process.env.NEXT_PUBLIC_SITE_URL!;

  if (packSlug) {
    const pack = getPack(packSlug);
    if (!pack) {
      return NextResponse.json({ error: "Pack introuvable" }, { status: 404 });
    }
    const packCourses = getPackCourses(pack);
    const { discounted } = getPackPricing(pack);

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: `Pack — ${pack.title}`,
              description: packCourses.map((c) => c.shortTitle).join(", "),
            },
            unit_amount: discounted * 100,
          },
          quantity: 1,
        },
      ],
      metadata: { pack_slug: pack.slug, course_slugs: pack.courseSlugs.join(",") },
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
