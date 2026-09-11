import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { getCourse } from "@/lib/courses";

export async function POST(request: NextRequest) {
  const { slug } = await request.json();
  const course = getCourse(slug);

  if (!course) {
    return NextResponse.json({ error: "Formation introuvable" }, { status: 404 });
  }

  const origin = request.headers.get("origin") ?? process.env.NEXT_PUBLIC_SITE_URL!;

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
