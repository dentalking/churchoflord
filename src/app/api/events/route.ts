import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase';

// 비밀번호 확인 함수
function checkAdminAuth(request: NextRequest): boolean {
  const adminPassword = request.headers.get('x-admin-password');
  return adminPassword === process.env.ADMIN_PASSWORD || adminPassword === 'churchoflord2025';
}

// GET: 이벤트 목록 조회
export async function GET() {
  try {
    const supabase = createServerSupabaseClient();
    
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .eq('is_active', true)
      .order('event_date', { ascending: true });

    if (error) throw error;

    return NextResponse.json({ data });
  } catch (error) {
    console.error('Error fetching events:', error);
    return NextResponse.json(
      { error: 'Failed to fetch events' },
      { status: 500 }
    );
  }
}

// POST: 새 이벤트 추가
export async function POST(request: NextRequest) {
  try {
    // 관리자 인증 확인
    if (!checkAdminAuth(request)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { title, description, eventDate, eventTime, location } = body;

    const supabase = createServerSupabaseClient();
    
    const { data, error } = await supabase
      .from('events')
      .insert([{
        title,
        description,
        event_date: eventDate,
        event_time: eventTime,
        location: location || '주님의교회',
        is_active: true
      }])
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ data });
  } catch (error) {
    console.error('Error creating event:', error);
    return NextResponse.json(
      { error: 'Failed to create event' },
      { status: 500 }
    );
  }
}

// PUT: 이벤트 수정
export async function PUT(request: NextRequest) {
  try {
    // 관리자 인증 확인
    if (!checkAdminAuth(request)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { id, title, description, eventDate, eventTime, location, isActive } = body;

    if (!id) {
      return NextResponse.json(
        { error: 'Event ID is required' },
        { status: 400 }
      );
    }

    const supabase = createServerSupabaseClient();
    
    const { data, error } = await supabase
      .from('events')
      .update({
        title,
        description,
        event_date: eventDate,
        event_time: eventTime,
        location,
        is_active: isActive
      })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ data });
  } catch (error) {
    console.error('Error updating event:', error);
    return NextResponse.json(
      { error: 'Failed to update event' },
      { status: 500 }
    );
  }
}

// DELETE: 이벤트 삭제 (실제로는 비활성화)
export async function DELETE(request: NextRequest) {
  try {
    // 관리자 인증 확인
    if (!checkAdminAuth(request)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Event ID is required' },
        { status: 400 }
      );
    }

    const supabase = createServerSupabaseClient();
    
    // 완전 삭제 대신 비활성화
    const { error } = await supabase
      .from('events')
      .update({ is_active: false })
      .eq('id', id);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting event:', error);
    return NextResponse.json(
      { error: 'Failed to delete event' },
      { status: 500 }
    );
  }
}