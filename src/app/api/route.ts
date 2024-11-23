import { NextResponse } from 'next/server';

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

export async function GET() {
  return NextResponse.json(users);
}
