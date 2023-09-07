import { getServerSession } from 'next-auth';

export default async function Profile() {
  const session = await getServerSession();

  return (
    <div className="grid place-content-center text-center h-[80vh]">
      <h1 className="text-2xl ">
        Welcome to your Profile page {session?.user?.name}!{' '}
      </h1>

      <h4 className="text-[12rem] ">🚧</h4>

      <p className="mt-8 text-xl">
        This page is under construction. Please check back later for more
        updates. In the meantime, You can learn about the planets in our solar
        with a personalized experience.
      </p>
    </div>
  );
}
