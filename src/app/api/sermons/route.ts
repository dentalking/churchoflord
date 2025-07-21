import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase';

// 비밀번호 확인 함수
function checkAdminAuth(request: NextRequest): boolean {
  const adminPassword = request.headers.get('x-admin-password');
  return adminPassword === process.env.ADMIN_PASSWORD || adminPassword === 'churchoflord2025';
}

// YouTube URL에서 ID 추출
function extractYouTubeId(url: string): string | null {
  const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

// GET: 설교 목록 조회
export async function GET() {
  try {
    const supabase = createServerSupabaseClient();
    
    const { data, error } = await supabase
      .from('sermons')
      .select('*')
      .order('sermon_date', { ascending: false });

    if (error) throw error;

    return NextResponse.json({ data });
  } catch (error) {
    console.error('Error fetching sermons:', error);
    return NextResponse.json(
      { error: 'Failed to fetch sermons' },
      { status: 500 }
    );
  }
}

// POST: 새 설교 영상 추가
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
    const { title, pastor, youtubeUrl, description, sermonDate } = body;

    // YouTube ID 추출
    const youtubeId = youtubeUrl ? extractYouTubeId(youtubeUrl) : null;

    const supabase = createServerSupabaseClient();
    
    const { data, error } = await supabase
      .from('sermons')
      .insert([{
        title,
        pastor: pastor || '방재홍 목사',
        youtube_url: youtubeUrl,
        youtube_id: youtubeId,
        description,
        sermon_date: sermonDate || new Date().toISOString().split('T')[0]
      }])
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ data });
  } catch (error) {
    console.error('Error creating sermon:', error);
    return NextResponse.json(
      { error: 'Failed to create sermon' },
      { status: 500 }
    );
  }
}

// PUT: 설교 정보 수정
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
    const { id, title, pastor, youtubeUrl, description, sermonDate } = body;

    if (!id) {
      return NextResponse.json(
        { error: 'Sermon ID is required' },
        { status: 400 }
      );
    }

    // YouTube ID 추출
    const youtubeId = youtubeUrl ? extractYouTubeId(youtubeUrl) : null;

    const supabase = createServerSupabaseClient();
    
    const { data, error } = await supabase
      .from('sermons')
      .update({
        title,
        pastor,
        youtube_url: youtubeUrl,
        youtube_id: youtubeId,
        description,
        sermon_date: sermonDate
      })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ data });
  } catch (error) {
    console.error('Error updating sermon:', error);
    return NextResponse.json(
      { error: 'Failed to update sermon' },
      { status: 500 }
    );
  }
}

// DELETE: 설교 삭제
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
        { error: 'Sermon ID is required' },
        { status: 400 }
      );
    }

    const supabase = createServerSupabaseClient();
    
    const { error } = await supabase
      .from('sermons')
      .delete()
      .eq('id', id);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting sermon:', error);
    return NextResponse.json(
      { error: 'Failed to delete sermon' },
      { status: 500 }
    );
  }
}