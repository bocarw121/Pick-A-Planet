import type { User } from '@clerk/nextjs/api';
import { prisma } from './prisma';
import { auth } from '@clerk/nextjs';

export async function getUserByClerkId(userId: string) {
  if (!userId) return null;

  const user = await prisma.user.findUnique({
    where: {
      userId,
    },
  });

  return user;
}

export async function syncNewUser(user: User) {
  const existingUser = await prisma.user.findUnique({
    where: {
      userId: user.id,
    },
  });

  if (!existingUser) {
    const email = user.emailAddresses[0].emailAddress;

    await prisma.user.create({
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
  }
}
