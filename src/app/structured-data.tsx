'use client';

import { usePathname } from 'next/navigation';

export function StructuredData() {
  const pathname = usePathname();

  // 교회 기본 정보 구조화 데이터
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Church",
    "name": "주님의교회",
    "alternateName": "Lord's Church",
    "description": "경주 내남면에 위치한 소규모 개신교 교회로, 고신교단 출신 목사님의 개혁주의 신학과 예하성 소속으로 성령의 은사를 중시하는 따뜻한 신앙공동체입니다.",
    "url": "https://www.churchoflord.kr",
    "logo": "https://www.churchoflord.kr/images/logo.png",
    "image": "https://www.churchoflord.kr/images/hero/church-exterior.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "경상북도 경주시 내남면",
      "addressLocality": "경주시",
      "addressRegion": "경상북도",
      "addressCountry": "KR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+82-054-xxx-xxxx",
      "contactType": "customer service",
      "availableLanguage": "Korean"
    },
    "founder": [
      {
        "@type": "Person",
        "name": "방재홍",
        "jobTitle": "담임목사",
        "description": "고신대학교 신학과 학사, 고신대학교 신학대학원 신학과 석사(M.div), 고신대학교 신학대학원 선교학 석사(Th.M) 출신으로 현 예수교하나님의성회 목사"
      },
      {
        "@type": "Person", 
        "name": "정성아",
        "jobTitle": "목사",
        "description": "부산대학교 분자생물학과 학사, 고신대학교 신학대학원 선교학 석사(Th.M) 출신"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "교회 예배 및 프로그램",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "주일 오전예배",
            "description": "매주 일요일 오전 11시 드리는 주일 대예배"
          },
          "availableAtOrFrom": {
            "@type": "Place",
            "name": "주님의교회 예배당"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "주일 오후예배",
            "description": "매주 일요일 오후 2시 드리는 오후예배"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "수요예배", 
            "description": "매주 수요일 저녁 7시 30분 드리는 수요예배"
          }
        }
      ]
    },
    "event": [
      {
        "@type": "Event",
        "name": "새가족 초청 예배",
        "description": "경주 지역에 새롭게 오신 모든 분들을 위한 특별 초청 예배",
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "location": {
          "@type": "Place",
          "name": "주님의교회",
          "address": "경상북도 경주시 내남면"
        }
      }
    ],
    "department": [
      {
        "@type": "Organization",
        "name": "콩과나무로",
        "description": "교회에서 운영하는 친환경 농산물 및 수제 발효식품 나눔 사역",
        "parentOrganization": "주님의교회"
      }
    ],
    "keywords": "경주교회, 내남면교회, 산속교회, 소규모교회, 개신교, 고신교단, 예하성, 개혁주의, 성령, 제자훈련, 콩과나무로",
    "knowsAbout": [
      "개혁주의 신학",
      "성령의 은사", 
      "제자훈련",
      "소규모 교회 목회",
      "친환경 농업",
      "수제 발효식품"
    ],
    "sameAs": [
      "https://business.naver.com/churchoflord"
    ]
  };

  // 페이지별 추가 구조화 데이터
  const getPageSpecificData = () => {
    switch (pathname) {
      case '/':
        return {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "주님의교회 - 경주 내남면 산속의 개신교 교회",
          "description": "소규모이기에 가능한 세심한 돌봄과 개인별 맞춤 양육이 있는 산속의 따뜻한 신앙공동체",
          "url": "https://www.churchoflord.kr",
          "mainEntity": organizationData
        };
        
      case '/about':
        return {
          "@context": "https://schema.org", 
          "@type": "AboutPage",
          "name": "교회 소개",
          "description": "주님의교회의 역사, 비전, 목회진 소개",
          "url": "https://www.churchoflord.kr/about",
          "mainEntity": organizationData
        };
        
      case '/worship':
        return {
          "@context": "https://schema.org",
          "@type": "WebPage", 
          "name": "예배 안내",
          "description": "주님의교회 예배 시간 및 순서 안내",
          "url": "https://www.churchoflord.kr/worship",
          "about": {
            "@type": "Service",
            "name": "교회 예배",
            "provider": organizationData
          }
        };
        
      case '/sermons':
        return {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "설교 말씀", 
          "description": "주님의교회 주일 설교 및 말씀 영상",
          "url": "https://www.churchoflord.kr/sermons"
        };
        
      case '/activities':
        return {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "교회 활동",
          "description": "주님의교회의 다양한 사역과 활동 소개", 
          "url": "https://www.churchoflord.kr/activities"
        };
        
      case '/small-groups':
        return {
          "@context": "https://schema.org",
          "@type": "WebPage", 
          "name": "소그룹 공동체",
          "description": "함께 시작할 소그룹 공동체 안내",
          "url": "https://www.churchoflord.kr/small-groups"
        };
        
      case '/contact':
        return {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "연락처 및 오시는 길",
          "description": "주님의교회 연락처, 위치, 오시는 길 안내", 
          "url": "https://www.churchoflord.kr/contact",
          "mainEntity": organizationData
        };
        
      default:
        return null;
    }
  };

  const pageData = getPageSpecificData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData)
        }}
      />
      {pageData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(pageData)
          }}
        />
      )}
    </>
  );
}