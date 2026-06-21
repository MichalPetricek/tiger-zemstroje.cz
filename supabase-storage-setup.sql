-- ==========================================
-- Supabase Storage setup for TIGER CZ website
-- Vlož a spusť celé v Supabase → SQL Editor (jednorázově).
-- Vytvoří veřejný bucket "images" (fotky + PDF dokumentace)
-- a oprávnění pro veřejné čtení / nahrávání přihlášeným adminem.
-- Skript je idempotentní – lze spustit opakovaně.
-- ==========================================

-- 1) Bucket "images" (public, max 10 MB, obrázky + PDF)
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'images',
  'images',
  true,
  10485760,
  array['image/jpeg', 'image/png', 'image/webp', 'image/avif', 'application/pdf']
)
on conflict (id) do update
  set public = true,
      file_size_limit = 10485760,
      allowed_mime_types = excluded.allowed_mime_types;

-- 2) Storage politiky na storage.objects
--    (drop + create kvůli opakovatelnému spuštění)
drop policy if exists "Public image access" on storage.objects;
create policy "Public image access"
  on storage.objects for select
  using (bucket_id = 'images');

drop policy if exists "Authenticated users can upload images" on storage.objects;
create policy "Authenticated users can upload images"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'images');

drop policy if exists "Authenticated users can update images" on storage.objects;
create policy "Authenticated users can update images"
  on storage.objects for update
  to authenticated
  using (bucket_id = 'images')
  with check (bucket_id = 'images');

drop policy if exists "Authenticated users can delete images" on storage.objects;
create policy "Authenticated users can delete images"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'images');
