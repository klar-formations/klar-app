-- Klar — schéma de base de données
-- À exécuter une fois dans Supabase : Dashboard > SQL Editor > New query > coller > Run

create table if not exists public.purchases (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  course_slug text not null,
  stripe_session_id text,
  amount_total integer,
  currency text,
  created_at timestamptz not null default now(),
  unique (user_id, course_slug)
);

alter table public.purchases enable row level security;

-- Un utilisateur connecté ne peut voir que ses propres achats.
create policy "Les utilisateurs voient leurs propres achats"
  on public.purchases for select
  using (auth.uid() = user_id);

-- Aucune policy d'insertion/mise à jour pour les utilisateurs : seule la clé
-- service_role (utilisée uniquement par le webhook Stripe côté serveur) peut
-- écrire dans cette table, ce qui garantit qu'un accès ne peut être créé que
-- par un paiement Stripe confirmé.
