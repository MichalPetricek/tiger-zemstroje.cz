-- ==========================================
-- Supabase migration for TIGER CZ website
-- Run this in Supabase SQL Editor
-- ==========================================

-- Products table
CREATE TABLE IF NOT EXISTS products (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  price_with_vat INTEGER NOT NULL DEFAULT 0,
  price_without_vat INTEGER NOT NULL DEFAULT 0,
  power TEXT NOT NULL DEFAULT '',
  category TEXT NOT NULL,
  brand TEXT NOT NULL,
  image TEXT NOT NULL DEFAULT '',
  images JSONB NOT NULL DEFAULT '[]',
  badges JSONB NOT NULL DEFAULT '[]',
  description TEXT NOT NULL DEFAULT '',
  specs JSONB NOT NULL DEFAULT '{}',
  features JSONB NOT NULL DEFAULT '[]',
  available BOOLEAN NOT NULL DEFAULT true,
  documentation TEXT,
  youtube_url TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Manufacturers table
CREATE TABLE IF NOT EXISTS manufacturers (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  youtube_video_id TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0
);

-- News table
CREATE TABLE IF NOT EXISTS news (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL DEFAULT '',
  date TEXT NOT NULL,
  images JSONB NOT NULL DEFAULT '[]',
  youtube_url TEXT,
  published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ==========================================
-- Row Level Security (RLS) policies
-- ==========================================

-- Enable RLS on all tables
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE manufacturers ENABLE ROW LEVEL SECURITY;
ALTER TABLE news ENABLE ROW LEVEL SECURITY;

-- PUBLIC READ: Anyone (anon) can read products
CREATE POLICY "Products are publicly readable"
  ON products FOR SELECT
  USING (true);

-- PUBLIC READ: Anyone can read manufacturers
CREATE POLICY "Manufacturers are publicly readable"
  ON manufacturers FOR SELECT
  USING (true);

-- PUBLIC READ: Anyone can read published news
CREATE POLICY "Published news are publicly readable"
  ON news FOR SELECT
  USING (published = true OR auth.role() = 'authenticated');

-- ADMIN WRITE: Authenticated users can insert/update/delete products
CREATE POLICY "Authenticated users can insert products"
  ON products FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update products"
  ON products FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete products"
  ON products FOR DELETE
  TO authenticated
  USING (true);

-- ADMIN WRITE: Authenticated users can manage manufacturers
CREATE POLICY "Authenticated users can insert manufacturers"
  ON manufacturers FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update manufacturers"
  ON manufacturers FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete manufacturers"
  ON manufacturers FOR DELETE
  TO authenticated
  USING (true);

-- ADMIN WRITE: Authenticated users can manage news
CREATE POLICY "Authenticated users can insert news"
  ON news FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update news"
  ON news FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete news"
  ON news FOR DELETE
  TO authenticated
  USING (true);

-- ==========================================
-- Storage bucket for images
-- ==========================================
-- Create via Supabase Dashboard:
-- 1. Go to Storage → New Bucket
-- 2. Name: "images"
-- 3. Public bucket: YES
-- 4. Max file size: 10 MB
-- 5. Allowed MIME types: image/jpeg, image/png, image/webp, image/avif

-- Storage policy: Anyone can read, authenticated can upload
-- Run these after creating the bucket:

-- CREATE POLICY "Public image access"
--   ON storage.objects FOR SELECT
--   USING (bucket_id = 'images');

-- CREATE POLICY "Authenticated users can upload images"
--   ON storage.objects FOR INSERT
--   TO authenticated
--   WITH CHECK (bucket_id = 'images');

-- CREATE POLICY "Authenticated users can delete images"
--   ON storage.objects FOR DELETE
--   TO authenticated
--   USING (bucket_id = 'images');

-- ==========================================
-- Create admin user (run once)
-- ==========================================
-- Go to Supabase Dashboard → Authentication → Users → Add User
-- Email: admin@jinma.cz
-- Password: Skuhrov13
-- Auto Confirm User: YES
