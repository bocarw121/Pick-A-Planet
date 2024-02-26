import { prisma } from '@/lib/prisma';
import { handleResponse } from '@/utils/authResponse';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const { user } = await request.json();

  if (!user) {
    return handleResponse({ message: 'No user to create' }, 401);
  }
  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        userId: user.id,
      },
    });

    if (!existingUser) {
      const email = user.emailAddresses[0].emailAddress;

      const newUser = await prisma.user.create({
        data: {
          firstName: user.firstName,
          lastName: user.lastName,
          email,
          createdAt: new Date(user.createdAt),
          updatedAt: new Date(user.updatedAt),
          profileImage: user.imageUrl,
          userId: user.id,
        },
      });

      return handleResponse({ user: newUser, message: 'User Created' }, 201);
    }
  } catch (error) {
    return handleResponse(
      { user: null, message: 'Internal server error' },
      500,
    );
  }
}
