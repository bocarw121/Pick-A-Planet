import { auth } from '@/./auth';
import Lottie from 'lottie-react';
import comingSoonAnimation from '@/constants/lotties/coming-soon.json';
import { Lotties } from '@/components/Lotties';

export default async function Profile() {
  const session = await auth();

  return (
    <div className="grid place-content-center text-center h-[80vh]">
      <h1 className="text-3xl ">Welcome to your Profile page</h1>
      <Lotties animationData={comingSoonAnimation} className="w-96 mx-auto" />
      <p className="mt-8 text-xl w-[30rem]">
        This page is under construction. Please check back later for more
        updates. In the meantime, You can learn about the planets in our solar
        with a personalized experience.
      </p>
    </div>
  );
}
