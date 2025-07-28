#!/bin/bash

# 주님의교회 이미지 최적화 스크립트
# 네이버플레이스 업로드용 이미지 최적화

echo "🏔️ 주님의교회 이미지 최적화 시작"
echo "========================================="

# 색상 정의
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 최적화할 이미지 디렉토리
IMAGE_DIRS=(
    "public/images/hero"
    "public/images/pastors" 
    "public/images/activities"
    "public/images/bean-tree"
    "public/images/sermons"
)

# 최적화된 이미지 저장 디렉토리
OPTIMIZED_DIR="public/images/optimized-for-naver"

# 디렉토리 생성
mkdir -p "$OPTIMIZED_DIR"/{hero,pastors,activities,bean-tree,sermons,exterior,interior}

echo -e "${BLUE}📁 최적화 디렉토리 생성 완료${NC}"

# ImageMagick 설치 확인
if ! command -v convert &> /dev/null; then
    echo -e "${RED}❌ ImageMagick이 설치되어 있지 않습니다.${NC}"
    echo -e "${YELLOW}💡 설치 방법:${NC}"
    echo "  macOS: brew install imagemagick"
    echo "  Ubuntu: sudo apt-get install imagemagick"
    echo "  CentOS: sudo yum install ImageMagick"
    exit 1
fi

echo -e "${GREEN}✅ ImageMagick 설치 확인 완료${NC}"

# 최적화 함수
optimize_image() {
    local input_file="$1"
    local output_file="$2" 
    local max_width="$3"
    local quality="$4"
    
    if [ -f "$input_file" ]; then
        convert "$input_file" \
            -resize "${max_width}x${max_width}>" \
            -quality "$quality" \
            -strip \
            -colorspace sRGB \
            "$output_file"
        
        # 파일 크기 확인
        local original_size=$(stat -f%z "$input_file" 2>/dev/null || stat -c%s "$input_file" 2>/dev/null || echo "unknown")
        local optimized_size=$(stat -f%z "$output_file" 2>/dev/null || stat -c%s "$output_file" 2>/dev/null || echo "unknown")
        
        echo -e "${GREEN}✅ $(basename "$input_file")${NC}"
        echo -e "   원본: ${original_size} bytes → 최적화: ${optimized_size} bytes"
    else
        echo -e "${YELLOW}⚠️  파일 없음: $input_file${NC}"
    fi
}

# 네이버플레이스용 이미지 최적화
echo -e "\n${BLUE}🔄 네이버플레이스용 이미지 최적화 중...${NC}"

