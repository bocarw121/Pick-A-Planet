import { NextRequest, NextResponse } from 'next/server';

export function GET(request: NextRequest) {
  // const {} = getAuth(request);
  console.log('hello from sign out handler');

  return NextResponse.redirect(new URL('/', request.url));
}
