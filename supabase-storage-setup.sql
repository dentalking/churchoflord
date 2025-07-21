-- Supabase Storage 버킷 설정
-- 이 SQL은 Supabase 대시보드의 SQL Editor에서 실행해주세요

-- 1. 공개 이미지 버킷 생성 (교회 사진, 제품 이미지 등)
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
    'church-images',
    'church-images',
    true,  -- 공개 접근 가능
    5242880,  -- 5MB 제한
    ARRAY['image/jpeg', 'image/png', 'image/gif', 'image/webp']
)
ON CONFLICT (id) DO NOTHING;

-- 2. 설교 썸네일 버킷 생성
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
    'sermon-thumbnails',
    'sermon-thumbnails',
    true,  -- 공개 접근 가능
    2097152,  -- 2MB 제한
    ARRAY['image/jpeg', 'image/png']
)
ON CONFLICT (id) DO NOTHING;

-- 3. 콩과나무로 제품 이미지 버킷 생성
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
    'product-images',
    'product-images',
    true,  -- 공개 접근 가능
    5242880,  -- 5MB 제한
    ARRAY['image/jpeg', 'image/png', 'image/webp']
)
ON CONFLICT (id) DO NOTHING;

-- 4. Storage 정책 설정 (인증된 사용자만 업로드 가능)
CREATE POLICY "Anyone can view images" ON storage.objects
FOR SELECT USING (bucket_id IN ('church-images', 'sermon-thumbnails', 'product-images'));

CREATE POLICY "Service role can upload images" ON storage.objects
FOR INSERT WITH CHECK (
    bucket_id IN ('church-images', 'sermon-thumbnails', 'product-images')
);

CREATE POLICY "Service role can update images" ON storage.objects
FOR UPDATE WITH CHECK (
    bucket_id IN ('church-images', 'sermon-thumbnails', 'product-images')
);

CREATE POLICY "Service role can delete images" ON storage.objects
FOR DELETE USING (
    bucket_id IN ('church-images', 'sermon-thumbnails', 'product-images')
);

-- 5. products 테이블에 price 컬럼 추가 (빠진 부분)
ALTER TABLE products ADD COLUMN IF NOT EXISTS price integer DEFAULT 0;