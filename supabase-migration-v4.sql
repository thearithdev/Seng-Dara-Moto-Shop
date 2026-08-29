-- ============================================================
-- MIGRATION: Add per-motorcycle installment financing terms
-- (down payment + number of months) so the "From $X/mo" price
-- shown on the website reflects real terms you set, not a
-- generic guess.
--
-- Run this once in: Supabase Dashboard → SQL Editor → New query → Run
-- ============================================================

alter table motorcycles add column if not exists installment_down_payment numeric default 0;
alter table motorcycles add column if not exists installment_months integer default 24;

-- Recreate the public view to also expose these two (non-sensitive) fields
drop view if exists public_listings;
create view public_listings as
  select id, brand, name, cc, year, color, transmission, fuel, badge, category, image_url, price,
         installment_down_payment, installment_months
  from motorcycles
  where status = 'In Stock';

grant select on public_listings to anon, authenticated;
