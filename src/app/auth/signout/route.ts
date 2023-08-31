import { NextResponse } from 'next/server';

export function GET(request: Request) {
  console.log('hello from sign out handler');

  return NextResponse.redirect(new URL('/', request.url));
}
