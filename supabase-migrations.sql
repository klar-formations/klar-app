-- À exécuter dans Supabase : Dashboard > SQL Editor > New query > coller > Run

-- 1) Profils utilisateurs (informations personnelles)
create table if not exists public.profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  first_name text,
  last_name text,
  phone text,
  address text,
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

drop policy if exists "Users can view own profile" on public.profiles;
create policy "Users can view own profile" on public.profiles
  for select using (auth.uid() = user_id);

drop policy if exists "Users can insert own profile" on public.profiles;
create policy "Users can insert own profile" on public.profiles
  for insert with check (auth.uid() = user_id);

drop policy if exists "Users can update own profile" on public.profiles;
create policy "Users can update own profile" on public.profiles
  for update using (auth.uid() = user_id);

-- 2) Avis clients (témoignages)
create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  course_slug text,
  rating smallint not null check (rating between 1 and 5),
  comment text not null,
  status text not null default 'pending' check (status in ('pending','approved','rejected')),
  created_at timestamptz not null default now()
);

alter table public.reviews enable row level security;

-- Seuls les avis approuvés sont lisibles publiquement (pour le carrousel).
-- L'envoi d'un nouvel avis et la modération passent par le serveur (clé service_role),
-- jamais directement depuis le navigateur.
drop policy if exists "Anyone can read approved reviews" on public.reviews;
create policy "Anyone can read approved reviews" on public.reviews
  for select using (status = 'approved');
