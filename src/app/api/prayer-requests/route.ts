import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase';

// 비밀번호 확인 함수
function checkAdminAuth(request: NextRequest): boolean {
  const adminPassword = request.headers.get('x-admin-password');
  return adminPassword === process.env.ADMIN_PASSWORD || adminPassword === 'churchoflord2025';
}

// GET: 기도 요청 목록 조회 (관리자만)
export async function GET(request: NextRequest) {
  try {
    // 관리자 인증 확인
    if (!checkAdminAuth(request)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const supabase = createServerSupabaseClient();
    
    const { data, error } = await supabase
      .from('prayer_requests')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    return NextResponse.json({ data });
  } catch (error) {
    console.error('Error fetching prayer requests:', error);
    return NextResponse.json(
      { error: 'Failed to fetch prayer requests' },
      { status: 500 }
    );
  }
}

// POST: 새 기도 요청 제출 (누구나 가능)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      name, 
      phoneNumber, 
      email, 
      category, 
      title, 
      content, 
      isAnonymous, 
      isPrivate, 
      isUrgent 
    } = body;

    // 필수 필드 검증
    if (!title || !content) {
      return NextResponse.json(
        { error: 'Title and content are required' },
        { status: 400 }
      );
    }

    const supabase = createServerSupabaseClient();
    
    const { data, error } = await supabase
      .from('prayer_requests')
      .insert([{
        name: isAnonymous ? null : name,
        phone_number: isAnonymous ? null : phoneNumber,
        email: isAnonymous ? null : email,
        category: category || '일반',
        title,
        content,
        is_anonymous: isAnonymous || false,
        is_private: isPrivate || false,
        is_urgent: isUrgent || false,
        status: 'pending'
      }])
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ data });
  } catch (error) {
    console.error('Error creating prayer request:', error);
    return NextResponse.json(
      { error: 'Failed to create prayer request' },
      { status: 500 }
    );
  }
}

// PUT: 기도 요청 상태 업데이트 (관리자만)
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
    const { id, status, adminNotes } = body;

    if (!id) {
      return NextResponse.json(
        { error: 'Prayer request ID is required' },
        { status: 400 }
      );
    }

    const supabase = createServerSupabaseClient();
    
    const { data, error } = await supabase
      .from('prayer_requests')
      .update({
        status: status || 'pending',
        admin_notes: adminNotes
      })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ data });
  } catch (error) {
    console.error('Error updating prayer request:', error);
    return NextResponse.json(
      { error: 'Failed to update prayer request' },
      { status: 500 }
    );
  }
}

// DELETE: 기도 요청 삭제 (관리자만)
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
        { error: 'Prayer request ID is required' },
        { status: 400 }
      );
    }

    const supabase = createServerSupabaseClient();
    
    const { error } = await supabase
      .from('prayer_requests')
      .delete()
      .eq('id', id);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting prayer request:', error);
    return NextResponse.json(
      { error: 'Failed to delete prayer request' },
      { status: 500 }
    );
  }
}