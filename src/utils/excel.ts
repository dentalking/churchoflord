import * as XLSX from 'xlsx';
import type { Notice, Sermon, Event, Product } from '@/types/database';

// 공지사항 Excel 내보내기
export function exportNoticesToExcel(notices: Notice[], filename: string = '공지사항목록') {
  const worksheet_data = [
    ['ID', '제목', '카테고리', '작성자', '중요여부', '작성일', '내용'],
    ...notices.map(notice => [
      notice.id,
      notice.title,
      notice.category,
      notice.author,
      notice.is_important ? '중요' : '일반',
      new Date(notice.created_at).toLocaleDateString('ko-KR'),
      notice.content
    ])
  ];

  const worksheet = XLSX.utils.aoa_to_sheet(worksheet_data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, '공지사항');

  // 열 너비 설정
  const max_width = worksheet_data.reduce((w, r) => Math.max(w, r[1]?.toString().length || 0), 10);
  worksheet['!cols'] = [
    { wch: 5 },   // ID
    { wch: Math.min(max_width, 50) },  // 제목
    { wch: 10 },  // 카테고리
    { wch: 15 },  // 작성자
    { wch: 10 },  // 중요여부
    { wch: 15 },  // 작성일
    { wch: 50 }   // 내용
  ];

  XLSX.writeFile(workbook, `${filename}_${new Date().toISOString().split('T')[0]}.xlsx`);
}

// 설교 Excel 내보내기
export function exportSermonsToExcel(sermons: Sermon[], filename: string = '설교목록') {
  const worksheet_data = [
    ['ID', '제목', '설교자', '설교일', 'YouTube URL', '설명'],
    ...sermons.map(sermon => [
      sermon.id,
      sermon.title,
      sermon.pastor,
      new Date(sermon.sermon_date).toLocaleDateString('ko-KR'),
      sermon.youtube_url || '-',
      sermon.description || '-'
    ])
  ];

  const worksheet = XLSX.utils.aoa_to_sheet(worksheet_data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, '설교');

  worksheet['!cols'] = [
    { wch: 5 },   // ID
    { wch: 40 },  // 제목
    { wch: 15 },  // 설교자
    { wch: 15 },  // 설교일
    { wch: 30 },  // YouTube URL
    { wch: 50 }   // 설명
  ];

  XLSX.writeFile(workbook, `${filename}_${new Date().toISOString().split('T')[0]}.xlsx`);
}

// 이벤트 Excel 내보내기
export function exportEventsToExcel(events: Event[], filename: string = '이벤트목록') {
  const worksheet_data = [
    ['ID', '제목', '날짜', '시간', '장소', '설명', '활성여부'],
    ...events.map(event => [
      event.id,
      event.title,
      new Date(event.event_date).toLocaleDateString('ko-KR'),
      event.event_time || '-',
      event.location,
      event.description || '-',
      event.is_active ? '활성' : '비활성'
    ])
  ];

  const worksheet = XLSX.utils.aoa_to_sheet(worksheet_data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, '이벤트');

  worksheet['!cols'] = [
    { wch: 5 },   // ID
    { wch: 40 },  // 제목
    { wch: 15 },  // 날짜
    { wch: 10 },  // 시간
    { wch: 20 },  // 장소
    { wch: 50 },  // 설명
    { wch: 10 }   // 활성여부
  ];

  XLSX.writeFile(workbook, `${filename}_${new Date().toISOString().split('T')[0]}.xlsx`);
}

// 제품 Excel 내보내기
export function exportProductsToExcel(products: Product[], filename: string = '제품목록') {
  const worksheet_data = [
    ['ID', '제품명', '가격', '설명', '재고여부', '등록일'],
    ...products.map(product => [
      product.id,
      product.name,
      `${product.price.toLocaleString()}원`,
      product.description || '-',
      product.is_available ? '판매중' : '품절',
      new Date(product.created_at).toLocaleDateString('ko-KR')
    ])
  ];

  const worksheet = XLSX.utils.aoa_to_sheet(worksheet_data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, '제품');

  worksheet['!cols'] = [
    { wch: 5 },   // ID
    { wch: 30 },  // 제품명
    { wch: 15 },  // 가격
    { wch: 50 },  // 설명
    { wch: 10 },  // 재고여부
    { wch: 15 }   // 등록일
  ];

  XLSX.writeFile(workbook, `${filename}_${new Date().toISOString().split('T')[0]}.xlsx`);
}