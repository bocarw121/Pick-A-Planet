import { getServerSession } from 'next-auth';

export default async function Profile() {
  const session = await getServerSession();

  return <h1>Welcome to the Profile page {session?.user?.name}</h1>;
}
