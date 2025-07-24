// Database type definitions for better type safety

export interface Notice {
  id: number;
  title: string;
  content: string;
  category: string;
  is_important: boolean;
  author: string;
  created_at: string;
  updated_at: string;
  deleted_at?: string | null;
}

export interface Sermon {
  id: number;
  title: string;
  pastor: string;
  youtube_url: string | null;
  youtube_id: string | null;
  description: string | null;
  sermon_date: string;
  created_at: string;
  updated_at: string;
  deleted_at?: string | null;
}

export interface Event {
  id: number;
  title: string;
  description: string | null;
  event_date: string;
  event_time: string | null;
  location: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  deleted_at?: string | null;
}

export interface Product {
  id: number;
  name: string;
  description: string | null;
  image_url: string | null;
  price: number;
  is_available: boolean;
  created_at: string;
  updated_at: string;
  deleted_at?: string | null;
}

export interface PrayerRequest {
  id: number;
  name: string | null;
  phone_number: string | null;
  email: string | null;
  category: string;
  title: string;
  content: string;
  is_anonymous: boolean;
  is_private: boolean;
  is_urgent: boolean;
  status: string;
  admin_notes: string | null;
  created_at: string;
  updated_at: string;
}