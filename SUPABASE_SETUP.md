# Supabase 프로젝트 설정 가이드

## 1. SQL 실행 (필수)

Supabase 대시보드에서 SQL Editor로 이동하여 다음 파일들을 순서대로 실행하세요:

### 1.1 테이블 생성
```sql
-- supabase-schema.sql 파일 내용을 복사하여 실행
```

### 1.2 Storage 버킷 생성
```sql
-- supabase-storage-setup.sql 파일 내용을 복사하여 실행
```

## 2. Authentication 설정 (선택사항)

현재는 간단한 비밀번호 인증을 사용하고 있지만, 더 안전한 인증을 원한다면:

1. Authentication > Providers에서 Email 활성화
2. Authentication > Policies에서 정책 설정

## 3. Storage 확인

Storage 섹션에서 다음 버킷들이 생성되었는지 확인:
- `church-images` (공개)
- `sermon-thumbnails` (공개)
- `product-images` (공개)

## 4. Database 권한 확인

Settings > Database에서:
- Row Level Security (RLS)가 활성화되어 있는지 확인
- 각 테이블의 정책이 제대로 설정되었는지 확인

## 5. API 설정

Settings > API에서:
- Service role key가 환경 변수와 일치하는지 확인
- CORS 설정이 필요한 경우 도메인 추가

## 6. 테스트 데이터 입력 (선택사항)

SQL Editor에서 샘플 데이터 입력:

```sql
-- 샘플 공지사항
INSERT INTO notices (title, content, category, is_important, author) VALUES
('주님의교회 홈페이지 리뉴얼', '새롭게 단장한 홈페이지를 소개합니다. Supabase와 연동하여 더욱 편리해졌습니다.', '일반', true, '방재홍 목사'),
('2025년 신년 예배 안내', '새해를 맞아 특별 새벽기도회를 진행합니다.', '예배', false, '방재홍 목사');

-- 샘플 설교
INSERT INTO sermons (title, pastor, youtube_url, description, sermon_date) VALUES
('하나님의 사랑', '방재홍 목사', 'https://www.youtube.com/watch?v=example1', '하나님의 무조건적인 사랑에 대한 말씀', '2025-01-21'),
('믿음의 삶', '정성아 목사', 'https://www.youtube.com/watch?v=example2', '일상에서 실천하는 믿음의 삶', '2025-01-14');

-- 샘플 이벤트
INSERT INTO events (title, description, event_date, event_time, location) VALUES
('신도시 주민 초청 예배', '경주역 신도시 입주민을 위한 특별 예배', '2025-02-01', '10:00', '주님의교회'),
('콩과나무로 나눔 바자회', '콩과나무로 제품 나눔 행사', '2025-02-15', '14:00', '교회 마당');

-- 샘플 제품
INSERT INTO products (name, description, price) VALUES
('유기농 된장', '전통 방식으로 만든 건강한 된장', 15000),
('수제 고추장', '직접 재배한 고추로 만든 고추장', 18000),
('콩나물 키우기 세트', '집에서 키우는 신선한 콩나물', 8000);
```

## 7. 모니터링

Dashboard에서:
- API 요청 수 확인
- Storage 사용량 확인
- Database 크기 확인

## 주의사항

1. **무료 플랜 제한**:
   - Storage: 1GB
   - Database: 500MB
   - API 요청: 월 50,000건
   
2. **보안**:
   - Service role key는 절대 클라이언트에 노출하지 마세요
   - RLS 정책을 항상 활성화하세요
   
3. **백업**:
   - 정기적으로 데이터 백업을 수행하세요
   - Settings > Backups에서 자동 백업 설정 가능

## 문제 해결

1. **이미지 업로드 실패**:
   - Storage 버킷 권한 확인
   - 파일 크기 제한 확인

2. **API 호출 실패**:
   - CORS 설정 확인
   - API 키 확인

3. **데이터베이스 연결 실패**:
   - Connection string 확인
   - SSL 설정 확인