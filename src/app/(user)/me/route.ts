import { prisma } from "'@/lib/prisma'";
import { handleResponse } from "'@/utils/authResponse'";
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { userId } = await request.json();
  try {
    const user = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });

    if (!user) {
      // Return 200 for now
      return NextResponse.json({ user: null, message: 'No User found' });
    }

    return NextResponse.json({ user, message: `User with ${userId}` });
  } catch (error) {
    return handleResponse(
      { user: null, message: 'Internal server error' },
      500,
    );
  }
}
