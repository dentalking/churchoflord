import { createClient } from '@supabase/supabase-js';

// Supabase 클라이언트 타입 정의
export type Database = {
  public: {
    Tables: {
      notices: {
        Row: {
          id: number;
          title: string;
          content: string;
          category: string;
          is_important: boolean;
          author: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: number;
          title: string;
          content: string;
          category?: string;
          is_important?: boolean;
          author?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: number;
          title?: string;
          content?: string;
          category?: string;
          is_important?: boolean;
          author?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      sermons: {
        Row: {
          id: number;
          title: string;
          pastor: string;
          youtube_url: string | null;
          youtube_id: string | null;
          description: string | null;
          sermon_date: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: number;
          title: string;
          pastor: string;
          youtube_url?: string | null;
          youtube_id?: string | null;
          description?: string | null;
          sermon_date?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: number;
          title?: string;
          pastor?: string;
          youtube_url?: string | null;
          youtube_id?: string | null;
          description?: string | null;
          sermon_date?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      events: {
        Row: {
          id: number;
          title: string;
          description: string | null;
          event_date: string;
          event_time: string | null;
          location: string;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: number;
          title: string;
          description?: string | null;
          event_date: string;
          event_time?: string | null;
          location?: string;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: number;
          title?: string;
          description?: string | null;
          event_date?: string;
          event_time?: string | null;
          location?: string;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      products: {
        Row: {
          id: number;
          name: string;
          description: string | null;
          image_url: string | null;
          is_available: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: number;
          name: string;
          description?: string | null;
          image_url?: string | null;
          is_available?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: number;
          name?: string;
          description?: string | null;
          image_url?: string | null;
          is_available?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
};

// 환경 변수 확인
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// 클라이언트 생성 함수
function getSupabaseClient() {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Missing Supabase environment variables');
    // 빌드 시점에는 에러를 throw하지 않고, 런타임에만 체크
    if (typeof window !== 'undefined') {
      throw new Error('Missing Supabase environment variables');
    }
  }
  return createClient<Database>(supabaseUrl, supabaseAnonKey);
}

// 클라이언트 export
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient<Database>(supabaseUrl, supabaseAnonKey)
  : {} as ReturnType<typeof createClient<Database>>;

// 서버사이드용 클라이언트 (관리자 기능용)
export const createServerSupabaseClient = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
  
  if (!url || !anonKey) {
    throw new Error('Missing Supabase environment variables');
  }
  
  if (!supabaseServiceKey || supabaseServiceKey === 'your_supabase_service_role_key') {
    console.warn('Warning: Using anon key instead of service role key. Some admin features may not work properly.');
    // Service Role Key가 없으면 임시로 anon key 사용
    return createClient<Database>(url, anonKey);
  }
  
  return createClient<Database>(url, supabaseServiceKey);
};