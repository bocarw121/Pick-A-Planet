import { Spinner } from "'@/components/Spinner'";
import { syncNewUser } from "'@/lib/auth'";
import { prisma } from "'@/lib/prisma'";
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

async function createNewUser() {
  const user = await currentUser();

  console.log(user);

  if (!user) {
    console.log('No User');
    return;
  }

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

  redirect('/profile');
}

export default async function NewUser() {
  await createNewUser();
  return <Spinner />;
}
