"use client";

import { Button } from "@/components/ui/button";
import { Navigation, MapPin, MessageSquare, Video } from "lucide-react";

export function MapButton({ 
  children, 
  onClick, 
  className = "", 
  size,
  variant,
  ...props 
}: { 
  children: React.ReactNode; 
  onClick: () => void; 
  className?: string;
  size?: "sm" | "lg" | "default";
  variant?: "default" | "outline" | "ghost" | "destructive" | "secondary" | "link";
}) {
  return (
    <Button onClick={onClick} className={className} size={size} variant={variant} {...props}>
      {children}
    </Button>
  );
}

export function NaverMapButton({ className = "" }: { className?: string }) {
  return (
    <MapButton 
      size="lg"
      className={className}
      onClick={() => window.open('https://map.naver.com/v5/search/경주시%20내남면%20내외로%202175', '_blank')}
    >
      <Navigation className="mr-2 h-5 w-5" />
      네이버 지도
    </MapButton>
  );
}

export function KakaoMapButton({ className = "" }: { className?: string }) {
  return (
    <MapButton 
      variant="outline"
      size="lg"
      className={className}
      onClick={() => window.open('https://map.kakao.com/link/search/경주시%20내남면%20내외로%202175', '_blank')}
    >
      <MapPin className="mr-2 h-5 w-5" />
      카카오맵
    </MapButton>
  );
}

export function NaverMapButtonSmall({ className = "" }: { className?: string }) {
  return (
    <MapButton 
      className={`w-full ${className}`}
      onClick={() => window.open('https://map.naver.com/v5/search/경주시%20내남면%20내외로%202175', '_blank')}
    >
      <Navigation className="mr-2 h-4 w-4" />
      네이버 지도로 길찾기
    </MapButton>
  );
}

export function PickupServiceButton({ className = "" }: { className?: string }) {
  return (
    <MapButton 
      className={`w-full bg-blue-600 hover:bg-blue-700 ${className}`}
      onClick={() => window.open('https://pf.kakao.com/_xjxoEdn', '_blank')}
    >
      <MessageSquare className="mr-2 h-4 w-4" />
      픽업 서비스 예약
    </MapButton>
  );
}

export function OnlineWorshipButton({ className = "" }: { className?: string }) {
  return (
    <MapButton 
      size="lg"
      className={`bg-red-600 hover:bg-red-700 ${className}`}
      onClick={() => window.open('https://youtube.com/@churchoflord/live', '_blank')}
    >
      <Video className="mr-2 h-5 w-5" />
      온라인 예배 참여
    </MapButton>
  );
}

export function KakaoTalkButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <MapButton 
      size="sm"
      className={`w-full bg-yellow-400 hover:bg-yellow-500 text-black ${className}`}
      onClick={() => window.open('https://pf.kakao.com/_xjxoEdn', '_blank')}
    >
      {children}
    </MapButton>
  );
}