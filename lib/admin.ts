export function isAdminEmail(email: string | null | undefined): boolean {
  const adminEmail = process.env.ADMIN_EMAIL;
  return !!email && !!adminEmail && email.toLowerCase() === adminEmail.toLowerCase();
}
