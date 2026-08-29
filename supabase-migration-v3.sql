-- ============================================================
-- FIX: Allow logged-in admins to upload/replace/delete photos
-- in the motorcycle-images storage bucket.
--
-- Making a bucket "Public" only allows public READING of files.
-- Uploading (INSERT), replacing (UPDATE), and removing (DELETE)
-- files always need their own explicit policies — this was missing,
-- which is why photo uploads failed with a row-level security error.
--
-- Run this once in: Supabase Dashboard → SQL Editor → New query → Run
-- ============================================================

drop policy if exists "Authenticated can upload motorcycle images" on storage.objects;
drop policy if exists "Authenticated can update motorcycle images" on storage.objects;
drop policy if exists "Authenticated can delete motorcycle images" on storage.objects;

create policy "Authenticated can upload motorcycle images"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'motorcycle-images');

create policy "Authenticated can update motorcycle images"
  on storage.objects for update
  to authenticated
  using (bucket_id = 'motorcycle-images');

create policy "Authenticated can delete motorcycle images"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'motorcycle-images');
