#!/bin/bash

# Supabase CLI 자동 설정 스크립트
# 사용법: ./setup-supabase.sh <ACCESS_TOKEN> <PROJECT_ID>

if [ $# -lt 2 ]; then
    echo "Usage: ./setup-supabase.sh <ACCESS_TOKEN> <PROJECT_ID>"
    echo ""
    echo "1. Access Token 생성: https://app.supabase.com/account/tokens"
    echo "2. Project ID 확인: Supabase 대시보드 > Settings > General"
    echo ""
    echo "Project ID는 URL에서 확인 가능: qieqmuqvcfdcuwefasee"
    exit 1
fi

ACCESS_TOKEN=$1
PROJECT_ID=$2

# 환경 변수 설정
export SUPABASE_ACCESS_TOKEN=$ACCESS_TOKEN

echo "🚀 Supabase 프로젝트 설정을 시작합니다..."

# 프로젝트 링크
echo "📎 프로젝트 연결 중..."
supabase link --project-ref $PROJECT_ID

# 데이터베이스 마이그레이션 실행
echo "🗄️ 데이터베이스 테이블 생성 중..."
supabase db push --file ./supabase-schema.sql

# Storage 버킷 생성을 위한 SQL 실행
echo "📦 Storage 버킷 생성 중..."
supabase db push --file ./supabase-storage-setup.sql

echo "✅ Supabase 설정이 완료되었습니다!"
echo ""
echo "다음 단계:"
echo "1. 웹사이트에서 /admin 접속"
echo "2. 비밀번호: churchoflord2025"
echo "3. 공지사항, 제품 등을 추가해보세요"