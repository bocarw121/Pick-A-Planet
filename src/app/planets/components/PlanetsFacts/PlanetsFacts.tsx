'use client';

import { useSession } from 'next-auth/react';

import { ReactNode } from 'react';

interface PlanetsFactsProps {
  children: ReactNode;
  planet: string;
}

export function PlanetsFacts({ children, planet }: PlanetsFactsProps) {
  const { data: session } = useSession();

  return (
    <div role="complementary">
      <section className="flex flex-col items-center border border-solid border-cream rounded-3xl w-[26rem] p-20 text-center mb-20 mt-10 mr-10 max-lg:mx-auto">
        <h2 className="text-cream text-2xl mb-8">
          {session?.user?.name
            ? `${session?.user?.name}'s ${planet} Facts`
            : `${planet} Facts`}
        </h2>

        {children}
      </section>
    </div>
  );
}