# 1. 교회 외관 사진 (큰 사이즈, 고품질)
echo -e "\n${YELLOW}📸 교회 외관 사진 최적화${NC}"
for img in public/images/hero/*.{jpg,jpeg,png,JPG,JPEG,PNG} 2>/dev/null; do
    if [ -f "$img" ]; then
        filename=$(basename "$img")
        extension="${filename##*.}"
        name="${filename%.*}"
        optimize_image "$img" "$OPTIMIZED_DIR/exterior/${name}_exterior.jpg" "1200" "85"
    fi
done

# 2. 교회 내부 사진 (중간 사이즈)
echo -e "\n${YELLOW}⛪ 교회 내부 사진 최적화${NC}"
for img in public/images/activities/*.{jpg,jpeg,png,JPG,JPEG,PNG} 2>/dev/null; do
    if [ -f "$img" ]; then
        filename=$(basename "$img")
        extension="${filename##*.}"
        name="${filename%.*}"
        optimize_image "$img" "$OPTIMIZED_DIR/interior/${name}_interior.jpg" "1000" "80"
    fi
done

# 3. 목회진 사진 (프로필용)
echo -e "\n${YELLOW}👨‍💼 목회진 사진 최적화${NC}"
for img in public/images/pastors/*.{jpg,jpeg,png,JPG,JPEG,PNG} 2>/dev/null; do
    if [ -f "$img" ]; then
        filename=$(basename "$img")
        extension="${filename##*.}"
        name="${filename%.*}"
        optimize_image "$img" "$OPTIMIZED_DIR/pastors/${name}_pastor.jpg" "800" "85"
    fi
done

# 4. 콩과나무로 제품 사진
echo -e "\n${YELLOW}🌱 콩과나무로 제품 사진 최적화${NC}"
for img in public/images/bean-tree/*.{jpg,jpeg,png,JPG,JPEG,PNG} 2>/dev/null; do
    if [ -f "$img" ]; then
        filename=$(basename "$img")
        extension="${filename##*.}"
        name="${filename%.*}"
        optimize_image "$img" "$OPTIMIZED_DIR/bean-tree/${name}_product.jpg" "800" "80"
    fi
done

# 5. 활동 사진 (예배, 교제 등)
echo -e "\n${YELLOW}🎯 교회 활동 사진 최적화${NC}"
for img in public/images/sermons/*.{jpg,jpeg,png,JPG,JPEG,PNG} 2>/dev/null; do
    if [ -f "$img" ]; then
        filename=$(basename "$img")
        extension="${filename##*.}"
        name="${filename%.*}"
        optimize_image "$img" "$OPTIMIZED_DIR/activities/${name}_activity.jpg" "1000" "80"
    fi
done

# 썸네일 생성 (네이버플레이스 리스트용)
echo -e "\n${BLUE}🖼️  썸네일 생성 중...${NC}"
mkdir -p "$OPTIMIZED_DIR/thumbnails"

for img in "$OPTIMIZED_DIR"/*/*.jpg 2>/dev/null; do
    if [ -f "$img" ]; then
        filename=$(basename "$img")
        name="${filename%.*}"
        convert "$img" \
            -resize "400x400^" \
            -gravity center \
            -crop "400x400+0+0" \
            -quality 75 \
            "$OPTIMIZED_DIR/thumbnails/${name}_thumb.jpg"
        echo -e "${GREEN}✅ 썸네일: ${name}_thumb.jpg${NC}"
    fi
done

# 최적화 완료 리포트
echo -e "\n${GREEN}🎉 이미지 최적화 완료!${NC}"
echo "========================================="

# 파일 개수 확인
total_files=$(find "$OPTIMIZED_DIR" -name "*.jpg" | wc -l)
echo -e "${BLUE}📊 최적화된 이미지 총 ${total_files}개${NC}"

# 디렉토리별 파일 수
echo -e "\n${YELLOW}📁 카테고리별 이미지 수:${NC}"
for category in exterior interior pastors bean-tree activities thumbnails; do
    if [ -d "$OPTIMIZED_DIR/$category" ]; then
        count=$(find "$OPTIMIZED_DIR/$category" -name "*.jpg" | wc -l)
        echo -e "   ${category}: ${count}개"
    fi
done

# 네이버플레이스 업로드 가이드
echo -e "\n${BLUE}📋 네이버플레이스 업로드 가이드:${NC}"
echo "========================================="
echo "1. 대표 사진 (필수):"
echo "   → optimized-for-naver/exterior/ 폴더의 교회 외관 사진"
echo ""
echo "2. 추가 사진 권장 순서:"
echo "   → exterior/ : 교회 외관 (2-3장)"
echo "   → interior/ : 교회 내부 (3-4장)" 
echo "   → pastors/  : 목회진 사진 (2장)"
echo "   → activities/ : 교회 활동 (2-3장)"
echo "   → bean-tree/ : 콩과나무로 제품 (1-2장)"
echo ""
echo "3. 썸네일 사용:"
echo "   → thumbnails/ : 소셜미디어용 정사각형 이미지"

echo -e "\n${GREEN}✨ 네이버플레이스 등록 준비 완료!${NC}"
echo -e "${BLUE}💡 optimized-for-naver 폴더의 이미지들을 사용하세요.${NC}"