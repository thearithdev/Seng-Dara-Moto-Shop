-- ============================================================
-- Run this once in your Supabase project's SQL Editor
-- (Dashboard → SQL Editor → New query → paste → Run)
-- ============================================================

create table if not exists motorcycles (
  id bigint generated always as identity primary key,
  brand text not null,
  name text not null,
  cc integer not null,
  price numeric not null,
  year integer not null,
  transmission text not null default 'Manual',   -- 'Manual' or 'Automatic'
  fuel text not null default 'Petrol',            -- 'Petrol' or 'Electric'
  badge text,                                     -- e.g. 'NEW', or leave blank
  category text not null default 'new',           -- 'new' or 'used'
  image_url text,                                 -- filled automatically on upload
  created_at timestamptz default now()
);

-- Turn on Row Level Security
alter table motorcycles enable row level security;

-- Anyone (your website visitors) can VIEW the inventory
create policy "Public can view motorcycles"
  on motorcycles for select
  using (true);

-- Only logged-in users (you, via the admin page) can add/edit/delete
create policy "Authenticated users can insert"
  on motorcycles for insert
  with check (auth.role() = 'authenticated');

create policy "Authenticated users can update"
  on motorcycles for update
  using (auth.role() = 'authenticated');

create policy "Authenticated users can delete"
  on motorcycles for delete
  using (auth.role() = 'authenticated');

-- ============================================================
-- Seed data: your current Cambodia-focused Honda-heavy catalog
-- ============================================================
insert into motorcycles (brand, name, cc, price, year, transmission, fuel, badge, category) values
('Honda','Honda Dream 125i',125,1850,2024,'Manual','Petrol','NEW','new'),
('Honda','Honda Wave 125i',125,1750,2024,'Manual','Petrol','NEW','new'),
('Honda','Honda Click 125i',125,2100,2024,'Automatic','Petrol','NEW','new'),
('Honda','Honda Scoopy i',110,1950,2024,'Automatic','Petrol',null,'new'),
('Honda','Honda Future 125',125,1900,2023,'Manual','Petrol',null,'new'),
('Honda','Honda Beat 110',110,1600,2023,'Automatic','Petrol',null,'new'),
('Honda','Honda Air Blade 125',125,2450,2024,'Automatic','Petrol',null,'new'),
('Honda','Honda Zoomer-X',110,2000,2023,'Automatic','Petrol',null,'new'),
('Honda','Honda Vario 125',125,2200,2024,'Automatic','Petrol',null,'new'),
('Honda','Honda Dream 125i',125,1400,2021,'Manual','Petrol',null,'used'),
('Honda','Honda Wave 125i',125,1250,2020,'Manual','Petrol',null,'used'),
('Honda','Honda Click 125i',125,1550,2021,'Automatic','Petrol',null,'used'),
('Honda','Honda Scoopy i',110,1350,2020,'Automatic','Petrol',null,'used'),
('Honda','Honda Future 125',125,1200,2019,'Manual','Petrol',null,'used'),
('Honda','Honda Beat 110',110,1050,2019,'Automatic','Petrol',null,'used'),
('Honda','Honda Wave 110 Alpha',110,950,2018,'Manual','Petrol',null,'used'),
('Honda','Honda Winner X',150,2650,2024,'Manual','Petrol',null,'new'),
('Honda','Honda CBR150R',150,3400,2023,'Manual','Petrol',null,'new'),
('Honda','Honda ADV160',157,3900,2024,'Automatic','Petrol',null,'new'),
('Honda','Honda PCX160',157,3300,2023,'Automatic','Petrol',null,'new'),
('Honda','Honda CB150R',149,3100,2022,'Manual','Petrol',null,'used'),
('Honda','Honda CRF150L',149,3600,2023,'Manual','Petrol',null,'new'),
('Yamaha','Yamaha Finn 115',115,1500,2023,'Manual','Petrol',null,'new'),
('Yamaha','Yamaha NMAX 155',155,3600,2023,'Automatic','Petrol',null,'new'),
('Yamaha','Yamaha Aerox 155',155,3400,2022,'Automatic','Petrol',null,'used'),
('Yamaha','Yamaha MT-15',155,4850,2024,'Manual','Petrol','NEW','new'),
('Yamaha','Yamaha Sniper 125',125,2200,2022,'Manual','Petrol',null,'used'),
('Kawasaki','Kawasaki Z125 Pro',125,2900,2023,'Manual','Petrol',null,'new'),
('Kawasaki','Kawasaki KLX150',150,3300,2023,'Manual','Petrol',null,'new'),
('Kawasaki','Kawasaki Ninja 250',249,5600,2022,'Manual','Petrol',null,'used'),
('Kawasaki','Kawasaki W175',177,3700,2022,'Manual','Petrol',null,'used'),
('Royal Enfield','Royal Enfield Hunter 350',349,4000,2024,'Manual','Petrol','NEW','new'),
('Royal Enfield','Royal Enfield Classic 350',349,4700,2024,'Manual','Petrol',null,'new'),
('Royal Enfield','Royal Enfield Himalayan',411,5900,2024,'Manual','Petrol',null,'new'),
('Suzuki','Suzuki Smash 115',115,1400,2022,'Manual','Petrol',null,'used'),
('Suzuki','Suzuki Address 110',113,2100,2022,'Automatic','Petrol',null,'used'),
('Suzuki','Suzuki GSX-R150',147,3800,2023,'Manual','Petrol',null,'new'),
('KTM','KTM 125 Duke',125,3900,2022,'Manual','Petrol',null,'used'),
('KTM','KTM 390 Duke',373,6750,2024,'Manual','Petrol',null,'new'),
('Vespa','Vespa GTS 300',278,6300,2024,'Automatic','Petrol','NEW','new'),
('Vespa','Vespa Primavera 150',155,5200,2023,'Automatic','Petrol',null,'new');

-- ============================================================
-- Storage bucket for photos: create separately in the Dashboard
-- Storage → New bucket → name: motorcycle-images → Public bucket: ON
-- ============================================================
