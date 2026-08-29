-- ============================================================
-- MIGRATION: Turn the inventory table into a full Vehicle Register,
-- add Monthly Expenses, and lock down what the public website can see.
--
-- Safe to run on your existing project — it only ADDS columns/tables,
-- it does not delete your existing motorcycle rows.
--
-- Run this once in: Supabase Dashboard → SQL Editor → New query → Run
-- ============================================================

-- 1) Extend the motorcycles table with full lifecycle fields
alter table motorcycles add column if not exists status text not null default 'In Stock';
alter table motorcycles add column if not exists color text;
alter table motorcycles add column if not exists engine_number text;
alter table motorcycles add column if not exists chassis_number text;
alter table motorcycles add column if not exists plate_number text;
alter table motorcycles add column if not exists date_bought_in date;
alter table motorcycles add column if not exists purchase_cost numeric default 0;
alter table motorcycles add column if not exists repair_cost numeric default 0;
alter table motorcycles add column if not exists owner_documents text default 'Complete';
alter table motorcycles add column if not exists previous_owner text;
alter table motorcycles add column if not exists date_sold_out date;
alter table motorcycles add column if not exists actual_sale_price numeric;

-- keep old rows sane: treat all existing demo rows as current "In Stock" stock
update motorcycles set status = 'In Stock' where status is null;

-- 2) Monthly Expenses table (internal financial data — never shown publicly)
create table if not exists monthly_expenses (
  id bigint generated always as identity primary key,
  month date not null unique,           -- always the 1st of the month, e.g. 2026-08-01
  rent numeric default 0,
  staff_salaries numeric default 0,
  utilities numeric default 0,
  marketing numeric default 0,
  other numeric default 0,
  created_at timestamptz default now()
);
alter table monthly_expenses enable row level security;

drop policy if exists "Authenticated can view expenses" on monthly_expenses;
drop policy if exists "Authenticated can insert expenses" on monthly_expenses;
drop policy if exists "Authenticated can update expenses" on monthly_expenses;
drop policy if exists "Authenticated can delete expenses" on monthly_expenses;

create policy "Authenticated can view expenses" on monthly_expenses
  for select using (auth.role() = 'authenticated');
create policy "Authenticated can insert expenses" on monthly_expenses
  for insert with check (auth.role() = 'authenticated');
create policy "Authenticated can update expenses" on monthly_expenses
  for update using (auth.role() = 'authenticated');
create policy "Authenticated can delete expenses" on monthly_expenses
  for delete using (auth.role() = 'authenticated');

-- 3) LOCK DOWN the motorcycles table itself.
--    Cost prices, documents, previous owner, etc. should never be
--    readable by anonymous website visitors — only by logged-in admins.
drop policy if exists "Public can view motorcycles" on motorcycles;

create policy "Authenticated can view all motorcycle data" on motorcycles
  for select using (auth.role() = 'authenticated');

-- 4) Create a SAFE public view with only what customers should see,
--    and only for units that are actually in stock.
drop view if exists public_listings;
create view public_listings as
  select id, brand, name, cc, year, color, transmission, fuel, badge, category, image_url, price
  from motorcycles
  where status = 'In Stock';

grant select on public_listings to anon, authenticated;

-- ============================================================
-- Done. Your website (index.html) will now read from `public_listings`
-- instead of `motorcycles` directly — see the updated app.js.
-- Your admin dashboard keeps using the full `motorcycles` table,
-- since it logs in as an authenticated user.
-- ============================================================
