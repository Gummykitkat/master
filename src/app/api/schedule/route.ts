import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  console.log('Scheduling request received:', data);
  return NextResponse.json({ message: 'Scheduling request received successfully!' }, { status: 200 });
}