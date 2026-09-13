import nodemailer from "nodemailer";
import { getCourse } from "./courses";

/**
 * Sends Marie-Claire a heads-up e-mail when a new review comes in.
 * No-ops silently if GMAIL_USER / GMAIL_APP_PASSWORD aren't configured yet —
 * reviews are still saved either way, this is best-effort.
 */
export async function notifyNewReview({
  name,
  rating,
  comment,
  courseSlug,
}: {
  name: string;
  rating: number;
  comment: string;
  courseSlug?: string | null;
}) {
  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;
  const notifyTo = process.env.NOTIFY_EMAIL || gmailUser;

  if (!gmailUser || !gmailPass || !notifyTo) return;

  const courseTitle = courseSlug ? getCourse(courseSlug)?.shortTitle ?? courseSlug : null;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailUser, pass: gmailPass },
    });

    await transporter.sendMail({
      from: `Klar <${gmailUser}>`,
      to: notifyTo,
      subject: `Nouvel avis (${rating}★) — ${name}`,
      text: [
        `Nom : ${name}`,
        courseTitle ? `Formation : ${courseTitle}` : null,
        `Note : ${rating}/5`,
        "",
        comment,
        "",
        "À valider dans /admin/avis.",
      ]
        .filter(Boolean)
        .join("\n"),
    });
  } catch {
    // Best-effort — never block the review submission on a notification failure.
  }
}
