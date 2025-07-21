# Supabase CLI 직접 실행 가이드

Access Token을 받았다면 다음 명령어들을 실행하세요:

```bash
# 1. 환경 변수 설정
export SUPABASE_ACCESS_TOKEN="your-access-token-here"

# 2. 프로젝트 연결
supabase link --project-ref qieqmuqvcfdcuwefasee

# 3. 테이블 생성
supabase db push ./supabase-schema.sql

# 4. Storage 버킷 생성
supabase db push ./supabase-storage-setup.sql

# 5. (선택) 샘플 데이터 입력
supabase db push ./sample-data.sql
```

## 추가 유용한 명령어

```bash
# 프로젝트 상태 확인
supabase status

# 데이터베이스 백업
supabase db dump -f backup.sql

# 로그 확인
supabase logs

# Storage 파일 목록
supabase storage ls
```