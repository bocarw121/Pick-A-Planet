import { currentUser } from '@clerk/nextjs';
import type { User } from '@clerk/nextjs/api';

export default async function Profile() {
  const user: User | null = await currentUser();

  console.log(user);
  // if (!user) {
  //   redirectToSignIn({ returnBackUrl: '/sign-in' });
  // }

  return <h1>Welcome to the Profile page</h1>;
}
