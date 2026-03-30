import { NextResponse } from 'next/server';
import { getLeads, createLead } from '@/lib/db';

export async function GET() {
  try {
    const leads = await getLeads();
    return NextResponse.json(leads);
  } catch (error) {
    console.error("Failed to fetch leads:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, company } = body;
    
    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and Phone are required' }, { status: 400 });
    }
    
    const id = await createLead(name, phone, company || '');
    return NextResponse.json({ success: true, id }, { status: 201 });
  } catch (error) {
    console.error("Failed to create lead:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
