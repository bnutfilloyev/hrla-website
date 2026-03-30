import { NextResponse } from 'next/server';
import { updateLeadStatus } from '@/lib/db';

export async function PATCH(request, { params }) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { status } = body;
    
    if (!status) {
      return NextResponse.json({ error: 'Status is required' }, { status: 400 });
    }
    
    await updateLeadStatus(id, status);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to update lead:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
