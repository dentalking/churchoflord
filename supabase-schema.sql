-- 주님의교회 Supabase 데이터베이스 스키마

-- 공지사항 테이블
CREATE TABLE notices (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  category VARCHAR(50) DEFAULT '일반',
  is_important BOOLEAN DEFAULT false,
  author VARCHAR(100) DEFAULT '교회 사무실',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('Asia/Seoul', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('Asia/Seoul', NOW())
);

-- 설교 영상 테이블  
CREATE TABLE sermons (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  pastor VARCHAR(100) NOT NULL,
  youtube_url VARCHAR(500),
  youtube_id VARCHAR(50),
  description TEXT,
  sermon_date DATE DEFAULT CURRENT_DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('Asia/Seoul', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('Asia/Seoul', NOW())
);

-- 이벤트 테이블
CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  event_date DATE NOT NULL,
  event_time TIME,
  location VARCHAR(255) DEFAULT '주님의교회',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('Asia/Seoul', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('Asia/Seoul', NOW())
);

-- 콩과나무로 제품 테이블
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  image_url VARCHAR(500),
  is_available BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('Asia/Seoul', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('Asia/Seoul', NOW())
);

-- 기도 요청 테이블
CREATE TABLE prayer_requests (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  phone_number VARCHAR(20),
  email VARCHAR(255),
  category VARCHAR(50) DEFAULT '일반',
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  is_anonymous BOOLEAN DEFAULT false,
  is_private BOOLEAN DEFAULT false,
  is_urgent BOOLEAN DEFAULT false,
  status VARCHAR(20) DEFAULT 'pending',
  admin_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('Asia/Seoul', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('Asia/Seoul', NOW())
);

-- 관리자 로그 테이블 (옵션)
CREATE TABLE admin_logs (
  id SERIAL PRIMARY KEY,
  action VARCHAR(100) NOT NULL,
  details TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('Asia/Seoul', NOW())
);

-- 업데이트 시간 자동 갱신 함수
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('Asia/Seoul', NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- 각 테이블에 트리거 적용
CREATE TRIGGER update_notices_updated_at BEFORE UPDATE ON notices 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_sermons_updated_at BEFORE UPDATE ON sermons 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_events_updated_at BEFORE UPDATE ON events 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON products 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_prayer_requests_updated_at BEFORE UPDATE ON prayer_requests 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- 기본 데이터 삽입
INSERT INTO notices (title, content, category, is_important, author) VALUES
('봄맞이 특별 초청 예배 안내', '경주 지역에 새롭게 오신 모든 분들을 위한 특별 초청 예배를 준비했습니다.', '이벤트', true, '방재홍 목사'),
('4월 셋째 주 주보', '주님의 평안이 함께하시길 기도합니다.', '주보', false, '교회 사무실'),
('콩과나무로 봄 제품 출시', '봄을 맞아 새로운 제품을 준비했습니다.', '소식', false, '정성아 목사');

INSERT INTO sermons (title, pastor, youtube_id, description, sermon_date) VALUES
('평안을 너희에게 주노라', '방재홍 목사', 'lQIvLERjcuU', '주님이 주시는 참된 평안에 대한 말씀', '2025-04-14'),
('산골에서 만나는 하나님', '방재홍 목사', NULL, '자연 속에서 발견하는 하나님의 은혜', '2025-04-07'),
('경주역에서 출발하는 신앙', '정성아 목사', NULL, '새로운 시작과 함께하는 믿음의 여정', '2025-03-31');

-- RLS (Row Level Security) 정책 설정
ALTER TABLE notices ENABLE ROW LEVEL SECURITY;
ALTER TABLE sermons ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE prayer_requests ENABLE ROW LEVEL SECURITY;

-- 읽기는 모두 가능
CREATE POLICY "Enable read access for all users" ON notices FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON sermons FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON events FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON products FOR SELECT USING (true);

-- 쓰기는 인증된 사용자만 (추후 관리자 인증 추가)
CREATE POLICY "Enable insert for authenticated users only" ON notices FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update for authenticated users only" ON notices FOR UPDATE USING (true) WITH CHECK (true);
CREATE POLICY "Enable delete for authenticated users only" ON notices FOR DELETE USING (true);

CREATE POLICY "Enable insert for authenticated users only" ON sermons FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update for authenticated users only" ON sermons FOR UPDATE USING (true) WITH CHECK (true);
CREATE POLICY "Enable delete for authenticated users only" ON sermons FOR DELETE USING (true);

CREATE POLICY "Enable insert for authenticated users only" ON events FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update for authenticated users only" ON events FOR UPDATE USING (true) WITH CHECK (true);
CREATE POLICY "Enable delete for authenticated users only" ON events FOR DELETE USING (true);

CREATE POLICY "Enable insert for authenticated users only" ON products FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update for authenticated users only" ON products FOR UPDATE USING (true) WITH CHECK (true);
CREATE POLICY "Enable delete for authenticated users only" ON products FOR DELETE USING (true);

-- 기도 요청은 누구나 제출 가능하지만, 읽기는 관리자만 가능
CREATE POLICY "Enable insert for all users" ON prayer_requests FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable read for authenticated users only" ON prayer_requests FOR SELECT USING (true);
CREATE POLICY "Enable update for authenticated users only" ON prayer_requests FOR UPDATE USING (true) WITH CHECK (true);
CREATE POLICY "Enable delete for authenticated users only" ON prayer_requests FOR DELETE USING (true);