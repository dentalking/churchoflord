import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase';

// 비밀번호 확인 함수
function checkAdminAuth(request: NextRequest): boolean {
  const adminPassword = request.headers.get('x-admin-password');
  return adminPassword === process.env.ADMIN_PASSWORD || adminPassword === 'churchoflord2025';
}

// GET: 공지사항 목록 조회
export async function GET() {
  try {
    const supabase = createServerSupabaseClient();
    
    const { data, error } = await supabase
      .from('notices')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    return NextResponse.json({ data });
  } catch (error) {
    console.error('Error fetching notices:', error);
    return NextResponse.json(
      { error: 'Failed to fetch notices' },
      { status: 500 }
    );
  }
}

// POST: 새 공지사항 작성
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
    const { title, content, category, isImportant, author } = body;

    const supabase = createServerSupabaseClient();
    
    const { data, error } = await supabase
      .from('notices')
      .insert([{
        title,
        content,
        category: category || '일반',
        is_important: isImportant || false,
        author: author || '교회 사무실'
      }])
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ data });
  } catch (error) {
    console.error('Error creating notice:', error);
    return NextResponse.json(
      { error: 'Failed to create notice' },
      { status: 500 }
    );
  }
}

// PUT: 공지사항 수정
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
    const { id, title, content, category, isImportant, author } = body;

    if (!id) {
      return NextResponse.json(
        { error: 'Notice ID is required' },
        { status: 400 }
      );
    }

    const supabase = createServerSupabaseClient();
    
    const { data, error } = await supabase
      .from('notices')
      .update({
        title,
        content,
        category,
        is_important: isImportant,
        author
      })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ data });
  } catch (error) {
    console.error('Error updating notice:', error);
    return NextResponse.json(
      { error: 'Failed to update notice' },
      { status: 500 }
    );
  }
}

// DELETE: 공지사항 삭제
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
        { error: 'Notice ID is required' },
        { status: 400 }
      );
    }

    const supabase = createServerSupabaseClient();
    
    const { error } = await supabase
      .from('notices')
      .delete()
      .eq('id', id);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting notice:', error);
    return NextResponse.json(
      { error: 'Failed to delete notice' },
      { status: 500 }
    );
  }
}