-- ============================================================
-- MIGRATION: Add a "promotions" table so you can manage the
-- homepage hero slideshow (banners, deals, featured bikes)
-- from the admin dashboard — no code changes needed to add,
-- edit, reorder, or remove a slide.
--
-- Run this once in: Supabase Dashboard → SQL Editor → New query → Run
-- ============================================================

create table if not exists promotions (
  id bigint generated always as identity primary key,
  title_km text,
  title_en text,
  subtitle_km text,
  subtitle_en text,
  image_url text,
  display_order integer default 0,
  active boolean default true,
  created_at timestamptz default now()
);

alter table promotions enable row level security;

drop policy if exists "Public can view active promotions" on promotions;
drop policy if exists "Authenticated can view all promotions" on promotions;
drop policy if exists "Authenticated can insert promotions" on promotions;
drop policy if exists "Authenticated can update promotions" on promotions;
drop policy if exists "Authenticated can delete promotions" on promotions;

-- Website visitors only ever see active slides
create policy "Public can view active promotions" on promotions
  for select using (active = true);

-- Admin (logged in) sees everything, including inactive/draft slides
create policy "Authenticated can view all promotions" on promotions
  for select to authenticated using (true);

create policy "Authenticated can insert promotions" on promotions
  for insert to authenticated with check (true);

create policy "Authenticated can update promotions" on promotions
  for update to authenticated using (true);

create policy "Authenticated can delete promotions" on promotions
  for delete to authenticated using (true);

-- Seed one starter slide so the carousel isn't empty on first load
insert into promotions (title_km, title_en, subtitle_km, subtitle_en, display_order, active)
values (
  'ម៉ូតូគុណភាព តម្លៃសមរម្យ',
  'Quality Motorcycles, Honest Prices',
  'រកមើលម៉ូតូ Honda ថ្មី និងមួយទឹករបស់យើងទាំងអស់នៅទីនេះ',
  'Browse our new and used Honda motorcycles right here.',
  1,
  true
);
